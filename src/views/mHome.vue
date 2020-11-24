<template>
    <div style="">
        <!--                顶部导航切换-->
        <div v-bind:style="{position: 'absolute',left: 0,top: 0,right:0,}">
            <div v-bind:style="{display: 'flex',justifyContent:'space-between'}">
                <div style="width: 80px;z-index: 3;padding-left: 5%;" v-if="showWhite == true">
                    <img src="../components/mHome/img/MVesalLogo.png"
                         style="width: 100%;height: auto;padding-top: 20px;" />
                </div>

                <div style="width: 80px;z-index: 3;padding-left: 5%;" v-if="showWhite == false">
                    <img src="../components/mHome/img/MVesalLogo2.png"
                         style="width: 100%;height: auto;padding-top: 20px;" />
                </div>

                <img src="../components/mHome/img/more.png"
                     style="width: 25px;height: 100%;padding-top: 20px;padding-right: 5%;z-index: 3"
                     @click="more()" v-if="showWhite == true"/>
                <img src="../components/mHome/img/more2.png"
                     style="width: 25px;height: 100%;padding-top: 20px;padding-right: 5%;z-index: 3"
                     @click="more()" v-if="showWhite == false"/>

                <van-overlay :show="show" @click="show = false" z-index="2">
                    <div v-bind:style="{height:windowHeight,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#0D2637',opacity: 0.8 }"
                         @click="show = false">
                        <div style="text-align: center;line-height: 12vw" @click.stop>
                            <p v-bind:style="{color: '#FFFFFF',opacity: opacityMethod(item.navId),fontSize: '4vw',fontWeight: 'bold',letterSpacing: '0.4vw'}" v-for="(item,index) in this.navData" :key="index"
                               @click="changeNav(item.navId)">
                                {{item.navName}} </p>
                        </div>
                    </div>
                </van-overlay>
            </div>
        </div>
        <van-swipe v-bind:style="{height: windowHeight,}" vertical @change="swiperOnChange" ref="swipeIndex" indicator-color="#1292E4">
            <van-swipe-item style="background-color: #0D1D2A">
                <img src="../components/mHome/img/tuan.png"
                     style="width: 100%;height: 100%"/>
            </van-swipe-item>

            <van-swipe-item>
                <div>
                    <van-swipe indicator-color="#1292E4">
                        <van-swipe-item v-for="(item,index) in appData" :key="index">
                            <!--                            产品介绍轮播图-->
                            <div v-bind:style="{width:'100%',height: windowHeight,}">
                                <div style="height: 74vw;">
                                    <img :src="item.app_pic_url"
                                         style="width: 100%;height: auto"/>
                                </div>
                                <div style="padding-left: 4vw;padding-right: 9.5vw;">
                                    <p style="color: #000000;font-size: 4.5vw;font-weight: 600;opacity: 0.9;letter-spacing: 0.4vw;margin-top: 2vw">
                                        {{item.app_name}}</p>
                                    <p style="color: #000000;font-size: 3.5vw;font-weight: 500;opacity: 0.9;margin-top: 3vw">
                                        {{item.app_introduction}}</p>
                                    <p style="color: #000000;opacity: 0.6;font-weight: 500;display: block;margin-top: 2vw;line-height: 6vw;font-size: 3.2vw;text-align:justify;">
                                        {{item.app_details}}</p>
                                </div>
                                <div style="display: flex;flex-direction: row;justify-content:space-between;position: absolute;left: 21vw;right:21vw;bottom: 15vw;">
                                    <a style="width: 25vw;height: auto" :href="item.download_url">
                                        <img src="../components/mHome/img/AppleStore.png"
                                             style="width: 100%;height: 100%">
                                    </a>
                                    <a style="width: 25vw;height: auto" :href="item.download_url">
                                        <img src="../components/mHome/img/AndroidStore.png"
                                             style="width: 100%;height: 100%">
                                    </a>
                                </div>
                            </div>
                        </van-swipe-item>

