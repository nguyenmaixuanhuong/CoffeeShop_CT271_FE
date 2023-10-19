import API from "./API";

export default{
    login(phone, password){
        return API().post("/login/checkAPI",{phone:phone, password:password});
    },
    register(name,phone,password){
        return API().post("/register/addUser",{name:name, phone:phone, password:password});
    },
}