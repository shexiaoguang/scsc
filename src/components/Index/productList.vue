<template>
  <div>
     <!--女装-->
	   <div class="women ownedAll">
	       <div class="women-box">
		    <!--顶部标题连接-->
		      <div class="top-link" v-for="(item,i) in Titles" :key="i">
			     <div class="sideIcon" :style="item.menu[1]"></div>
				 <div class="cateTitleName col333" v-text="item.menu[0]"></div>
				 <div class="cateLinkBox">
				    <a class="topLink-item" href="#" target="_blank" v-for="(item,k) in item.list" :key="k" v-text="item"></a>
				 </div>
			  </div>
			 <!--左边大图-->
			 <div class="leftBanner fl cube-acm-node">
			    <a href='#' target="_blank">
				   <img class="leftBannerImg fl " :src="Women_dev[0].pic">
				</a>
			 </div>
			  <!--右边轮播-->
			  <div class='fl rightArea'>
					<div class="topSwiper">
						<div class="mslide_content_box" data-target="prod">
							<div class="mslide_banners">
							   <!--轮播滚动盒子-->
							   <div class="mslide_banner_lb">
									   	  <div class="mslide_banner clearfix" v-for="(item,i) in Women" :key="i">
										    <div class="swiper-item fl" v-for="(itemlist,k) in item">
											     <router-link to="/details">   <!--target="_blank"打开新页面使用-->
												    <div class="swiper-img-wrap">
												       <img :src="itemlist.img" alt="">
		                                            </div>
													<p class="swiper-item-title" v-text="itemlist.carousel_title"></p>
													<p class="swiper-item-price"><span>¥</span>{{itemlist.price}} </p>
												 </router-link>
											</div>
										</div>
							   </div>
							    
								<!--左右切换-->
								<div class='next public_swicth'></div>
								<div class='prev public_swicth '></div>
							</div>
								
							
						</div>
					</div>
					<!--轮播下第一排-->
						<div class="middleThematic clearfix">
						    <a href="#" alt="" class="middle-item"> 
							      <img :src="Women_dev[1].pic" >
							</a>
							 <a href="#" alt="" class="middle-item-s"> 
							      <img :src="Women_dev[2].pic" >
							</a>
							 <a href="#" alt="" class="middle-item-s"> 
							      <img :src="Women_dev[3].pic" >
							</a>
						</div>
					<!--轮播下第二排-->
					   <div class="bottomCateGory clearfix">
					       <a class="bottom-item clearfix  fl " href="#" target="_blank" v-for="(item,i) in Women_dev.slice(4)">
							   <div class="bottom-item-info ">
									<div class="goodsTitle" v-text="Women_dev_title[i][0]" :style="Titles[0].fontcolor[i]"></div> 
									<div class="goodsDesc" v-text="Women_dev_title[i][1]"></div> 
							   </div> 
								<div class="bottom-img-wrap ">
									<img :src="item.pic" alt="">
								</div>
							</a>
							
					   </div>
			   </div>
		   </div>
	   </div>

        <!--女装&&包包-->
	    <div class="women ownedAll" v-for="(item,i) in Lists" :key="i">
	       <div class="women-box">
		    <!--顶部标题连接-->
		      <div class="top-link" >
			     <div class="sideIcon" :style="Dev[i].color"></div>
				 <div class="cateTitleName col333" v-text="Dev[i].z_title"></div>
				 <div class="cateLinkBox">
				    <a class="topLink-item" href="#" target="_blank" v-for="(item,k) in Menus_title[i]" :key="k" v-text="item"> </a> 
				 </div>
			  </div>
			 <!--左边大图-->
			 <div class="leftBanner fl">
			    <a href='#' target="_blank">
				   <img class="leftBannerImg fl " :src="Dev[i].dev_pic">
				</a>
			 </div>
			  <!--中间边轮播-->
			   <div class="middles fl" @mouseout="openplay" @mouseover="stopplay">
			   	  <div class="middles-content-banner-box">
			   	  	 	 <div v-for="(itemL,j) in item" :key="j" v-model="index" :class="[j==index?'middles-banner-change middles-banner clearfix':'middles-banner clearfix']" >
				   	  	 	 	  <div class="middles-banner-list" v-for="(itemLis,ji) in itemL" :key="ji">
													<a href="#">
														<div class="middles-swiper-item fl"> 
															<img href="#" class="cube-acm-node" target="_blank" :src="itemLis.img" alt="">
															<p class="middles-item-title" v-text="itemLis.carousel_title"></p>
															<p class="middles-item-price"><span>¥</span>{{itemLis.price.toFixed(2)}}</p> 
														</div>
													</a>
				   	  	 	 	  </div>
			   	  	 	 </div>
			   	  	 	 <!--小圆点-->
			   	  	 	 	  <div class="mslide_dot_box clearfix">
			   	  	 	 	  	<a href="javascript:;" class="dot_default" v-for="(dotitem,i) in item" @click="changDot(i)" :class="[i==index?'dot_show dot_default':'dot_default']"></a>
			   	  	 	 	  </div>
			   	  </div>  
			   </div>
         
         <!--右边区域-->
	         <div class="rightWrapper fl">
	         	     <div class="bg-white">
	         	     	   <div class="header-wrapper"> 
	         	     	   	<span class="goods-shopName">热销商品推荐</span><span class="turn-next">换一批</span> 
	         	     	   </div>
	         	     	  <div class="conter-wrapper" v-for="(item,c) in Rec" :key="c"> 
								<a class="right-goods-item clearfix" href="#" target="_blank" v-for="(itemList,j) in item[i]" :title="j"> 
										<div class="J_dynamic_imagebox right-goods-img fl J_loading_success" >
											<img class="J_dynamic_img"  alt="" :src="itemList.href">
										</div> 
										<div class="goods-info fl"> 
											<p class=" goods-info-title" v-text="itemList.title"></p> 
										<p class=" goods-info-price" ><span>¥</span>{{itemList.pic}}</p> 
										</div>
								</a>
						  </div>		
	         	     </div>
	         </div>
	       </div>
	   </div>
   </div>
