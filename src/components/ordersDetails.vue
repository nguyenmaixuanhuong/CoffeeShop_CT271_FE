<script>
import ordersAPI from '../services/orderAPI';
export default {
    data() {
        return {
            ordersDetails: [],
        }
    },
    props: ["orderId"],
    methods: {
        async OrdersDetails(id) {
            await ordersAPI.getOrderDetails(id).then((res) => {
                this.ordersDetails = res.data;
                console.log(res.data);
            })
        }
    },
    created() {
        this.OrdersDetails(this.orderId)
    }
}
</script>
<template>
    <table class="table">
        <thead>
            <tr>
                <th class="pl-5">Sản phẩm</th>
                <th class="text-center">Size</th>
                <th class="text-center">Số lượng</th>
                <th class="text-center">Thành tiền</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="orderItem in ordersDetails" :key="orderItem._id" style="line-height: 50px;">
                <td class="pl-5 d-flex">
                    <img :src="'/img/products/' + orderItem.productImage" style="width: 50px;" alt="">
                    <p class="ml-4"> {{ orderItem.productName }}</p>
                </td>
                <td class="text-center">{{ orderItem.size }}</td>
                <td class="text-center">{{ orderItem.number }}</td>
                <td class="text-center"> {{ new Intl.NumberFormat()
                    .format(orderItem.price)
                    .replaceAll(",", ".") }}đ</td>
            </tr>
        </tbody>
    </table>
</template>