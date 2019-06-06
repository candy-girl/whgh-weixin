<template>
  <div class="axscxqcontainer"
       v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
    <div class="axscxqheaderContainer">
      <p class="axscxqtitle">岸线收储详情</p>
    </div>
    <div class="axscxqlistContainer">
      <div class="axscxqlist" v-for="item in listData" :key="item.name">
        <span class="riverName">{{item.name}}</span>
        <span class="riverName">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hdxxxq',
  data () {
    return {
      loading: true,
      listData:[]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    postData(url, data) {
      return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
      })
        .then(response => response.json()) // parses response to JSON
    },

    getList() {
      this.postData('http://115.236.161.140:8090/wechat/getAxscByAxId', {id: this.$route.params.id})
        .then(data => {
          this.loading = false
          this.listData = data.data
        }) // JSON from `response.json()` call
        .catch(error => console.error(error))
    },
  },
}
</script>

<style lang="scss" scoped>
  .axscxqcontainer{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #efeff4;
  }
  .axscxqheaderContainer{
    height: 64px;
    background: #1e7af1;
    /*justify-content: space-between;*/
    padding: 22px;
    align-items: center;
    display: flex;
  }
  .axscxqtitle{
    font-size: 28px;
    text-align: center;
    color: #fff;
    width: 100%;
  }
  .axscxqlistContainer{
    background: #efeff4;
    flex: 1;
  }
  .axscxqlist{
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:5px;
    justify-content: space-between;
    margin: 1px;
    padding: 26px 30px;
  }
  .left{
    flex: 1;
    justify-content: space-between;
  }
  .riverName{
    font-size: 22px;
    color: #666;
  }
  .second{
    font-size: 20px;
    color: #ccc;
  }
</style>
