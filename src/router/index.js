import Vue from 'vue'
import Router from 'vue-router'
import Hdxx from '@/pages/hdxx'//航道信息
import Hdxxxq from '@/pages/hdxxxq'//航道信息详情
import Hxxx from '@/pages/hxxx'//航线信息
import Hxxxxq from '@/pages/hxxxxq'//航线信息详情
import Swqx from '@/pages/swqx'//水文气象
import Zsyz from '@/pages/zsyz'//招商引资
import Zsyzxq from '@/pages/zsyzxq'//招商引资详情
import Gkhb from '@/pages/gkhb'//港口环保
import Gqdt from '@/pages/gqdt'//港区动态
import Hydt from '@/pages/hydt'//港区动态
import Cbdt from '@/pages/cbdt'//船舶动态
import Axsc from '@/pages/axsc'//岸线收储
import Axscxq from '@/pages/axscxq'//岸线收储详情
import Xmgc from '@/pages/xmgc'//项目工程列表
import Xmgcxq from '@/pages/xmgcxq'//项目工程详情
import Yjzj from '@/pages/yjzj'//应急专家列表
import Yjzjxq from '@/pages/yjzjxq'//应急专家详情
import Yjya from '@/pages/yjya'//应急预案列表
import Yjyaxq from '@/pages/yjyaxq'//应急预案详情
import Yjwz from '@/pages/yjwz'//应急物资列表
import Yjwzxq from '@/pages/yjwzxq'//应急物资详情

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/hdxx', component: Hdxx },
    { path: '/hdxxxq/:id', component: Hdxxxq },
    { path: '/hxxx', component: Hxxx },
    { path: '/hxxxxq/:id', component: Hxxxxq },
    { path: '/swqx', component: Swqx },
    { path: '/zsyz', component: Zsyz },
    { path: '/zsyzxq/:id', component: Zsyzxq },
    { path: '/gkhb', component: Gkhb },
    { path: '/gqdt', component: Gqdt },
    { path: '/hydt', component: Hydt },
    { path: '/cbdt', component: Cbdt },
    { path: '/axsc', component: Axsc},
    { path: '/axscxq/:id', component: Axscxq },
    { path: '/xmgc', component: Xmgc},
    { path: '/xmgcxq/:id', component: Xmgcxq },
    { path: '/yjzj', component: Yjzj},
    { path: '/yjzjxq/:id', component: Yjzjxq },
    { path: '/yjya', component: Yjya},
    { path: '/yjyaxq/:id', component: Yjyaxq },
    { path: '/yjwz', component: Yjwz},
    { path: '/yjwzxq/:id', component: Yjwzxq },
  ]
})
