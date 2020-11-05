<template>
    <div class="Main">
        <!--轮播-->
        <div class="banner">
            <el-carousel trigger="click"
                         :autoplay="false"
                         v-bind:style="{width: windowWidth,height: windowHeight}">
                <el-carousel-item class="label"
                                  v-for="item in bannerData"
                                  :key="item.title"
                                  :label="item.title"
                                  v-bind:style="{width: windowWidth,height: windowHeight}">
                    <img :src="item.pic_url"
                         v-bind:style="{width: windowWidth,height: windowHeight}"/>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="contentMid">
            <!--APP切换-->
            <div class="appSwitch">
                <el-carousel
                        v-model="app_Name"
                        indicator-position="none"
                        arrow="always"
                        @change="carouselChange"
                        :autoplay="false"
                        :interval="4000"
                        type="card">
                    <el-carousel-item v-for="appitem in bannerAppData"
                                      :key="appitem.app_id"
                                      :label="appitem.app_id"
                                      :initial-index="active_Name">
                        <div style="width: 6vw;height: 6vw;overflow:hidden;border-radius: 30px">
                            <img :src="appitem.icon_url"
                                 style="width: 100%;height: 100%;cursor: pointer;transition: all 0.8s;">
                        </div>
                    </el-carousel-item>
                </el-carousel>

                <div class="tabs">
                    <img src="../jiepouContent/img/select.png"/>
                </div>

                <el-tabs :value="active_Name"
                         style="padding: 0"
                         @tab-click="handleClick">
                    <el-tab-pane :name="String(appitem.app_id)"
                                 v-for="appitem in bannerAppData"
                                 :key="appitem.app_id">
                        <div class="appInfo">
                            <div class="appInfoTop">
                                <div class="title">{{appitem.app_name}}</div>
                                <div class="content">{{appitem.app_content}}</div>
                            </div>

                            <div class="appInfoBottom" >
                                <div class="appInfoBottomList" v-if="appitem.is_video == 'false'">
                                    <el-tabs
                                             tab-position="left"
                                             type="card">
                                        <el-tab-pane v-for="item in bannerAppContentData">
                                            <div slot="label"
                                                 style="display: flex;flex-direction: column;height: auto;justify-content: space-around;">
                                                <div class="list">
                                                    <span class="list1">{{item.content_id}}</span>
                                                    <span style="font-size: 1.25vw;letter-spacing: 2px">{{item.big_title}}</span>
                                                </div>
                                                <div style="font-size: 1vm;margin: 0 18px;text-align: left;letter-spacing: 2px;cursor: default;width: 13vw;height: auto;white-space:normal; line-height: 1.5em;">
                                                   {{item.small_title}}
                                                </div>
                                            </div>
                                            <img :src="item.img_url"
                                                 style="width: 29vw;height:29vw;">
                                        </el-tab-pane>
                                    </el-tabs>

                                </div>
                                    <video  v-else
                                            v-for="Videoitem in bannerAppContentData"
                                            :src="Videoitem.video_url" controls
                                            :ref="dialogVideo"
                                            :poster="Videoitem.video_pic"

                                            width="100%"></video>
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
        data() {
            return {
                active_Name: '1',
                app_id: 1,
                is_Video: true,
                bannerData: [],
                windowWidth: (document.documentElement.clientWidth) + 'px',  //实时屏幕宽度
                windowHeight: (((document.documentElement.clientWidth) * 444) / 1920) + 'px',   //实时屏幕高度
                bannerAppData: [],
                bannerAppContentData: [],
            }
        },
        components: {
            weike,
            dynamic,
            service,
        },
        created: function () {
            console.log(this.windowWidth)
            console.log(this.windowHeight)
            this.addActivityCode()
            this.getWebAppHeadDate()
        },
        methods: {
            carouselChange(activeIndex, index) {
                this.active_Name = String(activeIndex + 1)
                this.app_id = activeIndex + 1
                this.getContentDate()
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            addActivityCode() {
                this.$http({
                    url: 'http://192.168.50.137:8003/vesal-jiepao-test/web/webapp/getAll',
                    method: 'post',
                    data: {
                        "limit": 6
                    }
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.bannerData = data.carouselList
                    } else {
                        this.$message.error('error!')
                    }
                })
            },
            getWebAppHeadDate() {
                this.$http({
                    url: 'http://192.168.50.137:8003/vesal-jiepao-test/web/webapp/getHeadData',
                    method: 'post',
                    data: {
                        "app_id": this.app_id
                    }
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.bannerAppData = data.headList
                        this.bannerAppContentData = data.contentList
                    } else {
                        this.$message.error('error!')
                    }
                })
            },
            getContentDate() {
                this.$http({
                    url: 'http://192.168.50.137:8003/vesal-jiepao-test/web/webapp/getHeadContent',
                    method: 'post',
                    data: {
                        "app_id": this.app_id
                    }
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.bannerAppContentData = data.contentList
                        console.log(this.bannerAppContentData)
                    } else {
                        this.$message.error('error!')
                    }
                })
            },
        },
    }
</script>

<style lang="less" scoped>
    .Main {
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        padding: 0;
        position: relative;
    }

    .appInfo {
        width: 100%;
        height: 37.5vw;
        background-image: url('../jiepouContent/img/appdiwen.png');
        background-size: 100% 37.5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .appInfoTop {
            height: 4vw;
            display: flex;
            width: 23vw;
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
            width: 50vw;
            height: 30vw;
            margin-bottom: 17px;
            display: flex;
            align-items: flex-end;

            .appInfoBottomList {
                display: flex;
                flex-direction: column;
                margin: 5vw 0 0 0;

                .list {
                    width: 16vw;
                    height: 2.2vw;
                    background: #1292e4;
                    color: #ffffff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;

                    .list1 {
                        text-align: center;
                        font-size: 1vw;
                        width: 1.2vw;
                        height: 1.2vw;
                        color: #000000;
                        background: #ffffff;
                        border-radius: 9px;
                        margin: 0 10px;
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
        width: 100%;
        margin-top: 59px;
    }

    .banner .el-carousel__container {
        /*height: 23.125vw !important;*/
    }

    .banner .el-carousel__indicator--horizontal {
        /*border: 1px dashed #fff;*/
        border-right: 0;
        border-left: 0;
    }

    .banner .el-carousel__indicators--labels {
        margin-bottom: 15px;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        height: 40px;
        background: url('../jiepouContent/img/banner name.png') no-repeat center;
    }

    .banner .el-carousel__button {
        background: none !important;
        color: #fff;
        margin-left: 50px;
    }

    .contentMid {
        margin: 0 18.75%;
        position: relative;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    /*app切换*/
    .appSwitch {
        width: 100%;
    }

    .appSwitch .el-carousel__arrow {
        width: 50px;
        height: 50px;
        margin-top: 1vw;
    }

    .appSwitch .el-carousel {
        overflow: hidden;
    }

    .appSwitch .el-carousel__container {
        height: 10vw;
    }

    .appSwitch .el-carousel__container .el-carousel__item {
        height: 12vw;
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
        width: 46vw;
        height: 30vw;
    }

    .appInfoBottomList
    .el-tabs--card
    > .el-tabs__header
    .el-tabs__item.is-active
    .list {
        background: #000000;
    }

    .appInfoBottomList .el-tabs__item.is-active {
        color: #000000;
    }

    .appInfoBottomList .el-tabs__item:hover {
        color: black !important;
    }
</style>
