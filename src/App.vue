<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

  export default {
    methods:{
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
    },

    mounted() {
      if (this._isMobile()) {
        // alert("手机端");
        this.$router.replace('/m');
      } else {
        // alert("pc端");
        this.$router.replace('/');
      }
    }
  }
</script>
<style lang="less">
  html,body{
    margin: 0;
    padding: 0;
  }
</style>