<!--                        <template #indicator>-->
<!--                            <div style="position: absolute;">-->
<!--                                {{ current + 1 }}/4-->
<!--                            </div>-->
<!--                        </template>-->
                    </van-swipe>
                </div>

            </van-swipe-item>

            <van-swipe-item>
                <div v-bind:style="{width:'100%',height: windowHeight,}">
                    <img src="../components/mHome/img/Mlaoshi.png"
                         style="width: 100%;height: auto"/>
                    <p style="text-align: center;color: #0F2C3F;font-size: 20px;margin-top: 2.5vw;margin-bottom: 3vw;font-weight: 600">
                        解剖微课</p>
                    <van-swipe :autoplay="3000" indicator-color="#1292E4">
                        <van-swipe-item v-for="(item,index) in swipeData" :key="index">
                            <img :src="item.mobile_pic_url"
                                 style="width: 92%;height: auto;margin-left: 4%"/>
                        </van-swipe-item>

                    </van-swipe>
                    <div style="padding-left: 5vw;padding-right: 5vw;margin-top: 5vw">
                        <p style="color: #000000;font-size: 4.5vw;font-weight: 600;opacity: 0.9;letter-spacing: 0.4vw;margin-top: 2vw">
                            名师精讲 深入浅出</p>
                        <p style="color: #000000;opacity: 0.6;font-weight: 500;display: block;margin-top: 2vw;line-height: 6vw;font-size: 3.2vw;text-align:justify;">
                            维萨里微课均由行业浸润多年的大咖联合创作，针对性解决学生/医生/医学从业者学习解剖及其他内容中遇到的主要问题，内容具体，丰富详尽。</p>
                    </div>
                    <div style="display: flex;flex-direction: row;padding-left: 4vw;padding-right: 4vw;padding-top: 6vw">
                        <div style="margin-right: 7vw;align-items: center;display: flex;flex-direction: column">
                            <div style="width: 8vw;">
                                <img src="../components/mHome/img/mingshijiangjie.png"
                                     style="width: 100%;height: auto"/>
                            </div>
                            <p style="font-size: 3.2vw;margin-top: 2vw;font-weight: 500;color: #000">名师讲解</p>
                        </div>

                        <div style="margin-right: 7vw;align-items: center;display: flex;flex-direction: column">
                            <div style="width: 8vw;">
                                <img src="../components/mHome/img/zhenrenmote.png"
                                     style="width: 100%;height: auto"/>
                            </div>
                            <p style="font-size: 3.2vw;margin-top: 2vw;font-weight: 500;color: #000">真人模特</p>
                        </div>

                        <div style="margin-right: 7vw;align-items: center;display: flex;flex-direction: column">
                            <div style="width: 8vw;">
                                <img src="../components/mHome/img/yinanfuzhu.png"
                                     style="width: 100%;height: auto"/>
                            </div>
                            <p style="font-size: 3.2vw;margin-top: 2vw;font-weight: 500;color: #000">疑难辅助</p>
                        </div>
                        <div style="margin-right: 7vw;align-items: center;display: flex;flex-direction: column">
                            <div style="width: 8vw;">
                                <img src="../components/mHome/img/hangyejiaoliu.png"
                                     style="width: 100%;height: auto"/>
                            </div>
                            <p style="font-size: 3.2vw;margin-top: 2vw;font-weight: 500;color: #000">行业交流</p>
                        </div>
                    </div>
                </div>

            </van-swipe-item>

            <van-swipe-item>
                <div style="width: 100%;height: 100%;display: flex;align-items: center;">
                    <div>
                        <img src="../components/mHome/img/fuwu.png"
                             style="width: 100%;height: auto;"/>
                    </div>
                </div>
            </van-swipe-item>

            <van-swipe-item>
                <div style="position: absolute;z-index: -999">
                    <img src="../components/mHome/img/Mguanyudi.png" style="width: 100%;height: auto">
                </div>
                <img src="../components/mHome/img/Mjieshao.png" style="width: 100%;height: auto;padding-top: 15.5vw"/>
                <div style="position: relative;left:0;bottom: 70px;">
                    <div style="display: flex;justify-content: center;width: 100%;align-items: center" @click="showPartners()" >
                        <img src="../components/mHome/img/Mqiyehezuo.png" style="width: 40vw;height: auto;"/>
                    </div>
                </div>
                <div style="display: flex;flex-direction: row;margin-left: 3.5vw;margin-right: 3.5vw;margin-top: -10vw">
                    <div style="width: 100%">
                        <span style="font-size: 3.8vw;opacity: 0.9">联系我们</span><br>
                        <span style="font-size:7px;opacity: 0.7;">工作地址:陕西省西安市长安区韦曲街办兴龙花园5幢312室。</span>
                        <span style="font-size: 7px;opacity: 0.7;">电话：029-68579950 微信客服：15619045028</span><br>
                        <span style="font-size: 7px;opacity: 0.7;">@2017 -2020 西安维萨里数字科技有限责任公司版权所有。</span>
                        <a style="font-size: 7px;opacity: 0.7;color: #2d9afa" href="http://www.beian.gov.cn/portal/index.do">陕ICP备17006533号-1</a>
                    </div>
                    <div style="display: flex;flex-direction: column;width: 45%;align-items: center;justify-content: flex-end">
                        <img src="../components/mHome/img/Merweima.png"
                             style="width:70px;height: 70px"/>
                        <span style="font-size: 2vw;opacity: 0.6;">维萨里官方微信客服</span>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>

        <van-overlay :show="inputPartners" @click="inputPartners = false" z-index="5">
            <div v-bind:style="{height:windowHeight,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(0,0,0,0.6)',flexDirection: 'column' }"
                 @click="inputPartners = false">
                <div style="text-align: center;background-color: #fff;z-index: 999;width: 300px;height: 400px;border-radius: 15px" @click.stop>
                    <p style="color: #000;font-size: 4vw;font-weight: bold;padding-top: 20px">我要申请成为合作伙伴</p>
                    <div style="display: flex;flex-direction: column;">
