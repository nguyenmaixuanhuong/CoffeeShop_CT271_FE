import axios from "axios"

export default(url = "http://localhost:3000")=>{
    return axios.create({
        baseURL: url,
    })
}