<template>
  <div class="zsyzxqcontainer">
    <p class="pageTitle">{{listData.newsTitle}}</p>
    <p class="infos">
      <span>{{listData.newsFbrszdw}}</span>
      <span class="tiem">{{this.time}}</span>
    </p>
    <div v-html="listData.newsContent"></div>
  </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: 'zsyzxq',
    data () {
      return {
        time: '',
      }
    },
    computed: mapState({
      listData: state => state.gloabal.zsyzDetail
    }),
    mounted () {
      this.timestampToTime(this.listData.newsFbsj)
    },
    methods: {
      // 时间戳转换成时间
      timestampToTime (cjsj) {
        var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        var D = date.getDate() + ' '
        var h = date.getHours() + ':'
        var m = date.getMinutes() + ':'
        var s = date.getSeconds()
        this.time = Y+M+D+h+m+s
        return
      },
    },
    created () {
    },
  }
</script>

<style lang="scss">
  .zsyzxqcontainer{
    padding: 20px 40px;
  }
  .pageTitle{
    width: 100%;
    overflow: auto;
    border-bottom: 0;
    font-size: 30px!important;
    font-weight: bold;
    margin: 20px 0;
  }
  p{
    font-size: 24px!important;
    margin-top: 10px!important;
    margin-bottom: 10px!important;
    padding: 0!important;
  }
  .infos{
    font-weight: bold;
  }
  .tiem{
    margin-left: 80px;
  }
  strong>span{
    width: 100%;
    overflow: auto;
    border-bottom: 0;
    font-size: 30px!important;
    font-weight: bold;
    margin: 20px 0;
  }
  p>span{
    font-size: 24px!important;
    margin-top: 10px!important;
    margin-bottom: 10px!important;
    padding: 0!important;
  }
</style>
