<template>
  <div>
      <Login v-show="isShow" @clo="clos"></Login>
      <!--顶部-->
       <div name='header' class='site-top-nav'>
           <div class='wrap'>
              <router-link to="/" class='home fl' v-text="Home"></router-link>
              <ul class='header-top'>
                 <li>
                    <a href="javascript:0" v-text="Navs.Login" @click="Login"></a>
                 </li>
                  <li class='myorder'>
                    <a href='#' v-text="Navs.Myorder"></a>
                 </li>
                  <li class='myorder shopping-car'>
                    <a href='#' v-text="Navs.Shoppcar"></a>
                 </li>
                  <li class='has-icon has-line' >
                    <a href='#'  data-trigger='dropdowns' v-text="Navs.Customer.menu"></a><i class='icon-delta'></i>
                    <ul class='myorder-menu dropdown-menus'>
	                       <li class='myorder-menu-list' v-for="(item,i) of Navs.Customer.item" :key="item.i">
	                          <a href='#' v-text="item"></a>
	                       </li>
	                  </ul> 
                  </li>
                  <li class='myorder myxiaodian' >
                    <a href='#'  data-trigger='dropdowns' v-text="Navs.Store.menu"></a><i class='icon-delta'></i>
	                    <ul class='myorder-menu dropdown-menus'>
	                       <li class='myorder-menu-list' v-for="(item,i) of Navs.Store.item" :key="item.i">
	                          <a href='#' v-text="item"></a>
	                       </li>
	                    </ul> 
                 </li>
              </ul>
           </div>
       </div>
       <!--logo-mid-->
       <div class="header_mid clearfix" v-show="bool">
            <div class="wrap clearfix">
                <router-link to="/" rel="nofollow" class="logo" title="蘑菇街首页"></router-link>
                <div class="normal-search-content">
                    <div class="top_nav_search" id="nav_search_form"> <!--搜索框 -->
                        <div class="search_inner_box clearfix">
                            <div class="selectbox" data-v="1">
                                <span class="selected" v-text="Selected.menu" data-trigger='dropdowns'></span>
                                <ul class="selected-menu dropdown-menus">
                                    <li  data-index="bao"><a href="#" v-text="Selected.item[0]"></a></li>
                                    <li  data-index="shop"><a href="#" v-text="Selected.item[1]"></a></li>
                                </ul>
                            </div>
                            <form action="" method="get">
                                <input type="text" name="q" class="ts_txt fl" value="" />
                                <input type="submit" value="搜  索" class="ts_btn" />
                         <!--   <input type="hidden" name="t" value="bao" id="select_type" />  -->
                            </form>
          
                        </div>
                        <div class="ts_hotwords">
                            <a href='#' v-for="(item,i) of Hotwords" :key="item.i" v-text="item"></a>
                                                         
                        </div>
                    </div>
                </div>
                <div class="mid_fr">
                    <div class="nav_mogu_qrcode">
                        <img :src="Clients" alt="蘑菇街客户端下载" />
                    </div>
                </div>
            </div>
       </div>
  </div>
</template>

