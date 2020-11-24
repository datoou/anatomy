<template>
<div style="width: 100%;height: auto;">
    <div style="width: 100%;height: auto; margin-top: 59px;">
            <img src="http://res.vesal.site/newWebsiteImg/hezuozhaomu.png" v-bind:style="{width: windowWidth,height: windowHeight}">
    </div>
    <div style="">
        <div style="width: 41vw;height:auto;margin: auto;">
               <img src="http://res.vesal.site/newWebsiteImg/server1.png" style="width: 100%;height: auto">
        </div>
        <div style="width: 100%;">
<!--            李哲-->
            <div style="background-color: #F2F2F2">
                <div style="font-size: 1vw;color: #1292E4;text-align: center;padding-top: 1.5vw;padding-bottom: 1.5vw"> — 李哲教你学解剖案例 — </div>
                <el-card style="width: 35vw;height: auto;border-style:solid;border-color: #2d9afa;border-width: 3px;margin:auto;background-color: #F2F2F2;">
                        <img src="http://res.vesal.site/newWebsiteImg/lizhe.png" style="width: 100%;height: auto;" >
                </el-card>
                <div style="width: 29vw;height: auto;margin: 2vw auto">
                    <div style="font-size: 1vw;color: #000203;line-height: 1.7vw">李哲是广东医科大学李哲人体工作室主任、李哲教你学解剖专栏 创始人。</div>
                    <div style="font-size: 1vw;margin: 1vw 0;color: #000203;line-height: 1.7vw">基于维萨里产品的良好口碑, 维萨里和李哲老师联合开发了触发点 方案，受到广泛好评。</div>
                    <div style="font-size: 1vw;color: #000203;line-height: 1.7vw;padding-bottom: 2vw">解剖大师产品的专业性获得了李哲老师的认可, 被李哲老师应用于 各大教学演示活动中。</div>
                </div>
            </div>


            <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-bottom: 1.5vw"> — 龙脊康龙氏正骨案例 — </div>
            <el-card style="width: 28vw;height: auto;margin: 1vw auto">
