<template>
  <div id="header">
    <h1 @click="$router.push('/')">
      <a class="iconfont icon-bilibili"></a>
    </h1>
    <div class="headerLeft">
      <span class="iconfont icon-search"></span>
      <p class="login">登录</p>
      <button>下载App</button>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
#header{
  width: 100%;
  padding: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  h1{
    .iconfont{
      font-size: .6rem;
      color: #FB7299;
    }
  }
  .headerLeft{
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconfont{
      font-size: .44rem;
      color: #ccc;
    }
    .login{
      width: .6rem;
      height: .6rem;
      line-height: .6rem;
      font-size: .2rem;
      color: #FB7299;
      background: #eee;
      border-radius: 50%;
      text-align: center;
    }
    button{
      font-size: .24rem;
      color: #fffff9;
      padding: .1rem .2rem;
      border: none;
      border-radius: .1rem;
      background: #FB7299;
    }
  }
}
</style>
