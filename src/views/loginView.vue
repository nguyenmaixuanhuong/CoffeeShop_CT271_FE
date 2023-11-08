<script>
import { RouterLink } from "vue-router";
import userAPI from "../services/userAPI"
import cartAPI from "../services/cartAPI"
export default {
    name: "LoginView",
    data() {
        return {
            phone: '',
            password: '',
            error: '',
        };
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
        async login() {
            await userAPI.login(this.phone, this.password).then( async (res) => {
                await cartAPI.getCart(this.phone).then((cart) => {
                        sessionStorage.setItem("cart",cart.data.id);
                });
                sessionStorage.setItem("username", res.data.username);
                sessionStorage.setItem("phone", res.data.phone);
                window.location.replace('/');
            })
                .catch((err) => {
                this.error = err.response.data;
            });
        },
        reseterror(){
            this.error = ""
            this.message = ""
        }
    },
}

</script>
<template>
    <div class="container-fluid"
        style=" background-size: cover; background-image: url(https://www.freecodecamp.org/news/content/images/2022/08/tyler-nix-7ukf-r-Oh-k-unsplash.jpg) ; background-repeat: no-repeat; ">
        <div class="row justify-content-center ">
            <div class="col-md-5 p-5 my-5"
                style="background-color: rgba(212, 212, 212, 0.875); border-radius: 10px; min-height: 400px;">
                <h3 class="mt-1 text-center text-uppercase " style="color: rgb(35, 98, 104);">Đăng nhập tài khoản</h3>
                <form class="mt-5" method="post" @submit.prevent="login()" @change="reseterror">
                    <div class="form-group mb-4">
                        <input type="text" class="form-control form-input " name="phone" id="phone" aria-describedby="phone"
                            placeholder="Nhập số điện thoại" v-model="phone" required>
                    </div>
                    <div class="form-group mt-4">
                        <input type="password" class="form-control form-input mb-3" name="password" id="password"
                            placeholder="Nhập mật khẩu" v-model="password" required>
                        <div>
                            <input class="" type="checkbox" @click="showPassword"><span> Show Password</span>
                        </div>
                        <div class="text-center">
                            <span class=" text-danger">
                                {{ error }}
                            </span>

                        </div>
                    </div>
                    <div class="form-check pl-0">
                        <button type="submit" class="btn w-100 form-input font-weight-bold text-white"
                            style="background-color: #009b98;">ĐĂNG NHẬP</button>
                    </div>
                    <div class="pl-0 mt-4 text-center mb-3">
                        <p class="d-inline">Bạn chưa có tài khoản ?</p>
                        <RouterLink to="register" class="d-inline text-danger font-weight-bold"> Đăng kí </RouterLink>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>


<style >
.form-input {
    border-radius: 20px;
    padding: 12px 25px;
    box-shadow: 0px 0px 7px 0px rgba(37, 37, 37, 0.1);
    border: none;
}
</style>