<template>
   <div>
        <!--body-wrap-->      
       <div id="body_wrap" class='body_wrap'>
          <div class="main_topnav_content clearfix">
              <div class="indexLeftLink fl">
                <a class=" indexLeftTitle" href="javascript:;" target="_blank" v-text="Title"></a>
              </div>
              <div class="indexRightLink fl">
                    <router-link to='/group' class="indexmainLink fl" v-text="TitlleRight[0]"></router-link>
                    <router-link to='/timeLimit' class="indexmainLink indexmainLink-last fl" v-text="TitlleRight[1]"></router-link>
              </div>
		   </div>
       </div>

       <!--banner-list-->
       <div class='c-box' :style="{background:BackColor[mark]}">
           <div class='pc_banner_wrapper clearfix' >
                <!--菜单导航-->
                <div class='pc_indexPage_nav_menu fl'>
                   <ul class='nav_list'>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first'><a href="#" class='b-font'>上衣</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">T恤</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		秋上新<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		入秋套装 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#" class='b-font'>裙子</a></span>
                          <span class="nav_list_title"><a target="_blank" href="#">美群套装</a><span class="nav_list_tagicon"></span></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		连衣裙
	                       	</a><span class="nav_list_tagicon"></span>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a rel="nofollow" target="_blank" href="#">
	                    		高腰裙 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first'><a href="#" class='b-font'>裤子</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">牛仔裤</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		休闲裤<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		打底裤 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first'><a href="#" class='b-font'>女鞋</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">单鞋</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		休闲裤<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		打底裤 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first'><a href="#"  class='b-font'>电器</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">手机壳</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		卷发棒<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		移动电源<i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>包包</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">双肩包</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		斜挎包<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		迷你小包 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>男友</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">潮T</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		休闲裤<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		休闲鞋 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>运动</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">运动套装</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		运动鞋<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		小白鞋 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>配饰</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">棒球帽</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		耳饰<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		手链 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>美妆</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">护肤套装</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		面膜<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		遮瑕 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>家居</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">家居鞋</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		四件套<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		小家具 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>                 
                      <li class='nav_list_row'>
                          <span class='nav_list_title first b-font'><a href="#"  class='b-font'>内衣</a></span>
                          <span class="nav_list_title"><a class="" target="_blank" href="#">少女内衣</a></span>
	                       <span class="nav_list_title">
	                       	<a rel="nofollow" class="color_true" target="_blank" href="#">
	                       		睡衣<span class="nav_list_tagicon"></span>
	                       	</a>
	                       </span>
	                    <span class="nav_list_title">
	                    	<a class="color_true" rel="nofollow" target="_blank" href="#">
	                    		内裤 <i class="nav_list_tagicon"></i>
	                    	</a>
	                    </span>
                      </li>
                   </ul>
                </div>
                <!--banner-->
                <div class='pc_indexBanner' data-target="shuffling" @mouseout="openplay" @mouseover="stopplay">
                	<div class='pc_indexBanner_view'>
                		<div v-for="(item,i) in Banners" :key="i" :class="[i===mark?'pc_indexBanner_list changopa':'pc_indexBanner_list']"   v-model="mark">
                			<img :src="item.img" :alt="i"/>
                	    </div>
                	</div>	
                	
                	<!--上下切换-->
                	<!--<div class='prev public_swicth' @click="prev(i)"></div>
                	<div class='next public_swicth' @click="next(i)"></div>-->
                	 <!--小圆点-->
                	<div class='smallDot'>
                		<span v-for="(item,i) in Banners" :key="i" :data="i" :class="{'changDot':i===mark}" @click="changDot(i)"></span>
                	</div>
                </div>

				<!--用户信息-->
				<div class='user_info fl'>
                    <div class='base_info'>
					   <a rel="nofollow" target="_blank" href="" class="avatar"></a>
					<!--<a rel="nofollow" target="_blank" href="" class="member"></a>  -->
					    <div class='welcome'>
						   <span class='txt'>菇娘好!</span>
						   <span class='name'>欢迎来到蘑菇街~</span>
						</div>
						<a rel="nofollow" class="privileged" target="_blank" href="#" >
								<span>会员中心</span>
					    </a>
						<!--登录成功后显示-->
						<a rel="nofollow" target="_blank" href="#" class="order_info">
							<ul class="wrapper clearfix" style="display:none">
								<li class="order fl">
									<p class="title">待付款</p>
									<p class="num unpaidOrderCount">0</p>
								</li>
								<li class="order fl">
									<p class="title m_title">待收货</p>
									<p class="num unReceivedOrderCount">0</p>
								</li>
								<li class="order fl">
									<p class="title">待评价</p>
									<p class="num waitingRateOrderCount">0</p>
								</li>
							</ul>
					    </a>

						<div class="foot_wrapper">
							<a rel="nofollow" target="_blank" href="#" class="user-propa" > 
								<div class="propaganda"> 
									<p class="top_title">邀请好友</p> <p class="top-desc">共享收益分红</p> 
								</div> 
								<div class="live_show">
									<img src="../../../public/img/icon/girt.png" alt="">
								</div> 
							</a> 
					    </div>
					</div>
				</div>
           </div>
       </div>  

	   <!--今日必抢-->
	    <Active @lbt="broadcast"></Active>
	   <!--女装-->
	    <ProductList @lbts="broadcast"></ProductList>
	     <!--猜你喜欢-->
	    <Like></Like>
   </div>
