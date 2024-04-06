<template>
    <div class="img-wrap">
        <img src="/img1.jpg">
    </div>
    <div class="product-details">
        <h1>{{ product }}</h1>
    </div>
</template>

<script>
import products from '../views/Products.vue'
export default {
    name: : "ProductDetail",
    data() {
        return {
            products
        }
    }
}
</script>