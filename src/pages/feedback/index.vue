<template>
 <div class="feedbackContainer">
   <div class="feedback">
     <div class="feedbackTitle">联系人</div>
     <input class="feedbackInput" type="text" v-model="feedback.name" autofocus placeholder="名字">
   </div>

   <div class="feedback">
     <div class="feedbackTitle">联系电话</div>
     <input class="feedbackInput" type="number" v-model="feedback.phone" placeholder="请输入手机号">
   </div>

   <div class="feedback">
     <div class="feedbackTitle">反馈内容</div>
     <textarea class="feedbackInputTextarea" v-model="feedback.detail" placeholder="请输入反馈内容"></textarea>
   </div>
   <div class="feedbackButton" @click="feedbackButton">提交意见</div>
   <div class="feedbackMessage" v-if="feedbackStatus">反馈成功~</div>

 </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
export default {
    computed: {
      ...mapState([
        'feedbackList'
      ])
    },
    data () {
      return {
        feedback: {
          name: '',
          phone: '',
          detail: ''
        },
        feedbackStatus: false
      }
    },
    methods: {
      feedbackButton () {
        let _this = this

        this.$store.dispatch('addFeedbackList', this.feedback)

        this.feedbackStatus = true

        this.clearPageInput()

        setTimeout(function () {
          _this.feedbackStatus = false

          _this.toUserPages()
        }, 500)
      },
      clearPageInput () {
        this.feedback.name = ''
        this.feedback.phone = ''
        this.feedback.detail = ''
      },
      toUserPages () {
        let url = '/pages/user/main'
        wx.switchTab({url})
      }
    },
    onLoad () {
      this.clearPageInput()
      console.log(this.feedbackList)
    }
}
</script>

<style lang="less" scoped>
  .feedback{
    display:flex;
    min-height:80rpx;
    line-height:80rpx;
    border-bottom: 1px solid #eee;
    .feedbackTitle{
      color:#495060;
      min-width:130rpx;
      padding-right:20rpx;
      font-size:14px;
      padding-left:20px;

    }
    .feedbackInput{
      flex:1;
      line-height:1.6;
      padding:4px 0;
      min-height:22px;
      height:auto;
      font-size:14px;
      color: #495060;
      caret-color: #495060;
    }
    .feedbackInputTextarea{
      flex:1;
      height: 200rpx;
      line-height:1.6;
      padding:4rpx 10rpx 0 0;
      font-size:14px;
      color: #495060;
      caret-color: #495060;
      overflow: hidden;
    }
  }
  .feedbackButton{
    width: 690rpx;
    height: 88rpx;
    text-align: center;
    background: #0097ff;
    color: #fff;
    line-height: 88rpx;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3rpx;
    margin-top: 100rpx;
    margin-left: auto;
    margin-right: auto;
  }


  .feedbackMessage{
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.6);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10rpx 16rpx;
    -webkit-border-radius: 6rpx;
    -moz-border-radius: 6rpx;
    border-radius: 6rpx;
    color: #fff;
    font-size: 14px;
  }
</style>
