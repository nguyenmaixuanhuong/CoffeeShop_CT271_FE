<script>
import cartAPI from '../services/cartAPI';
export default {
    name: "Cart",
    data() {
        return {
            products: [],
            totalprice: 0,
            username: sessionStorage.getItem("username"),
            phone: sessionStorage.getItem("phone"),
            address: "",
            date: new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
        }
    },
    methods: {
        getAllCartDetails() {
            const idcart = sessionStorage.getItem("cart");
            cartAPI.getAllCartDetails(idcart).then(res => {
                this.products = res.data;

            })
        },
        async deleteCartDetail(product) {
            await cartAPI.deleteCartDetail(product.idcart, product.idproduct, product.size).then(res => {
                this.getAllCartDetails();
            });
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
            <div class="col-md-6" style="padding-right: 100px;">
                <h5> Thông tin giao hàng</h5>
                {{ date }}
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInput1">Tên người nhận</label>
                            <input type="text" class="form-control" id="exampleInput1" aria-describedby="Help"
                                placeholder="Nhập tên người nhận" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại</label>
                            <input type="text" class="form-control" id="phone" placeholder="Số điện thoại " v-model="phone">
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ nhận hàng</label>
                            <input type="text" class="form-control" id="address" placeholder="Địa chỉ nhận hàng " v-model="address" required>
                        </div>
                       <p class="text-info">Vui lòng kiểm tra thông tin chính xác trước khi đặt hàng</p>
                    </form>
                </div>
            </div>
            <div class="col-md-6 listCartDetails">
                <div>
                    <h4>Các món đã chọn</h4>
                    <div v-for="product in products " v-bind:key="product.idproduct" class="cartdetails">
                        <div class="d-flex">
                            <div>
                                <i class="fa-solid fa-pen mr-3" style="padding-top: 30px; color: rgb(35, 126, 138);"
                                    data-toggle="modal" data-target="#exampleModal"></i>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Cập nhật sản phẩm</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <img v-bind:src="'/img/products/' + product.productImage" alt=""
                                                            style="width: 150px; border-radius: 10px;">
                                                    </div>
                                                    <div>
                                                        <span class="font-weight-bold">{{ product.productName }}</span>
                                                        <p style="text-align: justify; font-size: 14px;">{{
                                                            product.description }}</p>
                                                        <div class="d-flex justify-content-between">
                                                            <h5 class="font-weight-bold">{{ new Intl.NumberFormat()
                                                                .format(product.totalprice)
                                                                .replaceAll(",", ".")
                                                            }}đ</h5>
                                                            <div class="buttons_added">
                                                                <input class="minus is-form  font-weight-bold" type="button"
                                                                    value="-">
                                                                <input aria-label="quantity"
                                                                    class="input-qty text-center py-1 font-weight-bold"
                                                                    style="width: 50px; border: none;" min="1"
                                                                    name="numberProduct" type="number">
                                                                <input class="plus is-form  font-weight-bold" type="button"
                                                                    value="+">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-info-product  mb-1">Ghi Chú</p>
                                                    <div>
                                                        <textarea name="note" class="form-control form-input"
                                                            id="exampleFormControlTextarea1" rows="1"
                                                            v-model="note"></textarea>
                                                    </div>
                                                </div>
                                                <div class="d-flex mt-3">
                                                    <p class="font-weight-bold">Chọn size: </p>
                                                    <div class="ml-5">
                                                        <button
                                                            class="btn btn-outline-info font-weight-bold px-2 py-1 mr-5 active"
                                                            id="btn-sizeM">size M</button>
                                                        <button class="btn btn-outline-info font-weight-bold px-2 py-1"
                                                            id="btn-sizeL">size
                                                            L</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-info m-3 p-2">Thay đổi giỏ hàng</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
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
                        <button type="button" class="btn btn-info mb-3 p-2 w-100 ">Đặt hàng</button>
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