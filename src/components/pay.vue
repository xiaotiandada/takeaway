<template>
  <div class="payContainer">
    <div class="payFull">
      <div class="payContent">
        <div class="payContentTitle">
          支付成功
        </div>
        <div class="payContentButton">
          <div class="payContentButtonL" @click="blackIndex">返回首页</div>
          <div class="payContentButtonR" @click="checkOrder">查看订单</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
export default {
    computed: {
      ...mapState([
        'commdityShopping'
      ])
    },
    methods: {
      blackIndex () {
        // console.log('blackindex')
        this.closePayFull()
        wx.switchTab({
          url: '../index/main'
        })
      },
      checkOrder () {
        // console.log('checkOrder')
        this.closePayFull()
        wx.switchTab({
          url: '../order/main'
        })
      },
      closePayFull () {
        this.$emit('closePayFull', false)
        this.$store.dispatch('setCommdityShoppingClear')
      }
    }
}
</script>

<style lang="less" scoped>
  .payContainer{
    height: 100%;
  }
  .payFull{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
  }
.payContent{
  width: 540rpx;
  height: 190rpx;
  background: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -95rpx;
  margin-left: -270rpx;
  .payContentTitle{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 18px;
    color: #80848f;
    border-bottom: 1px solid #e9eaec;
  }
  .payContentButton{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 90rpx;
    font-size: 14px;
    text-align: center;
    line-height: 90rpx;
    .payContentButtonL{
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
      float: left;
      border-right: 1px solid #e9eaec;
      color: #495060;
    }
    .payContentButtonR{
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
      float: right;
      color: #2e80f0;
    }
  }
}
</style>
