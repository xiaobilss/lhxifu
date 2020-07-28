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
// 新增品牌分类信息
function queryaddMenu(){
  return request({
    method:"post",
    url:"/menu/insertMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResult)
    })
  })
}
//  新增品牌
function queryaddBrand(brand){
  let paramResults ={
    menuName: brand,
    menuType: 0,
    state:0
  }
  return request({
    method:"post",
    url: "/menu/insertMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResults)
    })
  })
}
//  删除品牌
function querydelBrand(id){
  let paramResults ={
    codeId: id
    // menuType: 0,
    // state:0
  }
  return request({
    method:"post",
    url: "menu/deleteMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResults)
    })
  })
}

//  修改品牌
function queryupdateBrand(id,name){
  let paramResults ={
    codeId: id,
    state:0,
    menuName:name,
    menuType:0  //0 是品牌 1: 是二级

  }
  return request({
    method:"post",
    url: "menu/updateMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResults)
    })
  })
}




//  新增品牌,二级产品 
function queryaddBrandSuper(brand,superId){
  let paramResultss ={
    menuName: brand,
    menuType: 1,
    state:0,
    superId:superId
  }
  return request({
    method:"post",
    url: "menu/insertMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResultss)
    })
  })
}
//  删除品牌,二级产品 
function querydelBrandSuper(id){
  let paramResults ={
    codeId: id,
    menuType: 1,
    state:0
  }
  return request({
    method:"post",
    url: "menu/deleteMenu",
    data:qs.stringify({
      'param' : JSON.stringify(paramResults)
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
    queryaddMenu,
    queryaddBrand,
    querydelBrand,
    queryupdateBrand,
    queryaddBrandSuper,
    querydelBrandSuper
}