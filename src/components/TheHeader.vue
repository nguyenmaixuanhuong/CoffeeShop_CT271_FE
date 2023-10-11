<template>
  <div class="container-fluid header ">
    <div class="text-center d-flex flex-column ">
      <img class="text-center logo" src="/img/logo/logo.png" alt="" style="height: 20%; width: 19em;">
      <p class=" font-italic " style="margin-top: auto;">Chào mừng bạn đến với Cà Hê Trạm. </p>
    </div>
    <div class="row navbars border-top">
      <p class="pt-4 pl-5">Hotline: 0795924466</p>
      <nav class="navbar navbar-expand-lg navHomepage col-md-8 m-auto">
        <div class=" ml-2">
          <button id="menu" class="navbar-toggler py-1 px-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars "></i>
          </button>
        </div>
        <div class="collapse navbar-collapse mt-2" id="navbarTogglerDemo02">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item ">
              <RouterLink to = "/" class="nav-link px-4 ml-5">TRANG CHỦ </RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/about" class="nav-link px-4 ml-5 " href="#">GIỚI THIỆU </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link px-4 ml-5 " >SẢN PHẨM</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/service" class="nav-link px-4 ml-5  " href="#">DỊCH VỤ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link px-4 ml-5 " href="#">LIÊN HỆ</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <div class="col-md-2 d-flex pt-3 ">
        <i class="fa-solid fa-bag-shopping  cart " style="font-size: 20px;"></i>
        <span class=" px-2 mt-2 ">|</span>
        <div style=" float: right; " class="align-middle d-flex mr-3 mt-1">
          <a class=" btn-account p-1" href="http://localhost:3000/register"> Đăng kí /</a>
          <a class=" btn-account p-1" href="http://localhost:3000/login"> Đăng nhập</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .navHomepage {
  padding: 5px;
}

.cart {
  padding-top: 10px;
  color: #3d6874;
}

.cart:hover {
  color:  #bd5800 !important;
  transition: all 0.4s ease;
}

a {
  color: black;
}

.register {
  text-decoration: none;
}

.header {
  background: url(/img/logo/bg.png) no-repeat;
  background-size: cover;
  padding-bottom: 3px;

}

 .nav-link {
  color: #3d6874;
  font-weight: 700;
  padding: 0px 0px 5px 0px;
  font-family: "Oswald", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-link:hover {
  transition: all 0.4s ease;
  font-size: 18px;
  color: #bd5800 !important;
}
.btn-account{
  color: #3d6874;
  text-decoration: none !important; 
  font-size: 14px;
  font-weight: 700;
  padding-top: 7px !important;
}
.btn-account:hover{
  transition: all 0.4s ease;
  font-size: 15px !important;
  color: #bd5800 !important;
}
.logo {
  margin: auto;
}

.active {
  color:  #bd5800 !important;
}

.search {
  border-radius: 20px;
  width: 10em;
}

</style>
<script>
export default {
  name: "TheHeader"
}
</script>