<!--                        姓名-->
                      <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                          <span style="color: red;font-size: 4vw;">*</span>
                          <span style="color: #000;font-size: 4vw;margin-left: 1vw">姓名</span>
                          <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 10vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                              <input v-model="fromdata.name" type="text"  name="fname" placeholder="请输入您的姓名" class="inputPhone" />
                          </div>
                      </div>
<!--手机-->
                        <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                            <span style="color: red;font-size: 4vw;">*</span>
                            <span style="color: #000;font-size: 4vw;margin-left: 1vw">手机</span>
                            <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 10vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                                <input v-model="fromdata.tell" type="text" id="phone" name="fname" placeholder="请输入你的手机号码" class="inputPhone" maxlength="11" />
                            </div>
                        </div>
<!--行业-->
                        <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                            <span style="color: red;font-size: 4vw;">*</span>
                            <span style="color: #000;font-size: 4vw;margin-left: 1vw">住址</span>
                            <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 10vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                                <input v-model="fromdata.address" type="text"  name="fname" placeholder="请输入您的住址" class="inputPhone" maxlength="11" />
                            </div>
                        </div>
<!--                        城市-->
                        <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                            <span style="color: red;font-size: 4vw;">*</span>
                            <span style="color: #000;font-size: 4vw;margin-left: 1vw">城市</span>
                            <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 10vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                                <input v-model="fromdata.city" type="text"  name="fname" placeholder="请输入您所在的城市（西安/武汉）" class="inputPhone" maxlength="11" />
                            </div>
                        </div>
<!--组织-->
                        <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                            <span style="color: #000;font-size: 4vw;margin-left: 1vw">组织</span>
                            <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 10vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                                <input v-model="fromdata.orgName" type="text" name="fname" placeholder="请输入你的组织名称" class="inputPhone" maxlength="11" />
                            </div>
                        </div>

