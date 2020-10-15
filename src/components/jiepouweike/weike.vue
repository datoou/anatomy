<template>
    <div class="jiepouweike">
        <div class="top">
            <img class="reveal-top"  src="../jiepouweike/img/zhuanjiaweike.png">
            <a  class=" reveal-top"   href="" style="text-decoration: none">查看更多</a>
    </div>

        <div class="content">
            <el-tabs  :value="activeName"  type="card" @tab-click="handleClick">
                <el-tab-pane  :label="item.title" v-for="(item,index) in weiKeData" :key="index" :name="String(item.id)" >
<!--                    <div class="reveal-top" slot="label" >{{item.title}}</div>-->
                    <el-row >
                        <el-col  :span="12" v-for="(cardItem,index) in item.list" :key="cardItem.id+index" >
                            <el-card class="reveal-top"
                                    :body-style="{ padding: '0px',width:'574px',display:'flex',flexDirection:'column' }">
                                <img :src="cardItem.bg" class="image">
                                <div class="card_title">
                                    <div style="font-size: 24px">{{cardItem.title }}</div>
                                    <div class="card_titleInfo">
                                        <img src="../jiepouweike/img/keshi.png" style="margin: 0 21px">
                                        <span>{{cardItem.keshi}}课时</span>
                                        <img src="../jiepouweike/img/renshu.png" style="margin: 0 21px">
                                        <span>{{cardItem.renshu}}人学习</span>
                                    </div>
                                </div>
                                <div style="display: flex;justify-content: space-between" >
                                    <img :src="cardItem.zhuanjiaAvatar" style="width: 90px;height: 90px;margin-right: 22px">
                                    <div class="zhuangjia">
                                        <div class="name">{{cardItem.zhuanjiaName}}</div>
                                        <div class="info">{{cardItem.zhaunjiaInfo}}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <!--分页-->
                <el-pagination
                        class="reveal-top"
                        background
                        layout="prev, pager, next"
                        :total="total"
                        :current-page="pagenum"
                        :page-size='pagesize'
                        @current-change="handleCurrentChange">
                </el-pagination>
            </el-tabs>
            <div class="fenye">

            </div>
        </div>
    </div>
</template>

<script>
    import wow, {WOW} from 'wowjs'
    import scrollReveal from "scrollreveal";


    export default {
        mounted(){
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
            })},
        data(){
            return{
                scrollReveal: scrollReveal(),
                pagenum:1,
                pagesize:6,
                total:30,
                activeName:'1',
                weiKeData:[
                    {
                        id:1,
                        title:'解剖课',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:2,
                                bg:require('../jiepouweike/img/course2.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'人体姿势评估课程',
                                keshi:10,
                                renshu:4561,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:3,
                                bg:require('../jiepouweike/img/course2.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'人体姿势评估课程',
                                keshi:60,
                                renshu:776,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:4,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                        ]
                    },
                    {
                        id:2,
                        title:'触发点',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            }
                        ]
                    },
                    {
                        id:3,
                        title:'针灸',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:2,
                                bg:require('../jiepouweike/img/course2.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'人体姿势评估课程',
                                keshi:10,
                                renshu:4561,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                        ]
                    },
                    {
                        id:4,
                        title:'健身',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                        ]
                    },
                    {
                        id:5,
                        title:'美式整脊',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:2,
                                bg:require('../jiepouweike/img/course2.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'人体姿势评估课程',
                                keshi:10,
                                renshu:4561,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                        ]
                    },
                    {
                        id:6,
                        title:'康复',
                        list:[
                            {
                                id:1,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:2,
                                bg:require('../jiepouweike/img/course2.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'人体姿势评估课程',
                                keshi:60,
                                renshu:776,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                            {
                                id:3,
                                bg:require('../jiepouweike/img/course1.png'),
                                zhuanjiaAvatar:require('../jiepouweike/img/lizhe.png'),
                                title:'系统解剖微课',
                                keshi:23,
                                renshu:1234,
                                zhuanjiaName:'徐高磊专家',
                                zhaunjiaInfo:'人体解剖学助理实验师。本科毕业于兰州大学临床医学系，硕士毕业于郑州大学人体解剖学系。参与编写解剖学教材2部。发表核心论文10余篇。'
                            },
                        ]
                    },

                ]
            }
        },
        methods:{
            handleClick(tab, event) {
                // this.activeName = tab
                console.log(tab, event);
            },
            //监听页码值改变的事件
            handleCurrentChange(newPage){
                console.log(newPage)
                // this.pagenum = newPage
            }
        }
    }
</script>

<style scoped lang="less">

    .jiepouweike{
        padding: 0 360px;
        .top{
            margin: 76px 0 33px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }
        .content{
            /*background: pink;*/
            /*height: 1100px;*/
            .time {
                font-size: 13px;
                color: #999;
            }

            .bottom {
                margin-top: 13px;
                line-height: 12px;
            }

            .button {
                padding: 0;
                float: right;
            }

            .image {
                width: 574px;
                height: 192px;
                border-radius: 10px;
            }
            .card_title{
                display: flex;
                align-items: center;
                height: 30px;
                justify-content: space-between;
                color: #333333;
                margin: 23px 0 19px 0;
                .card_titleInfo{
                    display: flex;
                    align-items: center;
                    span{
                        font-size: 16px;
                        color: #707070;
                    }
                }

            }
            .zhuangjia{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                margin-bottom: 30px;
                .name{
                    font-size: 20px;
                }
                .info{
                    text-align: left;
                    font-size: 16px;
                    color: #B3C0D1;
                }
            }
            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }

            .clearfix:after {
                clear: both
            }

        }
    }

</style>
<style>
    .content .el-tabs--card>.el-tabs__header .el-tabs__nav{
        /*background: red;*/
        margin-left: 102px;
        border: none;
    }
    .content .el-tabs--card>.el-tabs__header{
        border-bottom: 0;
    }
    .content .el-tab-pane{
        /*background: red;*/
        padding-top: 20px;
    }
    .content .el-tabs--card>.el-tabs__header .el-tabs__item{
        width: 136px;
        background: #1292E4;
        color: #ffffff;
        font-weight: 400;
        font-size: 24px;
        margin: 0 15px 0 15px;
        border-radius: 23px;
        border-bottom: 0;
    }
    .content .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
        background: #0F2C3F;
    }
    .content .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
        box-shadow: none !important;
        border: none;
    }
    .content .el-card__body{
        margin-bottom: 52px;
        border-radius: 26px;
        padding: 7px !important;
    }
    .content .el-card__body:hover{
        background: #F2F2F2;
        cursor: pointer;
    }
    /*.content .el-tabs__content{*/
    /*    background: green !important;*/
    /*}*/
    .content .el-card__body:hover .zhuangjia .name{
        font-weight: bold;
        color: #0F2C3F;
    }
    /*.content  .el-pager li{*/
    /*    background: #fff!important;*/
    /*    border-color: #707070;*/
    /*    border-radius: 5px!important;*/
    /*}*/
    .content .el-pager li.active{
        color: black !important;
        border:2px solid #000 !important;
    }
    .content .el-pager li{
        background: #fff !important;
        border:2px solid #dbdbdb !important;
        color: #dbdbdb!important;
        width: 40px;
        height: 40px;
        font-size: 24px;
        line-height: 40px;
        border-radius: 10px!important;
        font-weight: normal;
    }
    .content .el-pagination .btn-next,.content .el-pagination .btn-prev{
        display: none;
    }

</style>
