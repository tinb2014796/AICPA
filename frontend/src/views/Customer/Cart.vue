<template>
    <v-container>
      <v-row justify="center" class="mt-12">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              <span class="headline">Giỏ hàng</span>
            </v-card-title>
            <v-list dense>
              <v-list-item-group v-if="cartItems.length">
                <v-list-item v-for="(item, index) in cartItems" :key="index">
                    <v-list-item-avatar>
                        <img src="/img1.jpg" height="50" width="50">
                    </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.price }} đ</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn class="minus" height="20" width="20" icon @click="decrementItem(index)">
                      <v-icon x><font-awesome-icon height="15" width="15" :icon="['fas', 'minus']" /></v-icon>
                    </v-btn>
                    {{ item.quantity }}
                    <v-btn class="plus" height="20" width="20" icon @click="incrementItem(index)">
                      <v-icon> <font-awesome-icon height="15" width="15" :icon="['fas', 'plus']" /> </v-icon>
                    </v-btn>
                    <v-card class="trash" height="20" width="40"  icon @click="removeItem(index)">
                        <span justify="center">Xóa</span>
                      <v-icon class="right" right><font-awesome-icon :icon="['fas', 'trash']" /></v-icon>
                    </v-card>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
              <v-list-item v-else>
                <v-list-item-content>
                  <v-list-item-title>Giỏ hàng của bạn trống</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="primary" @click="checkout">Thanh toán</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: 'Sản phẩm 1', price: 100000, quantity: 1 },
          { name: 'Sản phẩm 2', price: 150000, quantity: 1 },
          { name: 'Sản phẩm 3', price: 200000, quantity: 1 }
        ]
      };
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1);
      },
      incrementItem(index) {
        this.cartItems[index].quantity++;
      },
      decrementItem(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity--;
        }
      },
      checkout() {
        // Xử lý thanh toán ở đây
      }
    }
  };
  </script>
<style>
.trash{
    margin-left: 10px;
    color: rgba(31, 23, 16, 0.814);
    background-color: red;
    text-align: center;
}
.plus{
    margin-left: 5px;
}
.munius{
    margin-right: 10px;
}
</style>
  