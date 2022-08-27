<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-size: 0.36rem;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: #000;
}

#app{
  padding-top: 1rem;
}

.videoList{
  width: 100%;
  padding: .2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
