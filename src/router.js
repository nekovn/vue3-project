import {createRouter, createWebHistory} from 'vue-router'
import Calendar from "@/pages/Calendar";
import DcHeros from "@/pages/DcHeros";
import Home from "@/pages/Home";
import Markdown from "@/pages/Markdown";
import Slider from "@/pages/Slider"
import SearchGoogle from "@/pages/SearchGoogle";
import Calculator from "@/pages/Calculator";
import ReuseableModal from "@/pages/ReuseableModal";
import Chats from "@/pages/Chats";
import store from "@/store";
import UserCrud from "@/pages/UserCrud";
import Tensorflow from "@/pages/Tensorflow";


const routes = [
    {path: '/', component: Home},
    {path: '/dc-heros', component: DcHeros},
    {path: '/calendar', component: Calendar},
    {path: '/markdown', component: Markdown},
    {path: '/slider', component: Slider},
    {path: '/search', component: SearchGoogle},
    {
        path: '/calculator',
        component: Calculator,
        meta:{middleware:'auth'},
    },
    {path: '/modal', component: ReuseableModal},
    {
        path: '/chat',
        component: Chats,
        meta:{middleware:'auth'},
    },
    {
        path: '/user-crud',
        component: UserCrud,
    },
    {
        path:'/tensorflow',
        component: Tensorflow
    }
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
router.beforeEach(( to,_,next)=>{
   if(to.meta.middleware){
       const middleware = require(`./middleware/${to.meta.middleware}`)
       if(middleware){
           middleware.default(next,store);
       }else {
           next()
       }
   }else{
       next();
   }
})
export default router;
