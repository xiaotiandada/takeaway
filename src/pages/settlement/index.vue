<template>
<div class="settlementContainer">
  <div class="settlementHeader">
    <div class="settlementHeaderAddress">
      <p class="settlementHeaderAddressD">
        订单配送至:
      </p>
      <p class="settlementHeaderAddressA">
        请选择收货地址>
      </p>
    </div>

  </div>

  <div class="settlementMain">
    <i-cell-group>
      <i-cell title="我是店铺名" ></i-cell>
      <i-cell title="我是菜名"  value="23"></i-cell>
      <i-cell title="我是菜名" ></i-cell>
      <i-cell title="我是菜名" ></i-cell>
      <i-cell title="我是配送费" ></i-cell>
      <i-cell title="只有 footer 点击有效"  url="/pages/dashboard/index" only-tap-footer></i-cell>
      <i-cell title="开关">
        <switch slot="footer" checked />
      </i-cell>
    </i-cell-group>
  </div>

  <div class="settlementFooter">
    <div class="settlementFooterL">
      <p class="settlementFooterLM">
        <span class="settlementFooterLMSum">28.4元</span>
        <span class="settlementFooterLMH">|</span>
        <span class="settlementFooterLMYH">已优惠30元</span>
      </p>
    </div>
    <div class="settlementFooterR">
      去支付
    </div>
  </div>
</div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.settlementContainer{
  height: 100%;
  background: #f4f4f4;
}
  .settlementHeader{
    width: 100%;
    height: 200rpx;
    background: #0097ff;
    margin-bottom: -50rpx;
  }
  .settlementHeaderAddress{
    width: 726rpx;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    .settlementHeaderAddressD{
      line-height: 60rpx;
      font-size: 14px;
    }
    .settlementHeaderAddressA{
      line-height: 60rpx;
      font-size: 18px;
      font-weight: 500;
    }
  }
.settlementMain{
  width: 726rpx;
  height: 100%;
  margin: auto;
  -webkit-border-radius: 3rpx;
  -moz-border-radius: 3rpx;
  border-radius: 3rpx;
  overflow: hidden;
}

  .settlementFooter{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 96rpx;
    background: #3c3c3c;
    .settlementFooterL{
      height: 100%;
      float: left;
      color: #999;
      .settlementFooterLMSum{
        color: #fff;
        line-height: 96rpx;
        font-size: 18px;
        margin-left: 22rpx;
      }
      .settlementFooterLMH{
        color: #999;
        font-size: 14px;
        line-height: 96rpx;
        margin: 0 10rpx 0 16rpx;
      }
      .settlementFooterLMYH{
        color: #999;
        font-size: 14px;
        line-height: 96rpx;
      }
    }
    .settlementFooterR{
      width: 210rpx;
      height: 100%;
      background: #3190e8;
      float: right;
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 96rpx;
    }
  }
</style>
