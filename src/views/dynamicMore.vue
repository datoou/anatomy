<template>
    <div class="jiepoudynamic">
        <div class="top">
            <img class="reveal-top" src="../components/jiepoudynamic/img/jiepoudongtai.png" style="width: 19.7vw;height: 2.9vw">
        </div>
        <div class="dynamicContent">
            <el-row>
                <el-col :span="12" v-for="(cardItem,index) in dynamicData" >
                    <el-card
                            class="reveal-top"
                            :body-style="{ padding: '0px',marginBottom:'30px',display:'flex',flexDirection:'column', }">
                        <div class="list" >
                            <img :src="cardItem.pic_url" style="width: 50.52vw;height: 13.02vw">
                            <div style="position:absolute;">
                                <div style="height: 50px;width:30.1vw;background-color:rgba(0,0,0,0.4);display: flex;align-items: center">
                                    <p style="color: #fff;margin-left: 1vw">{{cardItem.title}}</p>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

            </el-row>

            <!--分割线-->
            <el-divider class="reveal-top"></el-divider>
            <!--分页-->
            <div style="width: 100%;justify-content: center;display: flex">
                <el-pagination
                        class="reveal-top"
                        background
                        layout="prev, pager, next"
                        :total="total"
                        :current-page="pagenum"
                        :page-size='pagesize'
                        @current-change="handleCurrentChange">
                </el-pagination>
            </div>

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
            handleCurrentChange(newPage){
                this.pagenum = newPage
                this.getDataList()
            },
            getDataList(){
                this.$http({
                    url: 'http://192.168.50.137:8003/vesal-jiepao-test/web/webdynamic/getDynamicList',
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
        padding: 0 18.75vw;
        .top{
            margin: 7vw 0 0 0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }
        .dynamicContent{
            .list{
                height:13vw;
                display: flex;
                align-items:flex-end;
                /*margin-left: 2%;*/
                /*margin-right: 2%;*/

                img{
                    /*margin: 0 1.5vw;*/
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
    }
    .dynamicContent .el-card__body{
        margin-bottom: 52px;
        padding: 7px !important;
    }
    .dynamicContent .el-card__body:hover{
        background-image: url("../components/jiepoudynamic/img/zixunxuanzhong.png");
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
