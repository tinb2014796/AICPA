<template>
  <v-app>
    <v-container class="mt-14">
      <v-card>
        <v-card-title>
          Mua hàng
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(product, index) in products" :key="index">
                <v-list-item-avatar>
                  <img height="50" width="50" :src="product.image" alt="Product Image">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ product.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-text-field
                    label="Thêm số lượng sản phẩm muốn mua"
                    v-model="product.quantity"
                    type="number"
                    @input="updateTotal"
                  ></v-text-field>
                </v-list-item-action>
                <v-list-item-action>
                  {{ formatCurrency(product.price * product.quantity) }}
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="6">
              <strong>Tổng tiền</strong>
            </v-col>
            <v-col cols="6" class="text-right">
              {{ formatCurrency(total) }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="confirmPayment">Xác nhận thanh toán</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: 'Product 1', price: 1, quantity: 0, image: 'img1.jpg' },
        { name: 'Product 2', price: 1, quantity: 0, image: 'img1.jpg' },
        { name: 'Product 3', price: 1, quantity: 0, image: 'img1.jpg' }
      ],
      total: 0
    };
  },
  methods: {
    updateTotal() {
      this.total = this.products.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
      }, 0);
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    confirmPayment() {
      // Xử lý xác nhận thanh toán ở đây
      console.log(this.products);
    }
  },
  created() {
    this.updateTotal();
  }
};
</script>

<style>
/* Add your styles here */
</style>
