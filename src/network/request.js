import axios from "axios"
//生产环境
// const RUL="https://application.mingchetech.com/v1.0/";
const RUL="http://47.100.49.243:8080/";
// 测试环境
const TestRUL="https://test.mingchetech.com/v1.0/";
const isfalg =true

export function login(config){
    //配置通用的
    const instance =  axios.create({
        baseURL:  isfalg ? RUL : TestRUL,
        timeout: 5000
    })
    //拦截器 Interceptor
    instance.interceptors.request.use(config=>{
        //请求成功  
        config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  

        // return
        // config.transformRequest = [function (data) {
        //     let src = ''
        //     for (let item in data) {
        //       src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
        //     }
        //     return src;
        //     // return qs.stringify(date);
        //   }]

        console.log("请求成功",config);
        return config;
    },err=>{
        //请求失败
        console.log(err);
    })
    instance.interceptors.response.use(res=>{
        //响应成功
        console.log("响应成功",res);
        return res.data;
    },err=>{
        //响应失败
        console.log(err);   
    })
    //请求网咯
    return  instance(config)
};



export function request(config){
    //配置通用的
    const instance =  axios.create({
        baseURL:  isfalg ? RUL : TestRUL,
        timeout: 5000
    })
    //拦截器 Interceptor
    instance.interceptors.request.use(config=>{
        console.log("请求成功",config);
        config.headers.Authorization = window.sessionStorage.getItem("autoken")
     
        return config;
    },err=>{
        console.log("请求失败",err);
    })
    instance.interceptors.response.use(res=>{
        console.log("响应成功",res);
        return res.data;
    },err=>{
        console.log("响应失败",err);   
    })
    //请求网咯
    return  instance(config)
};

