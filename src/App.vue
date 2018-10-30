<template>
  <div id="app">
        <topSearch v-show=false></topSearch>
	      <rightSidebar></rightSidebar>
	      <mgHeader></mgHeader>
	         <router-view v-if="isReload"></router-view>
	      <mg-Flooter/>
  </div>
</template>
<script>
import mgHeader from '@/components/Index/mgHeader.vue'
import mgFlooter from '@/components/Index/mgFlooter.vue'
import rightSidebar from '@/components/Index/rightSidebar.vue'
import topSearch from '@/components/Index/topsearch.vue'



export default{
	data(){
		return {
			name:"1",
      isReload:true
		}
	},
  // //provide 和reload组合应用
  // provide(){
  //      return {
  //        reload: this.reload
  //      }
  // },
  // //重加载
  //     reload(){
  //        this.isReload=false;
  //        this.$nextTick(function(){
  //          this.isReload=true;
  //        })
  //     },
    components:{
      mgHeader,
       mgFlooter,
       rightSidebar,
       topSearch
    },
    methods:{
       dropdowns(){
      	//下拉菜单组件
         $(".dropdown-menus").hide();
         $("[data-trigger='dropdowns']").mouseover(function(e){
         	   e.preventDefault();
         	   var $menu=$(e.target);
         	  if(!$menu.is(":hidden"))
         	  $(e.target).nextAll(".dropdown-menus").show();
         	  else
         	  $(e.target).nextAll(".dropdown-menus").hide();
         })
         $("[data-trigger='dropdowns']").parent().mouseover(function(){
            $(this).children(".dropdown-menus").show();
         }).mouseout(function(){
             $(this).children(".dropdown-menus").hide();
         })
      }
    },
    mounted(){
      $(".public_swicth").hover(function(){
            $(this).addClass("next_prev_opacity");
          },function(){
            $(this).removeClass("next_prev_opacity");
          });
           this.dropdowns();
    },
    
}
</script>
<style>
</style>
