<template>
  <div
    class="messaeg"
    :class="[
    type,
    { 'toggleMessageStatus' : toggleMessageStatus}
    ]">
    {{content}}
  </div>
</template>

<script>
export default {
  /**
   * type
   * default  默认   #eeeeee
   * success  成功   #0097ff
   * warning  警告   #FF9900
   * error    错误   #ED3F14
   */
  props: {
    /**
     * type  显示类型
     * content 显示内容
     * toggleMessageStatus 是否显示
     */
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: '默认信息'
    },
    toggleMessageStatus: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  .messaeg {
    width:100%;
    height:60rpx;
    position:fixed;
    top: -60rpx;

    left:0;
    right:0;
    text-align:center;
    line-height:60rpx;
    color:#fff;
    font-size:28rpx;
    z-index:99;

    -webkit-transition: top .28s;
    -moz-transition: top .28s;
    -ms-transition: top .28s;
    -o-transition: top .28s;
    transition: top .28s;
  }

  .toggleMessageStatus{
    top:0;
  }

  .default{
    background:#eee;
    color: #000;
  }
  .success {
    background: #0097ff;
  }
  .warning {
    background: #FF9900;
  }
  .error {
    background: #ED3F14;
  }
</style>
