<template>
  <div class="videoList">
    <VideoListItem v-for="item in videoList" :key="item.id" :video="item" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import VideoListItem from '@/components/VideoListItem.vue'
import axios from 'axios'

export default {
  setup () {
    const data = reactive({
      videoList: []
    })
    onMounted(() => {
      getVideo()
    })
    const getVideo = function () {
      axios.get('/videosList').then((res) => {
        res.data.result.forEach(item => {
          if (item.desc.length >= 22) {
            item.desc = item.desc.slice(0, 22) + '...'
          }
        })
        data.videoList = res.data.result
        // console.log(data.videoList)
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
