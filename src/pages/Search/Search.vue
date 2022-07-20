<template>
  <div class="Search">
    <NavBar class="NavBar_centre1">
      <div slot="NavBar-centre">我的</div>
    </NavBar>

    <router-link to="/login">
      <NavBar class="Search_Login_registration">
        <div class="NavBar_left" slot="NavBar-left">
          <img src="../../static/img/Search/grzx.png" alt="" />
        </div>
        <div class="NavBar_centre2" slot="NavBar-centre">
          <span class="Login_registration">登录/注册</span>
          <span class="cell_phone_number">
            <img src="../../static/img/Search/sj.png" alt="" />
            <i class="cell_phone_number_text">暂无绑定手机号</i>
          </span>
        </div>
        <div class="Button_right" slot="NavBar-right">
          <img src="../../static/img/Search/yjt.png" alt="" />
        </div>
      </NavBar>
    </router-link>

    <div class="wallet">
      <div class="wallet_left" slot="NavBar-left">
        <div>0.00元</div>
        <div>我的金额</div>
      </div>
      <div class="wallet_centre" slot="NavBar-centre">
        <div>0个</div>
        <div>我的优惠</div>
      </div>
      <div class="wallet_right" slot="NavBar-right">
        <div>0分</div>
        <div>我的积分</div>
      </div>
    </div>

    <div class="service">
      <div class="order">
        <img src="../../static/img/Search/我的订单.png" alt="" />
        <span>我的订单</span>
      </div>
      <div>
        <img src="../../static/img/Search/积分商城.png" alt="" />
        <span>积分商城</span>
      </div>
      <div>
        <img src="../../static/img/Search/会员卡.png" alt="" />
        <span>硅谷外卖会员卡</span>
      </div>
      <div class="service_centre">
        <img src="../../static/img/Search/服务中心.png" alt="" />
        <span>服务中心</span>
      </div>
    </div>
  </div>
</template>

<script scoped>
import NavBar from "../../components/NavBar/NavBar.vue"

export default {
  name: "Search",
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.Search {
  font-size: 14px;
}

.NavBar_centre1 {
  height: 40px;
}

.NavBar_centre2 {
  text-align: left;
}

.Search_Login_registration {
  padding: 0 5px;
  height: 80px;
  align-items: center;
  border-top: 0.15px solid #dddddd;
}

.NavBar_left img {
  width: 55px;
  height: 55px;
}

.Button_right img {
  width: 15px;
  height: 15px;
}

.cell_phone_number img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.cell_phone_number_text {
  vertical-align: middle;
}

.Login_registration {
  display: block;
  margin-left: 6px;
}

.wallet {
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 80px;
  color: #888888;
  background-color: #fff;
  text-align: center;
}

.wallet_left,
.wallet_centre,
.wallet_right {
  width: 100%;
  padding: 10px 0;
}

.wallet_centre {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}

.service div {
  height: 50px;
  line-height: 50px;

  color: #888888;
  border-top: 1px solid #dddddd;
}

.service img {
  padding: 0 5px;
  width: 24px;
  vertical-align: middle;
}

.service_centre {
  border-bottom: 1px solid #dddddd;
}
</style>