<template>
  <HomeTab />
  <HomeBanner />
  <HomeVideoList />
</template>

<script>
import HomeTab from '../home/HomeTab.vue'
import HomeBanner from '../home/HomeBanner.vue'
import HomeVideoList from '../home/HomeVideoList.vue'

export default {
  components: {
    HomeTab,
    HomeBanner,
    HomeVideoList
  }
}
</script>

<style lang="less" scoped>

</style>
