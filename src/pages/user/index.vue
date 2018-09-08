<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <div class="userContainer">
    <div class="user">
      <div class="userImg">
        <!--<img src="/static/img/tx.png" alt="tx">-->
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="userD">
        <p class="userName">
          <open-data type="userNickName"></open-data>
          <!--<open-data type="userGender" lang="zh_CN"></open-data>-->
        </p>
        <!--<p class="userPhone">-->
          <!--<open-data type="userCountry"></open-data>-->
          <!--<open-data type="userProvince"></open-data>-->
          <!--<open-data type="userCity"></open-data>-->
        <!--</p>-->
      </div>
    </div>

    <div class="usermenu">
      <i-cell-group>
        <i-cell title="历史订单" is-link="true"  url="/pages/order/main" link-type="switchTab">
            <i-icon slot="icon" type="document_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="收货地址" is-link="true" url="/pages/address/main">
          <i-icon slot="icon" type="coordinates_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="联系我们" is-link="true" url="/pages/contactus/main">
          <i-icon slot="icon" type="group_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="联系商家" is-link="true" url="/pages/contactmerchant/main">
          <i-icon slot="icon" type="homepage_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="意见反馈" is-link="true" url="/pages/feedback/main">
          <i-icon slot="icon" type="like_fill" color="#0097ff" size="18" />
        </i-cell>
      </i-cell-group>
    </div>

    <div class="userLogIn">
      <a>退出登陆</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methosds: {
      toOrderPages () {

      }
    }
  }
</script>

<style lang="less" scoped>

  .userContainer{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #eee;
  }

  .user{
    width: 100%;
    height: 200rpx;
    background: #0097ff;
    .userImg{
      width: 120rpx;
      height: 120rpx;
      background: #e9e9e9;
      border-radius: 50%;
      margin: 40rpx 0 0 40rpx;
      float: left;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .userD{
      float: left;
      margin: 40rpx 0 0 50rpx;
      .userName{
        color: #fff;
        font-size: 20px;
        line-height: 120rpx;
      }
      .userPhone{
        color: #fff;
        font-size: 16px;
        line-height: 40rpx;
      }
    }

  }


  .usermenu{
    width: 100%;
    background: #fff;
  }

  .userLogIn{
    width: 100%;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    a{
      display: block;
      width: 100%;
      height: 80rpx;
      background: #fff;
      text-align: center;
      line-height: 80rpx;
      font-size: 16px;
      color: #f23030;
    }
  }
</style>
