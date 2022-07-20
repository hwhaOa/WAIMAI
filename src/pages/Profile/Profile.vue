<template>
  <div>
    <NavBar class="NavBar_centre">
      <div slot="NavBar-centre">订单列表</div>
    </NavBar>
    <div class="Profile_Login">
      <span class="View_after_login">登录后查看外卖订单</span>
      <button class="Log_in_now" type=""><i>立即登录</i></button>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue"

export default {
  name: "Profile",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.NavBar_centre{
  height: 40px;
}

.Profile_Login{
    text-align: center;
    margin-top: 90%;
}

.View_after_login{
    display: block;
    margin-bottom: 10px;
    color: #888888;
}

.Log_in_now{
    padding: 10px 15px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    background-color: #1aaba8;
}
</style>