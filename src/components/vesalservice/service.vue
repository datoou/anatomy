<template>
    <div class="vesalService">
        <div class="top">
            <img class="reveal-top"  src="../vesalservice/img/guanyuwomen.png">
            <a class="reveal-top" href="" style="text-decoration: none">查看更多</a>
        </div>

        <div class="serviceContent" >
            <div class="dingzhi">
                <img src="../vesalservice/img/qiyefuwu.png"
                     class="reveal-top"
                     style="width: 163px;height: 50px">
                <div class="dingzhiContent">
                    <div class="left">
                        <img class="reveal-top"
                                src="../vesalservice/img/jirou.png">
                        <div style="width: 282px;height: 78px;justify-content:space-between;display: flex;flex-direction: column;align-items: center">
                            <img class="reveal-top"
                                    src="../vesalservice/img/duochangjing1.png">
                            <div class="reveal-top"
                                    style="width: 165px;height:40px;font-size: 16px;text-align: left">
                                自主学习，手术讨论，大屏授课，AR教学
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div style="width:247px">
                            <img class="reveal-top"  src="../vesalservice/img/zhuanyepinzhi1.png">
                            <div class="reveal-top"  style="width: 228px;height: 64px;font-size: 16px;text-align: left;margin-top: 16px">
                                10000+精准模型，讲解视频、
                                动画演示以及课程讲解
                                专业品质 内容详实
                            </div>
                        </div>
                        <img class="reveal-top"  src="../vesalservice/img/duochangjing2.png" style="margin-top: 160px">
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
                            <img src="../vesalservice/img/B.png">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img  class="reveal-serviceLeft" data-wow-duration="2s" data-wow-delay="0.5s"
                                      src="../vesalservice/img/dingzhikaifa.png">
                            </el-button>
                        </el-popover>
                        <el-popover
                                popper-class="popperStyle"
                                placement="right-start"
                                width="200"
                                trigger="hover">
                            <img src="../vesalservice/img/C.png">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceRight" data-wow-duration="2s" data-wow-delay="0.5s"
                                        src="../vesalservice/img/chubanchengji.png">
                            </el-button>
                        </el-popover>
                    </div>
                    <div class="bottom">
                        <el-popover
                                popper-class="popperStyle"
                                placement="left-start"
                                width="200"
                                trigger="hover">
                            <img src="../vesalservice/img/A.png">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceLeft" data-wow-duration="2s"  data-wow-offset="250"
                                        src="../vesalservice/img/neirongshouquan.png">
                            </el-button>
                        </el-popover>
                        <el-popover
                                popper-class="popperStyle"
                                placement="right-start"
                                width="200"
                                trigger="hover">
                            <img src="../vesalservice/img/D.png">
                            <el-button slot="reference" style="background: none;border:none;padding: 0;">
                                <img class="reveal-serviceRight" data-wow-duration="2s"  data-wow-offset="250"
                                        src="../vesalservice/img/jiaoxuefuzhu.png">
                            </el-button>

                        </el-popover>
                    </div>
                </div>
                <div style="width: 100%;display: flex;margin-top: 86px">
                    <img src="../vesalservice/img/hezuohuoban.png"/>
                </div>
                <div class="Partners">
                    <div class="top" >
                        <img class="reveal-top"  v-for="item in partnersData" :src="item">
                    </div>
                    <div class="bottom">
                        <div style="height:91px;display: flex;align-items:flex-end;justify-content: flex-end">
                            <div style="height: 39px;width:100%;background: #DFEFF9;margin:0 -10px 9px 0"></div>
                            <a href=""><img src="../vesalservice/img/qiyehezuo.png"></a>
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
        mounted(){
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
            })},
        data(){
            return{
                scrollReveal: scrollReveal(),
                partnersData:[
                    require('../vesalservice/img/guangzhouyikedaxue.png'),
                    require('../vesalservice/img/longjikang.png'),
                    require('../vesalservice/img/zhengdajiepou.png'),
                    require('../vesalservice/img/zhongdeiguke.png'),
                    require('../vesalservice/img/sujingfeng.png'),
                ]
            }
        },
    }
</script>
<style scoped lang="less">
    .vesalService{
        padding: 0 360px;
        .top{
            margin: 56px 0 33px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }
        .serviceContent{
            .dingzhi{
                display: flex;
                flex-direction: column;
                height: 960px;
                .dingzhiContent{
                    display: flex;
                    .left{
                        margin:70px 0 0 204px;
                        width: 282px;
                        height: 682px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .right{
                        margin-top: 178px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 669px;
                        height: 682px;
                    }
                }
            }
            .dingzhiInfo{
                margin-top: 68px;
                .Cooperation{
                    height: 510px;
                    background:url("../vesalservice/img/duoyanghua1.png") no-repeat ;
                    background-size: 100% 448px;
                    background-position-y: bottom;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    .top{
                        width: 552px;
                        height: 250px;
                        /*background: skyblue;*/
                        margin: 0;
                        display: flex;
                        justify-content: space-between;
                    }
                    .bottom{
                        width: 913px;
                        height: 250px;
                        /*background: green;*/
                        margin: 0;
                        display: flex;
                        justify-content: space-between;
                    }
                }
                .Partners{
                    width: 100%;
                    height: 199px;
                    /*margin-top: -55px;*/
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .top{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .bottom{

                    }
                }
            }
        }
    }

</style>
<style>

    .dynamicContent .el-divider--horizontal{
        margin: 0 0 24px 0;
    }
    .popperStyle{
        padding: 0 !important;
        border: 0 !important;
        background: none !important;
        box-shadow: none !important;
        z-index: 20!important;
    }

</style>
