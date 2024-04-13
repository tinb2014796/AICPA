<template>
  <nav>
      <v-app-bar  color="red" dark app >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase ">
                <router-link class ="text-light" :to=" {
                  name: 'dashboard'
                }">
                <v-btn>
                  <span>AI CPA</span>
                </v-btn>
              </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
     <template v-slot:activator="{ on }">
       <router-link class="text-light" :to = "{
        name: 'dashboard'
       }">
        <v-btn
         text
         v-on="on"
       >
         <v-icon class="left" left> <font-awesome-icon :icon="['fas', 'house']" /> </v-icon>
           <span> Trang chu </span>
       </v-btn>
       </router-link>
     </template>
     <v-list flat>
       <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <!-- <router-link :to ="link.route" class ="text-light">
                  <v-list-item-title v-text ="link.text"></v-list-item-title>
          </router-link>
         <v-list-item-title >{{link.text}}</v-list-item-title> -->
       </v-list-item>
     </v-list>
           </v-menu>
           <v-btn text>
               <span>Log out</span>
               <v-icon class="right" right> <font-awesome-icon :icon="['fas', 'right-to-bracket']" /></v-icon>
            </v-btn>
      </v-app-bar>
     <v-navigation-drawer  v-model="drawer" dark app class="red darken-4">
         <v-layout column align-center>
              <v-flex class="avt"> 
                   <v-avatar size="100">
                           <img src="/img1.jpg" alt="">
                   </v-avatar>
                   <p class="white--text subheading mt-1 text-center">AI CPA</p>
              </v-flex>
              <v-flex class="mt-4 mb-4">
               <Popup />
              </v-flex>
         </v-layout>
         <v-list flat>
             <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                 <v-list-item-action>
                    <v-icon >{{link.icon}}</v-icon>
                 </v-list-item-action>
                 <v-list-item-content >
                     <v-list-item-title >{{link.text}}</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
         </v-list>
     </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from './Popup.vue'
export default {
  data: () => ({
     drawer: true,
     links :[
         { text:'Dashboard', route: '/'},
         { text:'My Products', route: '/products'},
         { text:'Team', route: '/team'},
         { text: 'Login', route: '/login'},
         { text: 'Productdetail', route: '/productdetail'}
     ]
    
   }),
   components: {
   Popup
 },

  
}
</script>
<style scoped>
.border {
 border-left: 4px solid #0ba518;
}
.avt{
  margin-left: 75px;
  margin-top: 50px;
}
.left{
  margin-right: 7px;
}
.right{
  margin-left: 7px;
}
</style>


