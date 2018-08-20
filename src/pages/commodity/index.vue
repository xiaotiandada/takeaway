<template>
<div class="commodityContainer">
  <div class="commodity">
    <img src="/static/img/cb.png" alt="cb">
    <div class="commodityLogo">
      <img src="/static/img/xbk.png" alt="xbk">
    </div>
  </div>

  <div class="commodityTitle">{{commodityName}}</div>
  <div class="commodityDetail">10元起送|免费配送</div>

  <div class="commodityList">
    点餐
  </div>

  <div class="commodityListShopp">
    <div class="commodityListShoppMenu">
      <ul>
        <!--class="active"-->
        <li :class="{active: index === commodityIndexs}" @click="toggleList(index)" v-for="(item, index) in commodityList" :key="index">{{item.commodityMenu}}</li>
      </ul>
    </div>
    <div class="commodityListShoppContent">
      <div :class="{commodityToggle: commodityIndex === commodityIndexs }" class="commodityToggleList" v-for="(commodityItem, commodityIndex) in commodityList" :key="commodityIndex">
        <div @click="addCommodity(commodityItems, commodityItems.commodityName, commodityIndex, commodityIndexs)" class="commodityListShoppContentD" v-for="(commodityItems, commodityIndexs) in commodityItem.commodityData" :key="commodityIndexs" >
          <div class="commodityListShoppContentDImg">
            <img :src="commodityItems.commodityImg" :alt="commodityItems.commodityAlt">
          </div>
          <div class="commodityListShoppContentDD">
            <p class="commodityListShoppContentDDT">{{commodityItems.commodityName}}</p>
            <p class="commodityListShoppContentDDD">{{commodityItems.commodityDetail}}</p>
            <p class="commodityListShoppContentDDM">{{commodityItems.commodityMoney}}元</p>
            <div class="commodityAdd">
              <img src="/static/img/add.png" alt="add">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="commodityemtyp"></div>

  <div :class="{commodityShoppListToggle: commodityToggleShow}" class="commodityShoppList">
    <i-cell-group>

      <i-cell :title="item.commodityName" v-for="(item, index) in commdityShopping" :key="index">
        <div slot="footer">
          <div class="commodityShoppListM">{{item.commodityMoney * item.commoditySum}}元</div>
          <div class="commodityShoppListSwitch">
            <div class="commodityShoppListSwitchLess" @click="commodityShoppListSwitchLess(index)">－</div>
            <div class="commodityShoppListSwitchSum">{{item.commoditySum}}</div>
            <div class="commodityShoppListSwitchAdd" @click="commodityShoppListSwitchAdd(index)">＋</div>
          </div>
        </div>
      </i-cell>

      <i-cell title="配送费">
        <div slot="footer">
          {{commodityPrice >= 10 ? 0 : 1}}元
        </div>
      </i-cell>
    </i-cell-group>
  </div>


  <div class="commoditySum" :class="{commoditySumStatus: commoditySumShopp}" @click="commodityToggleShowList">
    <div class="commodityG" :class="{commodityGStatus: commoditySumShopp}">
      <i-icon type="publishgoods_fill" size="40" :color=" commoditySumShopp === 0 ?  '#5f5f63' : '#ffffff' " />
      <div v-if="commoditySumShopp" class="commodityGsum">{{commoditySumShopp}}</div>
    </div>
    <div class="commodityD">
      <p class="commodityDM" :class="{commodityDMStatus: commoditySumShopp }">
        {{ commoditySumShopp === 0 ? '未选购商品' :  commodityPrice + '元' }}
      </p>
      <p class="commodityDD">
        不足十元需要加一元配送费
      </p>
    </div>
    <div class="commodityM" :class="{commodityMStatus: commoditySumShopp}" @click.stop="settlement" >
        {{ commoditySumShopp === 0 ? '10元起送' : '去结算'}}
    </div>
  </div>

  <div :class="{commodityFullToggle:  commodityToggleShow }" @click="commodityToggleShowList" class="commodityFull"></div>

</div>
</template>

