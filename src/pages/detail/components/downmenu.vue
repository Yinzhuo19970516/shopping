<template>
   <div class = 'selection-component'>
        <div class ='selection-show' @click= 'showhide'>
            <span>{{ this.DownData[nowIndex].name }}</span>
            <div class ='arrow'></div>
        </div>
        <div class = 'selection-list' v-show= 'show'>
            <ul>
                <li @click= 'selectlist(index)' v-for= '(item,index) in DownData' :key= 'index'>
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'downmenu',
  data () {
    return {
      nowIndex: 0,
      show: false
    }
  },
  props: {
    DownData: {
      type: Array,
      default: function () {
        return [
          {
            name: 'test',
            value: 1
          }
        ]
      }
    }
  },
  methods: {
    selectlist (index) {
      this.nowIndex = index
      this.show = false
      this.$emit('downmenu', this.DownData[index].value)
      this.$store.dispatch('updateOrder', ['downmenu', this.DownData[index].value])
    },
    showhide () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.selection-component {
    position: relative;
    display: inline-block;
}
.selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
}
.selection-show .arrow {
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height:0;
    margin-top: 0;
    margin-left: -1px;
    margin-right: -14px;
    vertical-align: middle;
}
.selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
}
.selection-list li {
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
}
.selection-list li:hover {
    background: #e3e3e3;
}
.selection-list ul {
    -webkit-padding-start: 10px;
}
</style>