<!--                <img src="../components/vesalservice/img/longjikang01.png" style="width: 100%;height: auto;" >-->
                <video src="http://res.vesal.site/newWebsiteImg/longjikang.mp4" controls  class="video" :ref="dialogVideo"
                       width="100%"></video>
            </el-card>
            <div style="width: 29vw;height: auto;margin: 2vw auto">
                <div style="font-size: 1vw;color: #000203;line-height: 1.7vw">龙脊康，是中国最专业的脊柱专科医疗机构之一，并致力于科普 脊柱健康常识。龙脊康采用专业的治疗手段服务于广大受脊柱病 困扰的客户，并全面培养脊柱病医疗专业人才。</div>
                <div style="font-size: 1vw;margin: 1vw 0;color: #000203;line-height: 1.7vw">维萨里与龙脊康已建立了长期的合作关系，为龙脊康定制开发了 正骨手法内在骨骼同步动画以及运动康复动作库。</div>
            </div>

            <div style="background-color: #F2F2F2">
                <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-bottom: 1.5vw;padding-top: 1.5vw;"> — 郑大解剖工作室案例 — </div>
                <el-card style="width: 35vw;height: auto;border-style:solid;border-color: #2d9afa;border-width: 3px;margin:auto;background-color: #F2F2F2;">
                    <img src="http://res.vesal.site/newWebsiteImg/zhengda.png" style="width: 100%;height: auto;" >
                </el-card>
                <div style="width: 29vw;height: auto;margin: 2vw auto">
                    <div style="font-size: 1vw;color: #000203;line-height: 1.7vw">郑大解剖以徐高磊老师为龙头，在医学疼痛教学领域拥有广泛的 影响力。</div>
                    <div style="font-size: 1vw;margin: 1vw 0;color: #000203;line-height: 1.7vw;padding-bottom: 2vw">郑大解剖的拳头培训产品《神经卡压》，一直没有很好的3D软件 来支撑。目前，维萨里与郑大解剖正在开展神经卡压的联合研发， 必将进一步提升郑大解剖神经卡压的培训学习效果。</div>
                </div>
            </div>


            <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-bottom: 1.5vw"> — 西安仲德骨科医院案例 — </div>
            <el-card style="width: 29vw;height: auto;margin: 1vw auto">
                <img src="http://res.vesal.site/newWebsiteImg/xianzhongdei.png" style="width: 100%;height: auto;" >
            </el-card>
            <div style="width: 29vw;height: auto;margin:3vw auto;">
                <div style="font-size: 1vw;color: #000203;line-height: 1.7vw;margin: 1vw 0;">西安仲德骨科医院是按三级医院标准兴建的综合骨科专科医院，基于维萨里解剖大师的专业性以及精准性，维萨里与仲德骨科医院达成了战略合作，并为其提供了骨科常见病医患沟通成因和手术动画、3D人体结构，帮助患者更清楚的了解病因以及手术过程。并且为医生提供了开具运动康复处方的工具，为医患沟通、医生的临床工作提供了极大地帮助。</div>
            </div>

            <div style="background-color: #F2F2F2">
            <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-bottom: 1.5vw;padding-top: 1.5vw;"> — 苏景峰正骨案例 — </div>
            <el-card style="width: 35vw;height: auto;border-style:solid;border-color: #2d9afa;border-width: 3px;margin:auto;background-color: #F2F2F2;">
                <img src="http://res.vesal.site/newWebsiteImg/sujingfeng01.png" style="width: 100%;height: auto;" >
            </el-card>
            <div style="width: 29vw;height: auto;margin: 2vw auto">
                <div style="font-size: 1vw;color: #000203;line-height: 1.7vw;margin: 1vw 0;padding-bottom: 2vw">医学解剖教学是维萨里解剖大师应用最广泛的一个场景，被数百家医疗培训机构作为教学演示工具而应用。维萨里解剖大师为苏景峰正骨提供了多套教学应用课件以及正版授权的3D解剖应用，帮助其在教学演示过程中能够更加生动形象的展示教学内容， 对其教学输出有了极大的提升。同时维萨里解剖大师也获得了广大学员的认可，通过课程内容分销的形式给苏景峰正骨带来了可观的经济收益。</div>
            </div>
            </div>

                <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-bottom: 1.5vw"> — 出版行业AR解决方案 — </div>
                <el-card style="width: 31vw;height: auto;margin: 1vw auto">
                    <img src="http://res.vesal.site/newWebsiteImg/AR.png" style="width: 100%;height: auto;">
                </el-card>
                <div style="width: 29vw;height: auto;margin: 2vw auto">
                    <div style="font-size: 1vw;color: #000203;line-height: 1.7vw;margin: 1vw 0;">为了加快医疗出版行业现代化建设， 推进新时代医疗出版信息化， 借助大数据、人工智能、 虚拟现实与医疗出版深入融合的发展现
                        状，维萨里成立了AR项目工作组， 正在积极推进AR项目的建设， 已和人民体育出版社、 高教出版社、中国医药科技出版社、陕西 科学出版社等多家权威出版机构达成合作，共同推进AR项目的建
                        设。该项目的落地， 将加快用信息技术改造传统医疗出版、提高 出版物信息化的进程。
                    </div>
                </div>

                <div style="font-size: 1.25vw;color: #2d9afa;text-align: center;margin-top: 7vw">—— 维萨里三大内容体系 ——</div>
                <div style="width: 100%;" class="serviceTabs">
                    <el-tabs >
                        <el-tab-pane label="3D人体结构">
                            <el-card style="width: 35vw;height: auto;margin: 1vw auto">
                                <div style="margin:2vw 3vw;font-size: 0.9vw;line-height: 1.7vw">
                                    完整人体解剖模型、超过15000个交互结构。涵盖系统、 局部、临床、经脉、触发点等数个方向助您精准学习。 实时肌肉运动、起止点结构、骨骼基本结构和标志映射， 多层结构，更有3D解剖经络腧穴，3D模型触发点3D模型 测验等独有模块。
                                </div>
                                <img src="http://res.vesal.site/newWebsiteImg/3Drenti.png" style="width: 70%;height: auto;margin-left: 15%;margin-right: 15%">
                            </el-card>
                        </el-tab-pane>
                        <el-tab-pane label="医学动画">
                            <el-card style="width: 35vw;height: auto;margin: 1vw auto">
                                <div style="margin:2vw 3vw">
                                    1000+ 3D动作姿态库，涵盖健身、瑜伽、普拉提、运动康复等领域 。方便医生/教练/理疗师等专业人员开具定制化的运动康复方案。
                                </div>
