<template>
  <div className="page-home">
    <div className="home-entry">
      <div className="container">
        <!-- 左侧分类 -->
        <HomeCategory/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from '@/components/home-category'

export default {
  name: 'PageHome',
  components: { HomeCategory }
}
</script>
<style scoped lang="less"></style>
