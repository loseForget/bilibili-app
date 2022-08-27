<template>
  <div class="videoInfo">
    <!-- 视频 -->
    <video controls :src="videoDetail.videoSrc" :poster="videoDetail.poster" class="video" />
    <h3>{{videoDetail.videoTitle}}</h3>
    <!-- 作者信息 -->
    <div class="authorInfo">
      <div class="left">
        <img :src="videoDetail.authorIconSrc" alt="">
        <p>{{videoDetail.author}}</p>
      </div>
      <div class="right">
        <span>{{videoDetail.playCount}}观看</span>
        <span><i class="iconfont icon-zantongfill"></i>{{videoDetail.likeCount}}</span>
        <span><i class="iconfont icon-shoucangfill"></i>{{videoDetail.favCount}}</span>
      </div>
    </div>
    <!-- 推荐和评论 -->
    <van-tabs v-model:active="active">
      <van-tab title="推荐">
        <RecommendList />
      </van-tab>
      <van-tab title="评论">
        <CommentsList />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import CommentsList from '../video/CommentsList.vue'
import RecommendList from '../video/RecommendList.vue'

export default {
  props: ['videoDetail'],
  setup () {
    const active = ref(0)
    return { active }
  },
  components: {
    CommentsList,
    RecommendList
  }
}
</script>

<style lang="less" scoped>
.videoInfo {
  width: 100%;
  .video {
    width: 100%;
    height: 4rem;
    object-fit: fill;
  }
  h3 {
    font-size: 0.32rem;
    padding: 0.2rem;
  }
  .authorInfo {
    width: 100%;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
    border-bottom: 0.02rem solid #ccc;
    .left {
      width: 25%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
    .right {
      width: 55%;
      font-size: 0.24rem;
      color: #757575;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .iconfont {
        font-size: 0.4rem;
        margin-right: 0.06rem;
      }
    }
  }
}
</style>
