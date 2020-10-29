<template>
  <div class="jiepouweike">
    <div class="top">
      <img class="reveal-top"
           src="../jiepouweike/img/zhuanjiaweike.png"
           style="width: 20vw;height: auto">
    </div>

    <div class="content">
      <div class="weikePic"
           style="width: 100% !important;padding: 0!important">
        <img src="../jiepouweike/img/laoshi.png"
             style="width: 100%;" />
      </div>
      <div class="weikeTxt"
           style="display:-webkit-flex;display: flex;width: 80%;margin-left: 10%;margin-right: 10%;margin-bottom: 5%">
        <div style="margin: 20px auto;">
          <div style="font-size: 1vw;font-weight: bold">
            <span style="color: #1292E4;font-size: 2vw;">500+ </span>节</div>
          <div style="font-size: 1.5vw;font-weight: bold;margin-top: 1vw">解剖相关微课</div>
          <div style="font-size: 1vw;margin-top: 10px">深入浅出，形象生动</div>
        </div>
        <div style="margin: 20px auto;">
          <div style="font-size: 1vw;font-weight: bold">
            <span style="color: #1292E4;font-size: 2vw">10w+ </span>人</div>
          <div style="font-size: 1.5vw;font-weight: bold;margin-top: 1vw">学习人数</div>
          <div style="font-size: 1vw;margin-top: 10px">最专业的解剖学习社区</div>
        </div>
        <div style="margin: 20px auto;">
          <div style="font-size: 1vw;font-weight: bold">
            <span style="color: #1292E4;font-size: 2vw">6 </span>个</div>
          <div style="font-size: 1.5vw;font-weight: bold;margin-top: 1vw">学习方向</div>
          <div style="font-size: 1vw;margin-top: 10px">解剖 治疗手法 中医全方位</div>
        </div>
      </div>
      <div class="appDownloud">
        <span style="font-size: 1.5vw;margin-top: 10px;font-weight: bold;border-bottom: 2px solid #1292E4;text-decoration:none">下载手机app去学习</span>
      </div>
    </div>
  </div>
</template>

<script>
import wow, { WOW } from 'wowjs'
import scrollReveal from "scrollreveal";


export default {
  mounted () {
    //第一种写法，可以设置wow中属性
    this.$nextTick(() => { // 在dom渲染完后,再执行动画
      this.scrollReveal.reveal('.reveal-top', {
        // 动画的时长
        duration: 400,
        // 延迟时间
        delay: 200,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '50px',
        // 其他可用的动画效果
        opacity: 0.01,
        easing: 'linear',
        scale: 1,
      });
    })  },
  data () {
    return {
      scrollReveal: scrollReveal(),
      pagenum: 1,
      pagesize: 6,
      total: 30,
      activeName: '1',
    }
  },
  methods: {
    handleClick (tab, event) {
      // this.activeName = tab
      console.log(tab, event);
    },
    //监听页码值改变的事件
    handleCurrentChange (newPage) {
      console.log(newPage)
      // this.pagenum = newPage
    }
  }
}
</script>

<style scoped lang="less">
.jiepouweike {
  margin-top: 20px;
  .top {
    padding: 0 18.75vw;
    margin: 4vw 0 33px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>
