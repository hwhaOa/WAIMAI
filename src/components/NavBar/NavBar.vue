<template>
  <div class="Nav_Bar">
    <div class="NavBar_left_class"><slot name="NavBar-left"></slot></div>
    <div class="NavBar_left_centre"><slot name="NavBar-centre"></slot></div>
    <div class="NavBar_left_right"><slot name="NavBar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.Nav_Bar {
  display: flex;
  font-size: 14px;
  color: #fff;
  text-align: center;
  align-items: center;
  background-color: #1aaba8;
}

.NavBar_left_centre{
  flex: 1;
}

.NavBar_left_class img {
  vertical-align: middle;
}
</style>