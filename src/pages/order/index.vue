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
          <i-cell :title="item.commdityOrderName">
            <i-icon
              @click="DeltoggleFull(index)"
              slot="footer"
              type="delete_fill"
              color="#d9644c"
              size="18" />
            <!--<i-icon slot="footer" type="delete" color="#d9644c" />-->
          </i-cell>

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


    <div class="delOrderContainer" v-if="orderTipsMessage">
      <div class="delFull">
        <div class="delContent">
          <div class="delContentTitle">
            确定删除该订单吗？
          </div>
          <div class="delContentButton">
            <div class="delContentButtonL" @click="orderCloseDel">取消</div>
            <div class="delContentButtonR" @click="orderSaveUpdate">确定</div>
          </div>
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
    data () {
      return {
        orderTipsMessage: false,
        commdityShoppingIndex: 0
      }
    },
    computed: {
      ...mapState([
        'commdityOrder'
      ])
    },
    methods: {
      orderCloseDel () {
        this.orderToggleFull(false)
        return false
      },
      orderSaveUpdate () {
        this.$store.dispatch('delCommdityOrder', this.commdityShoppingIndex)
        this.orderToggleFull(false)
      },
      // 切换显示弹出层
      orderToggleFull (status) {
        this.orderTipsMessage = status
      },
      DeltoggleFull (index) {
        this.orderToggleFull(true)
        this.commdityShoppingIndex = index
      }
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





.delOrderContainer{
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
