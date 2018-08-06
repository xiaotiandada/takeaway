<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <div class="container">

    <div class="headSearch">
      <div class="headSearchTitle">
        老校区用户
      </div>
      <div class="headSearchInput">
        <i-input i-class="headSeachISearch" placeholder="请输入收货人姓名" />
      </div>

    </div>

    <div class="main">
      <div class="shop">
        <div class="shopContent">
          <div class="shopContentTitle clearflx">
            <div class="sCTImg">
              <img src="/static/img/xbk.png" alt="xbk">
            </div>
            <div class="sCTDetail">
              <div class="sCTDetailTitle">
                <div class="sCTDetailTitleicon">店铺</div>
                <p>九三鸭霸王快餐(湖南应用技术学院店铺</p>
              </div>
              <div class="sCTDetailpj">
                月销9999单
              </div>
              <div class="sCTDetailm">
                10元起送|无配送费
              </div>
            </div>
          </div>

          <div class="shopLine"></div>

          <div class="shopActivity clearflx">
            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">减</div>
              <p>满30减10、满50减23、满100减50</p>
            </div>

            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">折</div>
              <p>单品定价</p>
            </div>

          </div>

          <div class="shopping">
            <div class="shoppingContent">
              <div class="shoppingContentImg">
                <img src="/static/img/xbk1.jpg" alt="xbk">
              </div>
              <p class="shoppingContentTitle">西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁</p>
              <p class="shoppingContentM"><span class="shoppingContentMA">12￥</span><span class="shoppingContentMB">22</span></p>
            </div>
            <div class="shoppingContent shopContentCenter">
              <div class="shoppingContentImg">
                <img src="/static/img/xbk3.jpg" alt="xbk">
              </div>
              <p class="shoppingContentTitle">西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁</p>
              <p class="shoppingContentM"><span class="shoppingContentMA">12￥</span><span class="shoppingContentMB">22</span></p>
            </div>
            <div class="shoppingContent">
              <div class="shoppingContentImg">
                <img src="/static/img/xbk3.jpg" alt="xbk">
              </div>
              <p class="shoppingContentTitle">西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁</p>
              <p class="shoppingContentM"><span class="shoppingContentMA">12￥</span><span class="shoppingContentMB">22</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>




    <!--<div class="userinfo" @click="bindViewTap">-->
      <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
      <!--<div class="userinfo-nickname">-->
        <!--<card :text="userInfo.nickName"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="usermotto">-->
      <!--<div class="user-motto">-->
        <!--<card :text="motto"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<form class="form-container">-->
      <!--<input type="text" class="form-control" v-model="motto" placeholder="v-model" />-->
      <!--<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />-->
    <!--</form>-->

    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->


  </div>
</template>

<script>
// import card from '@/components/card'
import MpSearch from 'mp-weui/packages/search'
export default {
  data () {
    return {
      // motto: 'Hello World',
      // userInfo: {}
      current: 'homepage'
    }
  },

  components: {
    // card,
    MpSearch
  },

  methods: {
    handleChange (key) {
      console.log(key)
      this.current = 'group'
    }
    // bindViewTap () {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // }
    // },

    // created () {
    //   // 调用应用实例的方法获取全局数据
    //   this.getUserInfo()
    // }

  }
}
</script>

<style scoped>

  .clearflx:after{
    content: '';
    width: 0;
    height: 0;
    clear: both;
    display: block;
  }


  .headSearch{
    width: 100%;
    background: #0097ff;
    padding: 10rpx 0 20rpx 0;
  }

  .headSearch .headSearchTitle {
    color: #fff;
    text-align: center;
    line-height: 2;
    margin-bottom: 10rpx;
    font-size: 16px;
  }

  .headSearch .headSearchInput{
    width: 690rpx;
    margin: auto;
    background: #fff;
    border-radius: 50rpx;
    font-size: 14px;
    overflow: hidden;
  }

  .main{
    width: 100%;
    height: 2000rpx;
    margin: 100rpx auto 0;
  }

  .shop{
    width: 100%;
    height: 650rpx;
    margin: auto;
    border-top: 1rpx solid #eee;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .shop .shopContent{
    width: 690rpx;
    height: 100%;
    margin: auto;
  }

  .shopContentTitle{
    width: 680rpx;
    margin-top: 30rpx;

  }

  .shopContentTitle .sCTImg {
    width: 130rpx;
    height: 130rpx;

    overflow: hidden;
    margin-right: 20rpx;

    float: left;

  }
  .shopContentTitle .sCTImg img{
    width: 100%;
    height: 100%;
  }
  .shopContentTitle .sCTDetail {
    width: 530rpx;
    height: 130rpx;

    float: left;

  }


  .shopContentTitle .sCTDetail .sCTDetailTitleicon {
    height: 40rpx;
    padding: 0 6rpx;
    background: #ffe142;
    float: left;
    font-size: 12px;
    color: #52250a;
    text-align: center;
    line-height: 40rpx;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-right: 12rpx;
  }
  .shopContentTitle .sCTDetailTitle p {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 40rpx;
  }

  .shopContentTitle .sCTDetail .sCTDetailpj,
  .shopContentTitle .sCTDetail .sCTDetailm{
    color: #717171;
    font-size: 14px;
    line-height: 40rpx;
  }

  .shopContentTitle .sCTDetail .sCTDetailpj {
    margin-top: 10rpx;
  }

  .shopLine{
    width: 100%;
    height: 1rpx;
    background: #eee;
    margin-top: 12rpx;
  }
  .shopActivity{
    width: 100%;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
  }

  .shopActivityicon{
    margin: 10rpx 0;
  }

  .shopActivityicon .shopActivityiconJ{
    width: 30rpx;
    height: 30rpx;
    background: #f07373;
    float: left;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 30rpx;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  .shopActivity p {
    margin: 0 0 0 14rpx;
    padding: 0;
    font-size: 12px;
    color: #666;
    float: left;
    line-height: 30rpx;
  }
  .shopping{
    width: 100%;
    height: 340rpx;
    margin-top: 20rpx;
  }

  .shopping .shoppingContent{
    width: 216rpx;
    height: 340rpx;
    border: 1rpx solid #eee;
    float: left;

  }
.shopContentCenter{
  margin: 0 15rpx;
}

  .shoppingContentImg{
    width: 216rpx;
    height: 216rpx;
    background: #a7a7a7;
    overflow: hidden;
  }

  .shoppingContentImg img {
    width: 100%;
    height: 100%;
  }

  .shoppingContentTitle{
    color:#333;
    font-size:12px;
    margin:0 0 0 18rpx;
    padding:0;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .shoppingContentM {
    margin: 0;
    padding: 0;
  }
  .shoppingContentM .shoppingContentMA{
    color:#ff5339;
    font-size:18px;
    margin:0 0 0 18rpx;
  }

  .shoppingContentM .shoppingContentMB{
    color:#6b6b6b;
    font-size:12px;
    margin: 0;
    padding: 0;
    text-decoration: line-through;
  }
</style>
