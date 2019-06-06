<template>
  <div class="container">
    <div class="headerContainer">
      <p class="swqxtitle">水文气象</p>
    </div>
    <div class="selectContainer">
      <el-date-picker
        v-model="dataValue"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-select v-model="codeValue" placeholder="请选择河名">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="infos">
      <span class="name">汉口</span>
      <span class="company">单位（水位:m; 流量:m<sup>3</sup>/s）</span>
    </div>
    <div class="swqxlistContainer">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          width="15%"
          prop="date"
          label="站名">
        </el-table-column>
        <el-table-column
          width="20%"
          prop="name"
          label="水位">
        </el-table-column>
        <el-table-column
          width="20%"
          prop="address"
          :filters="[{ text: '22', value: '22' }, { text: '23', value: '23' }]"
          :filter-method="filterTag"
          label="水势">
          <template slot-scope="scope">
            <p>{{scope.row.tag}}</p>
          </template>
          <img src = '../assets/j.gif' />
        </el-table-column>
        <el-table-column
          width="20%"
          prop="yesterDay"
          label="比昨日量">
        </el-table-column>
        <el-table-column
          width="20%"
          prop="liuliang"
          label="流量">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'swqx',
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
      dataValue:new Date(2019, 5, 10, 8),
      codeValue:'',
      tableData: [{
        date: '安康',
        name: '259.30',
        address: '22',
        yesterDay: '-0.05',
        liuliang: '145'
      }, {
        date: '安康',
        name: '259.30',
        address: '23',
        yesterDay: '-0.05',
        liuliang: '145'
      }, {
        date: '安康',
        name: '259.30',
        address: '24',
        yesterDay: '-0.05',
        liuliang: '145'
      }, {
        date: '安康',
        name: '259.30',
        address: '22',
        yesterDay: '-0.05',
        liuliang: '145'
      }]
    }
  },
  mounted () {
  },
  methods: {
    filterTag(value, row) {
      console.log(222,value,row)
      return row.tag === value;
    }
  }
}
</script>

<style lang="scss">
  .container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #efeff4;
  }
  .headerContainer{
    height: 64px;
    background: #1e7af1;
    /*justify-content: space-between;*/
    padding: 10px 15px;
    align-items: center;
    display: block;
  }
  .swqxtitle{
    font-size: 28px!important;
    text-align: center!important;
    color: #fff!important;
    width: 100% !important;
    border: 0!important;
  }
  .selectContainer{
    display: flex;
    background: #1e7af1;
    padding: 0 15px;
    padding-bottom: 20px;
    height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .el-input__icon{
    font-size: 30px;
    color: #fff;
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
    background: transparent;
  }
  .el-select .el-input .el-select__caret{
    font-size: 32px!important;
    color: #fff;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 4vw;
    color: #fff;
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
    color:#fff;
    font-weight: normal;
  }
  .swqxlistContainer{
    background: #efeff4;
    flex: 1;
  }
  .left{
    flex: 1;
  }
  .riverName{
    font-size: 24px;
  }
  .second{
    font-size: 24px;
    color: #ccc;
  }
  input:focus {
    outline: none;
  }
  .el-input__prefix{
    margin-top: 2px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 310px!important;
  }
  .el-input--prefix .el-input__inner{
    margin-left: 10px;
  }
  .infos{
    font-size: 22px;
    padding: 22px 30px;
    display: flex;
    justify-content: space-between;
    color: #666;
  }
  .name{
    font-weight: bold;
    color: #1e7af1;
  }
  .el-table th{
    background: #FAF0C6;
  }
  .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
    border-right: 1px solid #ccc;
  }
  .el-table td, .el-table th.is-leaf{
    border-bottom: 1px solid #ccc;
  }
  table{
    width: 100% !important;
    /*border: 1px solid #ccc;*/
  }
  th{
    font-size: 22px;
    text-align: center!important;
  }
  td{
    font-size: 22px;
    text-align: center!important;
  }
  el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition{
    border: 1px solid #ccc;
  }
  .el-input--small .el-input__inner{
    width: 160px;
  }
</style>
