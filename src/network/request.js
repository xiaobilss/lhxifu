import axios from "axios"

//生产环境
const RUL="https://application.mingchetech.com/v1.0/";
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
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        // console.log("请求成功"+config);
        config.transformRequest = [function (data) {
            let src = ''
            for (let item in data) {
              src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
            }
            return src
          }]
        return config;
    },err=>{
        //请求失败
        console.log(err);
    })
    instance.interceptors.response.use(res=>{
        //响应成功
        console.log("响应成功"+res);
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
        //请求成功  
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        console.log("请求成功"+config);
        // config.transformRequest = [function (data) {
        //     let src = ''
        //     for (let item in data) {
        //       src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
        //     }
        //     return src
        //   }]
        return config;
    },err=>{
        //请求失败
        console.log(err);
    })
    instance.interceptors.response.use(res=>{
        //响应成功
        console.log("响应成功"+res);
        return res.data;
    },err=>{
        //响应失败
        console.log(err);   
    })
    //请求网咯
    return  instance(config)
};

