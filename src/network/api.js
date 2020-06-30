import {request} from "./request"
import qs from "qs"

var brandId=416;
var userToken="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaW5nQ2hlIiwiZXhwIjoxNTk0MDMyOTk0LCJ1c2VySWQiOjIwMTkwNDE5NzA4NDkyLCJicmFuZElkIjo0MTYsInBob25lIjoiMTgyMjAzOTIwNzYifQ.lvjFqu6E_zBTqrJBZTZtLFraCnaK2cCNhNevqqd0Qe2vl2m4LN9cUgQF4EgrKxLiWnkki8R-u8o0AAdP-wJztw";
//登录接口

 function getLogin(phone,password){
 
    return  request({
        headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}, 
        method:"post",
        url:"login/checkUser",
        data:
            qs.stringify(
                {
                    'param' : JSON.stringify({
                        "username":phone,
                        "password":password,
                    })
                }
                
            )
        
     
        
       
       
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