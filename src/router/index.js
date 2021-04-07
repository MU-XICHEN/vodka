import Router from 'vue-router';
import A from '../views/A.vue';
import B from '../views/B.vue';
import C from '../views/C.vue';
import D from '../views/D.vue';
import Vue from 'vue';
Vue.use(Router);

export default new Router({
    mode:"hash",
    routes:[
        {
            name:"A",
            path:'/A',
            component:A
        },
        {
            name:"B",
            path:'/B',
            component:B
        },
        {
            name:"C",
            path:'/C',
            component:C
        },
        {
            name:"D",
            path:'/D',
            component:D
        }
    ]
})