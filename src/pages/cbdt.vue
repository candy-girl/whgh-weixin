<template>
  <div class="cbdtcontainer"
       v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)"
  >
    <div class="cbdttopInfo" @click="goDetail(listData[0])">
      <img src="../assets/test.jpg" alt="" class="cbdttopImg">
      <p class="cbdttopTitle">{{listData&&listData[0]&&listData[0].newsTitle}}</p>
    </div>
    <div class="cbdtlistContainer" v-for="(item,index) in listData" :key="item.id" v-if="index!==0" @click="goDetail(item)">
      <p class="cbdttitle">{{item.newsTitle}}</p>
      <img src="../assets/test2.jpg" alt="" class="cbdtlistImg">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cbdt',
    data () {
      return {
        listData: [],
        loading: true
      }
    },
    mounted () {

    },
    methods: {
      getList() {
        fetch('http://115.236.161.140:8090/wechat/getCbdtNews')
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            this.listData = myJson.data
            this.loading = false
          });
      },
      goDetail(item){
        this.$store.dispatch('gloabal/getZsyzDetail',{
          data:item
        })
        this.$router.push(`/zsyzxq/${item.id}`)
      }
    },
    created () {
      this.getList()
    },
  }
</script>

<style lang="scss">
  .cbdtcontainer{
    height: 100%;
  }
  .cbdttopInfo{
    position: relative;
  }
  .cbdttopTitle{
    position: absolute;
    bottom: 20px;
    margin-left: 30px;
    font-size: 24px;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .cbdttopImg{
    height: 200px;
    width: 100%;
  }
  .cbdttitle{
    /*margin-right: 20px;*/
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #efeff4;
    line-height: 100px
  }
  .cbdtlistContainer{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin: 20px 30px;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    height: 60px;
    align-items: center;
  }

  .cbdtlistImg{
    height: 80px;
    width: 28%;
    border: 1px solid #ccc;
    background: antiquewhite;
  }
  .el-icon-loading{
    font-size: 60px;
  }
  .el-loading-spinner .el-loading-text{
    font-size: 24px;
  }
</style>
