<template>
<div class="commodityContainer">
  <div class="commodity">
    <img src="/static/img/cb.png" alt="cb">
    <div class="commodityLogo">
      <img src="/static/img/xbk.png" alt="xbk">
    </div>
  </div>

  <div class="commodityTitle">九三鸭霸王外卖店</div>
  <div class="commodityDetail">10元起送|免费配送</div>

  <div class="commodityList">
    点餐
  </div>

  <div class="commodityListShopp">
    <div class="commodityListShoppMenu">
      <ul>
        <!--class="active"-->
        <li @click="toggleList(index)" v-for="(item, index) in commodityList" :key="index">{{item.commodityMenu}}</li>
      </ul>
    </div>
    <div class="commodityListShoppContent">
      <div ref="commodityToggleList" class="commodityToggleList" v-for="(commodityItem, commodityIndex) in commodityList" :key="commodityIndex">
        <div class="commodityListShoppContentD" v-for="(commodityItems, commodityIndexs) in commodityItem.commodityData" :key="commodityIndexs" >
          <div class="commodityListShoppContentDImg">
            <img :src="commodityItems.commodityImg" :alt="commodityItems.commodityAlt">
          </div>
          <div class="commodityListShoppContentDD">
            <p class="commodityListShoppContentDDT">{{commodityItems.commodityName}}</p>
            <p class="commodityListShoppContentDDD">{{commodityItems.commodityDetail}}</p>
            <p class="commodityListShoppContentDDM">{{commodityItems.commodityMoney}}</p>
            <div class="commodityAdd">
              <img src="/static/img/add.png" alt="add">
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>

export default {
  data () {
    return {
      commodityIndex: 0,
      commodityList: [
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: '10元'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleList (index) {
      console.log(index)
      console.log(this.$refs.commodityToggleList)
    }
  }
}
</script>

<style lang="less" scoped>
  .commodityContainer{

  }
.commodity{
  width: 100%;
  height: 200rpx;
  position: relative;
  background: #eee;
  img{
    width: 100%;
    height: 100%;
  }
  .commodityLogo{
    position: absolute;
    width: 150rpx;
    height: 150rpx;
    top: 80rpx;
    left: 50%;
    margin:0 0 0 -75rpx;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
  .commodityTitle{
    text-align: center;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    margin-top: 64rpx;
  }
  .commodityDetail{
    text-align: center;
    color: #666666;
    font-size: 14px;
    margin-top: 20rpx;
  }

  .commodityList{
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    background: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    margin-top: 20rpx;


    text-align: center;
    color: #333;
    font-size: 16px;
  }

  .commodityListShopp{
    width: 100%;
    .commodityListShoppMenu{
      width: 154rpx;
      float: left;
      ul{
        margin: 0;
        padding: 0;
        list-style: none;
        li{
          width: 154rpx;
          height: 100rpx;
          line-height: 100rpx;
          text-align: center;
          color: #666;
          background: #f8f8f8;
          font-size: 14px;
        }
        li.active{
          background: #fff;
          color: #333;
        }
      }
    }

  }

  .commodityListShoppContent{
    width: 540rpx;
    margin-left: 20rpx;
    float: left;

.commodityToggleList{
  /*display: none;*/
}

    .commodityListShoppContentD{
      width: 100%;
      height: 190rpx;
      margin-top: 20rpx;
      margin-bottom: 40rpx;
      .commodityListShoppContentDImg{
        width: 190rpx;
        height: 190rpx;
        float: left;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .commodityListShoppContentDD{
        float: left;
        width: 330rpx;
        margin-left: 20rpx;
        position: relative;

        .commodityListShoppContentDDT{
          color: #333;
          font-size: 16px;
          font-weight: bold;
          line-height: 80rpx ;
        }
        .commodityListShoppContentDDD{
          color: #999;
          font-size: 14px;
          overflow: hidden;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 40rpx;
        }
        .commodityListShoppContentDDM{
          color: #ff5339;
          font-size: 14px;
          line-height: 70rpx;
        }
        .commodityAdd{
          width: 44rpx;
          height: 44rpx;
          overflow: hidden;
          position: absolute;
          right: 30rpx;
          bottom: 20rpx;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
