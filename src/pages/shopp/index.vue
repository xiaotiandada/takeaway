<template>
  <div class="shoppcontainer">
    <div class="shoppHeader">
      <div class="shoppTitle">
        <p class="shoppTitleL">美食推荐</p>
        <!--<p class="shoppTitleR">查看更多</p>-->
      </div>
    </div>
    <div class="shoppList" v-for="(item, index) in newShopp" :key="index">
      <div class="shoppListTitle">
        <div class="shoppListTitleIcon">店铺</div>
        {{item.name}}
      </div>
      <div class="shoppListDetail" v-for="(itemList, indexList) in item.shoppingList" :key="indexList">
        <div class="shoppListDetailImg">
          <img :src="itemList.shoppingImg" :alt="itemList.shoppingImgAlt">
        </div>
        <div class="shoppListDetailD">
          <p class="shoppListDetailDT">{{itemList.shoppListDetailDT}}</p>
          <p class="shoppListDetailDP">{{itemList.shoppListDetailDP}}</p>
          <p class="shoppListDetailDM">{{itemList.shoppListDetailDM}}</p>
        </div>
      </div>
    </div>

    <div :class="{shoppLoading: loadingShow}">
      <i-load-more tip="暂无数据" :loading="loadingShow" />
    </div>
  </div>
</template>

<script>
  let Fly = require('flyio/dist/npm/wx')
  let fly = new Fly()
  export default {
    data () {
      return {
        loadingShow: true,
        newShopp: []
      }
    },
    created () {
      this.getShopping()
    },
    methods: {
      getShopping () {
        let _this = this
        fly.get('https://easy-mock.com/mock/5b69315d99b4c7086b576bf0/shopping')
          .then(function (response) {
            if (response.status === 200) {
              let shopping = response.data
              _this.loadingShow = false
              _this.newShopp = shopping.data
            }
          })
          .catch(function (err) {
            _this.loadingShow = true
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
.shoppcontainer{
  height: 100%;
  background: #f4f4f4;
}
.shoppHeader{
  width: 100%;
  height: 260rpx;
  background: #0097ff;

  margin-bottom: -190rpx;

  .shoppTitle{
    width: 700rpx;
    margin: auto;
    padding-top: 10rpx;
    color: #fff;
    .shoppTitleL{
      float: left;
      font-size: 18px;
    }
    .shoppTitleR{
      float: right;
      font-size: 16px;
    }
  }
}

  .shoppList{
    width: 700rpx;
    /*height: 400rpx;*/
    background: #fff;
    -webkit-border-radius: 20rpx;
    -moz-border-radius: 20rpx;
    border-radius: 20rpx;
    margin: 20rpx auto;
    padding: 0 0 20rpx 0;
    overflow: hidden;
    .shoppListTitle{
      width: 100%;
      height: 60rpx;
      line-height: 80rpx;
      color: #494949;
      font-size: 16px;
      margin-left: 30rpx;
      .shoppListTitleIcon{
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
        margin-top: 20rpx;
      }
    }

    .shoppListDetail{
      width: 100%;
      height: 160rpx;
      margin: 20rpx 0;
      .shoppListDetailImg{
        width: 160rpx;
        height: 160rpx;
        overflow: hidden;
        float: left;
        margin-left: 30rpx;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
  }

.shoppListDetailD{
  float: left;
  width: 456rpx;
  height: 100%;
  margin-left: 30rpx;
  .shoppListDetailDT{
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 70rpx;
  }
  .shoppListDetailDP,
  .shoppListDetailDM{
    color: #717171;
    font-size: 14px;
    line-height: 40rpx;
  }
}

  .shoppLoading{
    margin-top: 220rpx;
  }

</style>
