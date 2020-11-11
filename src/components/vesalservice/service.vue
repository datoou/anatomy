<template>
    <div class="vesalService">
        <div class="top">
            <img class="reveal-top" src="http://res.vesal.site/newWebsiteImg/guanyuwomen.png"
                 style="width: 20vw;height: auto">
            <a class="reveal-top" href="/home/vesalService"
               style="text-decoration: none;font-size: 1vw;color: #000;opacity: 0.9">查看更多</a>
        </div>

        <div class="serviceContent">
            <div class="dingzhi">
                <img src="http://res.vesal.site/newWebsiteImg/qiyefuwu.png"
                     class="reveal-top"
                     style="width: 8.5vw;height: auto">
                <div class="dingzhiContent">
                    <div class="left">
                        <img class="reveal-top"
                             src="http://res.vesal.site/newWebsiteImg/jirou.png"
                             style="width: 14.6875vw;height: 21.77vw">
                        <div style="width: 282px;height: 78px;justify-content:space-between;display: flex;flex-direction: column;align-items: center;margin-top: 9.6875vw">
                            <img class="reveal-top"
                                 src="http://res.vesal.site/newWebsiteImg/duochangjing1.png" style="width: 14.6875vw">
                            <div class="reveal-top"
                                 style="width: 13vw;height:40px;font-size: 1.1vw;text-align: left;margin-top: 16px">
                                <p>自主学习，手术讨论，</p>
                                <p>大屏授课，AR教学</p>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div style="width:12.87vw">
                            <img class="reveal-top" src="http://res.vesal.site/newWebsiteImg/zhuanyepinzhi1.png">
                            <div class="reveal-top"
                                 style="width: 14vw;height: 3.3vw;font-size: 1vw;text-align: left;margin-top: 16px">
                                <p>10000+精准模型，讲解视频、</p>
                                <p>动画演示以及课程讲解</p>
                                <p>专业品质 内容详实</p>
                            </div>
                        </div>
                        <img class="reveal-top" src="http://res.vesal.site/newWebsiteImg/duochangjing2.png"
                             style="margin-top: 8.3vw;width: 34vw;">
                    </div>
                </div>
            </div>
            <div class="dingzhiInfo">
                <div class="Cooperation">
                    <div class="top">
                        <el-popover
                                popper-class="popperStyle"
                                placement="left-start"
                                width="200"
                                trigger="hover">
                            <img src="http://res.vesal.site/newWebsiteImg/B.png" style="width: 10.416vw">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceLeft" data-wow-duration="2s" data-wow-delay="0.5s"
                                     src="http://res.vesal.site/newWebsiteImg/dingzhikaifa.png" style="width: 13.072vw">
                            </el-button>
                        </el-popover>
                        <el-popover
                                popper-class="popperStyle"
                                placement="right-start"
                                width="200"
                                trigger="hover">
                            <img src="http://res.vesal.site/newWebsiteImg/C.png" style="width: 10.416vw">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceRight" data-wow-duration="2s" data-wow-delay="0.5s"
                                     src="http://res.vesal.site/newWebsiteImg/chubanchengji.png"
                                     style="width: 13.072vw">
                            </el-button>
                        </el-popover>
                    </div>
                    <div class="bottom">
                        <el-popover
                                popper-class="popperStyle"
                                placement="left-start"
                                width="200"
                                trigger="hover">
                            <img src="http://res.vesal.site/newWebsiteImg/A.png" style="width: 10.416vw">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceLeft" data-wow-duration="2s" data-wow-offset="250"
                                     src="http://res.vesal.site/newWebsiteImg/neirongshouquan.png"
                                     style="width: 13.072vw">
                            </el-button>
                        </el-popover>
                        <el-popover
                                popper-class="popperStyle"
                                placement="right-start"
                                width="200"
                                trigger="hover">
                            <img src="http://res.vesal.site/newWebsiteImg/D.png" style="width: 10.416vw">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceRight" data-wow-duration="2s" data-wow-offset="250"
                                     src="http://res.vesal.site/newWebsiteImg/jiaoxuefuzhu.png" style="width: 13.072vw">
                            </el-button>

                        </el-popover>
                    </div>
                </div>
                <div style="width: 100%;display: flex;margin-top: 86px">
                    <img src="http://res.vesal.site/newWebsiteImg/hezuohuoban.png" style="width: 8.5vw;height: 2.6vw"/>
                </div>
                <div class="Partners">
                    <div class="top">
                        <img class="reveal-top" v-for="item in partnersData" :src="item" style="width: 11.25vw;">
                    </div>
                    <div class="bottom">
                        <div style="height:91px;display: flex;align-items:flex-end;justify-content: flex-end">
                            <div style="height: 39px;width:100%;background: #DFEFF9;margin:0 -10px 9px 0"></div>
                            <a href="/home/partner"><img src="http://res.vesal.site/newWebsiteImg/qiyehezuo.png"
                                                         style="width: 15.46875vw;"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WOW} from "wowjs";
    import scrollReveal from 'scrollreveal';

    export default {
        mounted() {
            //第一种写法，可以设置wow中属性
            this.$nextTick(() => { // 在dom渲染完后,再执行动画
                this.scrollReveal.reveal('.reveal-serviceLeft', {
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 700,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'left',
                    // 回滚的时候是否再次触发动画
                    reset: false,
                    // 在移动端是否使用动画
                    mobile: false,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '50px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    easing: 'linear',
                    scale: 1,
                });
                this.scrollReveal.reveal('.reveal-serviceRight', {
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 700,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'right',
                    // 回滚的时候是否再次触发动画
                    reset: false,
                    // 在移动端是否使用动画
                    mobile: false,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '50px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    easing: 'linear',
                    scale: 1,
                });
            })
        },
        data() {
            return {
                scrollReveal: scrollReveal(),
                partnersData: [
                    'http://res.vesal.site/newWebsiteImg/guangzhouyikedaxue.png',
                    'http://res.vesal.site/newWebsiteImg/longjikang.png',
                    'http://res.vesal.site/newWebsiteImg/zhengdajiepou.png',
                    'http://res.vesal.site/newWebsiteImg/zhongdeiguke.png',
                    'http://res.vesal.site/newWebsiteImg/sujingfeng.png',
                ]
            }
        },
    }
