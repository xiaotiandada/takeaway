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

    <div class="banner">
      <img src="/static/img/banner.png" alt="banner">
    </div>

    <div class="menu">
      <div class="menuContent">
        <div class="menuContentList">
          <img src="/static/img/gssc.png" alt="gssc">
        </div>
        <div class="menuContentList">
          <img src="/static/img/xlqg.png" alt="xlqg">
        </div>
        <div class="menuContentList">
          <img src="/static/img/qbms.png" alt="qbms">
        </div>
      </div>
    </div>

    <div class="main">
      <div class="shop" v-for="(item, index) in merchant" :key="index">
        <div class="shopContent">
          <div class="shopContentTitle clearflx">
            <div class="sCTImg">
              <img :src="item.logo" :alt="item.logoalt">
            </div>
            <div class="sCTDetail">
              <div class="sCTDetailTitle">
                <div class="sCTDetailTitleicon">店铺</div>
                <p>{{item.title}}</p>
              </div>
              <div class="sCTDetailpj">
                {{item.sales}}
              </div>
              <div class="sCTDetailm">
                {{item.distribution}}
              </div>
            </div>
          </div>

          <div class="shopLine"></div>

          <div class="shopActivity clearflx">
            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">减</div>
              <p>{{item.less}}</p>
            </div>

            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">折</div>
              <p>{{item.fold}}</p>
            </div>

          </div>

          <div class="shopping">
            <div class="shoppingContent" v-for="(itemShoop, itemIndex) in item.shopping" :key="itemIndex">
              <div class="shoppingContentImg">
                <img :src="itemShoop.shoopingImg" :alt="item.shoopimgAlt">
              </div>
              <p class="shoppingContentTitle">{{itemShoop.shoopingTitle}}</p>
              <p class="shoppingContentM"><span class="shoppingContentMA">{{itemShoop.shoopingMa}}￥</span><span class="shoppingContentMB">{{itemShoop.shoopingMb}}</span></p>
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
export default {
  data () {
    return {
      // motto: 'Hello World',
      // userInfo: {}
      merchant: [
        {
          logo: '/static/img/xbk.png',
          logoalt: 'logo',
          title: '九三鸭霸王快餐(湖南应用技术学院店铺',
          sales: '月销9999单',
          distribution: '10元起送|无配送费',
          less: '满30减10、满50减23、满100减50',
          fold: '单品定价',
          shopping: [
            {
              shoopingImg: '/static/img/xbk1.jpg',
              shoopimgAlt: 'shoopimgalt',
              shoopingTitle: '西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁',
              shoopingMa: '12',
              shoopingMb: '22'
            },
            {
              shoopingImg: '/static/img/xbk1.jpg',
              shoopingTitle: '西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁',
              shoopingMa: '12',
              shoopingMb: '22'
            },
            {
              shoopingImg: '/static/img/xbk1.jpg',
              shoopingTitle: '西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁西瓜汁',
              shoopingMa: '12',
              shoopingMb: '22'
            }
          ]
        }
      ]
    }
  },

  components: {
    // card
  },

  methods: {
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


  .banner{
    width: 100%;
    height: 320rpx;
    overflow: hidden;
  }

  .banner img{
    width: 100%;
    height: 100%;
  }

  .menu{
    width: 100%;
    height: 280rpx;
    background: #fff;
    margin: 10rpx 0 20rpx 0;
  }

  .menu .menuContent {
    width: 690rpx;
    height: 216rpx;
    margin: 30rpx auto 0;
  }

  .menu .menuContent .menuContentList{
    width: 216rpx;
    height: 216rpx;
    float: left;
    overflow: hidden;
  }
  .menu .menuContent .menuContentList:nth-child(2){
    margin: 0 21rpx;
  }

  .menu .menuContent .menuContentList img {
    width: 216rpx;
    height: 216rpx;
  }

  .main{
    width: 100%;
    margin: auto;
  }

  .shop{
    width: 100%;
    height: 650rpx;
    margin: auto;
    border-top: 1rpx solid #eee;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    background: #fff;
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
.shoppingContent:nth-child(2){
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
