import Router from 'vue-router'
import Vue from  'vue'
// import Login  from "../views/Login.vue"
const Login = ()=> import("../views/Login.vue")
const Home = ()=> import("../views/Home.vue")

const Mine = ()=> import("../views/Mine.vue")
const Website = ()=> import("../views/website.vue")
const Customer = ()=> import("../views/Customer.vue")
const ProductType = ()=> import("../views/ProductType.vue")
const CustomerBrand = ()=> import("../views/CustomerBrand.vue")
const AllCategories = ()=> import("../views/AllCategories.vue")
const AddProduct = ()=> import("../views/AddProduct.vue")


// import Mine from  "../views/Mine.vue"
// import Website from  "../views/website.vue"
// import Customer from  "../views/Customer.vue"
// import ProductType from  "../views/ProductType.vue"
// import CustomerBrand from  "../views/CustomerBrand.vue"
// import AllCategories from  "../views/AllCategories.vue"
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
            name:"login",
            component:Login
        },
        {
            path:"/home",
            name:"home",
            component:Home,
            redirect:"/website",
            children:[
                {
                    path:"/website",
                    name:"website",
                    component:Website
                },
                {
                    path:"/customer",
                    name:"customer",
                    component:Customer
                },
                {
                    path:"/productType",
                    name:"productType",
                    component:ProductType
                },
                {
                    path:"/customerBrand",
                    name:"customerBrand",
                    component:CustomerBrand
                },
                {
                    path:"/allCategories",
                    name:"allCategories",
                    component:AllCategories
                },
                {
                    path:"/mine",
                    name:"mine",
                    component:Mine
                },
                {
                  path:"/addproduct",
                  name:"addproduct",
                  component:AddProduct
                },


            ]

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

