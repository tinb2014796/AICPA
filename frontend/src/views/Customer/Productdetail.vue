<template>
    <div >
        <v-container style="width: 70%;" class="mt-5">
            <v-card>
                <v-layout :class="`pa-3 product`">
                    <v-row>
                        <v-col cols = "12" sm="5">
                            <img src="/img1.jpg" height="600" width="600">
                        </v-col>
                        <v-col cols = "12" sm="7" class="mt-2">
                            <v-flex>
                                <h2>
                                    <div >Camera Hik-vision PTZ</div>
                                    <div ></div>
                                </h2>
                            </v-flex>
                            <v-flex >
                                <div class="caption grey--text">Quan sát trong phạm vi 2km</div>
                                <div ></div>
                            </v-flex>
                            <v-flex >
                                <div class="caption grey--text">Hai mắt tích hợp AI, phân vùng chuyển động</div>
                                <div > Nhận diện khuôn mặt biển số </div>
                            </v-flex>
                            <button class="btn btn-primary" @click="addToCart">
                                Mua ngay
                            </button>
                        </v-col>
                    </v-row>
                </v-layout> 
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Productdetail',
    components: {
     
    },
    methods: {
      async addToCart(){
        this.$router.push({name: 'cart'})
      }
    }
}
</script>

<style> 
.h1{
    margin-top: 50px;
    border: 4px solid #0ba518;
    
};
</style>