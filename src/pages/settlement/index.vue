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
      <i-cell :title="commdityShoppingName" ></i-cell>
      <i-cell
        v-for="(item, index) in commdityShopping"
        :key="index"
        :title="item.commodityName"
        :value="(item.commodityMoney) * (item.commoditySum)"></i-cell>
      <i-cell title="配送费" :value="  commditySumPrice < 10 ? 1 : 0  " ></i-cell>

    </i-cell-group>
  </div>

  <div class="settlementFooter">
    <div class="settlementFooterL">
      <p class="settlementFooterLM">
        <span class="settlementFooterLMSum">{{commditySumPriceYH}}元</span>
        <span class="settlementFooterLMH">|</span>
        <span class="settlementFooterLMYH">已优惠{{randomSum}}元</span>
      </p>
    </div>
    <div class="settlementFooterR" @click="payClickTest">
      去支付
    </div>
  </div>
  <pay v-if="payShow" @closePayFull="closePayFull"></pay>
</div>
</template>

<script>
  import _ from 'lodash'
  import pay from '@/components/pay'
  import {
    mapState
  } from 'vuex'
export default {
    components: {
      pay
    },
    computed: {
      ...mapState([
        'commdityShoppingName',
        'commdityShopping',
        'commdityOrder'
      ]),
      // 实际价格
      commditySumPrice () {
        let commditySumPrice = 0
        _.forEach(this.commdityShopping, function (value, key) {
          commditySumPrice += (value.commodityMoney * value.commoditySum)
        })

        if (commditySumPrice < 10) {
          commditySumPrice += 1
        }
        return commditySumPrice
      },

      // 优惠价格
      commditySumPriceYH () {
        let commditySumPriceYH = this.commditySumPrice
        if (this.randomSum > commditySumPriceYH) {
          this.randomSum = 0
        } else {
          commditySumPriceYH -= this.randomSum
        }

        return commditySumPriceYH
      }
    },
    data () {
      return {
        randomSum: _.random(1, 10),
        payShow: false,
        commdityOrders: {
          commdityOrderName: '',
          commdityOrderShopping: [],
          commdityOrderOffer: 0,
          commdityOrderActual: this.commditySumPrice,
          commdityOrderSumPrice: 0
        }
      }
    },
    methods: {
      payClickTest () {
        this.commdityOrders.commdityOrderName = this.commdityShoppingName
        this.commdityOrders.commdityOrderShopping = this.commdityShopping
        this.commdityOrders.commdityOrderOffer = this.randomSum
        this.commdityOrders.commdityOrderActual = this.commditySumPrice
        this.commdityOrders.commdityOrderSumPrice = this.commditySumPriceYH
        this.$store.dispatch('setCommdityOrder', this.commdityOrders)
        // this.commdityOrders.commdityOrderName = ''
        // this.commdityOrders.commdityOrderShopping = []
        this.payShow = true
        console.log(this.commdityOrder)
      },
      closePayFull (status) {
        this.payShow = status
      }
    }
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
