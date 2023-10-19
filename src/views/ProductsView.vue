<script >
import { RouterLink } from 'vue-router';
import productAPI from '../services/productAPI';
export default {
    name: "Products",
    data() {
        return {
            products: []
        }
    },
    methods: {
        getAllProducts() {
            const productAll = {};
            productAPI.getlistProducts().then(res => {
                res.data.map(product => {
                    productAll[product.idproduct] = product;
                })
                this.products = productAll;
                // console.log(this.products);
            });

        }
    },
    created() {
        this.getAllProducts();
    }
}
</script>
<template>
    <TheHeader />
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-lg-2 p-0 mt-5" style="border-right: 3px solid rgba(219, 219, 219, 0.484);">
                    <ul class=" btn-menu" style="">
                        <h3 class="bg-info p-2 text-white text-center">MENU</h3>
                        <RouterLink to="/products" class="product-list text-info  ">Tất cả</RouterLink>
                        <RouterLink to="/coffee" class="product-list">Cà Phê</RouterLink>
                        <RouterLink to="/tea" class="product-list">Trà</RouterLink>
                        <RouterLink to="/freeze" class="product-list">Đá Xay</RouterLink>
                    </ul>
                </div>
                <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12 pt-3">
                    <div class="menu p-3">
                        <!-- <h3 class="menu-title">Coffee</h3>  -->
                        <div class="menu-list d-flex flex-wrap ">
                            <div class="menu-item" v-for="product in products" v-bind:key="product.idproduct">
                                <RouterLink v-bind:to="'/product/' + product.idproduct" style="text-decoration: none;">
                                    <div class="menu-item-img" style="">
                                        <img v-bind:src="'/img/products/' + product.productImage" alt=""
                                            style="width: 100%; border-radius: 10px;">
                                    </div>

                                    <div class="menu-item-info text-center pt-3">
                                        <p class="font-weight-bold mb-0 ">
                                            {{ product.productName }}
                                        </p>
                                        <div class="product-item-price pb-2">
                                            <p>{{
                                                new Intl.NumberFormat()
                                                    .format(product.productPricesizeM)
                                                    .replaceAll(",", ".")
                                            }}
                                                đ</p>
                                        </div>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <TheFooter />
</template>

<style>
* {
    list-style: none;
}

.product-list {
    font-weight: 500;
    color: rgb(147, 147, 147);
    display: block;
    font-size: 100%;
    text-decoration: none !important;
    ;
    padding-left: 30px;
}

.product-list:hover {
    cursor: pointer;
    font-weight: 700;
    color: rgb(33, 174, 174);
}

.menu-item {
    width: 30%;
    margin-left: 24px;
    margin-bottom: 36px;
    border-radius: 10px;

}

.menu-item:hover {
    /* border: 1px solid rgb(197, 197, 197); */
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgb(232, 232, 232);
    border-bottom: none;
}

.btn-menu {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    line-height: 2;
    padding-left: 50px;

}

.decoration-none {
    text-decoration: none !important;
}
</style>
