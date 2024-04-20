<template>
    <div class="mt-5">
      <v-container class="product-container">
        <form id="search-form" @submit="search()">
          <div id="search-box">
            <input name="search" v-model="searchText" type="text" id="search-input" placeholder="Search..." />
            <button @click="search()"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
          </div>
        </form>
        <v-layout row wrap class="mb-4 mt-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <router-link 
                  :to = "{
                  name: 'product-cus',
                  params: {id: products}
                }">
                <v-btn @click="filter(`Camera`)" small outlined color="green" class="mr-2" dark v-on="on">
                  <v-icon left small>folder</v-icon>
                  <span class="caption text">Camera</span>
                </v-btn>
              </router-link>
              <router-link 
                    :to = "{
                    name: 'product-cus',
                    params: {id: products}
                  }">
                  <v-btn @click="filter(`Switch`)" small outlined color="red" class="mr-2" dark v-on="on">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text">Switch</span>
                  </v-btn>
              </router-link>
              <router-link 
                  :to = "{
                  name: 'product-cus',
                  params: {id: products}
                }">
                <v-btn @click="filter(`Đầu ghi`)" small outlined color="blue" class="mr-2" dark v-on="on">
                  <v-icon left small>folder</v-icon>
                  <span class="caption text">Đầu ghi</span>
                </v-btn>
              </router-link>
            </template>
          </v-tooltip >
          {{ message }}
        </v-layout>
          <v-row>
              <v-col v-for="product in productSearch" :key="product.title" class="mb-1">
                <router-link 
                  :to = "{
                  name: 'productdetail',
                  params: {id: product._id}
                }">
                <v-card>
                <v-layout :class="`pa-3 product ${product.status}`">
                    <v-flex>
                        <img :src="product.Images" height="100" width="100">
                        <div >Giá: {{product.Price}} VNĐ</div>
                    </v-flex>
                    <v-flex >
                        <div></div>
                        <div class="detail" >{{product.productName}}</div>
                    </v-flex>
                  </v-layout> 
              </v-card>
              </router-link>
              </v-col>  
            </v-row>
      </v-container>
    </div>
</template>
  
  <script>
import productService from '@/services/product.service';

  

  export default {
    name: 'product-cus',
    components: {
     
    },

    data: () => ({
      products : [],
      productSearch:[],
      message: null,
      searchText:'',
    }),

    watch:{
      searchText(){
        this.filter(this.searchText)
      }
    },
    methods: {
      sortBy(prop){
        this.product.sort((a,b) => a[prop] < b[prop] ? -1:1)
      },                                
      async getProduct(){
        try{
            this.products = await productService.getAll();
            this.productSearch = this.products;
        } catch(err) {
            console.log(err)
        }
      },

      filter(data) {
        this.productSearch = this.products.filter(product => product.productName.toLowerCase().includes(data.toLowerCase()) || product.productType.includes(data));
      },

      search(){
        this.filter(this.searchText)
      }
    },
    created(){
      this.getProduct();
    }
  }
  </script>
  <style >
    .project.complete {
        border-left: 4px solid #3cd1c2;
    }
    .project.no {
        border-left: 4px solid orange;
    }
    .project.up {
        border-left: 4px solid red;
    }
    .project.yes {
        border-left: 4px solid yellow;
    }
     .v-chip.complete {
        color: #3cd1c2;
    }
    .p.ovnored {
        color: orange;
    }
    .p.up {
        color:  red;
    }
    .p.yes {
        color:  yellow;
    }
    .detail{
      color: black; 
      font-weight: bold;
    }
    .product-container{
      margin-top: 100px;
    }
#search-form {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
}

#search-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 4px;
}

#search-box {
  display: flex;
  align-items: center;
  width: 100%;
}

#search-box button {
  border: none;
  background: none;
  padding: 5px;
  margin-left: -30px;
  cursor: pointer;
}
  </style>
  