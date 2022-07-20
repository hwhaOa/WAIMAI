<template>
  <div class="Order">
    <NavBar class="NavBar_centre">
      <div slot="NavBar-centre">搜索</div>
    </NavBar>

    <!-- 搜索表单 -->
    <form action="action_page.php" method="get">
      <div class="search_form">
        <input class="search_form_input" type="text" placeholder="请输入商家或美食的名称">
        <button class="search_form_button"><i>提交</i></button>
      </div>
    </form>

  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue"

export default {
  name: "Order",
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.NavBar_centre{
  height: 40px;
}

.search_form{
  text-align: center;
  margin-top: 10px;
}

.search_form_input,.search_form_button{
  height: 35px;
  border: 0;
  border-radius: 3px;
  vertical-align: top;
}

.search_form_input{
  padding-left: 5px;
  width: 75%;
  background-color: #dddddd;
}

.search_form_button{
  margin-left: 10px;
  padding: 5px 15px;
  color: #fff;
  background-color: #1aaba8;
}
</style>