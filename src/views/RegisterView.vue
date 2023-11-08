<script>
import userAPI from "../services/userAPI"
export default {
    name: "RegisterView",
    data() {
        return {
            name: '',
            phone: '',
            password: '',
            message: '',
            messageSuccess: '',
            status: '',
        }
    },
    methods: {
        showPassword() {
            const password = document.getElementById("password");
            if (password.type == "password") {
                password.type = "text";
            }
            else {
                password.type = "password";
            }
        },
        checkPasscfm() {
            let password = document.getElementById("password").value;
            let passwordcfm = document.getElementById("repassword").value;
            if (password != passwordcfm) {
                this.status = 400
                this.message= "Nhập lại mật khẩu không khớp";
                event.preventDefault();
            }
        },
        async register(){
          await userAPI.register(this.name,this.phone, this.password).then( res =>{
                this.status = 200
                this.messageSuccess = res.data
                alert(this.messageSuccess);
                this.$router.push('/login')
                
            }).catch(err=>{
                this.status = 400
                this.message= err.response.data;    
            })
        },
        reseterror(){
            this.messageSuccess = ""
            this.message = ""
        }

    }
}

</script>

<template>
    <div class="container-fluid"
        style="min-height: 20vh;  background-size: cover; background-image: url(https://www.freecodecamp.org/news/content/images/2022/08/tyler-nix-7ukf-r-Oh-k-unsplash.jpg) ; background-repeat: no-repeat; ">
        <div class="row justify-content-center">
            <div class="col-md-5 p-5 my-4" style="background-color: rgba(212, 212, 212, 0.821); border-radius: 10px;">
                <h3 class=" text-center text-uppercase" style="color: rgb(35, 98, 104);">Đăng kí tài khoản</h3>
                <form class=" mt-2 px-3 " method="post" @submit.prevent="register()" @change="reseterror">
                    <div class="form-group">
                        <label for="name">Tên của bạn:</label>
                        <input type="text" class="form-control form-input " name="name" id="name" aria-describedby="name"
                            placeholder="Nhập tên của bạn" required v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="phone"> Số điện thoại:</label>
                        <input type="text" class="form-control form-input" name="phone" id="phone" aria-describedby="phone"
                            placeholder="Nhập số điện thoại" required v-model="phone">

                    </div>
                    <div class="form-group mb-1">
                        <label for="password"> Mật khẩu:</label>
                        <input type="password" class="form-control form-input" name="password" id="password"
                            placeholder="Nhập mật khẩu" required v-model="password">
                    </div>

                    <div class="form-group mb-1">
                        <label for="password">Nhập lại Password:</label>
                        <input type="password" class="form-control form-input mb-2" name="repassword" id="repassword"
                            placeholder="Nhập lại Password" required>
                        <input class="" type="checkbox" @click="showPassword"><span> Show Password</span>
                      
                    </div>
                    <div class="pl-3 mb-3 text-center font-weight-bold">
                       
                        <span v-if= "status == 200" class="text-success">
                            {{ messageSuccess }}
                        </span>
                        <span v-else-if="status == 400" class="text-danger">
                            {{ message }}
                        </span>
                    </div>
                    <div class="form-check pl-0">
                        <button type="submit" class="btn w-100 form-input font-weight-bold text-white"
                            style="background-color: #009b98;" @click="checkPasscfm">ĐĂNG KÍ</button>
                    </div>
                    <div class="pl-0 mt-4 text-center">
                        <p class="d-inline">Bạn đã có tài khoản ?</p>
                        <RouterLink to="/login" class="d-inline text-danger font-weight-bold"> Đăng nhập </RouterLink>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>