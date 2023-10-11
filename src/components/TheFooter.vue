<template>
    <footer class="footer">

        <div class="container ">
            <div class="row pt-3">
                <div class="col-md-3">
                    <h4 class="footer-item">Thông tin cửa hàng</h4>
                    <ul class="text-white" style="font-size: 14px;">
                        <li class="py-2">
                            <i class="fa-solid fa-location-dot pr-1"></i>
                            60 Hưng Lợi, Ninh Kiều, TP.Cần Thơ
                        </li>
                        <li class="py-2">
                            <i class="fa-solid fa-phone pr-1"></i>
                            0795924466
                        </li>
                        <li class="py-2">
                            <i class="fa-solid fa-envelope pr-1"></i>
                            tramcoffee@gmail.com
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 " style=" padding-inline-start: 60px;">
                    <h4 class="footer-item ">Chính sách</h4>
                    <ul class="text-white" style="font-size: 14px;">
                        <li class="py-2">Chính sách bảo mật</li>
                        <li class="py-2">Chính sách vận chuyển </li>
                        <li class="py-2">Chính sách đổi trả </li>
                        <li class="py-2">Chính sách sử dụng</li>
                    </ul>
                </div>
                <div class="col-md-3 " style=" padding-inline-start: 60px;">
                    <h4 class="footer-item ">Hướng dẫn</h4>
                    <ul class="text-white" style="font-size: 14px;">
                        <li class="py-2"> Hướng dẫn mua hàng</li>
                        <li class="py-2"> Hướng dẫn thanh toán</li>
                        <li class="py-2"> Hướng dẫn giao nhận</li>
                        <li class="py-2"> Hướng dẫn dịch vụ</li>
                    </ul>
                </div>
                <div class="col-md-3 text-center">
                    <h4 class="footer-item ">Mạng xã hội</h4>
                    <div class="text-white" style="font-size: 24px;">
                        <a class="mr-3 pl-3" href="https://www.facebook.com/profile.php?id=100095241941355">
                            <img style="width: 32px; height: 32px;" src="/img/logo/facebook.png" alt="">
                        </a>
                        <a class="mr-3" href="https://www.facebook.com/profile.php?id=100095241941355">
                            <img style="width: 32px; height: 32px;" src="/img/logo/instagram.png" alt="">
                        </a>
                        <a class="mr-3" href="https://www.facebook.com/profile.php?id=100095241941355">
                            <img style="width: 32px; height: 32px;" src="/img/logo/youtube.png" alt="">
                        </a>
                        <a class="mr-3" href="#">
                            <img style="width: 32px; height: 32px;" src="/img/logo/tik-tok.png" alt="">
                        </a>
                        <img src="/img/logo/logowhite.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
  background-color: #1a4956;
  position: relative;
  overflow: hidden; }

.footer::before {   
  position: absolute;
  width: 1200px;
  height: 1200px;
  top: -280px;
  left: 50%;
  margin-left: -600px;
  content: '';
  background: transparent url("https://bizweb.dktcdn.net/100/485/241/themes/911577/assets/trongdong.png?1688627722165") no-repeat center center;
  background-size: 100% auto;
  opacity: .2; 
}
.footer-item{
  color: white;
}
</style>
<script>
export default {
    name: "The Footer",
}
</script>