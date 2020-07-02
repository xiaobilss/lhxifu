import Router from 'vue-router'
import Vue from 'vue'
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Mine from "../views/Mine.vue"
import Website from "../views/website.vue"
Vue.use(Router)



const router= new Router({
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
            component:Home,
            redirect:"/website",
            children:[
                {
                    path:"/website",
                    component:Website
                }
            ]
            
        },
        {
            path:"/mine",
            name:"mine",
            component:Mine
        },
    ]    
    
})

router.beforeEach((to,from,next)=>{
    // to 将要访问那个位置
    // from  从哪个路径过来
    // next  放行
    if(to.path == "/login" ) return next();
    const toke = window.sessionStorage.getItem("toke");
    if(!toke) return next("/login");
    next();



})


export default router

