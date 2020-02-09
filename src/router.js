import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AdvertDetail from './views/AdvertDetail'
import CompanyDetail from './views/CompanyDetail'
import DistrictDetail from './views/DistrictDetail'
import TagDetail from './views/TagDetail'
import AddAdvert from './views/AddAdvert'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ilanlar/:detailSlug',
      name: 'advertDetail',
      component: AdvertDetail,
    },
    {
      path: '/firmalar/:companySlug',
      name: 'companyDetail',
      component: CompanyDetail,
    },
    {
      path: '/sehirler/:districtSlug',
      name: 'DistrictDetail',
      component: DistrictDetail,
    },
    {
      path: '/etiket/:tagSlug',
      name: 'tagDetail',
      component: TagDetail,
    },
    {
      path: '/ilan-ekle/',
      name: 'AddAdvert',
      component: AddAdvert,
    },
  ]
})