<!--描述                        -->
                        <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;margin-top: 3vw">
                            <span style="color: #000;font-size: 4vw;margin-left: 1vw">描述</span>
                            <div style="border: solid 0 #EEEEEE;background-color: #EEEEEE;width: 187px;height: 15vw;align-items: center;display:flex;border-radius: 5px;margin-left: 2vw">
                                <textarea v-model="fromdata.remark"  type="text"  name="fname" placeholder="补充 主营业务/规模大小等" class="inputPhone" maxlength="11" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center;background-color: #1292E4;z-index: 999;width: 300px;height: 40px;border-radius: 5px;margin-top: 5vw;align-items: center;display: flex" @click.stop="addPartner">
                    <p style="color: #fff;font-size: 4vw">申请成为合伙人</p>
                </div>
            </div>
        </van-overlay>

    </div>
</template>

<script>
    export default {
        name: "mHome",
        data() {
            return {
                windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
                windowHeight: document.documentElement.clientHeight + 'px',  //实时屏幕高度
                show: false,
                showWhite: true,
                inputPartners:false,
                swipeData:[],
                appData: [],
                tempIndex: '',
                fromdata: {
                },
                text: '',
                selectedIndex: '0',
                navData:[
                    {
                        'navName':'首页',
                        'navId':0,
                    },{
                        'navName':'产品介绍',
                        'navId':1,
                    },{
                        'navName':'解剖微课',
                        'navId':2,
                    },{
                        'navName':'用户服务',
                        'navId': 3,
                    },{
                        'navName':'企业合作',
                        'navId':4,
                    }
                ]

            }
        },
        created() {
            this.getWKSwipe()
            this.getAppData()

        },
        methods: {
            swiperOnChange(index) {
                this.selectedIndex = index
                if (index == 3 || index == 4) {
                    this.showWhite = false;
                    this.tempIndex = index
                }else{
                    this.showWhite = true
                }
            },
            more() {
                if(this.tempIndex == 3 || this.tempIndex ==4){
                    this.show = true;
                    this.showWhite = true
                }else{
                    this.show = true;
                }
            },
            showPartners(){
                this.inputPartners = true;
            },
            opacityMethod(id){
                if(this.selectedIndex == id){
                    return '1'
                }else{
                    return '0.4'
                }

            },
            changeNav(index){
                this.$refs.swipeIndex.swipeTo(index)
                this.show = false
            },
            getWKSwipe(){
                this.$http({
                    url: 'http://118.24.119.234:8003/vesal-jiepao-test/web/webapp/getMobileAppPic',
                    method: 'get',
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.swipeData = data.mPicDate
                    } else {
                        this.$message.error('error!')
                    }
                })

            },
            getAppData(){
                this.$http({
                    url: 'http://118.24.119.234:8003/vesal-jiepao-test/web/webapp/getMobileAppData',
                    method: 'get',
                }).then(({data}) => {
                    if (data && data.code === 0) {
                        this.appData = data.mAppDate
                    } else {
                        this.$message.error('error!')
                    }
                })

            },
            addPartner () {
                if (!(/^1[3456789]\d{9}$/.test(this.fromdata.tell))) {
                    this.$message.error("请输入正确手机号码")
                } else {
                    this.$http({
                        url: 'http://118.24.119.234:8003/vesal-jiepao-test/web/webapp/webAddRecruiting',
                        method: 'post',
                        data:this.fromdata
                    }).then(({data}) => {
                        if (data && data.code === 0) {
                            this.$message.success('success!')
                        } else {
                            this.$message.error('error!')
                        }
                    })
                }
            },
        }
    }
</script>

<style>
    input::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.5)
    }
    .inputPhone {
        text-align: left;
        color: #000000;
        font-size: 2vw;
        border: none;
        height: 30px;
        margin-left: 2vw;
        background-color: #EEEEEE;
        /* 取消input 输入时有边框; */
        outline: none;
        width: 100%
    }

    p {
        margin: 0 auto;
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }

.van-swipe__indicator{
    background-color: #000;
    width: 8px;
    height: 8px;
}
    .van-swipe__indicators--vertical{
        right:12px;
        left: 96%;
    }

</style>
