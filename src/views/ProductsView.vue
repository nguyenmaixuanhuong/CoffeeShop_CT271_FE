<script >
import { RouterLink } from 'vue-router';
import productAPI from '../services/productAPI';
import search from "../components/search.vue"
export default {
    components:{
        search,
    },
    name: "Products",
    data() {
        return {
            products: [],
            type: 0,
            textSearch: "",
            productSearch:[],
        }
    },
    computed:{
        searchProducts() {
            const name = this.textSearch.toLowerCase().trim()
            if (!name) return this.products;
            else {
                productAPI.getlistProducts().then((res) => {
                    this.productSearch = res.data;
                })
                return this.productSearch.filter((product) => {
                    return product.productName.toLowerCase().includes(name)
                })
            }
        },
    },
    methods: {
        getAllProducts(type) {
            productAPI.getlistProducts().then(res => {
                if (type != 0) {
                    this.products = res.data.filter(product => {
                        if (product.idtype == type) return product;
                    })

                }
                else {
                    this.products = res.data
                }
                document.getElementById(this.type).classList.remove('active');
                document.getElementById(type).classList.add('active');
                this.type = type;
            });
            window.scrollTo(0, 0);
        }
    },
    created() {
        this.getAllProducts(0);
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
                        <p id="0" @click="getAllProducts(0)" class="product-list text-info active ">Tất cả</p>
                        <p id="1" @click="getAllProducts(1)" class="product-list">Cà Phê</p>
                        <p id="2" @click="getAllProducts(2)" class="product-list">Đá Xay</p>
                        <p id="3" @click="getAllProducts(3)" class="product-list">Trà</p>
                    </ul>
                </div>
                <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12 pt-3">
                    <div class="menu p-3">
                        <h1 class="pt-4 font-weight-bold mb-4 text-center" style="color: rgb(22, 103, 113); ">DANH SÁCH SẢN PHẨM</h1>
                        <search v-model="textSearch"></search>
                        <div class="menu-list d-flex flex-wrap ">
                            <div class="menu-item" v-for="product in searchProducts" v-bind:key="product.idproduct">
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

.active {
    color: brown;
}
</style>
