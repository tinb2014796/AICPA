<template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="12" sm="10">
              <v-card class="elevation-6 mt-10"  >
               <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Đăng nhập tài khoản của bạn</h4>
                          <h5
                            class="text-center  grey--text "
                          > Hãy đăng nhập tài khoản của bạn để có thể liên hệ<br> hoặc đặt hàng sản phẩm</h5>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                             
                            <v-text-field
                              label="Email"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-16"
                            />
                            <v-text-field
                              label="Mật khẩu"
                              outlined
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
                                <v-col cols="12" sm="7">
                                </v-col>
                                <!-- <v-col cols="12" sm="5">
                                  <span class="caption blue--text">Quên mật khẩu</span>
                                </v-col> -->
                              </v-row>
                            <v-btn color="blue" dark block tile>Đăng nhập</v-btn>
                       
                           <!-- <h5
                            class="text-center  grey--text mt-4 mb-3"
                          >Or Log in using</h5>
                           <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                           </div> -->
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                      <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                      <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                          <h3 class="text-center ">Bạn chưa có tài khoản</h3>
                          <h5
                            class="text-center"
                          >Hãy tạo tài khoản của bạn để có thể liên hệ<br> hoặc đặt hàng sản phẩm</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step++">Đăng kí</v-btn>
                        </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row >
                      <v-col cols="12" md="6" class="blue rounded-br-xl">
                       <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                          <h3 class="text-center ">Bạn đã có tài khoản?</h3>
                          <h5
                            class="text-center"
                          >Hãy đăng nhập tài khoản của bạn để có thể liên hệ<br> hoặc đặt hàng sản phẩm</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step--">Đăng nhập</v-btn>
                        </div>
                        </div>
                      </v-col>
  
                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Đăng kí tài khoản</h4>
                          <h5
                            class="text-center  grey--text "
                          >Hãy điền đầy đủ thông tin yêu cầu để tạo tài khoản</h5>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                             <v-row>
                             <v-col cols="12" sm="6">
                              <v-text-field
                              label="Họ"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                            />
                             </v-col>
                             <v-col cols="12" sm="6">
                              <v-text-field
                              label="Tên"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                            />
                             </v-col>
                             </v-row>
                            <v-text-field
                              label="Email"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                            />
                            <v-text-field
                              label="Mật khẩu"
                              outlined
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
                                <v-col cols="12" sm="7">
                                </v-col>
                              </v-row>
                            <v-btn color="blue" dark block tile>Đăng kí</v-btn>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
    
  
    export default {
     data: () => ({
      step: 1
    }),
    props: {
      source: String
    } 
  
      
    }
  </script>
  <style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
  }
  </style>