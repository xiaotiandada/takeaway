<template>
  <div class="addressAddContainer">

    <div class="addressAddContent">

      <div class="addressAddContentList">
        <i-input :value="addressUser.addressName" title="联系人" autofocus placeholder="名字" />
      </div>

      <div class="addressAddContentList">
        <i-input :value="addressUser.addressPhone" type="number" title="联系电话" placeholder="请输入手机号" />
      </div>

      <div class="addressAddContentList">
        <i-input :value="addressUser.addressDetail" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
      </div>


    </div>

    <p v-if="messageStatus" class="message">您还没有填完信息哦~</p>



    <div class="addressAddButton" @click="addressAddButton">保存地址</div>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
export default {
    computed: {
      ...mapState([
        'userAddres'
      ])
    },
    components: {
    },
    data () {
      return {
        addressUser: {
          addressName: '田某人',
          addressPhone: '15273656769',
          addressDetail: '58栋310'
        },

        messageStatus: false
      }
    },
    methods: {
      addressAddButton () {
        this.$store.dispatch('setUserAddres', this.addressUser)
        this.addressToPage()
        console.log(this.userAddres)
      },
      addressToPage () {
        let url = '/pages/address/main'
        wx.redirectTo({
          url,
          success: function () {
          },
          fail: function () {
            wx.navigateBack()
          }
        })
      }
    }
}
</script>

<style lang="less" scoped>
  .addressAddContainer{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f5f5f5;
  }
  .addressAddContent{
    background: #fff;
  }
.addressAddContentList{
  padding-top: 40rpx;
}
.message{
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  color: #0097ff;
  font-size: 14px;
}

  .addressAddButton{
    width: 690rpx;
    height: 88rpx;
    text-align: center;
    background: #0097ff;
    color: #fff;
    line-height: 88rpx;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3rpx;
    margin-top: 100rpx;
    margin-left: auto;
    margin-right: auto;
  }

</style>