<script>
import _ from 'lodash'
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      commodityIndexs: 0,
      commodityToggleShow: false,
      commodityName: '九三鸭霸王外卖店',
      commodityList: [
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡1',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 5,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡2',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 8,
              commoditySum: 1
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡3',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 14,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡4',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 12,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡5',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡6',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡7',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 11,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡8',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡9',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            }
          ]
        },
        {
          commodityMenu: '炒菜',
          commodityData: [
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡10',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡11',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡12',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            },
            {
              commodityImg: '/static/img/xbk.png',
              commodityAlt: 'xbk',
              commodityName: '香辣鸡腿堡13',
              commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
              commodityMoney: 10,
              commoditySum: 1
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'commdityShopping'
    ]),
    commodityPrice: function () {
      let sumPrice = 0
      _.forEach(this.commdityShopping, function (value, key) {
        sumPrice += (value.commodityMoney * value.commoditySum)
      })
      if (sumPrice < 10) {
        sumPrice += 1
      }
      return sumPrice
    },
    commoditySumShopp: function () {
      let Sum = 0
      _.forEach(this.commdityShopping, function (value, key) {
        Sum += value.commoditySum
      })
      return Sum
    }
  },
  methods: {
    // 切换列表
    toggleList (index) {
      this.commodityIndexs = index
    },
    // 遮罩层切换
    commodityToggleShowList () {
      if (this.commdityShopping.length === 0) {
        return false
      }
      this.commodityToggleShow = !this.commodityToggleShow
    },
    // 添加商品
    addCommodity (commodityItems, commodityName, commodityIndex, commodityIndexs) {
      let commodityFindIndex = _.findIndex(this.commdityShopping, function (o) {
        return o.commodityName === commodityName
      })
      // 拷贝对象
      let commodityItem = _.clone(commodityItems)
      if (commodityFindIndex !== -1) {
        this.commodityShoppListSwitchAdd(commodityFindIndex)
      } else {
        this.$store.dispatch('setCommdityShopping', commodityItem)
      }
    },
    // 数量减
    commodityShoppListSwitchLess (index) {
      console.log(this.commdityShopping)
      this.$store.dispatch('setCommdityShoppingLess', index)
      if (this.commdityShopping.length === 0) {
        this.commodityToggleShow = false
      }
    },
    // 数量加
    commodityShoppListSwitchAdd (index) {
      this.$store.dispatch('setCommdityShoppingAdd', index)
    },
    // 设置商家名
    setCommdityShoppName () {
      this.$store.dispatch('setCommdityShoppingName', this.commodityName)
    },
    settlement () {
      if (this.commoditySumShopp) {
        this.setCommdityShoppName()
        this.commodityToggleShow = false
        wx.navigateTo({
          url: '/pages/settlement/main'
        })
      } else {
        return false
      }
    }

    // commodityJsonInArray (data) {
    //   // console.log(data)
    //   let commodityJson = {}
    //   for (let key of Object.keys(data)) {
    //     // console.log(key, data[key])
    //     commodityJson[key] = data[key]
    //   }
    //   console.log(commodityJson)
    //   return commodityJson
    // }
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
    height:auto;
    /*margin-bottom:100rpx;*/
    overflow:hidden;


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


    .commodityToggle{
      display: block !important;
    }
.commodityToggleList{
  display: none;
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

  .commodityemtyp{
    width: 100%;
    height: 96rpx;
    background: #fff;
  }
  .commoditySum{
    width: 100%;
    height: 96rpx;
    background: #505052;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    .commodityG{
      width: 100rpx;
      height: 100rpx;
      background: #363636;
      border: 10rpx solid #444444;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      left: 24rpx;
      bottom: 16rpx;
      text-align: center;
      line-height: 100rpx;
      .commodityGsum{
        width:40rpx;
        height:40rpx;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
        position:absolute;
        top:0rpx;
        right:-30rpx;
        background:#ff6917;
        color:#fff;
        font-size:12px;
        line-height:40rpx;


      }
    }

    .commodityD{
      position: absolute;
      left: 180rpx;
      width: auto;
      height: 96rpx;
      color: #fff;
      .commodityDM{
        font-size: 14px;
        color: #999;
        line-height: 60rpx;
      }
      .commodityDD{
        font-size: 10px;
        color: #999;
        line-height: 20rpx;
      }
    }

    .commodityM{
      width: 210rpx;
      height: 96rpx;
      background: #535356;
      float: right;
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 96rpx;
    }
  }

  .commodityShoppList{
    position:fixed;
    bottom: -100%;
    left:0;
    right:0;
    z-index:99;
    padding-bottom:30rpx;
    background:#fff;

    -webkit-transition: bottom .28s;
    -moz-transition: bottom .28s;
    -ms-transition: bottom .28s;
    -o-transition: bottom .28s;
    transition: bottom .28s;

    max-height: 700rpx;
    overflow: auto;


    .commodityShoppListM{
      width: 110rpx;
      height: 110rpx;
      float: left;
      line-height: 110rpx;
      text-align: center;
      color: #ff5339;
      font-size: 16px;
      font-weight: bold;
    }
    .commodityShoppListSwitch{
      width: 180rpx;
      height: 110rpx;
      line-height: 110rpx;
      float: left;
      .commodityShoppListSwitchLess{
        width: 44rpx;
        height: 44rpx;
        line-height: 44rpx;
        text-align: center;
        color: #2396ff;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #2396ff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        float: left;

        margin-top: 33rpx;
      }
      .commodityShoppListSwitchSum{
        width: 82rpx;
        height: 100%;
        text-align: center;
        line-height: 110rpx;
        float: left;
        color: #212121;
        font-size: 16px;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .commodityShoppListSwitchAdd{
        width: 44rpx;
        height: 44rpx;
        line-height: 44rpx;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background: #2396ff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        float: left;

        margin-top: 33rpx;
      }
    }
  }

  .commodityShoppListToggle{
    bottom:96rpx;
  }













  .commodityFull{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    z-index: 9;

    opacity: 0;
    display: none;

    -webkit-transition: opacity .28s;
    -moz-transition: opacity .28s;
    -ms-transition: opacity .28s;
    -o-transition: opacity .28s;
    transition: opacity .28s;
  }
  .commodityFullToggle{
    opacity: 1;
    display: block;
  }


  .commoditySumStatus{
    background: #464648 !important;
  }
  .commodityGStatus{
    background: #3190e8 !important;
    color: #fff !important;
  }
  .commodityMStatus{
    background: #3190e8 !important;
  }
  .commodityDMStatus{
    color: #fff !important;
  }

</style>
