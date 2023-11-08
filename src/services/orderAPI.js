import API from "./API";
export default{
   createOrder(phone,username,address,date,totalorder,status,products){
        return API().get('/admin/order/create',{params :{phone:phone, username:username,address:address,date:date,totalorder: totalorder,status:status,products:products}})
   },
   getOrders(phone){
      return API().get('/admin/order/getordersuser',{params :{phone:phone}})
   },
   getOrderDetails(id){
      return API().get('/admin/order/orderdetailsapi',{params :{id:id}})
   }
}