</template>
<script>
export default{
          data(){
			  return {
                  Titles:[
					  {
                         menu:["女装","background-color:#FFA1B8"],
                         list:["牛仔外套","初秋套装","连衣裙","休闲裤","长袖衬衫"],
                         fontcolor:["color:#8cacff","color:#f07","color:#FFB746","color:#8cacff"]
					  } ],
				  Women:"null",
				  Women_dev:"null",
				  Women_dev_title:[
					  ['牛仔衬衫','简约设计师款'],
					  ['轻薄针织','早晚降温必备单品'],
                      ['韩版卫衣','百搭必备'],
					  ['心机衬衫','秋季衬衫心机穿搭']
				  ],
				  Menus_title:[
					  ["牛仔外套","初秋套装","连衣裙","休闲裤","长袖衬衫"],
					  ["单鞋","运动鞋","休闲鞋","靴子","帆布鞋","拖鞋"],
					  ["万能衬衫","休闲裤","牛仔裤","潮鞋","卫衣"],
					  ["补水面膜","保湿套装","遮瑕粉底","斩男口红","洗脸卸妆"],
					  ["睡衣","短袜","内衣套装","棒球帽","手表"],
					  ["家纺好货","收纳宝盒","手机壳","美发神器","充电宝"],
					  ["儿童套装","妈咪套装","玩具用品","零食大礼包","进口零食"]
				  ],
				  Lists:[],
                  Rec:[],
				  Dev:[],
				  index:0,  //轮播图索引
				   timer:null
			  }
		  },
		  methods:{
              women(){
				  var _this=this;
				  this.$http.get("http://127.0.0.1:3000/carousel/menu").then((result)=>{
				  	setTimeout(()=>{
				  		_this.Women=_this.group(result.body.women);
					     _this.Women_dev=result.body.women_dev;
				  	},300);
				  });
				  
						  _this.$emit("lbts",{
					     prev:".mslide_content_box .prev",
						  next:".mslide_content_box .next",
						  view:".mslide_banner_lb",
						  w:950,
						  data:"[data-target=prod]"//固定,不用改
					   })
			  },
			  autoplay(){
			  	 this.index++;
			  	var arr = Object.keys(this.Lists[0]);  //对象把key值转为数组
			  	 if(this.index==arr.length){
			  	 	this.index=0;
			  	 }
			  },
			  play(){
			      this.timer=setInterval(this.autoplay,5000);
		       },
				changDot(i){
					this.index=i;
				},
				stopplay(){
					clearInterval(this.timer);
					this.timer=null;
				},
				openplay(){
					this.timer=setInterval(this.autoplay,3000); 
				},
        //对图片进行分组组件 4个一组
				group(Arr){
						var obj=[];
						var b=obj.concat(Arr);
						var arr=[];
						var T = {},k=0;
						for(var i=0;i<b.length;i++){
							arr.push(b[i]);
							if(arr.length==4){
								T[k]=arr;
								arr=[];
								k++;
								continue;
							}
						}
						return T;
					},  
					//对图片进行分组 5个一组
					groupfive(Arr){
						var obj=[];
						var b=obj.concat(Arr);
						var arr=[];
						var T = [],C=[],k=0;
						for(var i=0;i<b.length;i++){
							arr.push(b[i]);
							if(arr.length==5){
								T[k]=arr;
								arr=[];
								k++;
								continue;
							}
						}
						return T;
					}, 
					//对图片进行分组 6个一组
					groupsix(Arr){
						var obj=[];
						var b=obj.concat(Arr);
						var arr=[];
						var T = {},k=0;
						for(var i=0;i<b.length;i++){
							arr.push(b[i]);
							if(arr.length==6){
								T[k]=arr;
								arr=[];
								k++;
								continue;
							}
						}
						return T;
					}, 
				//对数据进行分类组件(重点)
				classify(Arr){
             var arr=[],T={},result=[],n=-1,A={};
					   for(var i=0;i<Arr.length;i++){
						   if(!T[Arr[i].bid]){
							   n++;
							   T[Arr[i].bid]=true;
							   result[n]=[];
						   };
						   result[n].push(Arr[i]);
					   }
					   return result;
					},   
			  menu_lis(){
				  var _this=this;
				  this.$http.get("http://127.0.0.1:3000/list/").then((result)=>{
					 console.log(result.body);
					   var obj=this.classify(result.body.carousel);
					   var rec=this.groupfive(result.body.recommend);
					   var objArr=[];
					   for(var i=0;i<obj.length;i++){
						   objArr.push(this.groupsix(obj[i]));
					   }
                       _this.Rec.push(rec);
					   _this.Lists=objArr;
					   _this.Dev=result.body.dev;		  
				  })
			  }
		  },
		  mounted(){	
		  		this.women();
		  		this.menu_lis();
		  	    this.play();
		  }
    }