<script>
import Login from "../login/login.vue"
import {setCookie,getCookie} from '../../assets/js/cookie.js'
export default {
  name: 'mgHeader',
//props: {
//  cls
// },
  data(){
  	return {
	  	 Home:"蘑菇街首页",
           bool:true,
	  	 Navs:{
	  	 	  Login:"登录",
	  	 	  Myorder:"我的订单",
	  	 	  Shoppcar:"购物车",
	  	 	  Customer:{
	  	 	  	menu:"客服服务",
	  	 	    item:["消费者服务","商家服务","规则中心"]  //差跳转地址
	  	 	  },
	  	 	  Store:{
	  	 	  	menu:"商店后台",
	  	 	  	item:["管理后台","商家社区","商家培训","市场入驻"]  //跳转地址
	  	 	  }
	  	 },
		  Selected:{
		  		menu:"搜商品",
	  	 	  	item:["商品","店铺"]  //跳转地址
		  	},
		  Hotwords:["毛衣","袜子","睡衣","包包","连衣裙","外套","风衣","牛仔裤","卫衣","衬衫"],
		  Clients:require("../../../public/img/icon/ewm440x180.png"),
		  isShow:false,
  	}
  },
  methods:{
      Hotword(Dom,pro,count,classN){   //DOM对象,pro属性,个数,classN添加颜色
      	 var num=pro.length;
      	 var score=[];
      	 for(var i=0;i<count;i++){
      	 	  var ran=Math.floor(Math.random()*num);
      	 	  if(score.indexOf(ran)!=-1){
      	 	  	i--;
      	 	  	continue;
      	 	  }
      	 	  score.push(ran);  
      	 	  $(Dom).eq(ran).addClass(classN);
      	 }
      },
      Login(){
    	this.isShow=!this.isShow;
      },
      //登录组件关闭方法
      clos(bool){
      	  this.isShow=bool;
      },
      //用户登录成功后
      lgsuccess(){
          var uname= getCookie();
          console.log(uname);
      }  
  },
  mounted(){
     // this.dropdowns();
      this.Hotword(".ts_hotwords a",this.Hotwords,4,"ts_hotword");
      this.lgsuccess();
  },
  components: {
     Login,
  },
  watch:{
      //监听路由的变化
      $route(e){  //跳转到详情页隐藏搜索栏
         if(e.name=="details"){
             this.bool=e.matched[0].props.default.bool;
         }else{
             this.bool=true;
         }
      }
    }
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>












/**/
.site-top-nav{
    margin-bottom: 0;
    background: #f2f2f2;
    border-bottom: 1px solid #ddd;
    height: 32px;
}
.home{
  background: url(../../../public/img/icon/nav609x784.png) -4px -234px no-repeat;
    padding: 0 20px;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    vertical-align: top;
    margin-left: 20px;
}
.header-top{
  float:right;
}
.header-top li{
    float:left;
    display: inline;
    position: relative;
    z-index: 100;
    float: left;
    margin: 0 15px 0 0;
    height: 32px;
  }
.header-top li a{
    overflow: hidden;
    display: inline-block; 
    margin-top: 8px;
    color: #666;
    text-decoration:none;
}
.wrap a{
	text-decoration: none;
	color: #666;
}
.wrap .header-top .myorder{
  background: url(../../../public/img/icon/nav609x784.png) 16px -528px no-repeat;
  
}
.wrap .header-top .shopping-car{
  background: url(../../../public/img/icon/nav609x784.png) 8px -420px no-repeat;
}
.wrap .header-top .icon-delta{
  position: absolute;
    width: 7px;
    height: 5px;
    top: 14px;
    right: -10px;
    background: url(../../../public/img/icon/nav609x784.png) -4px -229px;
}
.has-icon{padding-right: 10px;}
.wrap .header-top .myorder a{
  padding-left:35px; 
   border-left: 1px solid #ddd;
}
.wrap .header-top .myorder-menu{
	position:absolute;
	width:100px;
	border:1px solid #ddd;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
   top:31px;
  /*display: none;*/
  overflow: hidden;
   height:auto;
  transition: all 5s linear;
}

.wrap .header-top .myorder-menu .myorder-menu-list{
	width:100%;
	 border-bottom: 1px solid #ddd;
	text-align: center;
	background:#F2F2F2;
	margin:0;
}

.wrap .header-top .myorder-menu .myorder-menu-list a{
	 padding-left:0; 
   border-left:0;
}
.wrap .header-top .myorder-menu .myorder-menu-list:hover{
	background:#eee;
}
/*.wrap .header-top .myorder a{
  border-left: 1px solid #ddd;
}*/
.wrap .header-top .has-line>a{
  padding-left:15px;
   border-left: 1px solid #ddd;
}
.wrap .header-top .myxiaodian{
  margin-right: 0;
    background: url(../../../public/img/icon/nav609x784.png) 8px -566px no-repeat;
}


.header_mid .logo{
	float: left;
    width: 240px;
    height: 90px;
    overflow: hidden;
    background-image: url(../../../public/img/icon/logo240x90.png);
    background-position: left center;
 }

.header_mid .normal-search-content{
  width: 482px;
    height: 90px;
    float: left;
    margin-left: 120px;
}
.header_mid .normal-search-content .top_nav_search {
    position: relative;
    z-index: 50;
    width: 482px;
    margin-top: 20px;
}
.top_nav_search .search_inner_box {
    border: 1px solid #f07;
    width: 480px;
    height: 36px;
    border-radius: 0 6px 6px 0;
    background: #fff;
    box-sizing: border-box;
}

.top_nav_search .selectbox {
    position: relative;
    float: left;
    width: 60px;
    z-index: 10;
    text-align: center;
    background:url(../../../public/img/icon/sjx.png) no-repeat 40px 2px;
    box-sizing: border-box;
}
.top_nav_search .selectbox .selected {
    height: 34px;
    line-height: 34px;
    color: #f07;
    cursor: pointer;
    background-color: #fff;
    font-size:12px;
}
.top_nav_search .selectbox .selected-menu{
	position:absolute;
	display: inline-block;
	width:60px;
	background:#fff;
	border:1px solid #ccc;
	border-top:none;
	left:-1px;
	top:35px;
}
.top_nav_search .selectbox .selected-menu li{
	display: list-item;
}
.top_nav_search .selectbox .selected-menu li:hover{
	background:#F8D7DA;
}
.selectbox .selected-menu li a {
    display: block;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #f07;
    text-align: center;
    z-index: 10;
}
.top_nav_search .ts_hotwords {
    width: 482px;
    height: 20px;
    overflow: hidden;
    margin-top: 5px;
}
.top_nav_search .ts_hotwords a{
    color: #999;
    float: left;
    height: 20px;
    line-height: 20px;
    margin: 0 15px 0 0;
}
.top_nav_search .ts_hotwords a:hover{
  color:#f07;
}
.top_nav_search .ts_hotwords .ts_hotword{
   color:#f07;
}

.top_nav_search .ts_txt{
    overflow: hidden;
    width: 330px;
    height: 34px;
    padding: 6px 0 6px 10px;
    border: none;
    outline:none;
    color: #999;
    font-size: 12px;
    background-color: #fff;
    box-sizing: border-box;
}
.top_nav_search .ts_btn {
    float: right;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    width: 75px;
    background-color: #f07;
    background-image: linear-gradient(to right,#f25,#ff1581);
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    border-radius: 0 5px 5px 0;
}
.mid_fr {
    float: right;
    height: 90px;
    width: 220px;
    overflow: hidden;
    background-size: 100%;
}
.mid_fr img {
   width:100%;
}
</style>
