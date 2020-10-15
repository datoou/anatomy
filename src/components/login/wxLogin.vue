<template>
    <div class="login">
        <div class="login_box">
            <div class="logo">
                <img src="../login/img/logo.png">
            </div>
            <div class="wxlogin">
                <img src="../login/img/erweima.png">
            </div>
            <div class="erweima">请用手机微信扫描二维码登陆</div>
            <div class="xianyi">
                <div>登陆即表示你同意遵守</div>
                <div class="xianyi1">《用户服务协议》</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wxLogin"
    }
</script>

<style scoped lang="less">
    .login{
        background:url("../../components/login/img/beijing.png") no-repeat;
        width:100%;
        height:100%;
        background-size:100% 100%;
        position:absolute;
    }
    .login_box {
        width: 608px;
        height: 680px;
        background-color: #ffffff;
        position: absolute;
        border: 2px solid #FFFFFF;
        box-shadow: 0 0 29px 0 rgba(65, 66, 66, 0.1);
        border-radius: 10px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo{
            height: 76px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
        .wxlogin{
            width: 350px;
            height: 350px;
            margin-top: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                border: 10px solid #E6E6E6;
            }
        }
        .erweima{
            font-size: 24px;
            margin-top: 35px;
        }
        .xianyi{
            display: flex;
            height: 50px;
            align-items: flex-end;
            justify-content: center;
            margin-top: 28px;
            .xianyi1{
                color:#65A2ED;
            }
            .xianyi1:hover{
                cursor: pointer;
            }
        }
    }
</style>
