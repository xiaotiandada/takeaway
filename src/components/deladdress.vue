<template>
  <div class="delContainer">
    <div class="delFull">
      <div class="delContent">
        <div class="delContentTitle">
          确定删除该收货地址吗？
        </div>
        <div class="delContentButton">
          <div class="delContentButtonL" @click="closeDel">取消</div>
          <div class="delContentButtonR" @click="saveUpdate">确定</div>
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
      closeDel () {
        this.closePayFull()
        return false
      },
      saveUpdate () {
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
  .delContainer{
    height: 100%;
  }
  .delFull{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
  }
.delContent{
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
  .delContentTitle{
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
  .delContentButton{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 90rpx;
    font-size: 14px;
    text-align: center;
    line-height: 90rpx;
    .delContentButtonL{
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
      float: left;
      border-right: 1px solid #e9eaec;
      color: #495060;
    }
    .delContentButtonR{
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