</template>
<script>
import Active from "./Active"
import ProductList from "./productList"
import Like from "../Like/like"
export default {
    name: 'mgBody',
    props: {
        msg: String
    },
    data(){
    	return {
    		Title:"主题市场",
    		TitlleRight:["品牌团购","限时快抢"],
    		Banners:[],
			BackColor:["#FFCA86","#C3D4F8","#FF9B39","#FA87B6","#E8F0FB"],  //轮播背景切换
			mark:0,  //比对图片索引的变量
			timer:""  //控制轮播间隔时间
    	}
    },
    methods:{
		//轮播图请求
		autoplay(){
			this.mark++;
			if(this.mark==this.Banners.length){  //当遍历到最后一张时,变0
				this.mark=0;
			}
		},
		play(){
			 this.timer=setInterval(this.autoplay,3000);
		},
		changDot(i){
			this.mark=i;
		},
		stopplay(){
			clearInterval(this.timer);
		},
		openplay(){
			this.timer=setInterval(this.autoplay,3000); 
		},
		carousel(){
            this.$http.get("http://127.0.0.1:3000/carousel").then(result=>{
				 this.Banners= result.body.msg;
				 console.log(this.Banners);
			});
		},
		broadcast(obj){
                            var {prev,next,view,w,data}=obj;
							var i=0;
							//自动轮播
							var t=null;
							//鼠标移进移出
					    	$(data).hover(
				    				function(){
				    					clearInterval(t);
										t=null;
				    				},
					    			function(){
										if(t){
											return;
										}
			                         t=setInterval(play,3000);
				    		  	 }
			    				)	
				            //自动轮播
				            t=setInterval(play,3000);
				           function play(){
				           	var len=$(view).children().length;
				           	 if(i>len-2){
				           	 	i=0;
				           	 	$(view).children().each(function(){
					           	  		 $(this).css("marginLeft","0");
					           	  	})
				           	 	return;
				           	 }
				           	   var len=$(view).children().length;
				           	  $(view).children().eq(i).css("margin-left",-w);
				           	  i++;
				           }
							//向下切换
							$(next).click(function(){	
								var len=$(view).children().length;
					 			$(view).children().eq(i).css("margin-left",-w);
								 i++;
								if(i>len-1){
										i=0;
								    $(view).children().css("margin-left",0);
								}
							});
							//向上切换
							$(prev).click(function(){
								var len=$(view).children().length;
								i--;
								$(view).children().eq(i).css("margin-left",0).nextAll().css("margin-left",0);
								if(i<0){
									i=len-1;
									$(view).children().eq(i).css("margin-left",0).siblings().css("margin-left",-w);
								}
							});

				//调用
			  }
			
    },
    mounted(){
		this.carousel();
		this.play();
    },
    watch:{
       bgColor(){
       	 return this.mark
       }
    },
	components:{
		Active,
		ProductList,
		Like
	}
 }
</script>
<style scoped>
    /* body*/
