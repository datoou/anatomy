<template>
    <div class="partnerBody">
        <img src="../components/vesalservice/img/beijing.png" style="width: 100%;height: auto">
        <div class="fromCard">
            <el-card class="box-card">
                <div style="width: 100%;text-align: center;margin-bottom: 1vw;font-size: 1.4vw">我要申请成为合作伙伴</div>
                <el-form ref="fromdata" :model="fromdata" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="fromdata.name" placeholder="请选择输入您的姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input v-model="fromdata.phone" placeholder="请输入您的手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="行业">
                        <el-input v-model="fromdata.job" placeholder="请输入您的手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-input v-model="fromdata.city" placeholder="请输入您所在的城市（西安/武汉）"></el-input>
                    </el-form-item>
                    <el-form-item label="组织">
                        <el-input v-model="fromdata.organization" placeholder="请输入您的组织名称"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="fromdata.remark" placeholder="补充 主营业务/规模大小等"></el-input>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-button style="width: 31.25vw; margin-top: 4vw" type="primary" @click="">申请成为合伙人</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fromdata: {

                }
            }
        }
    }
</script>

<style>
    .partnerBody {
        margin:0;
        width: 100%;
    }

    .fromCard {
        width: 31.25vw;
        position:absolute;
        top: 10%;
        left: 50%;
        margin-left: -15.625vw;
    }

</style>
