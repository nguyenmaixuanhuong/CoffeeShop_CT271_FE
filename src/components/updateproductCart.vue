<template>
    <button type="button" class="btn text-info bg-white" style="border: none; height: 30px; " data-toggle="modal"
        :data-target="'#' + product.idproduct + product.size">
        <i class="fa-solid fa-pen "></i>
    </button>
    <div class="modal fade" :id="product.idproduct + product.size" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-xs-6 p-0 d-flex">
                        <div style="width: 60%;">
                            <h5 class="text-uppercase font-weight-bold" style="color: rgb(113, 32, 32);">{{
                                product.productName }}</h5>
                            <img v-bind:src="'/img/products/' + product.productImage" alt=""
                                style="width: 60%; border: 1px solid rgb(234, 234, 234);">
                        </div>
                        <div>
                            <p class="text-info-product mt-5">Số Lượng</p>
                            <div>
                                <div class="buttons_added">
                                    <input class="minus is-form py-2 px-3 font-weight-bold" type="button" value="-"
                                        @click="minusNumber">
                                    <input aria-label="quantity"
                                        class="input-qty text-center py-2 font-weight-bold bg-white"
                                        style="width: 50px; border: none;" min="1" name="numberProduct" type="number"
                                        v-model="product.number" disabled>
                                    <input class="plus is-form py-2 px-3 font-weight-bold" type="button" value="+"
                                        @click="plusNumber">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 mt-3">
                    </div>
                    <div class="pb-3">
                        <p class="text-info-product  mb-1">Ghi Chú</p>
                        <div>
                            <textarea name="note" class="form-control form-input" id="exampleFormControlTextarea1" rows="3"
                                v-model="product.note"></textarea>
                        </div>
                    </div>
                    <div class="pb-3">
                        <p class="text-info-product  mb-1">Giá Sản Phẩm</p>
                        <div id="priceProduct">
                            <h5 class='text-info font-weight-bold pl-1'>{{
                                new Intl.NumberFormat()
                                    .format(product.totalprice)
                                    .replaceAll(",", ".")
                            }}
                                đ</h5>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-info p-3 w-100" @click="updateproductCart"> Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
<script>
import cartAPI from '../services/cartAPI';
export default {
    props: ["product"],
    data() {
    },
    methods: {
        minusNumber() {
            if (this.product.size == "M") {
                if (this.product.number > 1) {
                    this.product.number = this.product.number - 1;
                    this.product.totalprice = this.product.productPricesizeM * this.product.number;
                }
                else {
                    this.product.number = 1;
                    this.product.totalprice = this.product.productPricesizeM;;
                }
            }
            else if (this.product.size == "L") {
                if (this.product.number > 1) {
                    this.product.number = this.product.number - 1;
                    this.product.totalprice = this.product.productPricesizeL * this.product.number;
                }
                else {
                    this.product.number = 1;
                    this.product.totalprice = this.product.productPricesizeL;
                }
            }
        },
        plusNumber() {
            if (this.product.size == "M") {
                this.product.number = this.product.number + 1;
                this.product.totalprice = this.product.productPricesizeM * this.product.number;
            }
            else if (this.product.size == "L") {
                this.product.number = this.product.number + 1;
                this.product.totalprice = this.product.productPricesizeL * this.product.number;
            }
        },
        async updateproductCart() {
            const cartdetails = [ this.product.number, this.product.note, this.product.totalprice,this.product.idcart, this.product.idproduct, this.product.size]
            await cartAPI.updateCartDetails(cartdetails)
            .then((res) =>{
                $("#"+this.product.idproduct + this.product.size).modal("hide");
            })
            .catch((err) =>{
                console.log(err);
            });
        },
    }
}
</script>