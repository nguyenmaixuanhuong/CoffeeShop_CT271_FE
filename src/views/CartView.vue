<script>
import cartAPI from '../services/cartAPI';
import orderAPI from '../services/orderAPI';
import updateproductCart from '../components/updateproductCart.vue';
import moment from 'moment';
export default {
    name: "Cart",
    components:{
        updateproductCart,
    },
    data() {
        return {
            products: [],
            totalprice: 0,
            username: sessionStorage.getItem("username"),
            phone: sessionStorage.getItem("phone"),
            address: "",
            date: moment().format('DD-MM-YYYY HH:mm:ss'),
            error: "",
            message: "",
            length: 0,
        }
    },
    methods: {
        async getAllCartDetails() {
            const idcart = sessionStorage.getItem("cart");
            await cartAPI.getAllCartDetails(idcart).then(res => {     
                this.products = res.data;
                this.length = res.data.length;
            })
        },
        async deleteCartDetail(product) {
            await cartAPI.deleteCartDetail(product.idcart, product.idproduct, product.size).then(res => {
                this.getAllCartDetails();
            });
        },
        async createOrder(){
            const totalorder = this.getTotalPrice;
            if( this.products.length == 0){
                this.message = "Chưa có sản phẩm nào trong giỏ hàng của bạn";
                alert(this.message);
            }
            else if(this.address == ""){
                this.error = "Vui lòng nhập địa chỉ nhận hàng"
             }
            else {
                await orderAPI.createOrder(this.phone,this.username, this.address,this.date,totalorder,0,this.products).then(res => {
                        this.message = res.data;
                        $("#successOrder").modal("show");
                        setTimeout(this.getAllCartDetails(),3000)
                        
                })
                .catch(err => {
                    console.log(e);
                });
            }
           
        },
        reseterror(){
            this.error = '';
        }
       
    },
    computed: {
       getTotalPrice() {
            return this.products.reduce(
                (total, product) => total + product.totalprice, 0
            );
        }
    },
    created() {
        this.totalprice = 0;
        this.getAllCartDetails();
    }
}
</script>

<template>
    <div class="container">
        <div class="row p-5" >
            <div class="col-md-6"  style="padding-right: 100px;">
                <h5 class="text-center"> Thông tin giao hàng</h5>
                <p class="text-center">{{ date }}</p>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInput1">Tên người nhận</label>
                            <input type="text" class="form-control" id="exampleInput1" aria-describedby="Help"
                                placeholder="Nhập tên người nhận" disabled v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại</label>
                            <input type="text" class="form-control" id="phone" disabled placeholder="Số điện thoại " v-model="phone">
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ nhận hàng</label>
                            <input type="text" class="form-control" id="address" placeholder="Địa chỉ nhận hàng" @change="reseterror" v-model="address" required>
                        </div>
                       <p class="text-danger font-weight-bold text-center">{{ error }}</p>
                    </form>
                </div>
            </div>
            <div class="col-md-6 listCartDetails">
                <div >
                    <h4>Các món đã chọn</h4>
                    <div class="text-center p-3" v-if="length < 1">
                        <img  src="/img/logo/emptycart.svg" alt="">
                        <p class="mt-3">Chưa có sản phẩm nào trong giỏ hàng của bạn</p>
                    </div>
                    <div v-else class="cartdetails" v-for="product in products " v-bind:key="product.idproduct">
                        <div class="d-flex">
                                <updateproductCart :product="product"></updateproductCart>
                            <div class="ml-3">
                                <p class="p-0 font-weight-bold">{{ product.number }} x {{ product.productName }} (size {{
                                    product.size }})</p>
                                <p class="m-0"> Ghi chú: {{ product.note }}</p>
                            </div>
                        </div>
                        <div>
                            <a><i class="fa-solid fa-xmark float-right text-danger" @click="deleteCartDetail(product)"
                                    style="font-size: 20px;"></i></a>
                            
                            <p class="font-weight-bold mt-5">{{ new Intl.NumberFormat()
                                .format(product.totalprice)
                                .replaceAll(",", ".")
                            }}đ</p>
                        </div>
                    </div>

                    <div class="totalpriceCart d-flex justify-content-between mt-3 font-weight-bold px-3">
                        <p>Tổng tiền: </p>
                        <p> {{ new Intl.NumberFormat()
                            .format(getTotalPrice)
                            .replaceAll(",", ".")
                        }}đ</p>
                    </div>
                    <div class="order">
                        <button type="button" class="btn btn-info mb-3 p-2 w-100 " @click="createOrder">Đặt hàng</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="modal" id="successOrder" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="getAllCartDetails" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <img style="width: 100px; " src="/image/logo/success.png" alt="">
                        <p class="h5 mt-3">Bạn đã đặt hàng thành công</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <RouterLink to="/products">
                            <button type="button" data-dismiss="modal" class="btn btn-danger">Tiếp tục mua hàng </button>
                        </RouterLink>
                        <RouterLink  to="/orders">
                            <button type="button" data-dismiss="modal" class="btn btn-success">Xem chi tiết đơn hàng </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cartdetails {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 5px; */
    padding: 20px 20px 0px 20px;
    border-bottom: 1px solid black;
}

.is-form {
    padding: 5px 13px;
    border: none;
    border-radius: 20px;
}
.listCartDetails{
    box-shadow: 2px 2px 10px rgb(233, 233, 233);
    border-radius: 10px;
    padding: 50px;
}
</style>