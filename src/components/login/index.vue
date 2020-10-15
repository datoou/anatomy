<template>
    <div class="login">
        <div class="login_box">
            <div class="logo">
                <img src="../login/img/logo.png">
            </div>
            <div class="loginA">
                <div class="title">登录/注册</div>
                <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                    <!-- 用户名 -->
                    <el-form-item prop="username">
                        <el-input size="large" v-model="loginForm.username" placeholder="请输入您的手机号">
                            <div slot="prefix"><img src="../login/img/shouji.png"/></div>
                        </el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="password">
                        <el-input size="large" v-model="loginForm.password" type='number' placeholder="请输入验证码">
                            <div slot="prefix"><img src="../login/img/yuechi.png"/></div>
                            <div slot="suffix">
                                <span class="yzm" v-show="show" @click="getCode">获取验证码</span>
                                <span v-show="!show" class="count">{{count}}秒</span>
                            </div>
                        </el-input>
                    </el-form-item>
                    <!-- 按钮区域 -->
                    <el-form-item class="btns">
                        <el-button class="button" type="primary" @click="login">登录</el-button>
                    </el-form-item>
                    <el-form-item class="btns1">
                        <div class="accountbtn" @click="$router.push('/accountlogin')">账号密码登录</div>
                    </el-form-item>
                </el-form>
                <el-divider><span style="font-size: 18px">其他登录方式</span></el-divider>
                <div class="weixin">
                    <img src="../login/img/weixin.png" @click="$router.push('/wxlogin')"/>
                    <div style="color: #909399" >微信登录</div>
                </div>
                <div class="xianyi">
                    <div>点击登陆即表示你同意遵守</div>
                    <div class="xianyi1">《用户服务协议》</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                count: '',
                timer: null,
                // 这是登录表单的数据绑定对象
                loginForm: {
                    username: '',
                    password: ''
                },
                // 这是表单的验证规则对象
                loginFormRules: {
                    // 验证用户名是否合法
                    username: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    // 验证密码是否合法
                    password: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login() {
                this.$refs.loginFormRef.validate(valid => {
                    if (!valid) return
                    this.$message.success('登录成功')
                    this.$router.push('/home')
                })
            },
            getCode(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
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
        .logo{
            height: 76px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
        .loginA{
            height: 350px;
            /*background:yellow;*/
            margin: 43px 68px 0 68px;
            .title{
                margin-left: 10px;
                font-size: 24px;
                font-weight: bold;
            }
            .login_form {
                margin-top: 51px;
                div{
                    margin-top: 5px;
                    height: 50px;
                    line-height: 50px;
                    span{
                        font-size: 16px;
                        color: #000000;
                    }
                    .yzm:hover{
                        cursor: pointer;
                    }
                    .count:hover{
                        pointer-events: none;
                    }
                }
            }
            .weixin{
                display: flex;
                flex-direction: column;
                align-items: center;
                img:hover{
                    cursor: pointer;
                }
            }
            .xianyi{
                display: flex;
                height: 50px;
                align-items: flex-end;
                justify-content: center;
                .xianyi1{
                    color:#65A2ED;
                }
                .xianyi1:hover{
                    cursor: pointer;
                }
            }
        }
    }
    .btns {
        display: flex;
        margin-top: 50px!important;
        justify-content: center;
        .button{
            width: 448px;
            height: 69px;
            border-radius: 34px;
            font-size: 23px;
            /*background: #0094E1;*/
        }
    }
    .btns1{
        display: flex;
        justify-content: flex-end;
        .accountbtn{
            margin-top: 5px;
            border: none;
            color: #999999;
        }
        .accountbtn:hover{
            /*background: none;*/
            /*color: #000000;*/
            cursor: pointer;
        }
    }
</style>
<style>
.el-input--prefix .el-input__inner{
    font-size: 16px;
    background: none;
    border:none;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    height: 50px;
    padding-left: 40px!important;
}
.el-form-item__content{
    margin-bottom: 20px!important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
</style>
