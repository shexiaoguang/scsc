<template>
   <div>
   	  <mgBody></mgBody>
   </div>
</template>

<script>
// @ is an alias to /src
//import mgHeader from '@/components/Index/mgHeader.vue'
//import mgHeader from '@/components/Index/mgHeader.vue'
//import mgFlooter from '@/components/Index/mgFlooter.vue'
//import rightSidebar from '@/components/Index/rightSidebar.vue'
import mgBody from '@/components/Index/mgBody.vue'
//import mgFlooter from '@/components/Index/mgFlooter.vue'

//var Foo = Vue.extend({
//template:
// '<div class="foo">'+
//  "<rightSidebar></rightSidebar> " +
//	      "<mgHeader></mgHeader> " +
//	         "<router-view></router-view> " +
//	     " <mg-Flooter/> " +
//	  '</div>'
//})
export default {
  name: 'index',
  components: {
     mgBody,
  }
}
</script>
