<template>
  <div class="ordercontainer">
    <div class="orderNoList" v-if="!commdityOrder.length">
        <div class="orderImg">
          <img src="/static/img/order.png" alt="ndd">
        </div>
        <p class="orderTitle">当前没有订单！</p>
    </div>

    <div class="orderList" v-else>
      <div class="orderListBlock"
      v-for="(item, index) in commdityOrder"
      :key="index">
        <i-cell-group>
          <i-cell :title="item.commdityOrderName"></i-cell>

            <i-cell
              v-for="(itemChild, indexChild) in item.commdityOrderShopping"
              :key="indexChild"
              :title="itemChild.commodityName"
              :value=" (itemChild.commodityMoney) + ' * ' + (itemChild.commoditySum) + ' = ' + (itemChild.commodityMoney * itemChild.commoditySum)  ">

            </i-cell>

          <i-cell title="配送费" :value="item.commdityOrderActual < 10 ? 1 : 0"></i-cell>
          <i-cell title="优惠金额" :value="item.commdityOrderOffer"></i-cell>
          <i-cell title="需要支付" :value="item.commdityOrderActual"></i-cell>
          <i-cell title="实际支付" :value="item.commdityOrderSumPrice"></i-cell>
          <i-cell title="配送地址"
                  :value="item.commdityOrderUserAddress.phone"
                  :label="item.commdityOrderUserAddress.name +','+item.commdityOrderUserAddress.address"></i-cell>
        </i-cell-group>
      </div>

    </div>



  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        'commdityOrder'
      ])
    }
  }
</script>

<style lang="less" scoped>
.ordercontainer{
  height: 100%;
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
.orderList{
  background: #f4f4f4;
  padding-bottom: 100rpx;
}
.orderListBlock{
  width:700rpx;
  margin:20rpx auto;
  border-radius:20rpx;
  overflow:hidden;
}
</style>
