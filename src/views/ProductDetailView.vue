<script>
import { RouterLink } from 'vue-router';
import productAPI from '../services/productAPI';
export default {
  name: "ProductDetail",
  data() {
    return {
      product: [],
      price: '',
      number:1,
      note : '',
    }
  },
  methods: {
    getProductDetail(id) {
      productAPI.getProduct(id).then(res => {
        this.product = res.data
        this.price = this.product[0].productPricesizeM;
      });
    },
    getPriceProductsizeM() {
       this.price = this.product[0].productPricesizeM;
       document.getElementById("btn-sizeM").classList.add("active");
       document.getElementById("btn-sizeL").classList.remove("active");
    },
    getPriceProductsizeL() {
       this.price = this.product[0].productPricesizeL;
       document.getElementById("btn-sizeL").classList.add("active");
       document.getElementById("btn-sizeM").classList.remove("active");
    },
    minusNumber(){
      if(document.getElementById("btn-sizeM").classList.contains("active")){
        if(this.number > 1){
          this.number = this.number - 1;
          this.price =  this.product[0].productPricesizeM * this.number;
        }
        else{
          this.number = 1;
          this.price = this.product[0].productPricesizeM;;
        }
      }
      else if(document.getElementById("btn-sizeL").classList.contains("active")){
        if(this.number > 1){
          this.price =  this.product[0].productPricesizeL * this.number;
          this.number = this.number - 1;
        }
        else{
          this.number = 1;
          this.price = this.product[0].productPricesizeL;
        }
      }
    },
    plusNumber(){
      if(document.getElementById("btn-sizeM").classList.contains("active")){       
          this.number = this.number + 1;
          this.price = this.product[0].productPricesizeM * this.number;
      }
      else if(document.getElementById("btn-sizeL").classList.contains("active")){
        this.number = this.number + 1;
          this.price = this.product[0].productPricesizeL * this.number;
        }
      }
  },
  created() {
    this.getProductDetail(this.$route.params.id);
  }

}


</script>
<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6 p-0">
        <h1 class="text-uppercase font-weight-bold" style="color: rgb(113, 32, 32);">{{ product[0].productName }}</h1>

        <img v-bind:src="'/img/products/' + product[0].productImage" alt=""
          style="width: 90%; border: 1px solid rgb(234, 234, 234);">
      </div>
      <div class="col-md-6 mt-3">
        <div>
          <p class="pt-5 text-info-product ">Chọn Size (bắt buộc)</p>
          <ul class="d-flex">
            <button class="btn btn-outline-info font-weight-bold px-5 mr-5 active" id="btn-sizeM"  @click=" getPriceProductsizeM ">size M</button>
            <button class="btn btn-outline-info font-weight-bold px-5" id="btn-sizeL" @click=" getPriceProductsizeL">size L</button>
          </ul>
        </div>
        <div class="mb-3">
          <p class="text-info-product">Số Lượng</p>
          <div>
            <div class="buttons_added">
              <input class="minus is-form py-2 px-3 font-weight-bold" type="button" value="-" @click="minusNumber">
              <input aria-label="quantity" class="input-qty text-center py-2 font-weight-bold" style="width: 50px;" min="1" name="numberProduct" type="number" v-model="number" >
              <input class="plus is-form py-2 px-3 font-weight-bold" type="button" value="+" @click="plusNumber">
            </div>
          </div>
        </div>
        <div class="pb-3">
          <p class="text-info-product  mb-1">Ghi Chú</p>
          <div>
            <textarea name="note" class="form-control form-input" id="exampleFormControlTextarea1" rows="3" v-model="note"></textarea>
          </div>
        </div>
        <div class="pb-3">
          <p class="text-info-product  mb-1">Giá Sản Phẩm</p>
          <div id="priceProduct">
            <h5 class='text-info font-weight-bold pl-1' >{{ price }} đ</h5>
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-info p-3 w-100"> Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div class="mt-4 border-top border-bottom py-3">
        <span class="font-weight-bold">Mô tả sản phẩm: </span>
        <p style="text-align: justify; display: inline;">{{ product[0].description }}</p>
      </div>
    </div>
  </div>
</template>


<style>
.text-info-product {
  font-weight: 600;
}
.is-form{
  font-size: 16px;
}
.active{
  background-color: #14697a;
  color: rgb(254, 254, 254)!important;
}
</style>