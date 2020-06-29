import {request,login} from "./request"

var brandId=416;
var userToken="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaW5nQ2hlIiwiZXhwIjoxNTk0MDMyOTk0LCJ1c2VySWQiOjIwMTkwNDE5NzA4NDkyLCJicmFuZElkIjo0MTYsInBob25lIjoiMTgyMjAzOTIwNzYifQ.lvjFqu6E_zBTqrJBZTZtLFraCnaK2cCNhNevqqd0Qe2vl2m4LN9cUgQF4EgrKxLiWnkki8R-u8o0AAdP-wJztw";
//登录接口
 function getLogin(phone,password){
    return  login({
        method:"post",
        url:"user/app/login",
        data:{
            brand_id:brandId,
            phone:phone,
            password:password
        }
    })
}

function querySubordinateSumApi(){
    return request({
        method:"post",
        url:"user/app/auto/upgrade/Config/brand/query",
        headers:{'authToken': userToken},
        data:{
            brand_id:brandId,
        },
      
        
        
    })
}

export default {
    getLogin,
    querySubordinateSumApi,
}