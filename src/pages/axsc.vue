<template>
  <div class="axsccontainer"
       v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
    <div class="axscheaderContainer">
      <img src="../assets/return.png" class="return">
      <input v-model="input" placeholder="请输入查询条件" class="axscnomalInput"></input>
      <img src="../assets/search.png" class="return" @click="getList">
    </div>
    <div class="axscselectContainer">
      <el-select v-model="companyValue" placeholder="所属机构">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="codeValue" placeholder="航道编码">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="axsclistContainer">
      <div class="nodata" v-if="listData.length==0">
        该查询条件下暂无数据...
      </div>
      <div class="list" v-for="item in listData" @click="goDetail(item)" v-else>
        <div class="left">
          <p class="riverName">{{item.axmc}}</p>
          <p class="second">
            <span>岸线规划用途</span>
            <span>——</span>
            <span>{{item.axghyt}}</span>
          </p>
          <p class="second">
            <span>岸线辖区：</span>
            <span>{{item.axxq}}</span>
            <span>全长{{item.axcd ? item.axcd : 0}}千米</span>
          </p>
        </div>
        <img src="../assets/enter.png" class="rightPng">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hdxx',
    data () {
      return {
        input:'',
        dialogVisible: false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        loading: true,
        listData: [],
        companyValue:'',
        codeValue:''
      }
    },
    mounted () {


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
        this.postData('http://115.236.161.140:8090/wechat/getAxsc', {axmc: this.input})
          .then(data => {
            this.loading = false
            this.listData = data.data.list
          })
          .catch(error => console.error(error))
      },
      goDetail(item){
        console.log(999,item)
        // this.$store.dispatch('gloabal/getHdxxDetail',{
        //   data:item
        // })
        this.$router.push(`/axscxq/${item.axlyghId}`)
      }
    },
    created () {
      this.getList()
    },
  }
</script>

<style lang="scss">
  .axsccontainer{
    /*display: flex;*/
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    background: #efeff4;
  }
  .axscheaderContainer{
    height: 80px;
    background: #1e7af1;
    /*justify-content: space-between;*/
    padding: 10px 30px;
    align-items: center;
    display: flex;
  }
  .return{
    display: flex;
    height: 40px;
  }
  .axscnomalInput{
    background: transparent;
    border: 1px solid #fff;
    margin: 0 30px;
    height: 48px;
    line-height: 48px;
    border-radius: 48px;
    flex:1;
    padding: 0 15px;
    font-size: 22px;
    color: #fff;
  }
  .axscselectContainer{
    display: flex;
    background: #1e7af1;
    padding: 0 30px;
    padding-bottom: 20px;
    height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .el-select{
    width: 200px!important;
  }
  .el-input{
    font-size: 22px!important;
    color: #fff;
  }
  .el-input__inner{
    border: 0px!important;
    background: transparent!important;
  }
  .el-select .el-input .el-select__caret{
    font-size: 30px!important;
    color: #fff;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 4vw;
    color: #fff!important;
  }
  .el-select-dropdown__item {
    font-size: 22px;
  }
  .el-select-dropdown__item.selected{
    color: #1e7af1;
  }
  .el-select-dropdown__item{
    height: 40px;
    line-height: 40px;
  }
  .el-input__inner::placeholder{
    color:#fff!important;
    font-weight: normal;
    font-size: 22px;
  }
  .axscnomalInput::placeholder{
    color:#fff!important;
    font-weight: normal;
    font-size: 22px;
  }
  .axsclistContainer{
    background: #efeff4;
    flex: 1;
  }
  .list{
    background: #fff;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:5px;
    cursor: pointer;
  }
  .left{
    flex: 1;
  }
  .rightPng{
    width: 16px;
  }
  .riverName{
    font-size: 22px;
  }
  .second{
    font-size: 20px;
    color: #666;
  }
  input:focus {
    outline: none;
  }
  .el-icon-loading{
    font-size: 60px;
  }
  .el-loading-spinner .el-loading-text{
    font-size: 24px;
  }
  .nodata{
    padding: 30px;
    font-size: 24px;
    background: #fff;
  }
</style>
