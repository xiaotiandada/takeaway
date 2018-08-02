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

    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>
    <div class="commodity">1</div>


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

    <div class="tabar">
      <i-tab-bar :current="current" fixed="true" color="#0097ff" @click="handleChange" >
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
      </i-tab-bar>
    </div>

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
    width: 90%;
    margin: 0 auto;
    background: #fff;
    border-radius: 50rpx;
    font-size: 14px;
    overflow: hidden;
  }

  .commodity{
    width: 100%;
    height: 200rpx;
    background: #d6d6d6;
    margin: 10rpx 0;
  }

  .tabar{
    width: 100%;
  }



</style>
