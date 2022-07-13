<template>
  <app-topnav></app-topnav>
  <AppHeader></AppHeader>
  <main>

<!--  二级路由   -->
    <router-view></router-view>
    <footer>底部</footer>
  </main>
</template>

<script>

import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppTopnav

  }
}
</script>