</script>
<style scopy>
    /*女装*/
.women-box{
	margin-bottom:48px;
	height:auto;
	overflow:hidden;
} 
.top-link{
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    margin: 0 0 16px;
    width: 100%;
    font-size: 20px;
}
.sideIcon {
    width: 8px;
    height: 100%;
    float: left;
    margin-right: 10px;
}
.cateTitleName {
    float: left;
    margin-right: 30px;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    font-weight: 700;
}
.cateLinkBox {
    float: left;
    height: 100%;
    font-size: 14px;
}
.topLink-item {
    margin: 0 16px;
    font-size: 14px;
}
a.topLink-item{
	text-decoration:none;
	color:#333;
}
a.topLink-item:hover{
	color:#e83e8c;
}
.leftBanner {
    display: block;
    width: 240px;
    height: 624px;
    overflow: hidden;
    margin-right: 10px;
    position: relative;
}
.leftBannerImg{
    width: 100%;
    height: 100%;
}
.rightArea{
    width: 950px;
    overflow: hidden;
}
.topSwiper{
    width: 950px;
    height: 408px;
    margin-bottom: 10px;
    position: relative;
}
.topSwiper .mslide_content_box {
    width: 100%;
    height: 408px;
	position: relative;
    margin: 0 auto;
    overflow: hidden;
}
 .topSwiper .mslide_content_box .mslide_banners {
    width: 950px;
    height: 408px;
    background: none;
}
.mslide_banner_lb{
	width:9999px;
	height:408px;
	position: relative;
	overflow: hidden;
}
.mslide_content_box .mslide_banner {
    width: 950px;
    position: relative;
	top:0;
	float:left;
	transition: all .3s linear;
}
.swiper-item {
    width: 230px;
    height: 408px;
    padding: 16px;
    margin-right: 10px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    background: #ffffff;
    border-radius: 2px;
    overflow: hidden;
}
div.swiper-item:last-child{
	margin-right:0px;
}
.swiper-item a {
    display: block;
    width: 100%;
    height: 100%;
	text-decoration:none;
}
.swiper-img-wrap{
    position: relative;
    width: 198px;
    height: 297px;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 7px;
}
.swiper-img-wrap img {
    position: absolute;
    border-radius: 4px;
    width: 100%;
    height: 100%;
}
.swiper-item-title {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 2.8em;
    position: relative;
    line-height: 1.4em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 198px;
    color: #333333;
}
.swiper-item-price {
    height: 24px;
    line-height: 24px;
    font-size: 22px;
    color: #FF5777;
    margin-top: 3px;
  /* font-weight:bold;*/
   font-family: Arial, Helvetica, sans-serif;
}
.swiper-item-price span{
    font-size: 18px;
    display: inline-block;
    margin-right: 3px;
}
.middleThematic {
    display: inline-block;
    width: 950px;
}
.middleThematic a {
    display: inline-block;
    
}
.middle-item{
	width:470px;
    height: 113px;
    margin-right: 10px;
}

