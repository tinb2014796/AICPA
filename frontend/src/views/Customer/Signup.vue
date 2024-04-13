<template>
    <v-container col="12" sm="">
            <Form @submit = "submit">
                <v-row align="center" justify="center">
                    <v-col col="12" sm="4">
                        <h4 align="center" justify="center" class="mt-12">
                            Hãy điền đầy đủ thông tin để tạo tài khoản
                        </h4>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                v-model="user.fisrtname"
                                name="firstname"
                                type="text"
                                class="mt-14"
                                label = Firstname
                            />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                v-model="user.lastname"
                                name="lastname"
                                type="text"
                                class="mt-14"
                                label = Lastname
                            />
                            </v-col>
                        </v-row>
                        <div >
                            <v-text-field
                                v-model="user.username"
                                name="username"
                                type="email"
                                class="mt-2"
                                label = Email
                            />
                            <ErrorMessage name="name" class="error-feedback" />
                        </div>
                        <div justify="center">
                            <v-text-field
                                v-model="user.password"
                                name="password"
                                type="password"
                                class="mt-2"
                                label="Password"
                            />
                            <ErrorMessage name="email" class="error-feedback" />
                        </div>
                        <div>
                            <v-text-field
                                v-model="user.address"
                                name="address"
                                type="text"
                                class="mt-2"
                                label = Address
                            />
                        </div>
                        <div>
                            <v-text-field
                                v-model="user.phone"
                                name="phone"
                                type="tel"
                                :counter ="10"
                                class="mt-2"
                                label = Phone
                            />
                        </div>
                        <div align="center"justify="center" cols="12" sm="6" class="mt-4">
                            <v-btn color="red" dark block type="submit">Tạo tài khoản</v-btn>
                        </div>
                        <h4 align="center" justify="center" class="mt-6">
                            Nếu bạn đã có tài khoản hãy đăng nhập 
                        </h4>
                        <div align="center"justify="center" cols="12" sm="6" class="mt-4">
                                <v-btn @click="logintest()" color="blue" dark block tile>Đăng nhập</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </Form>
    </v-container>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
    export default {
        data() {
            return {
                user: {
                    fisrtname : '',
                    lastname: '',
                    address:'',
                    phone : '',
                    username: '',
                    password: '',
                }
            }
        },
        components: {
        Form,
        Field,
        ErrorMessage,
        },
        emits: ["submit:contact", "delete:contact"],

        methods: {
            submit() {
                console.log(this.user)
            },
            deleteContact() {
                this.$emit("delete:contact", this.contactLocal.id);
            },
            formatNames(files) {
            return files.length === 1 ? files[0].name : `${files.length} files selected`
            },
            logintest(){
                this.$router.push({name: 'logintest'})
            }
        },
    };

</script>
