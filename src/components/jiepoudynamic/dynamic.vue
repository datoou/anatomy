<template>
    <div class="jiepoudynamic">
        <div class="top">
            <img class="reveal-top"  src="../jiepoudynamic/img/jiepoudongtai.png" style="width: 20vw;height: auto">
            <a class="reveal-top" href="" style="text-decoration: none;font-size: 1vw">查看更多</a>
        </div>

        <div class="dynamicContent">
                    <el-row>
                        <el-col :span="12" v-for="(cardItem,index) in dynamicData" :key="cardItem.id+index" >
                            <el-card
                                    class="reveal-top"
                                    :body-style="{ padding: '0px',marginBottom:'10px',width:'30.47vw',display:'flex',flexDirection:'column' }">
                                <div class="list">
                                    <img :src="cardItem.bg" style="width: 10vw;height: 10vw">
                                    <div class="listContent">
                                        <div class="title">{{cardItem.title}}</div>
                                        <div class="content">{{cardItem.content}}</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                <!--分割线-->
                <el-divider class="reveal-top"></el-divider>
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
            <div class="fenye">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pagenum:1,
                pagesize:6,
                total:40,
                dynamicData:[
                    {
                        id:1,
                        bg:require('../jiepoudynamic/img/tu1.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    },
                    {
                        id:2,
                        bg:require('../jiepoudynamic/img/tu2.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    },
                    {
                        id:3,
                        bg:require('../jiepoudynamic/img/tu3.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    },
                    {
                        id:4,
                        bg:require('../jiepoudynamic/img/tu4.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    },
                    {
                        id:5,
                        bg:require('../jiepoudynamic/img/tu1.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    },
                    {
                        id:6,
                        bg:require('../jiepoudynamic/img/tu2.png'),
                        title:'系统解剖微课',
                        content:'旁白：身体腹部的肌肉在腰腹部环绕形似一条腰带，保护和稳定脊柱。当我们需要“腰带”对腹部进行支撑时，肌肉将会立刻被激活。（腹部肌肉闪烁，环绕周身如同一个腰带一样）一旦腹部前侧腹肌收紧（此时建立单腹肌收缩时脊柱活动模型，'
                    }
                ]
            }
        },
        methods:{
            //监听页码值改变的事件
            handleCurrentChange(newPage){
                console.log(newPage)
                // this.pagenum = newPage
            }
        }
    }
</script>
<style scoped lang="less">
    .jiepoudynamic{
        padding: 0 18.75vw;
        .top{
            margin: 4vw 0 33px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }
        .dynamicContent{
            .list{
                height:13vw;
                display: flex;
                align-items: center;
                img{
                    margin: 0 1.5vw;
                }
                .listContent{
                    width: 16vw;
                    height: 10vw;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-around;
                    .title{
                        width: 7.78vw;
                        height: 1.3vw;
                        font-size: 1.25vw;
                    }
                    .content{
                        width: 16vw;
                        height: 7.13vw;
                        font-size: 0.8vw;
                        text-align: left;
                        color: #B3C0D1;
                    }
                }
            }
        }
    }

</style>
<style>
    .dynamicContent .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
        box-shadow: none !important;
        border: none;
    }
    .dynamicContent .el-card__body{
        margin-bottom: 52px;
        padding: 7px !important;
    }
    .dynamicContent .el-card__body:hover{
        background-image: url("../jiepoudynamic/img/zixunxuanzhong.png");
        background-size: 30.64vw 13.77vw;
        cursor: pointer;
        border-radius: 0;
    }
    .dynamicContent .el-card__body:hover .zhuangjia .name{
        font-weight: bold;
        color: #0F2C3F;
    }

    .dynamicContent .el-pager li.active{
        color: black !important;
        border:2px solid #000 !important;
    }
    .dynamicContent .el-pager li{
        background: #fff !important;
        border:2px solid #dbdbdb !important;
        color: #dbdbdb!important;
        width: 2.5vw;
        height: 2.5vw;
        font-size: 1.25vw;
        line-height: 2.5vw;
        border-radius: 10px!important;
        font-weight: normal;
    }
    .dynamicContent .el-pagination .btn-next,.dynamicContent .el-pagination .btn-prev{
        display: none;
    }
    .dynamicContent .el-divider--horizontal{
        margin: 0 0 24px 0 !important;
    }

</style>
