<template>
    <div class="jiepoudynamic">
        <div class="top">
            <img class="reveal-top"  src="http://res.vesal.site/newWebsiteImg/jiepoudongtai.png" style="width: 20vw;height: auto">
            <a class="reveal-top" href="/home/dynamicMore" style="text-decoration: none;font-size: 1vw;color: #000;opacity: 0.9">查看更多</a>
        </div>

        <div class="dynamicContent">
            <el-row>
                <el-col :span="12" v-for="(cardItem,index) in dynamicData"  >
                    <el-card
                            :body-style="{ padding: '0px',marginBottom:'30px',display:'flex',flexDirection:'column',}">
                        <a class="list" :href="cardItem.web_url">
                            <img :src="cardItem.pic_url" style="width: 100%;height: 100%;cursor: pointer;transition: all 0.8s;">
                            <div style="position:absolute;left: 0;bottom: 0">
                                <div style="height: 50px;background-color:rgba(0,0,0,0.4);display: flex;align-items: center;width: 29.8vw">
                                    <p style="color: #fff;padding-left: 1vw">{{cardItem.title}}</p>
                                </div>
                            </div>
                        </a>
                    </el-card>
                </el-col>

            </el-row>

                <!--分割线-->
                <el-divider class="reveal-top"></el-divider>
                <!--分页-->
            <el-pagination
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
                dynamicData:[]
            }
        },
        created() {
            this.getDataList()
        },
        methods:{
            //监听页码值改变的事件
            handleCurrentChange(val){
                this.pagenum = val
                this.getDataList()
            },
            getDataList(){
                this.$http({
                    url: 'http://118.24.119.234:8003/vesal-jiepao-test/web/webdynamic/getDynamicList',
                    method: 'post',
                    data:{
                        'page': this.pagenum,
                        "limit":this.pagesize
                    }
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.dynamicData=data.dynamicList
                        this.total=data.dynamicCount
                    } else {
                        this.$message.error('error!')
                    }
                })

            }
    }
    }
</script>
<style scoped lang="less">
    .jiepoudynamic{
        padding:  0 17.75vw;
        .top{
            margin: 4vw 1.5vw 1vw 0.5vw;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }
        .dynamicContent{
            .list{
                /*height:13vw;*/
                position: relative;
                display: flex;
                width: 29.8vw;
                height: 13.02vw;
                overflow: hidden;
                img:hover{
                    transform: scale(1.07);
                }
                .listContent{
                    /*width: 16vw;*/
                    /*height: 10vw;*/
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
        /*background-color: red;*/

    }
    .dynamicContent .el-card__body{
        margin-bottom: 52px;
        padding: 7px !important;
    }
    .dynamicContent .el-card__body:hover{
        background-image: url("../jiepoudynamic/img/zixunxuanzhong.png");
        background-repeat: no-repeat;
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
