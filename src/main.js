import Vue from "vue";
import App from "./App"
import router from "./router"; // 引入vue会造成2个方面的结果：1.会多了几个组件标签router-link router-vue keepalive。 2.多了2个属性，router route 

new Vue({
    el: '#app',
    render: h => h(App),
    router
})