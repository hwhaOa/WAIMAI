<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter">
      <FooterGuideItem path="/home">
        <img slot="item-icon" src="./static/img/FooterGuide/外卖盒.png" alt="">
        <img slot="item-icon2" src="./static/img/FooterGuide/外卖盒_switch.png" alt="">
        <div slot="item-text">外卖</div>
      </FooterGuideItem>
      <FooterGuideItem path="/order">
        <img slot="item-icon" src="./static/img/FooterGuide/搜索.png" alt="">
        <img slot="item-icon2" src="./static/img/FooterGuide/搜索_switch.png" alt="">
        <div slot="item-text">搜索</div>
      </FooterGuideItem>
      <FooterGuideItem path="/profile">
        <img slot="item-icon" src="./static/img/FooterGuide/全部订单.png" alt="">
        <img slot="item-icon2" src="./static/img/FooterGuide/全部订单_switch.png" alt="">
        <div slot="item-text">订单</div>
      </FooterGuideItem>
      <FooterGuideItem path="/search">
        <img slot="item-icon" src="./static/img/FooterGuide/我的.png" alt="">
        <img slot="item-icon2" src="./static/img/FooterGuide/我的_switch.png" alt="">
        <div slot="item-text">我的</div>
      </FooterGuideItem>
    </FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import FooterGuideItem from "./components/FooterGuide/FooterGuideItem.vue"

export default {
  name: "App",
  components: {
    FooterGuide,
    FooterGuideItem
  },
};
</script>

<style>
@import './static/css/reset.css';
.app{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
</style>