import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

// 更新组件引入
import classify_header from '../components/classify/classify_header'
import weeks from '../components/classify/weeks'
import collect from '../components/classify/collect'
import Monday from '../components/classify/Monday'
import Tuesday from '../components/classify/Tuesday'
import Wednesday from '../components/classify/Wednesday'
import Thursday from '../components/classify/Thursday'
import Friday from '../components/classify/Friday'
import Saturday from '../components/classify/Saturday'
import Sunday from '../components/classify/Sunday'
import finish from '../components/classify/finish'
import register from '../components/my/register'
import login from '../components/my/login'
import CTcontent from '../components/classify/CTcontent'
import list from '../components/classify/list'
import Introduction from '../components/classify/Introduction'
// 漫画组件
import comic from '../components/classify/comic'





// 我的  组件引入
import myself from '../views/myself'
import  account from '../components/myselfson/account'
import  advice from '../components/myselfson/advice'
import  agreeRun from '../components/myselfson/agreeRun'
import  appContent from '../components/myselfson/appContent'
import  autoPay from '../components/myselfson/autoPay'
import  cartonSents from '../components/myselfson/cartonSents'
import  commonProblem from '../components/myselfson/commonProblem'
import  expenseRecord from '../components/myselfson/expenseRecord'
import  helpImages from '../components/myselfson/helpImages'
import  Immediately from '../components/myselfson/Immediately'
import  inputEmail from '../components/myselfson/inputEmail'
import  payrecord from '../components/myselfson/payrecord'
import  person from '../components/myselfson/person'
import  pwdReset from '../components/myselfson/pwdReset'
import  Sent from '../components/myselfson/Sent'
import  userAgrement from '../components/myselfson/userAgrement'
import  wallert from '../components/myselfson/wallert'
import  webtoon from '../components/myselfson/webtoon'

// 我的漫画组件
import myCorton from '../views/myCorton'
import fetch from '../components/myCortonson/fetch'
import lookCarton from '../components/myCortonson/lookCarton'
import myarguments from '../components/myCortonson/myarguments'
import myAttention from '../components/myCortonson/myAttention'
import previouLook from '../components/myCortonson/previouLook'
import twoPart from '../components/myCortonson/twoPart.vue'
import threeBook from '../components/myCortonson/threeBook.vue'
import fourBook from '../components/myCortonson/fourBook.vue'
import limit from '../components/myCortonson/limit'



// 发现组件引入
import find from '../views/find'

import recommend from '../components/vue/recommend'
import allList from '../components/vue/allList'
import newList from '../components/vue/newList'
import risingList from '../components/vue/risingList'
import dongtui from '../components/vue/dongtui'
import love from '../components/vue/love'
import young from '../components/vue/young'
import campus from '../components/vue/campus'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/buttom/classify_header/weeks/Tuesday'
  },
  {
    path:'/register',
    name:'register',
    component:register,
  },
 
  // 底部组件
  {
    path:'/buttom',
    name:'buttom',
       // 路由懒加载
    // component:Register,
       component: () => import(/* webpackChunkName: "about" */ '../views/buttom.vue'),
       children:[
         {
           path: 'classify_header',
          //  name: 'Register',
           component: classify_header,
           children:[
             {
               path:'weeks',
               component: weeks,
               meta:1,
               children:[
                {path:'Monday',component:Monday},
                {path:'Tuesday',component:Tuesday},
                {path:'Wednesday',component:Wednesday},
                {path:'Thursday',component:Thursday},
                {path:'Friday',component:Friday},
                {path:'Saturday',component:Saturday},
                {path:'Sunday',component:Sunday},
                {path:'finish',component:finish},
               ],               
             },
             {
               path:'collect',
               component:collect
             }
           ],
          },
          {
            path:'register',
            // name:'register',
            component:register,
          },
          //  my 组件引入
          {
            path:'myself',
            component:myself,   
        },
        
        {path:"/account",component:account},
        {
            path:'/wallert',
            component:wallert,
            children:[
              {path:'/wallert',redirect:'expenseRecord'},
                {path:'payrecord',component:payrecord},
                {path:'expenseRecord',component:expenseRecord},
            ]
        },
        {
          path: '/login',
          // name: 'login',
          component:login
          
      
        },
        {path:'/autoPay',component:autoPay},
        {path:'/cartonSents',component:cartonSents},
        {path:'/Sent',component:Sent},
        {path:'/advice',component:advice},
        {path:'/appContent',component:appContent},
        {path:'/pwdReset',component:pwdReset},
        {path:'/inputEmail',component:inputEmail},
        {path:'/commonProblem',component:commonProblem},
        {path:'/Immediately',component:Immediately},
        {path:'/helpImages',component:helpImages},
        {path:'/webtoon',component:webtoon},
        {path:'/userAgrement',component:userAgrement},
        {path:'/agreeRun',component:agreeRun},
        {path:'/person',component:person} ,
        // 我的漫画
        {
          path:'myCorton',
          component:myCorton,
          children:[
              {path:'previouLook',component:previouLook},
              {path:'myAttention',component:myAttention,meta: { navShow: false}},
              {path:'fetch',component:fetch,meta: { navShow: false}},
              {path:'myarguments',component:myarguments,meta: { navShow: false}}
          ]
      },
      {path:'/lookCarton',component:lookCarton,meta: { navShow: false}},
      {path:'/twoPart',component:twoPart,meta: { navShow: false}},
      { path:'/threeBook',component:threeBook,meta: { navShow: false}},
      {path:'/fourBook',component:fourBook,meta: { navShow: false}},

        {path:'limit',component:limit},
        // 发现内容模板
        {
          path:'find',
          component:find,
          children:[
            { 
                path:'/find/recommend',
                component:recommend,
                // redirect:'/find/recommend/risingList',
                children:[
                    { path:'risingList',component:risingList },
                    { path:'newList',component:newList },
                    { path:'allList',component:allList },
                ]
            },
            {path:'/find/dongtui',component:dongtui},
            { path:'/find/love',component:love},
            { path:'/find/young',component: young},
            { path:'/find/campus',component: campus},
        ]
        }
       ],


    
  },
  // 漫画详细(集数)
  {
    path:'/CTcontent',
    component:CTcontent,
    children:[
      {path:'list',component:list},
      {path:'Introduction',component:Introduction},
    ],
  },
// 漫画内容
  {
    path:'/comic',
    component:comic,

  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
