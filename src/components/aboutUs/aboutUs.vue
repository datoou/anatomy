<template>
    <div class="aboutUs">
        <div class="aboutUsTop">
            <div class="aboutUsTop1">超过<span style="color: #2d9afa">100</span>所学校正在使用维萨里产品</div>
            <div class="aboutUsTop2">
                <div class="aboutUsTop3">
                    <div>励志于通过现代化的数字技术（AR/VR/MR）促进数字解剖在中国的普遍应用</div>
                    <div>公司使命：运用现代信息技术支持医学教育领域的“数组化革命”，打造中国数字化医学教育第一品牌</div>
                </div>
                <div class="aboutUsTop4" >
                    <div class="aboutUsTop5" v-for="(item,index) in aboutUsTopData" :key="index">
                        <div style="font-size: 2.604vw;margin: 1.5625vw 0 0.5208vw 1.5625vw;font-weight: bold">{{item.num}}</div>
                        <div style="font-size: 1.302vw;margin-left: 1.5625vw">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutUsMid">
            <div class="aboutUsMid1">
                <span class="title">促进数字解剖在中国的普遍应用</span>
                <div style="width: 100%;display: flex;background-color: #2d9afa;height: 2.6041vw;margin-top: 2.6041vw">
                    <div style="width: 35%;font-size: 1.5vw;font-weight: normal;color:#ffffff ;border-right-style:solid;border-color: #ffffff;border-width:1px;margin: auto 0;">提出问题</div>
                    <div style="width: 65%;font-size: 1.5vw;font-weight: normal;color:#ffffff;margin: auto 0;">解决方案</div>
                </div>
                <el-tabs tab-position="left" style="height: 25.52vw;">
                    <el-tab-pane label="【学习方向】学生上课很难快速理解所学的大量内容">
                        <div class="tab-right-title">学生更容易接受</div>
                        <div class="tab-right-text">在课堂学习之于，可以在这里进行复习，并且学习到而外的东西</div>
                        <img src="http://www.vesal.cn:8080/vesal//public/images/problem1.png" style="width: 100%;height: auto">
                    </el-tab-pane>
                    <el-tab-pane label="【实验方向】实验课时，传统的实验不能营造出逼真的效果">
                        <div class="tab-right-title">辅助实验室</div>
                        <div class="tab-right-text">可以在实验室内搭建实验室模拟器无法比拟的细节处理</div>
                        <img src="http://www.vesal.cn:8080/vesal//public/images/problem2.png" style="width: 100%;height: auto">
                    </el-tab-pane>
                    <el-tab-pane label="【学习方向】学生下课后很难去学习这方面的只是，设备的局限性">
                        <div class="tab-right-title">学习效率大幅度提升</div>
                        <div class="tab-right-text">可以利用课余时间，或者在课进行学习。 <a style="color: #2d9afa" href="">查看具体案例</a></div>
                        <img src="http://www.vesal.cn:8080/vesal//public/images/problem3.png" style="width: 100%;height: auto">
                    </el-tab-pane>
                    <el-tab-pane label="【考练方向】平时做题，试题无法演示真实的效果，导致效果不佳">
                        <div class="tab-right-title">考练功能</div>
                        <div class="tab-right-text">随时随地，进行章节测试，做到即学即测，帮助你快速提升能力</div>
                        <img src="http://www.vesal.cn:8080/vesal//public/images/problem4.png" style="width: 100%;height: auto">
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="aboutUsMid2">
                <div class="title">维萨里正在为各高校以及各医学企业提供解决方案</div>
                <div style="display: flex;margin-top: 2vw">
                    <el-card style="height: auto;width: 30%;margin: 0 auto">
                        <img src="http://www.vesal.cn:8080/vesal//public/images/fangan2.png" style="width: 100%;height: auto">
                        <div style="font-size: 1vw">教育行业 西安培华学院</div>
                        <div style="font-size: 1.5vw;margin-top: 0.5vw">为教育事业提供有力支持</div>
                        <div style="margin-top: 0.5vw;color: #8a8a8a;font-size: 1vw">多角度、多层次的的对比性只是展示，课程重点内容直观展示，通过游戏“通关练习”模式的考练，加深理解和记忆，迅速提高成绩</div>
                        <div style="margin-top: 1vw;color: #8a8a8a;font-size: 1vw">随时查看学生学习状况</div>
                    </el-card>
                    <el-card style="height: auto;width: 30%;margin: 0 auto">
                        <img src="http://www.vesal.cn:8080/vesal//public/images/fangan1.png" style="width: 100%;height: auto">
                        <div style="font-size: 1vw">服务行业 **市中心医院</div>
                        <div style="font-size: 1.5vw;margin-top: 0.5vw">为医学界提供支持</div>
                        <div style="margin-top: 0.5vw;color: #8a8a8a;font-size: 1vw">国内知名医学解刨专家指导,提供一流的医学服务，全国首家3D医学模型试点单位，为解决医疗行业，提供全新的解决方案和服务。</div>
                        <div style="margin-top: 1vw;color: #8a8a8a;font-size: 1vw">为医学打造模型</div>
                    </el-card>
                    <el-card style="height: auto;width: 30%;margin: 0 auto;">
                        <img src="http://www.vesal.cn:8080/vesal//public/images/fangan2.png" style="width: 100%;height: auto">
                        <div style="font-size: 1vw">公司/机构 西安**机构</div>
                        <div style="font-size: 1.5vw;margin-top: 0.5vw">为公司提供支持</div>
                        <div style="margin-top: 0.5vw;color: #8a8a8a;font-size: 1vw">解决传统公司对外演示的标本稀缺解决传统公司对外演示的标本稀缺，利用设备辅助展示 解决传统公司对外演示的标本稀缺，利用设备辅助展示</div>
                        <div style="margin-top: 1vw;color: #8a8a8a;font-size: 1vw">提升公司**</div>
                    </el-card>
                </div>
            </div>
        </div>
        <div class="aboutUsButtom">
            <img src="http://www.vesal.cn:8080/vesal/resources/nuoplus/img/test1.png" style="width: 100%;height: auto">
            <img src="http://www.vesal.cn:8080/vesal/resources/nuoplus/img/test2.png" style="width: 100%;height: auto">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
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
                aboutUsTopData:[
                    {
                        num:'80所+',
                        name:'合作院校'
                    },
                    {
                        num:'9所+',
                        name:'合作公司'
                    },
                    {
                        num:'12+',
                        name:'合作院校'
                    },
                    {
                        num:'9+',
                        name:'合作公司'
                    },
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
.aboutUs{
    margin: 40px 5vw;
    display: flex;
    flex-direction: column;
    /*background: pink;*/
    .aboutUsTop{
        margin: 50px 0 50px 0;
        display: flex;
        flex-direction: column;
        .aboutUsTop1{
            display: flex;
            font-size: 3vw;
            font-weight:bold;
            color: #333;
            text-align: center;
            margin: 15px auto;
        }
        .aboutUsTop2{
            height: 36.45vw;
            background: url("https://gw.alicdn.com/tfs/TB1J31vRXXXXXaQXVXXXXXXXXXX-1180-750.png") no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .aboutUsTop3{
                margin-top: 30px;
                div{
                    text-align: center;
                    font-size: 1.5vw;
                    margin: 5px 0;
                }
            }
            .aboutUsTop4{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 100px;
                .aboutUsTop5{
                    width: 13.02vw;
                    height: 13.02vw;
                    background: #fff;
                }
                .aboutUsTop5:nth-child(1){
                    border: 2px solid #44e2ba;
                }
                .aboutUsTop5:nth-child(2){
                    border: 2px solid #fcd37c;
                }
                .aboutUsTop5:nth-child(3){
                    border: 2px solid #bd90ed;
                }
                .aboutUsTop5:nth-child(4){
                    border: 2px solid #42bafa;
                }
            }
        }

    }
    .aboutUsMid{
        height: auto;
        .aboutUsMid1{
            .title{
                font-size: 2.5vw;
                font-weight:bold;
            }
            color: #333;
            text-align: center;
            margin: 15px 0;
        }
        .aboutUsMid2{
            .title{
                font-size: 2.5vw;
                font-weight:bold;
                color: #333;
                text-align: center;
            }
            margin: 5vw 0;
        }
    }

}
</style>

<style>
    .el-tabs__item.is-left{
        height: 25% !important;
    }

    .el-tabs__item{
        font-size: 1.25vw !important;
        line-height: 2em !important;
        padding: 0.8vw 1.0416vw !important;
        text-align: left !important;
        margin: auto 0 !important;
        white-space:normal;
    }

    .el-tabs__header.is-left{
        width: 35%;
    }

    .el-tabs__nav.is-left{
        height: 100% !important;
    }

    .el-tabs__active-bar.is-left{
        width: 0.15625vw !important;
        right: auto !important;
        left: 0 !important;
    }

    .tab-right-title{
        font-size: 2vw;;
    }

    .tab-right-text{
        margin-top: 1vw;
        font-size: 1.25vw;
    }
</style>

