<template>
  <div class="container">
    <div class="row">
      <h1 class="pt-4 font-weight-bold mb-4" style="color: rgb(22, 103, 113); border-bottom: 2px solid;">Về Chúng Tôi</h1>
      <div class="d-flex">
        <div class="mr-4">
          <p style="line-height: 1.8; text-align: justify; ">Chào mừng bạn đến với Cà Hê Trạm, nơi cà phê là niềm đam mê
            của chúng tôi. Được thành lập với tầm nhìn tạo ra
            một không gian ấm áp và hấp dẫn cho những người đam mê cà phê, chúng tôi tự hào phục vụ loại cà phê đặc biệt
            được làm từ những hạt cà phê cao cấp được lựa chọn cẩn thận. Đội ngũ nhân viên pha chế lành nghề của chúng tôi
            tận tâm hoàn thiện từng tách cà phê, đảm bảo rằng mỗi ngụm là một trải nghiệm thú vị.Chúng
            tôi tin rằng cà phê ngon luôn đi đôi với bầu không khí thoải mái. Môi trường ấm cúng và thân thiện của chúng
            tôi được thiết kế để giúp bạn cảm thấy như đang ở nhà, cho dù bạn ghé qua để đón nhanh hay muốn thư giãn và
            nghỉ ngơi cùng bạn bè.</p>
        </div>
        <RouterLink to = "/" style="position: relative;">
          <img src="/img/shop_space/space1.jpg" alt="Tramcoffee" style="width: 39rem; border-radius: 150px;">
          <h2 class="text-about" style="" href="/">Trạm Coffee</h2>
        </RouterLink>
      </div>
      <div>
        <p style="text-align: justify;line-height: 1.8"> Tại Cà Hê Trạm, Chúng tôi lấy nguồn đậu từ các nhà cung cấp đáng
          tin cậy, những người có cùng cam kết
          với chúng tôi về chất lượng và tính bền vững. Mỗi mẻ cà phê đều được rang một cách chuyên nghiệp để mang lại
          hương vị và hương thơm độc đáo khiến cà phê của chúng tôi thực sự đặc biệt. Nhưng niềm đam mê của chúng tôi
          còn vượt xa cả cà phê. Chúng tôi tin vào việc nuôi dưỡng một cộng đồng hỗ trợ, đó là lý do tại sao chúng tôi
          cung cấp cho các nhân viên pha chế tài năng của mình thời gian làm việc linh hoạt, cho phép họ theo đuổi niềm
          đam mê cà phê trong khi vẫn duy trì sự cân bằng lành mạnh giữa công việc và cuộc sống. Hãy tham gia cùng chúng
          tôi tại Cà Hê Trạm và thưởng thức nghệ thuật cà phê. Khám phá những hương vị mới, kết nối với những người yêu
          thích cà phê và trải nghiệm sự kết hợp hoàn hảo giữa chất lượng, dịch vụ và sự thoải mái."</p>
      </div>
    </div>
    <div id="accordion" class=" mb-5">
      <h1 class="text-center" style="font-weight: 700; ">FAQ</h1>
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
             Các loại Cà Phê được pha chế ở Trạm được lấy từ đâu?
            </button>
          </h5>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            TRẠM Coffee tự tay chọn lọc và rang chỉ những hạt cà phê Arabica thơm ngon nhất
                và những hạt cà phê Robusta đậm đà cho cách pha trộn đặc trưng của chúng tôi.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              Trạm Coffee có bao nhiêu chi nhánh?
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
           Trạm Coffee hiện tại có 2 chi nhánh chính: 
           <li>Chi nhánh 1: Hẻm 553, Hưng Lợi, Ninh Kiều, Cần Thơ</li>
           <li>Chi Nhánh 2: KDC Hồng Phát, Trần Hoàng Na, Cần Thơ</li>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
                Trạm có hoạt động vào những ngày lễ, Tết không?
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
           Tất cả các ngày lễ, Tết Trạm luôn mở cửa sẵn sàng đón tiếp tất cả khách hàng vào các khung giờ mở cửa của Trạm.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .text-about {
    position: absolute;
    bottom: 40%;
    left: 15%;
    font-size: 70px;
    font-weight: 700;
    color: rgb(0, 96, 88);
    text-decoration: none !important;
    ;
    box-shadow: 10px 10px 10px rgb(39, 39, 39);
    text-shadow: 2px 2px rgb(241, 239, 238);
    padding: 10px;
  }
  .btn-link{
    text-decoration: none !important;
    color: black;
    font-weight: bolder;
  }
}</style>
