import API from "./API";

export default{
    getUser(){
        return API().get("/API/listusers");
    },
   
}