<!--                                <img src="http://res.vesal.site/newWebsiteImg/AR.png" style="width: 100%;height: auto;">-->
                                <div style="align-items: center;display: flex;justify-content: center" >
                                    <video src="http://res.vesal.site/newWebsiteImg/donghua.mp4" controls   :ref="dialogVideo"
                                           width="50%"></video>
                                </div>
                            </el-card>
                        </el-tab-pane>
                        <el-tab-pane label="动作姿态库">
                            <el-card style="width: 35vw;height: auto;margin: 1vw auto">
                                <div style="margin:2vw 3vw;font-size: 0.9vw;line-height: 1.7vw">
                                    300个医学动画，基于临床、生动形象的医学成因/手术动画，解决医患沟通和学生学习掌握重点难点。更有利于患者了解疾病/手术的发生发展过程。
                                </div>
                                <img src="http://res.vesal.site/newWebsiteImg/dongzuoku.png" style="width: 80%;height: auto;margin-left: 10%;margin-right: 10%">
                            </el-card>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>


                <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-top: 2vw;padding-bottom: 2vw"> — 维萨里服务体系 — </div>
                <div style="text-align: center;padding-bottom: 4vw">
                        <img src="http://res.vesal.site/newWebsiteImg/vesalService.png" style="width: 35vw;height: auto;">
                </div>

            <div style="background-color: #F2F2F2">
                <div style="font-size: 1vw;color: #2d9afa;text-align: center;padding-top: 1.5vw;padding-bottom: 1.5vw"> — 合作条件及流程 — </div>
                <div style="text-align: center;margin: 2vw;display: flex;flex-direction: column;align-items: center">
                    <img src="http://res.vesal.site/newWebsiteImg/vesalService01.png" style="width: 35vw;height: auto;">
                    <img src="http://res.vesal.site/newWebsiteImg/liucheng.png" style="width: 35vw;height: auto;margin-top: 2vw">
                    <div style="width: 37vw;height: auto;display: flex;margin: 0 auto;margin-top: 2vw;margin-bottom: 2vw">
                        <div style="width: 3.75vw;font-size: 0.4vw;margin: 0 auto">提交申请</div>
                        <div style="width: 3.75vw;font-size: 0.4vw;margin: 0 auto">合作洽谈</div>
                        <div style="width: 3.75vw;font-size: 0.4vw;margin: 0 auto">签订协议</div>
                        <div style="width: 3.75vw;font-size: 0.4vw;margin: 0 auto">业务培训</div>
                        <div style="width: 3.75vw;font-size: 0.4vw;margin: 0 auto">开展业务</div>
                    </div>
                </div>
            </div>
            </div>

            <div class="serviceBottom" style="width: 100%;text-align: center;margin-top: 3vw;margin-bottom: 3vw">
                <router-link to="/home/partner"><img src="http://res.vesal.site/newWebsiteImg/qiyehezuo.png" style="width: 200px;height: auto"></router-link>
            </div>
        </div>
</template>

<script>
    import {WOW} from "wowjs";
    import scrollReveal from 'scrollreveal';

    export default {
        data(){
            return{
                windowWidth: (document.documentElement.clientWidth) + 'px',  //实时屏幕宽度
                windowHeight: (((document.documentElement.clientWidth) * 444) / 1920) + 'px',   //实时屏幕高度
            }
        },
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
    }
</script>

<style>
    .serviceTabs .el-tabs__nav-wrap.is-top {
        width: 100%;
    }

    .serviceTabs .el-tabs__nav-scroll {
        width: 36vw;
        margin: 4vw auto;
    }

    .serviceTabs .el-tabs__nav.is-top {
        width: 35vw;
        border-style: solid;
        border-color: #2d9afa;
        border-radius: 1vw;
    }

    /*选中tab的文字框样式*/
    .serviceTabs .el-tabs__item.is-active {
        color: white !important;
    }

    /*文字框样式*/
    .serviceTabs .el-tabs__item.is-top {
        text-align: center !important;
        font-size: 1vw !important;
        padding: 0 !important;
        width: 33.3%;
        height: auto;
    }

    /*滑动框样式*/
    .serviceTabs .el-tabs__active-bar.is-top {
        height: 100% !important;
        z-index: 0 !important;
        width: 33.5% !important;
        border-radius: 0.4vw;
    }
</style>

