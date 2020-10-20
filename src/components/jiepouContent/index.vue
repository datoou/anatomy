<template>
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
                    <img src="../jiepouContent/img/select.png"/>
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
                                        <a href=""><img src="../jiepouContent/img/Android.png"
                                                        style="width: 148px;height: 48px"></a>
                                        <a href=""><img src="../jiepouContent/img/PC.png"
                                                        style="width: 148px;height: 48px"></a>
                                        <a href=""><img src="../jiepouContent/img/PC.png"
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
</template>

<script>
    import weike from "../jiepouweike/weike";
    import dynamic from "../jiepoudynamic/dynamic";
    import service from "../vesalservice/service";
    export default {
        data(){
            return{
                active_Name: '1',
                bannerData: [
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '让你成为解剖大师'
                    },
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '肌肉是怎样运动的'
                    },
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '专家教你学解剖'
                    },
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '健身之旅'
                    },
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '我们一起扭一扭'
                    },
                    {
                        banner: require('../jiepouContent/img/banner1.png'),
                        title: '健康养生吃什么'
                    },
                ],
                bannerAppData: [
                    {
                        id: 1,
                        bannerApp: require('../jiepouContent/img/jiepoudashi.png'),
                        bannerAppTitle: '解剖大师',
                        bannerAppContent: '双师教学，小班辅导，所有课程均配备真实项目实战，解决实际业务。',
                        lsit: [
                            {
                                id: 1,
                                title1: '3D人体模型',
                                title2: '男女整体人',
                                appinfo: require('../jiepouContent/img/allpeople.gif')
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
                                appinfo: require('../jiepouContent/img/appjieshao.png')
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
                        bannerApp: require('../jiepouContent/img/gukezhuanjia.png'),
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
                        bannerApp: require('../jiepouContent/img/jianshen.png'),
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
                        bannerApp: require('../jiepouContent/img/jingluoshuxue.png'),
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
                        bannerApp: require('../jiepouContent/img/kangfu.png'),
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
                        bannerApp: require('../jiepouContent/img/3Djiepou.png'),
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
        components:{
            weike,
            dynamic,
            service,
        },
        methods:{
            carouselChange(activeIndex, index) {
                this.active_Name = String(activeIndex + 1)
                // console.log(activeIndex, index,6666)
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
        }
    }
</script>

<style lang="less" scoped>
    .Main {
        margin-top: 60px;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        padding: 0;
        position: relative;
    }
    .appInfo {
        width: 100%;
        height: 705px;
        background-image: url("../jiepouContent/img/appdiwen.png");
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
        background: url("../jiepouContent/img/banner name.png") no-repeat center;
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
