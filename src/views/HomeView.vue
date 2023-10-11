<script >
import { RouterLink } from 'vue-router';
import Products from './ProductsView.vue';
export default {
  name: "Home",
  components: {
    Products
  },
  methods: {
    getALL(){
     
    }
  },
  created(){
    this.getALL();
  }
}
</script>
<template>
  <TheHeader/>
  <main style="background-color: rgb(255, 244, 230); padding-bottom: 50px;">
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="slider" src="/img/slider/slider3.png" alt="Los Angeles">
        </div>
        <div class="carousel-item">
          <img class="slider" src="/img/slider/slider2.png" alt="Chicago">
        </div>
        <div class="carousel-item">
          <img class="slider" src="/img/slider/slider1.png" alt="New York">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

    <div class="container">
      <div class="row">
        <div class="coffee">
          <div class="coffee-item d-flex bannerIF"
            style="min-height:340px; position: relative; background: url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-PSD-bg.jpg) no-repeat">
            <h1 class="text-center p-4 font-weight-bold text-banner" style="position: absolute;"> COFFEE</h1>
            <div class="align-self-center text-white p-5" style="font-size: 18px; position: relative;">
              <p class="float-left pt-4" style="margin-right: 30%;">
                Việt Nam là nước sản xuất cà phê lớn thứ hai thế giới. Là một thương hiệu Việt Nam,
                TRẠM Coffee tự tay chọn lọc và rang chỉ những hạt cà phê Arabica thơm ngon nhất
                và những hạt cà phê Robusta đậm đà cho cách pha trộn đặc trưng của chúng tôi.
              </p>
              <RouterLink to="/coffee" class="btn btn-outline-info btnBanner" style="bottom: 0px; left: 10px;">DISCOVER MORE</RouterLink>
            </div>
            <div>
              <RouterLink to="/coffee"><img class="float-right" src="/img/productsInfor/coffee.png"
                style="width: 40%;  position: absolute; bottom: 0px; right: 0;" alt=""></RouterLink>
            </div>
          </div>
        </div>
        <div class="milktea ">
          <div class="milktea-item d-flex bannerIF"
            style="min-height:340px; position: relative; background: url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-FREEZE.jpg) no-repeat">
            <h1 class="text-center p-5 font-weight-bold "
              style="position: absolute; right: 48px; color: #4894a5;  text-shadow:3px 1px #24515c; font-size: 50px;">
             FREEZE</h1>
              <div class="align-self-center p-5" style="font-size: 18px; margin-left: 30%;">
                <p class="float-right font-weight-bold pt-5">
                  Trà sữa thơm ngon của chúng tôi được làm từ nguyên liệu cao cấp của Việt Nam, mang đậm hương vị trà, vị
                  béo của sữa.
                  Đảm bảo là một thức uống yêu thích của nhiều khách hàng .
                </p>
                <RouterLink to="/freeze" class="btn btn-outline-info btnBanner">DISCOVER MORE</RouterLink>
              </div>
            <div class="align-self-end ">
              <RouterLink to="/freeze"><img class="float-left" src="/img/productsInfor/milktea.png"
                  style="width: 40%; position: absolute; bottom: -20px; left: 0;" alt=""></RouterLink>
            </div>
          </div>
        </div>

        <div class="tea">
          <div class="tea-item d-flex bannerIF"
            style="min-height:340px; position: relative; background: url(https://www.highlandscoffee.com.vn/vnt_upload/product/11_2022/Banner/Product_Tra_BG_Web_Banner.jpg) no-repeat">
            <h1 class="text-center p-4 font-weight-bold text-banner"
              style="position: absolute; color: rgb(255, 239, 239); left: 0px;"> TEA</h1>
            <div class="align-self-center text-white p-5" style="font-size: 18px; ">
              <p class="float-left font-weight-bold pt-4" style="margin-right: 30%;">
                Dựa trên di sản trà phong phú của Việt Nam,
                chúng tôi chỉ chọn những loại trà ngon nhất được trồng ở vùng cao nguyên Việt Nam để tạo ra đồ uống trà
                thơm ngon,
                hiện đại bao gồm trái cây tự nhiên và lớp phủ bên trên. Ăn kèm hoặc không kèm sữa.
              </p>
              <RouterLink to="/tea" class=" btnBanner btn btn-outline-info">DISCOVER MORE</RouterLink>
            </div>
            <div class="align-self-end ">
              <RouterLink to="/tea"><img class="float-right" src="/img/productsInfor/tea.png"
                  style="width: 35%; position: absolute; bottom: 0px; right: 0;" alt=""></RouterLink>
            </div>
          </div>
        </div>
      </div>
      <h1 class="pt-5 text-center font-weight-bold">KHÔNG GIAN CỦA QUÁN</h1>
      <div class="d-flex flex-wrap justify-content-around">

        <img src="/img/shop_space/space3.jpg" class="shop_space" style="width: 45%;" alt="">


        <img src="/img/shop_space/space4.jpg" class="shop_space" style="width: 45%;" alt="">


        <img src="/img/shop_space/space2.jpg" class="shop_space" style="width: 45%;" alt="">


        <img src="/img/shop_space/space1.jpg" class="shop_space" style="width: 45%;" alt="">

      </div>
        <div class="row mt-5" style="background-color: rgba(255, 255, 255, 0.852); border-radius: 10px;">
          <div class="col-md-5 align-self-center text-center ">
            <h1 class="text-center pb-4 text-info">Giờ Mở Cửa</h1>
            <div class=" text-muted">
              <p class="font-weight-bold" style="font-size: 20px;">Thứ 2 - Thứ 6 hàng tuần</p>
              <p style="font-size: 20px;">7am - 11pm</p>
              <p class="font-weight-bold text-muted" style="font-size: 20px;">Thứ 7 - CN hàng tuần</p>
              <p style="font-size: 20px;">9am - 12pm</p>
              <div class="border-top border-light">
                <p class="pt-3 text-muted" style="font-size: 20px;">Liên hệ</p>
                <h2 class="text-danger">0795924466</h2>
              </div>
            </div>
          </div>
          <div class="col-md-7 order-table">
            <img style="width: 90%; padding: 40px ; border-radius: 50px;" src="/img/shop_space/space5.jpg" alt="">
            <a href="/order-table" class="btn btn-info py-2" style="position: absolute; bottom: 70px; left: 100px;">Đặt
              bàn ngay</a>
          </div>
        </div>
    </div>
  </main>
  <TheFooter />
</template>

<style>
.slider {
  height: 20%;
  width: 100%;
  max-height: 690px;
}

.bannerIF {
  border-radius: 10px;
  margin-top: 100px;
}

.text-banner {
  color: #e16314;
  font-size: 50px;
  text-shadow: 3px 1px #8b1c01;
}

.btnBanner:hover {
  background-color: rgb(25, 97, 97) !important;
  color: aliceblue !important;
}

.shop_space {
  border-radius: 20px;
  margin-top: 40px;
}

.shop_space:hover {
  transition: all 0.2s ease-in-out;
  border: 3px #fffffe solid;
}

.order-table {
  position: relative;
}
</style>