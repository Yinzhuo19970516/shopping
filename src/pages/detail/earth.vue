<template>
    <div>
        <div class = 'sales-board-form'>
          <div class = 'sales-board-line'>
            <div class = 'sales-board-line-left'>
              购买数量：
            </div>
            <div class ='sales-board-line-right'>
              <Counter @counter= "getGoodInfo('counter',$event)" :max = 'Counter.max' :min = 'Counter.min'/>
            </div>
          </div>
          <div class = 'sales-board-line'>
            <div class = 'sales-board-line-left'>
              产品类型：
            </div>
            <div class ='sales-board-line-right'>
              <downmenu @downmenu = "getGoodInfo('downmenu',$event)" :DownData= 'Downmenu'/>
            </div>
          </div>
          <br/><br/><br/>
          <div class = 'sales-board-line'>
            <div class = 'sales-board-line-left'>
              有效时间：
            </div>
            <div class ='sales-board-line-right'>
              <Radios @radios = "getGoodInfo('radios',$event)" :Radios = 'Radios'></Radios>
            </div>
          </div>
          <div class = 'sales-board-line'>
            <div class = 'sales-board-line-left'>
              总价：
            </div>
            <div class ='sales-board-line-right'>
              {{ getTotalPrice }}元
            </div>
          </div>
          <div class = 'sales-board-line'>
            <div class = 'sales-board-line-left'>
            </div>
            <div class ='sales-board-line-right'>
              <a class = 'button' href ='#'>立即购买</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import Counter from './components/counter'
import Downmenu from './components/downmenu'
import Radios from './components/radios'

export default {
  name: 'earth',
  data () {
    return {
      totalprice: 0,
      counter: 1,
      downmenu: 1,
      radios: 1,
      Radios: [
        {
          title: '一个月',
          value: '1'
        },
        {
          title: '三个月',
          value: '3'
        },
        {
          title: '六个月',
          value: '6'
        },
        {
          title: '一年',
          value: '12'
        }
      ],
      Counter: {
        max: 10,
        min: 1
      },
      Downmenu: [
        {
          name: '初级版',
          value: 1
        },
        {
          name: '中级版',
          value: 2
        },
        {
          name: '高级版',
          value: 3
        }
      ]
    }
  },
  components: {
    Counter, Downmenu, Radios
  },
  methods: {
    getGoodInfo (key, value) {
      this[key] = value
      var readyData = {
        'counter': this.counter,
        'downmenu': this.downmenu,
        'radios': this.radios
      }
      this.totalprice = readyData.counter * 5 + readyData.downmenu * 2 + readyData.radios * 10
    }
  },
  computed: {
    getTotalPrice () {
      this.$store.dispatch('updatePrice', this.counter * 5 + this.downmenu * 2 + this.radios * 10)
      return this.$store.getters.getTotalPrice
    },
    getOrder () {
      return this.$store.getters.getOrder
    }
  }
}
</script>

<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top:20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
.button{
  background: #4fc08d;
  color:#fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
