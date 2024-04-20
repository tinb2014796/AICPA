<template>
            <v-container col="12" sm="">
                    <Form  @submit = "submit" >
                        <v-row align="center" justify="center" >
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
                                        v-model="user.username"
                                    />
                                    <ErrorMessage name="name" class="error-feedback" />
                                </div>
                                <div justify="center">
                                    <v-text-field
                                        v-model="user.password"
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
                                    <v-btn color="blue" type= "submit" dark block tile>Đăng nhập</v-btn>
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
import userService from "@/services/user.service";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    
    methods: {
        formatNames(files) {
        return files.length === 1 ? files[0].name : `${files.length} files selected`
        },
        signup(){
        this.$router.push({name: 'signup'})
        },
        submit(){
            console.log(this.user);
            this.logintest(this.user);
        },
        async logintest(data) {
                try {
                const token = await userService.login(data);
                confirm('Đăng nhập thành công');
                console.log(token);
                } catch (error) {
                    console.log(error);
                }
        },
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

        user: {
            username:'',
            password:'',
        }
        };
    }
};

</script>
<style>
.login{
    border: solid 2px;
}
</style>
