import {request} from "./request";
import qs from "qs";
const paramResult = {
    pageNum: 1,
    pageSize: 20
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
//查询客户信息管理
function queryCustomerApi(){
    return request({
        method:"post",
        url:"contect/queryContect",
        data:qs.stringify({
            'param' : JSON.stringify(paramResult)
        })
    })
}
//查询品牌信息
function queryCustomerBrandApi(){
    return request({
        method:"post",
        url:"menu/queryAllOneLevelMenu",
        data:qs.stringify({
            'param' : JSON.stringify(paramResult)
        })
    })
}
//查询品牌分类信息
function queryErpTwoLevelMenu(){
    return request({
        method:"post",
        url:"menu/queryErpAllTwoLevelMenu",
        data:qs.stringify({
            'param' : JSON.stringify(paramResult)
        })
    })
}



export default {
    queryLoginApi,
    queryWebsiteApi,
    queryUpdateWebsiteApi,
    queryCustomerApi,
    queryCustomerBrandApi,
    queryErpTwoLevelMenu,
}