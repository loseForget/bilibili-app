<template>
  <div class="videoItem">
    <router-link :to="`/videoDetail/${video.id}`">
      <div class="img">
        <img :src="video.imgSrc" alt="">
        <div class="videoInfo">
          <span><i class="iconfont icon-bofang"></i>{{video.playCount}}</span>
          <span><i class="iconfont icon-danmushu"></i>{{video.commentCount}}</span>
        </div>
      </div>
      <p>{{video.desc}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style lang="less" scoped>
.videoItem {
  width: 49%;
  margin-bottom: 0.2rem;
  .img {
    position: relative;
    img {
      width: 100%;
      height: 2.4rem;
    }
    .videoInfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0.1rem;
      span {
        font-size: 0.24rem;
        color: #fff;
      }
      .iconfont {
        margin-right: 0.1rem;
      }
    }
  }
  p {
    font-size: 0.28rem;
  }
}
</style>
