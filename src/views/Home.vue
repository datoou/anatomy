<template>
    <!--  <div class="containers" >-->
    <!--    <img src="../assets/img/logo.png" style="margin-top: 1000px" class="wow bounceInLeft " data-wow-duration="4s" >-->
    <div class="containers">
        <div class="Header">
            <!--菜单-->
            <el-menu :default-active="activeIndex" unique-opened :collapse-transition="false"
                     class="el-menu-demo" mode="horizontal" @click="handleSelect" active-text-color="#1292E4">
                <el-menu-item style="padding: 0;margin-right: 20px">
                    <template slot="title">
                        <img :src="require('../assets/img/logo.png')">
                    </template>
                </el-menu-item>
                <el-menu-item :index="index + ''" v-for="(item,index) in menuData" :key="index">
                    <template slot="title">
                        <span>{{item.authName}}</span>
                    </template>
                </el-menu-item>
                <!--其他产品-->
                <el-submenu index="30">
                    <template slot="title">
                        <span>其他产品</span>
                    </template>
                    <el-menu-item :index="index1 + ''" v-for="(subItem,index1) in menueOther" :key="index1">
                        <template slot="title">
                            <span>{{subItem}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
                <!--登录-->
                <el-menu-item index="66" style="padding-left: 40px;margin-left: 20px">
                    <template slot="title">
                        <img style="margin: 0 21px" :src="require('../assets/img/wo.png')">
                        <span>登录</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </div>

        <div class="Main">
            <!--轮播-->
            <div class="banner">
                <el-carousel trigger="click">
                    <el-carousel-item v-for="item in bannerData" :key="item.title" :label="item.title">
                        <img class="small" :src="item.banner"/>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="contentMid">
                <!--APP切换-->
                <div class="appSwitch">
                    <el-carousel indicator-position="none" arrow="always" @change="carouselChange" :autoplay="false"
                                 :interval="4000" type="card">
                        <el-carousel-item v-for="appitem in bannerAppData" :key="appitem.id" :label="1"
                                          :initial-index="active_Name">
                            <div style="width: 170px;height: 170px;overflow:hidden;border-radius: 30px">
                                <img :src="appitem.bannerApp"
                                     style="width: 170px;height: 170px;cursor: pointer;transition: all 0.8s;">
                            </div>
                        </el-carousel-item>
                    </el-carousel>

                    <div class="tabs">
                        <img src="../assets/img/select.png"/>
                    </div>

                    <el-tabs :value="active_Name" style="padding: 0" @tab-click="handleClick">
                        <el-tab-pane :name="String(appitem.id)" v-for="appitem in bannerAppData" :key="appitem.id">
                            <div class="appInfo">
                                <div class="appInfoTop">
                                    <div class="title">{{appitem.bannerAppTitle}}</div>
                                    <div class="content">{{appitem.bannerAppContent}}</div>
                                </div>

                                <div class="appInfoBottom">
                                    <div class="appInfoBottomList">
                                        <el-tabs tab-position="left" type="card">
                                            <el-tab-pane v-for="item in appitem.lsit">
                                                <div slot="label"
                                                     style="display: flex;flex-direction: column;height: 82px;justify-content: space-around">
                                                    <div class="list">
                                                        <span class="list1">{{item.id}}</span>
                                                        <span style="font-size: 24px;letter-spacing: 2px">{{item.title1}}</span>
                                                    </div>
                                                    <div style="font-size: 18px;margin: 0 18px;text-align: center;letter-spacing: 2px;cursor: default">
                                                        {{item.title2}}
                                                    </div>
                                                </div>
                                                <img :src="item.appinfo" style="width: 559px;height:579px;">
                                            </el-tab-pane>
                                        </el-tabs>
                                    </div>
                                    <div class="appInfoBottomRight">
                                        <div class="img">
                                            <a href=""><img src="../assets/img/Android.png"
                                                            style="width: 148px;height: 48px"></a>
                                            <a href=""><img src="../assets/img/PC.png"
                                                            style="width: 148px;height: 48px"></a>
                                            <a href=""><img src="../assets/img/PC.png"
                                                            style="width: 148px;height: 48px"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <!--解剖微课-->
            <weike/>

            <!--解剖动态-->
            <dynamic/>

            <!--维萨里服务-->
            <service/>

        </div>
        <!--底部-->
        <div class="Footer">
            <div class="footer">
                <img class="reveal-top"
                     src="../assets/img/vesallongo.png"/>
                <div class="info reveal-top">
                    <div style="font-size: 18px;margin-bottom: 19px;color: black">联系我们</div>
                    <span>工作地址:陕西省西安市长安区韦曲街办兴龙花园5幢312室</span>
                    <span>电话：029-68579950</span>
                    <span>微信客服：15619045028</span>
                    <div style="display: flex;flex-direction: row">
                        <span style="margin-right: 93px">© 2017 -2020 西安维萨里数字科技有限责任公司 版权所有 陕ICP备17006533号-1</span>
                        <span>维萨里官方微信客服</span>
                    </div>

                </div>
                <img class="reveal-top"
                     src="../assets/img/gongzhonghaos.png"/>
            </div>
        </div>

        <!--回到顶部、客服-->
        <el-backtop :bottom="130" :right="285">
            <div
                    style="{
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  }"
            >
                <img src="../assets/img/top.png">
            </div>
        </el-backtop>

        <el-backtop :bottom="50" :right="285">
            <div
                    style="{
                    height: 70px;
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  }"
            >
                <el-popover
                        popper-class="popperStyle"
                        placement="left-start"
                        width="200"
                        trigger="hover">
                    <img src="../assets/img/gongzhonghaozhanshi.png">
                    <el-button slot="reference" style="background: none;border:none;padding: 0;">
                        <img src="../assets/img/gongzhonghao.png">
                    </el-button>

                </el-popover>

            </div>
        </el-backtop>
    </div>
    <!--  </div>-->
