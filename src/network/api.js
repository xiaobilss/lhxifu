import {request} from "./request";
import qs from "qs";
const paramResult = {
    pageNum: 0,
    pageSize: 0
};


//登录接口
 function queryLoginApi(phone,password){
    return  request({
        headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}, 
        method:"post",
        url:"login/checkUser",
        data:
            qs.stringify({
                'param' : JSON.stringify({
                    "username":phone,
                    "password":password,
                })
            })  
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

//查询 网站信息管理
function queryWebsiteApi(){
    return request({
        method:"post",
        url:"shopinfo/queryAllInfoByWeb",
        data:qs.stringify({
            'param' : JSON.stringify(paramResult)
        })
    })
}
//添加或者修改 网站信息管理
function queryUpdateWebsiteApi(website){
    return request({
        method:"post",
        url:"shopinfo/addInfoByWeb",
        data:qs.stringify({
            'param' : JSON.stringify(website)
        })
    })
}



export default {
    queryLoginApi,
    queryWebsiteApi,
    queryUpdateWebsiteApi,
}