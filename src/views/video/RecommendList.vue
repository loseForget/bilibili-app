<template>
  <div class="videoList">
    <VideoListItem v-for="item in list" :key="item.id" :video="item" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import axios from 'axios'
import VideoListItem from '@/components/VideoListItem.vue'

export default {
  setup () {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      getRecommendList()
    })
    const getRecommendList = function() {
      axios.get('/recommendList').then((res) => {
        data.list = res.data.result
        // console.log(data.list)
      }, (err) => {
        console.log(err)
      })
    }
    return { ...toRefs(data) }
  },
  components: {
    VideoListItem
  }
}
</script>

<style lang="less" scoped>

</style>