</template>

<script>
    import weike from "../components/jiepouweike/weike";
    import dynamic from "../components/jiepoudynamic/dynamic";
    import service from "../components/vesalservice/service";
    import scrollReveal from 'scrollreveal';
    import {WOW} from 'wowjs'

    export default {
        mounted() {
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

            })
        },
        data() {
            return {
                scrollReveal: scrollReveal(),
                scrollTop: 0,
                timer: null,
                scrollBottom: 0,
                timers: null,
                // 回到底部的，距离底部的scrolltop
                bottomHeight: 0,

                activeIndex: '',
                active_Name: '1',
                menuData: [
                    {
                        authName: '首页',
                    },
                    {
                        authName: '解剖大师',
                    },
                    {
                        authName: '维萨里3D解剖',
                    },
                    {
                        authName: '解剖微课',
                    },
                    {
                        authName: '解剖动态'
                    },
                    {
                        authName: '维萨里服务'
                    },
                    {
                        authName: '关于我们'
                    },
                ],
                menueOther: ['维萨里健身', '中医经络腧穴', '运动康复训练', '骨科专家'],
                bannerData: [
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '让你成为解剖大师'
                    },
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '肌肉是怎样运动的'
                    },
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '专家教你学解剖'
                    },
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '健身之旅'
                    },
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '我们一起扭一扭'
                    },
                    {
                        banner: require('../assets/img/banner1.png'),
                        title: '健康养生吃什么'
                    },
                ],
                bannerAppData: [
                    {
                        id: 1,
                        bannerApp: require('../assets/img/jiepoudashi.png'),
                        bannerAppTitle: '解剖大师',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人',
                                appinfo: require('../assets/img/allpeople.gif')
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'

                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人',
                                appinfo: require('../assets/img/appjieshao.png')
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    },
                    {
                        id: 2,
                        bannerApp: require('../assets/img/gukezhuanjia.png'),
                        bannerAppTitle: '骨科专家',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人'
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'
                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人'
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    },
                    {
                        id: 3,
                        bannerApp: require('../assets/img/jianshen.png'),
                        bannerAppTitle: '维萨里健身',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人'
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'
                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人'
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    },
                    {
                        id: 4,
                        bannerApp: require('../assets/img/jingluoshuxue.png'),
                        bannerAppTitle: '中医经络腧穴',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人'
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'
                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人'
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    },
                    {
                        id: 5,
                        bannerApp: require('../assets/img/kangfu.png'),
                        bannerAppTitle: '运动康复训练',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人'
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'
                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人'
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    },
                    {
                        id: 6,
                        bannerApp: require('../assets/img/3Djiepou.png'),
                        bannerAppTitle: '维萨里3D解剖',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人'
                            },
                            {
                                id: 2,
                                title1: '触发点',
                                title2: '男女整体人'
                            },
                            {
                                id: 3,
                                title1: '经络腧穴',
                                title2: '男女整体人'
                            },
                            {
                                id: 4,
                                title1: '神经卡压',
                                title2: '男女整体人'
                            },
                        ]
                    }
                ]
            }
        },
        components: {
            weike,
            dynamic,
            service,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            carouselChange(activeIndex, index) {
                this.active_Name = String(activeIndex + 1)
                // console.log(activeIndex, index,6666)
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
        },
    }
