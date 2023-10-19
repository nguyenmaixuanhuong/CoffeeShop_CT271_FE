import API from "./API";
export default{
    getlistProducts(){
        return API().get("/api/listproductsAPI");
    },
    getProduct(id){
        return API().get("/api/getproductAPI/"+id);
    },
    getCart(phone){
        return API().get("/cart/getCart/"+phone);
    }
}