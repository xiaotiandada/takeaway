<template>
 <div class="contactusContainer">
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
          name: '客服小红',
          contact: 'Tel:15273656769'
        },
        {
          name: '客服小怡',
          contact: 'Tel:15273656769'
        },
        {
          name: '客服小情',
          contact: 'Tel:15273656769'
        },
        {
          name: '客服小慧',
          contact: 'Tel:15273656769'
        },
        {
          name: '客服小燕',
          contact: 'Tel:15273656769'
        },
        {
          name: '客服小瑶',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小红',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小怡',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小情',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小慧',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小燕',
          contact: 'Qq:15273656769'
        },
        {
          name: '客服小瑶',
          contact: 'Qq:15273656769'
        }
      ]
    }
  }

}
</script>
<style lang="less" scoped>

</style>
