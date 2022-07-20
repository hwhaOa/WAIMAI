<template>
  <div id="Home">
    <NavBar class="Nav_Bar">
        <img class="Nav-left" slot="NavBar-left" src="../../static/img/NavBar/NavBar-搜索.png" alt="">
        <span class="Nav-centre" slot="NavBar-centre">昌平区北七家宏福...</span>
        <span class="Nav-right" slot="NavBar-right">登录|注册</span>
    </NavBar>
  </div>
</template>

<script>
// 伤害
// 720W

// 奶量
//  36568 6355
//  5485  953
//  67832
//  18314


// 伤害
// 700W

// 奶量
//34847   6019
//5227    902
//59497
//16659



import NavBar from "../../components/NavBar/NavBar.vue"

export default {
  name: "Home",
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.Nav_Bar{
  height: 40px;
  line-height: 40px;
}

.Nav_Bar img{
  height: 24px;
}

.Nav-left,.Nav-right{
  padding: 0 5px;
}
</style>