<template>
  <VideoInfo :videoDetail="list" />
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import VideoInfo from '../video/VideoInfo.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const data = reactive({
      list: {}
    })
    onMounted(() => {
      getVideoDetail()
    })
    const getVideoDetail = function() {
      axios({
        method: 'get',
        url: '/videoDetail',
        params: { id: route.params.id }
      }).then((res) => {
        data.list = res.data.result
        // console.log(data.list)
      }, (err) => {
        console.log(err)
      })
    }
    return { ...toRefs(data) }
  },
  components: {
    VideoInfo
  }
}
</script>

<style lang="less" scoped>

</style>
