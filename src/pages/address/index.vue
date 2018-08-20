<template>
  <div class="addressContainer">
    <div class="addressNoList" v-if="!userAddres.length">
      <div class="addressImg">
        <img src="/static/img/address.png" alt="address">
      </div>
      <p class="addressDetail">
        您还没有地址，可以点击底部按钮新建地址
      </p>
    </div>
    <div class="addressList" v-else>
      <i-cell-group>
        <i-cell
          v-for="(item, index) in userAddres"
          :key="index"
          :title="(item.addressName) + '  ' + (item.addressPhone)"
          :label="item.addressDetail">
          <!--<i-icon slot="icon" size="18" type="brush" />-->
          <i-radio
            slot="icon"
            @change="toggleRadio(index)"
            :checked="userOrderAddres === index ? true : false "
          ></i-radio>
          <i-icon
            @click="toAddressUpdate(index)"
            slot="footer"
            size="18"
            type="brush" />
        </i-cell>
      </i-cell-group>

      <div class="addressListEmpty"></div>
    </div>

    <div class="addressAdd"  @click="addAddress">
      <div class="addressAddContent">
        <div class="addressAddContentIcon">
          <img src="/static/img/addresadd.png" alt="addresadd">
        </div>
        <div class="addressAddContentTitle">新增地址</div>
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
        'userAddres',
        'userOrderAddres'
      ])
    },
    data () {
      return {
      }
    },
    methods: {
      addAddress () {
        let url = '/pages/addressAdd/main'
        wx.redirectTo({url})
      },
      toggleRadio (index) {
        this.$store.dispatch('setUserOrderAddres', index)
        // console.log(index)
      },
      toAddressUpdate (index) {
        // console.log(index)
        let url = '../addressUpdate/main?index=' + index
        wx.redirectTo({url})
      }
    }
}
</script>

<style lang="less" scoped>
  .addressContainer{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f5f5f5;
  }
  .addressNoList{
    width: 100%;
    margin-top: 440rpx;
    .addressImg {
      width: 128rpx;
      height: 108rpx;
      margin: auto;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .addressDetail{
      width: 100%;
      height: 40 rpx;
      line-height: 40rpx;
      color: #ababab;
      font-size: 16px;
      text-align: center;
      margin-top: 40rpx;
    }
  }

  .addressList{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .addressListEmpty{
    width: 100%;
    height: 100rpx;
    background: #f5f5f5;
  }

  .addressAdd{
    width: 100%;
    height: 100rpx;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 100rpx;
    .addressAddContent{
      width: 180rpx;
      height: 100%;
      text-align: center;
      margin: auto;
      color: #0097ff;
      line-height: 100rpx;

      .addressAddContentIcon{
        float: left;
        width: 50rpx;
        text-align: center;
        line-height: 100rpx;
        img{
          width: 30rpx;
          height: 30rpx;
          line-height: 30rpx;
          text-align: center;
          margin-top: 35rpx;
          font-size: 14px;
        }
      }
      .addressAddContentTitle{
        float: left;
        width: 130rpx;
        font-size: 16px;
        line-height: 100rpx;
      }
    }
  }
</style>
