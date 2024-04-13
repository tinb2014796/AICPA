<template>
    <v-container>
        <Form>
            <v-row  align="center" justify="center">
                <v-col>
                    <div >
                        <v-text-field
                            label="Tên sản phẩm"
                            name="productName"
                            type="text"
                            class="mt-14"
                        />
                        <ErrorMessage name="name" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="type">Loại</label>
                        <Field
                            name="type"
                            type="text"
                            class=""
                        />
                        <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="price">Giá</label>
                        <Field
                            name="price"
                            type="text"
                            class=""
                        />
                        <ErrorMessage name="address" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="quantity">Số lượng</label>
                        <Field
                            name="quantity"
                            type="text"
                            class=""
                        />
                        <ErrorMessage name="phone" class="error-feedback" />
                    </div>
                    <div align="center" justify="center" cols="12" sm="6" >
                        <v-file-input
                            label="File input"
                            prepend-icon="mdi-camera"
                            variant="filled"
                        >
                        </v-file-input>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Lưu</button>
                    </div>
                </v-col>
            </v-row>
        </Form>
    </v-container>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
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
    },
    data() {
      return {
        file1: null,
        file2: null
      }
    }
};

</script>