</script>
<style scoped lang="less">
    .vesalService {
        padding: 0 18.75vw;

        .top {
            margin: 4vw 0 33px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }

        .serviceContent {
            .dingzhi {
                display: flex;
                flex-direction: column;
                height: 50vw;

                .dingzhiContent {
                    display: flex;

                    .left {
                        margin: 3.64vw 0 0 5.5vw;
                        width: 14.68vw;
                        height: 25.05vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .right {
                        margin-top: 9.27vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 669px;
                        height: 682px;
                    }
                }
            }

            .dingzhiInfo {
                margin-top: 68px;

                .Cooperation {
                    height: 24vw;
                    background: url("../vesalservice/img/duoyanghua1.png") no-repeat;
                    background-size: 100%;
                    background-position-y: bottom;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;

                    .top {
                        width: 28.75vw;
                        height: 13.02vw;
                        /*background: skyblue;*/
                        margin: 0;
                        display: flex;
                        justify-content: space-between;
                    }

                    .bottom {
                        width: 47.552vw;
                        height: 13.02vw;
                        /*background: green;*/
                        margin: 0;
                        display: flex;
                        justify-content: space-between;
                    }
                }

                .Partners {
                    width: 100%;
                    /*margin-top: -55px;*/
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .top {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .bottom {

                    }
                }
            }
        }
    }

</style>
<style>

    .dynamicContent .el-divider--horizontal {
        margin: 0 0 24px 0;
    }

    .popperStyle {
        padding: 0 !important;
        border: 0 !important;
        background: none !important;
        box-shadow: none !important;
        z-index: 20 !important;
    }

</style>
