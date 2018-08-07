<template>
  <div class="shoppcontainer">
    <div class="shoppHeader">
      <div class="shoppTitle">
        <p class="shoppTitleL">购物车</p>
        <p class="shoppTitleR">管理</p>
      </div>
    </div>
    <div class="shoppList"></div>
    <div class="shoppList"></div>
    <div class="shoppList"></div>
    <div class="shoppList"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
.shoppcontainer{
  height: 100%;
  background: #f4f4f4;
}
.shoppHeader{
  width: 100%;
  height: 260rpx;
  background: #0097ff;

  margin-bottom: -172rpx;

  .shoppTitle{
    width: 700rpx;
    margin: auto;
    padding-top: 10rpx;
    color: #fff;
    .shoppTitleL{
      float: left;
      font-size: 18px;
    }
    .shoppTitleR{
      float: right;
      font-size: 16px;
    }
  }
}

  .shoppList{
    width: 700rpx;
    height: 400rpx;
    background: #fff;
    -webkit-border-radius: 20rpx;
    -moz-border-radius: 20rpx;
    border-radius: 20rpx;
    margin: 20rpx auto;
  }
</style>
