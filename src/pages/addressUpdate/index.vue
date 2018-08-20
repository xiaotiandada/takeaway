<template>
  <div class="addressAddContainer">

    <div class="addressAddContent">

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">联系人</div>
        <input class="addressAddContentListInput" type="text" v-model="addressUser.addressName" autofocus placeholder="名字">
      </div>

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">联系电话</div>
        <input class="addressAddContentListInput" type="number" v-model="addressUser.addressPhone" placeholder="请输入手机号">
      </div>

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">详细地址</div>
        <textarea class="addressAddContentListInput" v-model="addressUser.addressDetail" maxlength="30" placeholder="请输入详细地址(最多50字)"></textarea>
      </div>




    </div>

    <p v-if="messageStatus" class="message">您还没有填完信息哦~</p>


    <div class="operatorButton">
      <div class="addressAddButton del" @click="addressAddButtonLess">删除</div>
      <div class="addressAddButton save" @click="addressAddButtonSave">修改</div>
    </div>

    <div class="delContainer" v-if="tipsMessageDel">
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
          index: 0,
          addressName: '',
          addressPhone: '',
          addressDetail: ''
        },

        messageStatus: false,
        tipsMessageDel: false
      }
    },
    onLoad (option) {
      this.addressClear()
      // console.log(option.index)
      this.addressUser.index = option.index
      this.getAddress()
    },
    methods: {
      // 单击保存
      addressAddButtonSave () {
        this.$store.dispatch('updateUserAddress', this.addressUser)
        this.addressClear()
        this.addressToPage()
      },
      // 删除地址
      addressAddButtonLess () {
        this.toggleFull(true)
      },
      // 清除内容
      addressClear () {
        this.addressUser.index = 0
        this.addressUser.addressName = ''
        this.addressUser.addressPhone = ''
        this.addressUser.addressDetail = ''
      },

      // 获取地址信息
      getAddress () {
        console.log(this.userAddres)
        this.addressUser.addressName = this.userAddres[this.addressUser.index].addressName
        this.addressUser.addressPhone = this.userAddres[this.addressUser.index].addressPhone
        this.addressUser.addressDetail = this.userAddres[this.addressUser.index].addressDetail
      },
      // 页面跳转
      addressToPage () {
        let url = '/pages/address/main'
        wx.redirectTo({
          url,
          success: function () {
          },
          fail: function () {
          }
        })
      },
      // 取消删除
      closeDel () {
        this.toggleFull(false)
        return false
      },
      // 确定删除
      saveUpdate () {
        this.toggleFull(false)
        this.$store.dispatch('delUserAddress', this.addressUser.index)
        this.addressClear()
        this.addressToPage()
      },
      // 切换显示弹出层
      toggleFull (status) {
        this.tipsMessageDel = status
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
  display:flex;
  height:80rpx;
  line-height:80rpx;
  border-bottom: 1px solid #eee;
  .addressAddContentListTitle{
    color:#495060;
    min-width:130rpx;
    padding-right:20rpx;
    font-size:14px;
    padding-left:20px;

  }
  .addressAddContentListInput{
    flex:1;
    line-height:1.6;
    padding:4px 0;
    min-height:22px;
    height:auto;
    font-size:14px;
    color: #495060;
    caret-color: #495060;
  }
}
.message{
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  color: #0097ff;
  font-size: 14px;
}

.operatorButton{
  width: 690rpx;
  overflow: hidden;
  margin-top: 100rpx;
  margin-left: auto;
  margin-right: auto;
}

  .addressAddButton{
    width: 335rpx;
    height: 88rpx;
    text-align: center;
    color: #fff;
    line-height: 88rpx;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3rpx;
    float: left;
  }
  .del{
    background: #d9644c;
  }
  .save{
    background: #0097ff;
    margin-left: 20rpx;

  }



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