</script>
<style scoped lang="less">
    .containers {
        overflow: auto;
    }

    .Header {
        color: #333;
        text-align: center;
        line-height: 60px;
        width: 100%;
    }

    .Main {
        margin-top: 60px;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        padding: 0;
        position: relative;
    }

    .Footer {
        margin-top: 60px;
        background: #F5F5F5;
        color: #333;
        text-align: center;
        padding-top: 1px;
        height: 333px;

        .footer {
            margin: 90px 360px;
            height: 148px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info {
                height: 148px;
                display: flex;
                margin-left: 120px;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;

                span {
                    font-size: 14px;
                    color: #707070;
                }
            }
        }
    }

    .el-menu-demo {
        /*background: yellow;*/
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        border: none !important;
        width: 100%;
        padding: 0 360px;
    }

    .tabs {
        width: 100%;

        img {
            width: 30px;
            margin: 0 15px;
        }
    }

    .appInfo {
        width: 100%;
        height: 705px;
        background-image: url("../assets/img/appdiwen.png");
        background-size: 100% 705px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .appInfoTop {
            height: 67px;
            display: flex;
            width: 442px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-top: 22px;

            .title {
                height: 30px;
                font-size: 30px;
                color: #000000;
            }

            .content {
                font-size: 14px;
                width: 442px;
                height: 14px;
                color: #707070;
            }
        }

        .appInfoBottom {
            width: 963px;
            height: 578px;
            margin-bottom: 17px;
            display: flex;
            align-items: flex-end;

            .appInfoBottomList {
                display: flex;
                flex-direction: column;
                margin: 20px 0 0 10px;

                .list {
                    width: 210px;
                    height: 44px;
                    background: #1292E4;
                    color: #ffffff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;

                    .list1 {
                        text-align: center;
                        font-size: 17px;
                        width: 18px;
                        height: 18px;
                        color: #000000;
                        background: #ffffff;
                        border-radius: 9px;
                        margin: 0 18px;
                        line-height: 18px;
                    }
                }
            }

            .appInfoBottomRight {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: flex-end;

                .img {
                    margin-bottom: 21px;
                }
            }
        }
    }

</style>
<style>
    .el-menu--horizontal > .el-menu-item, .el-submenu {
        height: 60px !important;
        line-height: 60px;
        border-bottom: 0 !important;
        color: #fff;
        font-size: 14px;
    }

    .el-menu--horizontal > .el-menu-item:hover, .el-submenu:hover {
        color: #1292E4 !important;
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
        color: #1292E4 !important;
        font-weight: bold;
    }

    /*轮播*/
    .banner {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        width: 100%;
    }

    .banner .el-carousel__container {
        height: 444px !important;
    }

    .banner .el-carousel__indicator--horizontal {
        /*border: 1px dashed #fff;*/
        border-right: 0;
        border-left: 0;
        padding: 8px 40px !important;
        margin: -30px 0;
    }

    .banner .el-carousel__indicators--labels {
        margin-bottom: 15px;
        height: 30px;
        background: url("../assets/img/banner name.png") no-repeat center;
    }

    .banner .el-carousel__button {
        background: none !important;
        color: #fff;
    }

    .contentMid {
        margin: 0 360px;
        position: relative;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    /*app切换*/
    .appSwitch {
        width: 100%;
        margin-top: 10px;
    }

    .appSwitch .el-carousel {
        overflow: hidden;
    }

    .appSwitch .el-carousel__container {
        height: 250px;
    }

    .appSwitch .el-carousel__container .el-carousel__item {
        height: 250px;
        align-items: center;
        justify-content: center;
        display: flex;

    }

    .popperStyle {
        background: yellow !important;
        padding: 0 !important;
        border: 0 !important;
        background: none !important;
        box-shadow: none !important;
        margin: 0 0 17px 0 !important;
    }

    .appSwitch .el-carousel__mask {
        /*background: black;*/
        width: 0;
    }

    .appSwitch .el-carousel__item--card.is-in-stage:hover {
        cursor: default;
    }

    .appSwitch .el-carousel__item--card img:hover {
        transform: scale(1.1);
    }

    .appSwitch .el-tabs__header {
        display: none;
    }

    .appSwitch .appInfoBottomList .el-tabs__header {
        display: block;
    }

    .appInfoBottomList .el-tabs--card > .el-tabs__header .el-tabs__item {
        margin: 15px;
        height: 70px;
        border: none !important;
    }

    .appInfoBottomList .el-tabs--left.el-tabs--card .el-tabs__nav {
        border: none;
    }

    .appInfoBottomList .el-tabs {
        width: 878px;
        height: 578px;
    }

    .appInfoBottomList .el-tabs--card > .el-tabs__header .el-tabs__item.is-active .list {
        background: #000000;
    }

    .appInfoBottomList .el-tabs__item.is-active {
        color: #000000;
    }

    .appInfoBottomList .el-tabs__item:hover {
        color: black !important;
    }

</style>
