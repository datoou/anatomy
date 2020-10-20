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
                        <div style="font-size: 50px;margin: 30px 0 10px 30px">{{item.num}}</div>
                        <div style="font-size: 25px;margin-left: 30px">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutUsMid">
            <div class="aboutUsMid1">促进数字解剖在中国的普遍应用</div>
            <div class="aboutUsMid2">
                
            </div>
        </div>
        <div class="aboutUsButtom"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
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
    margin: 40px 360px;
    display: flex;
    flex-direction: column;
    /*background: pink;*/
    .aboutUsTop{
        margin: 50px 0 50px 0;
        display: flex;
        flex-direction: column;
        .aboutUsTop1{
            font-size: 45px;
            color: #333;
            text-align: center;
            margin: 15px 0;
        }
        .aboutUsTop2{
            height: 700px;
            background: url("https://gw.alicdn.com/tfs/TB1J31vRXXXXXaQXVXXXXXXXXXX-1180-750.png") no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .aboutUsTop3{
                margin-top: 30px;
                div{
                    text-align: center;
                    font-size: 19px;
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
                    width: 250px;
                    height: 250px;
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
        height: 700px;
        background: skyblue;
        .aboutUsMid1{
            font-size: 45px;
            color: #333;
            text-align: center;
            margin: 15px 0;
        }
    }

}
</style>
