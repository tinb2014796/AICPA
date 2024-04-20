<template >
    <div >
        <v-container v-if="product" style="width: 70%;" class="mt-15">
            <v-card class="">
                <v-layout :class="`pa-3 product`">
                    <v-row>
                        <v-col cols = "12" sm="5">
                            <img :src="product.Images" height="400" width="400">
                        </v-col>
                        <v-col cols = "12" sm="7" class="mt-2">
                            <v-flex>
                                <h2>
                                    <div >{{product.productName}}</div>
                                    <div ></div>
                                </h2>
                            </v-flex>
                            <v-flex >
                                <div class="caption grey--text mt-5"> Giá:</div>
                                <div class="detail">{{product.Price}} VNĐ</div>
                            </v-flex>
                            <v-flex >
                                <div class="mota-container mt-5">
                                    <h7 class="detail">Thông tin chi tiết :</h7>
                                    <p class="mota-text" v-html="product.mota"></p>
                                </div>
                            </v-flex>
                            <router-link 
                                :to = "{
                                name: 'edit',
                                params: {id: product._id}
                                }">
                                <button class="btn btn-primary mt-4" @click="Edit">
                                    Sửa thông tin sản phẩm
                                </button>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-layout> 
            </v-card>
        </v-container>
    </div>
</template>

<script>
import productService from '@/services/product.service';

export default {
    name: 'admindetail',

    components: {
     
    },

    props: {
        id: { type: String, require: true},
    },

    data(){
        return{
            product: null,
        }
    },

    methods: {
      async Edit(){
        this.$router.push({name: 'edit/:id'})
      },
      
      async getProduct(){
        this.product = await productService.get(this.id)
        console.log(this.product)
      }
    },
    created(){
      this.getProduct();
    }
}
</script>

<style> 
.h1{
    margin-top: 50px;
    border: 4px solid #0ba518;  
}
.mota-container {
  white-space: pre-wrap;
}

.mota-text {
  margin: 0;
}
.detail{
    color: black; 
    font-weight: bold;
}
</style>