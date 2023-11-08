<script>
import { RouterLink } from 'vue-router';
import productAPI from '../services/productAPI';
import cartAPI from '../services/cartAPI';
export default {
  name: "ProductDetail",
  data() {
    return {
      idproduct: this.$route.params.id,
      idcart: sessionStorage.getItem("cart"),
      product: [],
      price: 0,
      size: 'M',
      number: 1,
      note: '',
      message: '',
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
      this.price = this.product[0].productPricesizeM * this.number;
      document.getElementById("btn-sizeM").classList.add("active");
      document.getElementById("btn-sizeL").classList.remove("active");
      this.size = "M";
    },
    getPriceProductsizeL() {
      this.price = this.product[0].productPricesizeL * this.number;
      document.getElementById("btn-sizeL").classList.add("active");
      document.getElementById("btn-sizeM").classList.remove("active");
      this.size = "L";
    },
    minusNumber() {
      if (document.getElementById("btn-sizeM").classList.contains("active")) {
        if (this.number > 1) {
          this.number = this.number - 1;
          this.price = this.product[0].productPricesizeM * this.number;
        }
        else {
          this.number = 1;
          this.price = this.product[0].productPricesizeM;;
        }
      }
      else if (document.getElementById("btn-sizeL").classList.contains("active")) {
        if (this.number > 1) {
          this.number = this.number - 1;
          this.price = this.product[0].productPricesizeL * this.number;
        }
        else {
          this.number = 1;
          this.price = this.product[0].productPricesizeL;
        }
      }
    },
    plusNumber() {
      if (document.getElementById("btn-sizeM").classList.contains("active")) {
        this.number = this.number + 1;
        this.price = this.product[0].productPricesizeM * this.number;
      }
      else if (document.getElementById("btn-sizeL").classList.contains("active")) {
        this.number = this.number + 1;
        this.price = this.product[0].productPricesizeL * this.number;
      }
    },
    addCart() {
      if (!sessionStorage.getItem("phone")) {
        this.$router.push('/login')
      }
      else{
        cartAPI.addProductsToCart(this.idcart, this.idproduct, this.size, this.number, this.note, this.price).then(result => {
          this.message = "Đã thêm sản phẩm vào giỏ hàng"
          alert(this.message)
        })
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
            <button class="btn btn-outline-info font-weight-bold px-5 mr-5 active" id="btn-sizeM"
              @click="getPriceProductsizeM">size M</button>
            <button class="btn btn-outline-info font-weight-bold px-5" id="btn-sizeL" @click="getPriceProductsizeL">size
              L</button>
          </ul>
        </div>
        <div class="mb-3">
          <p class="text-info-product">Số Lượng</p>
          <div>
            <div class="buttons_added">
              <input class="minus is-form py-2 px-3 font-weight-bold" type="button" value="-" @click="minusNumber">
              <input aria-label="quantity" class="input-qty text-center py-2 font-weight-bold" style="width: 50px; border: none;"
                min="1" name="numberProduct" type="number" v-model="number" disabled>
              <input class="plus is-form py-2 px-3 font-weight-bold" type="button" value="+" @click="plusNumber">
            </div>
          </div>
        </div>
        <div class="pb-3">
          <p class="text-info-product  mb-1">Ghi Chú</p>
          <div>
            <textarea name="note" class="form-control form-input" id="exampleFormControlTextarea1" rows="3"
              v-model="note"></textarea>
          </div>
        </div>
        <div class="pb-3">
          <p class="text-info-product  mb-1">Giá Sản Phẩm</p>
          <div id="priceProduct">
            <h5 class='text-info font-weight-bold pl-1'>{{
              new Intl.NumberFormat()
                .format(price)
                .replaceAll(",", ".")
            }}
              đ</h5>
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-info p-3 w-100" @click="addCart"> Thêm vào giỏ hàng</button>
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

.is-form {
  font-size: 16px;
}

.active {
  background-color: #14697a;
  color: rgb(254, 254, 254) !important;
}
.plus{
  background-color: #14697a;
  color: white;
}
</style>