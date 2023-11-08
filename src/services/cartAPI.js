import API from "./API";
export default{
    getCart(phone){
        return API().get("/cart/getCart/"+phone);
    },
    addProductsToCart(idcart,idproduct,size,number,note,totalprice){
        return API().post("/cart/addcartDetails",{idcart:idcart,idproduct:idproduct,size:size,number:number,note:note,totalprice:totalprice});
    },
    getAllCartDetails(idcart){
        return API().get("/cart/getAllCartDetails/" +idcart)
    },
    deleteCartDetail(idcart,idproduct,size){
        return API().delete("/cart/deleteCartDetail",{params:{idcart:idcart,idproduct:idproduct,size:size}} )
    },
    updateCartDetails(cartdetails){
        return API().put("/cart/updateCartDetails",cartdetails);
    }
}