.body_wrap{border-bottom: 2px solid #f07; position:relative;}
.main_topnav_content {
    height: 40px;
    margin: 0 auto;
}
.body_wrap .indexLeftLink {
    float: left;
    height: 100%;
    width: 257px;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background:url(../../../public/img/icon/menu257x40.png) no-repeat;
}
.body_wrap .indexLeftTitle {
    position: absolute;
    left: 47px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
	text-decoration:none;
}
.body_wrap .indexRightLink {
    height: 100%;
}
.body_wrap .indexRightLink .indexmainLink {
    display: block;
    height: 20px;
    width: 140px;
    margin-top: 10px;
    border-right: 1px solid #ddd;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
    color: #333;
}
.body_wrap .indexRightLink a{
   text-decoration:none;
}
.body_wrap .indexRightLink a:hover{
  color:#f07;
}
.body_wrap .indexRightLink .indexmainLink-last{
    border-right: none;
}
.c-box{
	margin-bottom:15px;
}
.bg-color{
	background:#ffb971;
}
.pc_indexPage_nav_menu {
    width: 256px;
    background-color: rgba(255, 255, 255, 0.8);  
    z-index: 100;
    position: relative;
    height: 440px;
}
.nav_list{
	display: block;
}
 .nav_list_row {
    margin: 0;
    padding: 0 !important;
    overflow: hidden;
    margin-top:4px;
    height: 32px;
    line-height: 32px;
}
li.nav_list_row{
    display: list-item;
    text-align: -webkit-match-parent;
}
.nav_list_title{
	margin-right:12px;
}
.nav_list_title a{
    font-size: 12px;
    color: #666;
    text-decoration: none;
}
.nav_list_title a:hover{
	color: #FF0077;
}
.nav_list_title a.b-font{
	font-size:15px;
	font-weight: 600;
	color:#333;
}
.first {
    margin-left: 16px;
}

.nav_list_tagicon {
	margin-bottom: -4px;
	margin-left:-3px;
	display: inline-block;
	width:24px;
	height:28px;
    background: url(../../../public/img/icon/h24x28.png) no-repeat center center;
    background-size: 60% 60%;
}
.color_true {
    color: #FF0077!important;
}

/* banner*/
/*轮播功能代码*/
.pc_indexBanner{
	width:768px;
	height:440px;
	float:left;
   overflow: hidden;
   position: relative;
}
.pc_indexBanner .pc_indexBanner_view{
	width:100%;
	overflow: hidden;
	height:440px;
}
.pc_indexBanner_list{
	width:768px;
	height:440px;
	float:left;
	transition: all 0.5s linear;
	opacity: 0;
	position:absolute;
}
.changopa{
	opacity:1;
}
/*小圆点*/
.pc_indexBanner .smallDot{
	position: absolute;
	bottom:4px;
	left:50%;
	margin-left:-41px;
	margin-top:-12px;
}
.pc_indexBanner .smallDot span{
	box-shadow: 0 0 0 2px rgba(255,255,255,.6) inset;
	display: inline-block;
	width:10px;
	height:10px;
	border:1px solid #fff;
	background:rgba(255,255,255,1);
	border-radius: 50%;
	margin: 0 4px;
	opacity: .4;
	cursor:pointer;
}
.pc_indexBanner .smallDot .changDot{
	opacity: .8;
}

/*用户样式*/
.user_info {
    display: block;
    text-decoration: none;
    width: 176px;
    height: 420px;
    margin-top: 10px;
} 
.pc_banner_wrapper .user_info .base_info {
    position: relative;
    width: 176px;
    height: 195px;
    padding-top: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
.pc_banner_wrapper .user_info .base_info .avatar {
    display: block;
    text-decoration: none;
    width: 72px;
    height: 72px;
    margin: 0 auto 0 auto;
    border-radius: 100%;
    background: #ff94c6 url(../../../public/img/icon/touxiang60x64.png) no-repeat center center;
    background-size: 30px 30px;
}
.user_info .base_info .welcome {
    font: normal 12px/1.5 'PingFang SC';
    font-size: 12px;
    margin: 5px 0 7px 0;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
.pc_banner_wrapper .user_info .base_info .welcome .name {
    font-weight: bold;
    width: 90%;
    white-space: nowrap;
    text-align: center;
    margin: 0 auto;
    text-overflow: ellipsis;
    overflow: hidden;
}
.pc_banner_wrapper .user_info .base_info .privileged {
    display: block;
    width: 72px;
    height: 24px;
    border: 1px solid #ff5777;
    font-size: 12px;
    color: #ff5777;
    margin: 0 auto;
    line-height: 24px;
    text-align:center;
	text-decoration:none;
}
.pc_banner_wrapper .user_info .foot_wrapper {
    margin-top: 24px;
    width: 176px;
    height: 210px;
   /* background-color: #ffffff;*/
    background-color: rgba(255, 255, 255, 0.8);
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa {
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa .propaganda {
    width: 100%;
    height: 75px;
    margin: 0 auto;
    font: normal 12px/1.5 'PingFang SC';
    line-height: 1.4;
    text-align: center;
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa .propaganda .top_title {
    font-size: 16px;
    color: #333;
    padding-top: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa .propaganda .top-desc{
    font-size: 14px;
    color: #666;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa .live_show {
    width: 130px;
    height: 130px;
    overflow: hidden;
    margin: 0 auto;
}
.pc_banner_wrapper .user_info .foot_wrapper .user-propa .live_show img {
    width: 100%;
}
/*登录成功后样式 member*/ 
.user_info .base_info .member {
    position: absolute;
    top: 58px;
    right: 47px;
    height: 24px;
    width: 24px;
}
.pc_banner_wrapper .user_info .base_info .order_info {
    width: 135px;
    margin: 7px auto 0;
    border-top: 1px solid #fff;
	display:block;
	height:40px;
}
.pc_banner_wrapper .user_info .base_info .order_info .order {
    margin-left: 7px;
    text-align: center;
}
.pc_banner_wrapper .user_info .base_info .order_info .order .title {
    font-size: 12px;
    color: #333;
}
.pc_banner_wrapper .user_info .base_info .order_info .order .num {
    font-size: 20px;
    color: #ff0077;
    font-weight: bold;
}

/*待付款,待收货,待评价*/
/*unpaidOrderCount,unReceivedOrderCount,waitingRateOrderCount */


</style>