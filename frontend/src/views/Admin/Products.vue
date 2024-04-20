<template>
    <div  >
      <h1 class="subheading grey--text">Products</h1>
      <v-container>
        <v-layout row wrap class="mb-4">
        <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" dark v-on="on">
             <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project title</span>
          </v-btn>
        </template>
          <span>Sort project</span>
        </v-tooltip> -->
         <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <!-- <v-btn small outlined color="blue" @click="sortBy('title')" class="mr-2" dark v-on="on">
             <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By name</span>
          </v-btn> -->
          <v-btn small outlined color="green" @click="addproduct()" class="mr-2" dark v-on="on">
             <v-icon left small>folder</v-icon>
              <span class="caption text">Add product</span>
          </v-btn>
        </template>
          <span>Sort person</span>
        </v-tooltip>
        </v-layout>
            <v-row>
              <v-col v-for="product in products" :key="product.title" class="mb-1">
                <router-link 
                  :to = "{
                  name: 'admindetail',
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
    name: 'products',
    components: {
     
    },
    data: () => ({
      products : []
    }),
    methods: {
      sortBy(prop){
        this.product.sort((a,b) => a[prop] < b[prop] ? -1:1)
      },
      addproduct(){
        this.$router.push({name: 'add'})
      },
      async getProduct(){
        try{
            this.products = await productService.getAll();
            console.log(this.products);
        } catch(err) {
            console.log(err)
        }
      },
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
  </style>
  