<template>
  <div class='app-head'>
    <div class='app-head-inner'>
        <router-link to= '/'>
            <img src ="../assets/logo.png" alt="" />
        </router-link>
        <span>0123456789876543210</span>
        <div class='head-nav'>
            <ul clas='nav-list'>
                <li>登陆</li>
                <li class='nav-pile'>|</li>
                <li>注册</li>
                <li class='nav-pile'>|</li>
                <li>关于</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.app-head {
   background:#363636;
   color: #b2b2b2;
   height:90px;
   line-height: 90px;
   width:100%;
}
.app-head-innner {
    width: 1600px;
    margin:  0 auto;
}
.head-logo {
    float: left;
}
.app-head-innner span {
    position: relative;
    top: -20px;
}
.app-head-inner img {
    width: 60px;
    margin-top: 20px;
    margin-left: 150px;
}
.head-nav {
    float:right;
    margin-right: 150px;
}
.head-nav ul {
    overflow: hidden;
}
.head-nav li {
    cursor: pointer;
    float: left;
    list-style-type:none;
}
.nav-pile {
    padding: 0 10px;
}
.container {
    width:1600px;
    margin: 0 auto;
}
.hr {
    height: 1px;
    width: 100%;
    background: #dddddd;
}
.button {
    background: #4fc08d;
    color:#fff;
    display:inline-block;
    padding:10px 20px;
    cursor: pointer;
}
.button:hover {
    background: #4fc08d;
}
</style>
