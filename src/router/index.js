import Router from 'vue-router'
import Vue from 'vue'
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Mine from "../views/Mine.vue"
Vue.use(Router)



export default new Router({
    //配置路径
    mode:"history",
    routes:[
        {
            path:"",
            redirect:"/login"
        },
        {
            path:"/login",
            name:"Login",
            component:Login
        },
        {
            path:"/home",
            name:"Home",
            component:Home
        },
        {
            path:"/mine",
            name:"mine",
            component:Mine
        },
    ]    
    
})

