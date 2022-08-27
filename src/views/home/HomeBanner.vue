<template>
  <van-swipe :autoplay="3000" lazy-render indicator-color="white">
    <van-swipe-item v-for="item in bannerList" :key="item">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import axios from 'axios'
export default {
  setup () {
    const data = reactive({
      bannerList: []
    })
    onMounted(() => {
      getBanner()
    })
    const getBanner = function () {
      axios.get('/swiperList').then((res) => {
        data.bannerList = res.data.result
        // console.log(data.bannerList)
      }, (err) => {
        console.log(err)
      })
    }
    return { ...toRefs(data) }
  }
}
</script>

<style lang="less" scoped>
.van-swipe{
  height: 3rem;
  margin-top: 1rem;
  .van-swipe-item{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
