<template>
            <v-container col="12" sm="">
                    <Form>
                        <v-row align="center" justify="center">
                            <v-col col="12" sm="4">
                                <h4 align="center" justify="center" class="mt-12">Bạn đã có tài khoản
                                    <br> Hãy đăng nhập để mua hàng 
                                </h4>
                                <div >
                                    <v-text-field
                                        name="username"
                                        type="email"
                                        class="mt-14"
                                        label = Email
                                    />
                                    <ErrorMessage name="name" class="error-feedback" />
                                </div>
                                <div justify="center">
                                    <v-text-field
                                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show2 ? 'text' : 'password'"
                                        class="input-group--focused"
                                        hint="At least 8 characters"
                                        label="Password"
                                        name="input-10-2"
                                        @click:append="show2 = !show2"
                                    ></v-text-field>
                                    <ErrorMessage name="email" class="error-feedback" />
                                </div>
                                <div align="center"justify="center" cols="12" sm="6" class="mt-4">
                                    <v-btn color="blue" dark block tile>Đăng nhập</v-btn>
                                </div>
                                <h5 align="center"justify="center" class="mt-4">
                                    Nếu bạn chưa có tài khoản có thể tạo tài khoản
                                </h5>
                                <div align="center"justify="center" cols="12" sm="6" class="mt-4">
                                    <v-btn @click="signup()" color="red" dark block tile>Tạo tài khoản</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </Form>
            </v-container>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Signup from "./Signup.vue";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
        formatNames(files) {
        return files.length === 1 ? files[0].name : `${files.length} files selected`
        },
        signup(){
        this.$router.push({name: 'signup'})
        }
    },
    data() {
      return {
        // file1: null,
        // file2: null
        show1: false,
        show2: true,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
};

</script>
