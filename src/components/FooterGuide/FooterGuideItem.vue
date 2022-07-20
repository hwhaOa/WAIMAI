<template>
    <div class="Footer_GuideItem" @click="GuideItemClick">
        <div class="guide_item" v-if="!isActive"><slot name="item-icon"></slot></div>
        <div class="guide_item" v-else><slot name="item-icon2"></slot></div>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'FooterGuideItem',
    props:{
        path:{
            type:String
        }
    },
    computed: {
        isActive() {
            return this.$route.path == this.path
            // return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods: {
        GuideItemClick() {
            this.$router.replace(this.path).catch(err => err)
        }
    }
}
</script>

<style>
.Footer_GuideItem{
   flex: 1;
   height: 100%;
   text-align: center;
   font-size: 14px;
   margin-top: 4px;
}

.Footer_GuideItem img{
   display: block;
   height:24px;
   width: 24px;
   margin: auto;
}

.active{
    color: #1aaba8;
}
</style>