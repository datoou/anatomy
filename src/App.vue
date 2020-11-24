<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

  export default {
    methods:{
      _isMobile() {
        let ua = navigator.userAgent,
                isWindowsPhone = /(?:Windows Phone)/.test(ua),
                isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
                isAndroid = /(?:Android)/.test(ua),
                isFireFox = /(?:Firefox)/.test(ua),
                isChrome = /(?:Chrome|CriOS)/.test(ua),
                isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
                isPhone = /(?:iPhone)/.test(ua) && !isTablet,
                isPc = !isPhone && !isAndroid && !isSymbian;
        return {
          isTablet: isTablet,
          isPhone: isPhone,
          isAndroid: isAndroid,
          isPc: isPc
        };
      },
    },

    mounted() {
      let os = this._isMobile()
      if(os.isAndroid || os.isPhone) {
        this.$router.replace('/m');
      } else if(os.isTablet) {
        this.$router.replace('/');
      } else if(os.isPc) {
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
