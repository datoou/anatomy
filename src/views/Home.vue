<template>
  <!--  <div class="containers" >-->
  <!--    <img src="../assets/img/logo.png" style="margin-top: 1000px" class="wow bounceInLeft " data-wow-duration="4s" >-->
  <div class="containers">
    <el-row style="">
      <div class="headerTop">
        <el-menu :default-active="activeIndex"
                 unique-opened
                 :collapse-transition="false"
                 mode="horizontal"
                 @click="handleSelect"
                 active-text-color="#1292E4"
                 class="el-menu-demo">

          <el-menu-item style="">
            <template slot="title">
              <img @click="logo"
                   :src="require('../assets/img/logo.png')"
                   style="width: 9.73vw;height: 3.07vw;">
            </template>
          </el-menu-item>

          <el-menu-item style="margin-left: 2%;font-size:0.8vw;font-weight: 400"
                        :index="index + ''"
                        v-for="(item,index) in menuData"
                        :key="index">
            <template slot="title">
              <router-link :to={path:item.path} style="">{{item.authName}}</router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
    </el-row>

    <el-row>
      <router-view/>
    </el-row>

    <el-row>
      <div class="Footer">
        <div class="footer">
          <img src="../assets/img/vesallongo.png"
               style="width: 8.5vw" />
          <div class="info">
            <div style="font-size: 0.9375vw;margin-bottom: 1vw;color: black">联系我们</div>
            <span>工作地址:陕西省西安市长安区韦曲街办兴龙花园5幢312室</span>
            <span>电话：029-68579950</span>
            <span>微信客服：15619045028</span>
            <div style="display: flex;flex-direction: row">
              <span style="margin-right: 2vw">© 2017 -2020 西安维萨里数字科技有限责任公司 版权所有 陕ICP备17006533号-1</span>
              <span>维萨里官方微信客服</span>
            </div>

          </div>
          <img src="../assets/img/gongzhonghaos.png"
               style="width: 8.18vw;" />
        </div>
      </div>
    </el-row>
    <!--回到顶部、客服-->
    <el-backtop :bottom="130">
      <div style="{
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  }">
        <img src="../assets/img/top.png">
      </div>
    </el-backtop>

    <el-backtop class="kefu"
                :bottom="50">
      <div style="{
                    height: 70px;
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  }">
        <img class="kefuImg"
             v-show="isShow"
             src="../assets/img/gongzhonghaozhanshi.png">
        <el-button @click="kefuClick"
                   @mouseenter.native="kefuShow"
                   @mouseleave.native="kefuHide"
                   slot="reference"
                   style="background: none;border:none;padding: 0;">
          <img src="../assets/img/gongzhonghao.png">
        </el-button>
      </div>
    </el-backtop>

  </div>
  <!--  </div>-->
</template>

<script>
import jiepouContent from "../components/jiepouContent/index";
import scrollReveal from "scrollreveal";
import { WOW } from "wowjs";

export default {
  mounted () {
    //第一种写法，可以设置wow中属性
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      this.scrollReveal.reveal(".reveal-top", {
        // 动画的时长
        duration: 400,
        // 延迟时间
        delay: 200,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: "bottom",
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: "50px",
        // 其他可用的动画效果
        opacity: 0.01,
        easing: "linear",
        scale: 1
      });
    });
  },
  data () {
    return {
      isShow: false,
      scrollReveal: scrollReveal(),
      scrollTop: 0,
      timer: null,
      scrollBottom: 0,
      timers: null,
      // 回到底部的，距离底部的scrolltop
      bottomHeight: 0,

      activeIndex: "0",
      menuData: [
        {
          authName: "首页",
          path: "/home/jiepouContent"
        },
        // {
        //   authName: "解剖大师"
        // },
        // {
        //   authName: "维萨里3D解剖"
        // },
        {
          authName: "解剖动态",
          path: "/home/jiepoudynamic/dynamicMore"
        },
        {
          authName: "软件下载",
          path: "/home/download"
        },
        // {
        //   authName: "解剖微课"
        // },

        {
          authName: "维萨里服务",
          path: "/home/vesalService"
        },
        {
          authName: "关于我们",
          path: "/home/aboutUs"
        }
      ],
      menueOther: ["维萨里健身", "中医经络腧穴", "运动康复训练", "骨科专家"]
    };
  },
  components: {
    jiepouContent
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    logo () {
      this.$router.push("/home/jiepouContent");
      window.location.reload();
    },
    kefuShow () {
      this.isShow = true;
    },
    kefuHide () {
      this.isShow = false;
    },
    kefuClick () {
      this.isShow = false;
    }
  }
};
</script>
<style scoped lang="less">
.containers {
  overflow: auto;
}

.headerTop {
  // height: 59px;
  width: 100%;
  display: flex;
  flex: 1;
  color: #333;
  /*justify-content: center;*/
}

.Header {
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.Footer {
  margin-top: 60px;
  background: #f5f5f5;
  color: #333;
  text-align: center;
  padding-top: 1px;
  height: 333px;

  .footer {
    margin: 90px 16vw;
    height: 7.7vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      height: 148px;
      display: flex;
      margin-left: 6.25vw;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;

      span {
        font-size: 0.78125vw;
        color: #707070;
      }
    }
  }
}

.el-menu-demo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  flex: 1;
  color: #333;
  justify-content: center;
}

.tabs {
  width: 100%;

  img {
    width: 30px;
    margin: 0 15px;
  }
}
.kefuImg {
  position: fixed;
  bottom: 30px;
  right: 80px;
}
</style>
<style>
.el-menu--horizontal > .el-menu-item,
.el-submenu {
  height: 60px !important;
  line-height: 60px;
  border-bottom: 0 !important;
  color: #fff;
  font-size: 14px;
}

.el-menu--horizontal > .el-menu-item:hover,
.el-submenu:hover {
  color: #1292e4 !important;
}

.el-menu-item.is-active {
  font-weight: bold;
  border-bottom: 0;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  border: none !important;
  color: #909399 !important;
}

.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  color: #1292e4 !important;
  font-weight: bold;
}
.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  text-decoration: none;
}
</style>
