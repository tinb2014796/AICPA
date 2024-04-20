<template>
    <div id="update-product">
      <h1>Update Product</h1>
      <form v-on:submit.prevent="editProduct">
        <v-row justify="center">
          <v-col cols="12" md="6">
              <v-card-title class="mt-6" justify="center">
                <span class="headline">Chỉnh sửa sản phẩm</span>
              </v-card-title>
            <v-text-field
              v-model="product.productName"
              name="productName"
              type="text"
              label="Product Name"
            ></v-text-field>
            <v-text-field
              v-model="product.productType"
              name="productType"
              type="text"
              label="Product Type"
            ></v-text-field>
            <v-text-field
              v-model="product.Price"
              name="Price"
              type="number"
              label="Price"
            ></v-text-field>
            <v-text-field
              v-model="product.Quantity"
              name="Quantity"
              type="number"
              label="Quantity"
            ></v-text-field>
            <v-textarea
              v-model="product.mota"
              name="mota"
              type="text"
              label="Description"
            ></v-textarea>
            <v-text-field
              v-model="product.Images"
              name="Images"
              type="url"
              label="Image URL"
            ></v-text-field>
            <v-btn color="primary" type="submit">Chỉnh sửa</v-btn>
          </v-col>
        </v-row>
      </form>
    </div>
  </template>
  
  <script>
  import productService from '@/services/product.service';
  
  export default {
    name: 'edit',
    components: {
     
    },

    props: {
        id: { type: String, require: true},
    },
    data() {
      return {
        product: {
          productName: '',
          productType: '',
          Price: '',
          Quantity: '',
          mota: '',
          Images: '',
        },
      };
    },
    created() {
      this.getProduct();
      console.log(this.id);
    },
    methods: {
      async getProduct() {
        const id = this.id;
        const response = await productService.get(this.id);
        this.product = response;
      },
      async editProduct() {
        const id = this.id;
        await productService.update(id, this.product);
        this.$router.push('/products');
        console.log(this.product);
      },
    },
  };
  </script>