.middle-item img,.middle-item-s img{
	width:100%;
}
.middle-item-s{
	width: 230px;
    height: 113px;
    margin-right: 10px;
}
.middle-item-s:last-child{
	margin-right:0;
}
.bottom-item {
    background: #ffffff;
    width: 230px;
    height: 83px;
    overflow: hidden;
    margin-right: 10px;
    position: relative;
}
.bottom-item:last-child{
	margin-right:0;
}
.bottomCateGory {
    width: 950px;
    height: 86px;
    display: inline-block;
    /*margin-top: 10px;*/
}
.bottom-item-info {
    display: inline-block;
    width: 137px;
    margin-left: 13px;
    margin-top: 15px;
}
.bottom-img-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 83px;
    height: 83px;
    overflow: hidden;
}
.bottom-img-wrap img{
	width:100%;
}
.bottom-item-info .goodsTitle {
    overflow: hidden;
    width: 100%;
    font-size: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bottom-item-info .goodsDesc {
    overflow: hidden;
    width: 100%;
    font-size: 14px;
    color: #666666;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.middles{
    width: 630px;
    height: 624px;
    margin-right: 10px;
    display: inline-block;
    position: relative;
    overflow: hidden;
}
.middles-content-banner-box{
	    width: 100%;
    background: #fff;
    height:624px;
	
}

.middles-banner{
	margin:0 20px;
	float:left;
    width: 590px;
    height: 590px;
    padding-top:24px;
    overflow: hidden;
    opacity: 0;
    position: absolute;
    transition: all 1s linear; 
}
.middles-banner-change{
	  opacity: 1;
}




.middles-banner .middles-banner-list{
	width:180px;
	height:240px;
	overflow: hidden;
	margin-right: 25px;
    margin-bottom: 24px;
    display: inline-block;
}
.middles-banner .middles-banner-list:nth-child(3),.middles-banner .middles-banner-list:nth-child(6){
	margin-right:0;
}
.middles-banner .middles-swiper-item{
	width:180px;
	height:190px;
}
.middles-banner .middles-swiper-item img{
	width:100%;
}
.middles-banner .middles-item-title{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    height: 20px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 182px;
    color: #333333;
}
.middles-banner .middles-item-price {
    letter-spacing: 0;
    height: 24px;
    margin-top: 4px;
    line-height: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #FF5777;
}
.middles-item-price span{
  font-size: 16px;
    display: inline-block;
    margin-right: 3px;
    }
 .mslide_dot_box{
 	    position: absolute;
    bottom: 34px;
    z-index: 10;
    margin: 0 auto;
    text-align: center;
    width: 100%;
 }
 .mslide_dot_box .dot_default {
 	 display: inline-block;
    margin-right: 18px;
    border-radius: 50%;
    width: 6px;
    height:6px;
    padding: 0;
    background: #D8D8D8;
}
.mslide_dot_box .dot_show{
    background: #666!important;
}
/*右边区域*/
.rightWrapper {
    width: 310px;
    height: 624px;
    overflow: hidden;
}
.rightWrapper .bg-white{
	background:#fff!important;
	width:100%;
	height:100%;
}
.conter-wrapper{
	position:absolute;
	width:310px;
	overflow:hidden;
	float:left;
}
.rightWrapper .bg-white .header-wrapper{
	    height: 22px;
    line-height: 22px;
    overflow: hidden;
    width:270px;
    padding: 28px 20px 20px;
}

.header-wrapper .goods-shopName {
    font-size: 18px;
    letter-spacing: 0;
    color: #333333;
}
.header-wrapper .turn-next {
    font-size: 14px;
    letter-spacing: 0;
    float: right;
    color: #5F5F5F;
    cursor: pointer;
}
.header-wrapper .turn-next::before {
    content: "";
    width: 16px;
    height: 18px;
    display: inline-block;
    margin: 0 3px;
    line-height: 22px;
    background: url(../../../public/img/icon/upload1.png) no-repeat center 3px;
}
.right-goods-item {
    width: 274px;
    display: block;
    height: 93px;
    margin: 0 auto 16px;
}
.right-goods-img {
    width: 93px;
    height: 93px;
    margin-right: 10px;
    overflow: hidden;
}
.right-goods-img img {
    width: 100%;
}
.goods-info {
    width: 170px;
}
.goods-info-title {
    width: 100%;
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 44px;
    position: relative;
    line-height: 22px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.goods-info-price {
    font-size: 20px;
    color: #ff5777;
}
.goods-info-price span {
    font-size: 16px;
    margin-right: 3px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>