<template>
 <div class="contactMerchantContainer">
   <i-cell-group>
     <i-cell
       v-for="(item, index) in contactUs"
       :key="index"
       :title="item.name"
       :value="item.contact">
       <i-icon
         slot="icon"
         type="group_fill"
         color="#0097ff"
         size="18"/>
     </i-cell>
   </i-cell-group>
 </div>
</template>

<script>
export default {
  data () {
    return {
      contactUs: [
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        },
        {
          name: '肯德基商家',
          contact: 'Tel:15273656769'
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>

</style>
