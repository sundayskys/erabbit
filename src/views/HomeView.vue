<template>
  <app-topnav></app-topnav>
  <AppHeader></AppHeader>
  <main>

<!--  二级路由   -->
    <router-view></router-view>
   <app-footer></app-footer>
  </main>
</template>

<script>

import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    AppFooter,
    AppHeader,
    AppTopnav
  },

  setup(){
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
