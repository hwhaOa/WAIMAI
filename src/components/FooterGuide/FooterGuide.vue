<template>
    <div class="Footer_Guide">
        <slot></slot>
    </div>
</template>

<script>
import FooterGuideItem from "./FooterGuideItem.vue"

export default {
    name:'FooterGuide',
    components:{
       FooterGuideItem 
    }
}
</script>

<style>
.Footer_Guide{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    height: 50px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>