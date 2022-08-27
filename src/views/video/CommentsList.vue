<template>
  <div class="comment">
    <dl v-for="item in list" :key="item.id">
      <dt><img :src="item.avatar" alt=""></dt>
      <dd>
        <div class="user">
          <p>{{item.username}}</p>
          <span>{{item.date}}</span>
        </div>
        <p>{{item.content}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import axios from 'axios'
export default {
  setup () {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      getCommentsList()
    })
    const getCommentsList = function() {
      axios.get('/commentsList').then((res) => {
        data.list = res.data.result.items
        console.log(data.list)
      }, (err) => {
        console.log(err)
      })
    }
    return { ...toRefs(data) }
  }
}
</script>

<style lang="less" scoped>
.comment{
  width: 100%;
  padding: .2rem;
  dl{
    width: 100%;
    display: flex;
    margin-bottom: .4rem;
    dt{
      margin-right: .2rem;
      img{
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
      }
    }
    dd{
      font-size: .28rem;
      .user{
        color: #757575;
        margin-bottom: .2rem;
      }
    }
  }
}
</style>
