<template>
  <div class="order">
    <div class="orderImg">
      <img src="/static/img/ndd.png" alt="ndd">
    </div>
    <p class="orderTitle">当前没有订单！</p>
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
.order{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f4f4f4;
}
  .orderImg {
    width: 130rpx;
    height: 120rpx;
    margin: 460rpx auto 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .orderTitle{
    text-align: center;
    font-size: 16px;
    color: #aaaaaa;
    margin-top: 40rpx;
  }
</style>
