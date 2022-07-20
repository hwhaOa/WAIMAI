<template>
<div class="Login">
  <div class="login_img" @click="imgClick">
    <img src="../../../../static/img/Search/左箭头.png" alt="" />
  </div>

  <div class="Login_z">
    <div class="Login_text">XX外卖</div>

    <div class="Login_method">
      <div class="Login_method_item" v-for="(item,index) in titles" @click="methodClick(index)" :class="{active:index === dynamic}">
        <span>{{item}}</span>
      </div>
    </div>

    <form class="form_z" action="" method="get">
      <div class="form_sjh">
        <input type="text" placeholder="手机号">
      </div>
      <div class="form_yzm">
        <input type="text" placeholder="验证码">
      </div>
      <div>
        温馨提示：未注册XX外卖账号的手机号，登录时将自动注册，且代表已同意
        <span class="User_services"><a href="#">《用户服务协议》</a></span>
      </div>
    </form>

    <div class="form_button">
      <button>登录</button>
    </div>

    <div class="About_us">
      <a href="#">关于我们</a>
    </div>

  </div>
  
</div>
</template>

<script scoped>
export default {
  name: "Login",
  data() {
    return {
      titles: ["短信登录", "密码登录"],
      dynamic:0
    }
  },
  methods: {
    imgClick(){
      this.$router.go(-1)
    },
    methodClick(index) {
      this.dynamic = index
    },
    
  }
}
</script>

<style scoped>
.Login_z{
  width: 85%;
  margin-left:auto;
  margin-right:auto;

  font-size: 14px;
}

.login_img img {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}

.Login_text {
  font-size: 50px;
  color: #1aaba8;
  text-align: center;
  margin-top: 30px;
}

.Login_method {
  display: flex;

  margin-top: 30px;
  justify-content: center;
}

.Login_method_item{
  margin:0 15px;
}

.active{
  padding-bottom: 3px;

  color:#1aaba8;
  border-bottom: 2px solid #1aaba8;
}

.form_sjh input{
  margin-top: 7px;
  margin-bottom: 10px;
}

.form_yzm input{
  margin-bottom: 5px;
}

.form_sjh input,.form_yzm input{
  box-sizing: border-box;
  padding-left: 3px;

  height: 40px;
  width: 100%;
}

.User_services a{
  color: #1aaba8;
}

.form_button button{
  margin-top: 30px;

  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #1aaba8;
  border: 0;
  border-radius: 5px;
}

.About_us{
  margin-top: 15px;

  text-align: center;
}

.About_us a{
  color: #888888;
}
</style>