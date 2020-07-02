import {request} from "./request"
import qs from "qs"


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