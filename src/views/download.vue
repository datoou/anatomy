<template>
    <div class="download">
        <div class="appDownload">
            <div style="font-size: 25px;font-weight:500;margin: 10px 0 10px 80px;">APP下载</div>
            <div style="color: #707070;margin-left: 80px">请到手机应用商店（小米应用商店、vivo应用市场、OPPO商店、华为应用市场、应用宝等均可下载），搜索我们的应用名称即可下载</div>
            <div class="ewmDownload" >
                <div class="listItem" v-for="(item,index) in ewmDownload" :key="index">
                    <img :src="item.ewm" style="width: 120px;height: 120px">
                    <span style="margin:10px 0;color: #8a8a8a">{{item.title}}</span>
                </div>
            </div>
        </div>
        <div class="jiepouDownload">
            <div  style="font-size: 25px;font-weight:500;margin: 10px 0">解剖大师PC版下载(windows & Mac OS)</div>
            <div style="display: flex;">
                <a href="http://res.vesal.site/pc/anatomyMaster/解剖大师1.1.0.zip">
                    <div class="pcDownload">
                        <img src="http://res.vesal.site/pc/anatomyMaster/win.png" style="width: 90px;height: 90px">
                        <div style="font-size:20px;color: #707070">windows版下载</div>
                        <img src="http://res.vesal.site/newWebsiteImg/download.png">
                    </div>
                </a>
                <a href="http://res.vesal.site/pc/anatomyMaster/v120/AnatomyMasterForMac.dmg">
                    <div class="pcDownload">
                        <img src="http://res.vesal.site/pc/anatomyMaster/mac1.png" style="width: 90px;height: 90px">
                        <div style="font-size:20px;color: #707070">Mac版下载</div>
                        <img src="http://res.vesal.site/newWebsiteImg/download.png">
                    </div>
                </a>
            </div>
        </div>
        <div class="moreDownload">
            <div style="font-size: 25px;font-weight:500;margin: 10px 0">更多下载</div>
            <div style="display: flex;">
                <a href="http://fileprod.vesal.site/vesal_install1001.zip">
                    <div class="moreDownload">
                        <img src="http://res.vesal.site/newWebsiteImg/ppt.png" style="width: 90px;height: 90px">
                        <div style="font-size:20px;color: #707070">维萨里解剖3D PPT插件</div>
                        <img src="http://res.vesal.site/newWebsiteImg/download.png">
                    </div>
                </a>
                <a href="http://118.89.52.31/iosShop4.0/test/VIP_MODEL.zip">
                    <div class="moreDownload">
                        <img src="http://res.vesal.site/newWebsiteImg/ppt.png" style="width: 90px;height: 90px">
                        <div style="font-size:20px;color: #707070">PPT模型 安装包</div>
                        <img src="http://res.vesal.site/newWebsiteImg/download.png">
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ewmDownload:[
                    {
                        ewm:'http://fileprod.vesal.site//ercode/apkdownload.png',
                        title:'维萨里3D解剖',
                        path:'http://fileprod.vesal.site/app-release_background.apk'
                    },
                    {
                        ewm:'http://res.vesal.site/icon/download/jpds.png',
                        title:'解剖大师',
                        path:'http://fileprod.vesal.site/app-release_background.apk'
                    },
                    {
                        ewm:'http://res.vesal.site/icon/download/gkzj.png',
                        title:'骨科专家',
                        path:'http://fileprod.vesal.site/app-release_background.apk'
                    },
                    {
                        ewm:'http://res.vesal.site/icon/download/ydkf.png',
                        title:'运动康复训练',
                        path:'http://fileprod.vesal.site/app-release_background.apk'
                    },
                    {
                        ewm:'http://res.vesal.site/icon/download/wsljs.png',
                        title:'维萨里健身',
                        path:'http://fileprod.vesal.site/app-release_background.apk'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
.download{
    margin: 40px 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .appDownload{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        .ewmDownload{
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .listItem{
            width: 200px;
            height: 200px;
            display: flex;
            border: 1px solid #dbdbdb;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 20px;
        }
    }
    .jiepouDownload{
        margin-top: 40px;
        a{
            text-decoration: none;
        }
        .pcDownload{
            width: 500px;
            height: 150px;
            /*background: pink;*/
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border: 1px solid #dbdbdb;
            margin: 20px 20px 20px 0;
        }
        .pcDownload:hover{
            background: #f8f8f8;
        }
    }
    .moreDownload{
        margin-top: 40px;
        a{
            text-decoration: none;
        }
        .moreDownload{
            width: 500px;
            height: 150px;
            /*background: pink;*/
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border: 1px solid #dbdbdb;
            margin: 20px 20px 20px 0;
        }
        .moreDownload:hover{
            background:#f8f8f8;
        }
    }
}

</style>
