<template>
  <van-tabs v-model:active="active" class="homeNav">
    <van-tab :title="item.text" v-for="item in navList" :key="item.id"></van-tab>
  </van-tabs>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import axios from 'axios'

export default {
  setup () {
    const data = reactive({
      navList: [],
      active: ''
    })
    onMounted(() => {
      getNav()
    })
    const getNav = function () {
      axios.get('/navList').then((res) => {
        data.navList = res.data.result
        // console.log(data.navList)
      }, (err) => {
        console.log(err)
      })
    }
    return { ...toRefs(data) }
  }
}
</script>

<style lang="less" scoped>
.homeNav{
  width: 100%;
  position: fixed;
  top: 1rem;
  left: 0;
  z-index: 9;
}
</style>
