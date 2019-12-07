<template>
    <div>
        <drag-verify
                class="margin"
                :width="width"
                :height="height"
                :text="text"
                :success-text="successText"
                :background="background"
                :progress-bar-bg="progressBarBg"
                :completed-bg="completedBg"
                :handler-bg="handlerBg"
                :handler-icon="handlerIcon"
                :text-size="textSize"
                :success-icon="successIcon"
                ref="Verify"
                @passcallback="dragHandle"
        >
        </drag-verify>
    </div>
</template>

<script>
    import 'font-awesome/css/font-awesome.min.css'
    import dragVerify from 'vue-drag-verify'
    export default {
        components:{
            dragVerify
        },
        methods:{
            dragHandle(){
                if (this.$refs.Verify.isPassing){
                   this.$emit('changeDrag')
                }
            }
        },
        data () {
            return {
                handlerIcon: "fa fa-angle-double-right",
                successIcon: "fa fa-check",
                background: "#cccccc",
                progressBarBg: "#4b0",
                completedBg: "#66cc66",
                handlerBg: "#fff",
                text: "请将滑块拖动到右侧",
                successText: "验证成功",
                width: 314,
                height: 42,
                textSize: "18px",
                isCircle:'true'
            }
        }
    }

</script>

<style scoped lang="scss">
    $side:left;
    .margin{
        margin-#{$side}:8px;
        margin-top: 35px;
    }
</style>