<template>
    <v-container>
      <Form @submit="submit">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title class="mt-12" >
                <span class="headline">Thêm sản phẩm mới</span>
              </v-card-title>
              <v-card-text>
                  <v-text-field 
                    v-model="product.productName"
                    name="produuctName" 
                    type="text" 
                    label="Tên sản phẩm">
                  </v-text-field>
                  <v-text-field 
                    v-model="product.productType"
                    name="productType"
                    type="text" 
                    label="Loại sản phẩm">
                  </v-text-field>
                  <v-text-field 
                    v-model="product.Price" 
                    name="Price"
                    label="Giá (đ)" 
                    type="number">
                  </v-text-field>
                  <v-text-field 
                    v-model="product.Quantity" 
                    name="Quantity"
                    label="Số lượng" 
                    type="number">
                  </v-text-field>
                  <v-textarea 
                    v-model="product.mota" 
                    name="mota"
                    type="text" 
                    label="Mô tả">
                  </v-textarea>
                  <v-text-field
                    v-model="product.Images" 
                    name="Images"
                    type="url" 
                    label="Link ảnh">
                  </v-text-field>
                  <v-btn color="primary" type="submit">Thêm sản phẩm</v-btn>
                <!-- </v-form> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </Form>
    </v-container>
  </template>
  
  <script>
import productService from '@/services/product.service';
import { Form, Field, ErrorMessage } from "vee-validate";
   
  export default {
    components: {
        Form,
        Field,
        ErrorMessage,
        },
        emits: ["submit:contact", "delete:contact"],
    data() {
      return {
        product: {
          productName: '',
          productType: '',
          Price: '',
          Quantity: '',
          mota: '',
          Images: '',
        }
      };
    },
    methods: {
      async submit() {
            console.log(this.product)
              try {
                const sp = await productService.create(this.product);
                console.log(sp);
              } catch (error) {
                console.log(error);
            };
      },
    }
  };
  </script>
  