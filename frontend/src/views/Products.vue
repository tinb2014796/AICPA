<template>
    <div  >
      <h1 class="subheading grey--text">Products</h1>
      <v-container>
        <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" dark v-on="on">
             <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project title</span>
          </v-btn>
        </template>
          <span>Sort project</span>
        </v-tooltip>
         <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn small outlined color="blue" @click="sortBy('title')" class="mr-2" dark v-on="on">
             <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By name</span>
          </v-btn>
          <v-btn small outlined color="green" @click="addproduct()" class="mr-2" dark v-on="on">
             <v-icon left small>folder</v-icon>
              <span class="caption text">Add product</span>
          </v-btn>
        </template>
          <span>Sort person</span>
        </v-tooltip>
        </v-layout>
        <router-link :to = "{
            name: 'productdetail'
          }">
            <v-row>
              <v-col v-for="product in products" :key="product.title" class="mb-1">
              <v-card>
                <v-layout :class="`pa-3 product ${product.status}`">
                    <v-flex>
                        <img src="/img1.jpg" height="100" width="100">
                        <div class="caption grey--text">Product title</div>
                        <div >{{product.title}}</div>
                    </v-flex>
                    <v-flex >
                        <div class="caption grey--text">Person</div>
                        <div >{{product.person}}</div>
                    </v-flex>
                    <v-flex >
                        <div class="caption grey--text">Due By</div>
                        <div >{{product.due}}</div>
                    </v-flex>
                  </v-layout> 
              </v-card>
              </v-col>  
            </v-row>
        </router-link>
      </v-container>
    </div>
</template>
  
  <script>
  

  export default {
    name: 'products',
    components: {
     
    },
    data: () => ({
      products : [
        {title: 'Site web ', person :'khaled', due: '10/10/1987', status:'no'},
        {title: 'Application mobile', person :'Iyad', due: '02/07/1990', status:'complete'},
        {title: 'Gestion de stock', person :'Zineb', due: '01/05/1987', status:'yes'},
        {title: 'Conception', person :'Hu Java', due: '02/09/1991', status:'up'},
      ]
    }),
    methods: {
      sortBy(prop){
        this.product.sort((a,b) => a[prop] < b[prop] ? -1:1)
      },
      addproduct(){
        this.$router.push({name: 'add'})
      }
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
  </style>
  