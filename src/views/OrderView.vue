<script>
import ordersAPI from '../services/orderAPI';
import userAPI from '../services/userAPI';
import ordersDetails from '../components/ordersDetails.vue';
export default {
    components: {
        ordersDetails
    },
    data() {
        return {
            orders: [],
            length: 0,
            phone: sessionStorage.getItem('phone'),
        }
    },
    methods: {
        async getorders() {

            await ordersAPI.getOrders(this.phone).then((res) => {
                this.orders = res.data;
                this.length = res.data.length
                console.log(res.data);
                this.orders.sort((a, b) => new Date(b.date) - new Date(a.date));
            })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    created() {
        this.getorders();
    }
}
</script>
<template>
    <div class="bg-light">
        <div class="container pb-4">
            <h2 class="text-center mb-4 pt-4 text-uppercase" style="color: rgb(0, 39, 132);">Danh Sách Đơn Hàng</h2>
            <div v-if="length > 0" class="card mb-4 " v-for="order in orders" :key="order._id">
                <div class="card-header font-weight-bold ">
                    {{ order.date }}
                    <span class="float-right font-weight-bold"> {{ order.address }}</span>
                </div>
                <div class="card-body p-0">
                    <ordersDetails :orderId="order.idorder"></ordersDetails>
                </div>
                <div class="card-footer d-flex justify-content-between font-weight-bold">
                    <div>
                        <span>Trạng Thái: </span>
                        <span v-if="order.statusorder == 0">Chờ Xác Nhận</span>
                        <span v-else class="text-success">Đã xác nhận</span>
                    </div>
                    <p class="text-danger mb-0"> Tổng Hóa Đơn: {{ new Intl.NumberFormat()
                        .format(order.totalorder)
                        .replaceAll(",", ".") }}đ</p>
                </div>
            </div>
            <div v-else class="text-center pb-4">
                <img style="width: 50%; opacity: 0.6; position: relative;"
                    src="https://i.pinimg.com/originals/ae/bc/8c/aebc8c60e30c83f3ab34c978733dab26.png" alt="">
                <p class="mt-4 h5">Bạn chưa có đơn hàng nào</p>
            </div>
        </div>
    </div>
</template>
<style></style>
