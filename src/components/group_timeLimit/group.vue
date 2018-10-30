<template>
  <div>
     <div class="brankgroud">
         <div class="brankgroud_title">
             <div class="brankgroud_content">
                 <img class="brankgroud_img" src="../../../public/img/brand/2018101716343786026.png"/>
             </div>
         </div>
         <!-- 轮播图 -->
         <div class="banner">
             <div class="banner_box">
                  <div class="banner_view">
                     <div class="mslide_content_box">
                         <div class="mslide_banners">
                              <a href="#" class="mslide_view">
                                  <img class="mslide_img" src="../../../public/img/brand/2018101716362730624.png"/>
                              </a>
                              <a href="#" class="mslide_view">
                                  <img class="mslide_img" src="../../../public/img/brand/2018101716360832684.png"/>
                              </a>
                         </div>
                     </div>
                  </div>
            
                  <div class="adv_view">
                       <a href="#" class="right_first">
                          <img src="../../../public/img/brand/2018101716355574254.png" class="first_img"/>
                       </a>
                       <a href="#" class="right_two">
                          <img src="../../../public/img/brand/2018101716352576848.png" class="two_img"/>
                       </a>
                  </div>
             </div>
         </div>


          <!--今日必抢-->
          <div class='mod_row'>
		          <div class='slider-wrap'>
                  <!--倒计时-->
                  <div class="time" data-t="time">
                    <span></span><i>:</i>
                    <span></span><i>:</i>
                    <span></span>
                  </div>
                  <!-- 左边大图 -->
                  <a class="big-banner fl">
                    <img src='../../../public/img/brand/2018101716353944761.png' alt='今日必拼'>
                  </a>
                      <!--右边轮播-->
                      <div class='pfr'>
                            <div class='pfr-content' data-target="broadcast">
                                <div class="pfr-view">
                                <div class='mslide-box' v-for="(item,i) in Today" :key="i">
                                  <div class='fl item-box' v-for="(itemlis,k) in item" :key="k">
                                    <a class='goods-image' href='#' target="_blank">
                                      <img :src='itemlis.pic'/>
                                      <div class="save-price">{{(itemlis.price.toFixed(2),itemlis.new_price.toFixed(2))|depreciate(itemlis.price.toFixed(2),itemlis.new_price.toFixed(2))}}</div>
                                    </a>
                                    <a class="goods-title" href="#" target="_blank" v-text="itemlis.t_title"></a>
                                    <div class="goods-price"> 
                                      <em>¥{{itemlis.new_price.toFixed(2)}}</em> 
                                      <del>¥{{itemlis.price.toFixed(2)}}</del> 
                                    </div>
                                </div>
                            </div>
                      </div>
                      <!--左右切换-->
                      <div class='next public_swicth'></div>
                      <div class='prev public_swicth'></div>
                    </div>
                  </div>
              </div>
					</div>	


          <!--品牌好店-->
          <div class="taste_good">
               <div class="taste_good_box">
                  <div class="taste_good_title">
                      <span class="shop-list-title">品牌好店</span>
                  </div>
                  <div class="shop-list-bd clearfix">
                    <div class="shop-list-box">
                         <a href="#" class="shop-item" v-for="(item,i) in Tastegood" :key="i" v-model="Tastegood">
                            <div class="shop-list">
                                <img :src="item.pic" class="fill-img">
                                <div class="shop-item-info">
                                    <div class="shop-item-title" v-text="item.b_title"></div> 
                                    <div class="shop-item-desc" v-text="item.s_title"></div> 
                                    <div class="shop-item-promotion" v-text="item.active"></div>
                                </div>
                                <div class="shop-item-left-day"><span>{{item.active_day|surplus}}</span></div>
                            </div>
                         </a>
                    </div>
                  </div>
                    <!--查看更多-->
                    <div class="View_More" @click="full" v-show="ShowAll">
                    	 <span>查看更多</span>
                    </div>
               </div>
               
          </div>
          
           <!--精选好货-->
          <div class="handpick">
               <div class="handpick_box">
               	  <div class="handpick_box_title">
               	       <span class="handpick-list-title">精选好货</span>
               		</div>
               		<div class="brandSale-wall-tab">
                     <div class="mceWall_tab clearfix">
                        <div class="fl mceWall_tab_item J_bs_tab_item" v-for="(item,i) in Tabs" :key="i" @click="changeclass(i,item.objname)" >
                        	<span v-text="item.name" ></span>
                        </div>
                    <!--    <div class="fl mceWall_tab_item J_bs_tab_item "><span>上衣</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>套装</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>裙裤</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>鞋包</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>美妆</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>男友</span></div>
                        <div class="fl mceWall_tab_item J_bs_tab_item "><span>生活</span></div>-->
                     </div>
                  </div>
                  <div class="mceWall floor-goods">
                  	  <div class="mceWall_box clearfix">
                  	  	<!--列表-->
                  	  	 <a href="" class="mceWall_item fl" v-for="(item,i) in Handpicks" :key="i" v-model="Handpicks">
                  	  	 	  <div class="mceWall_item_image loading_bg_80"> 
                  	  	 	  	<div class="left-bubbel-wrap">{{item.hot|hot}}</div> 
                  	  	 	    <img class="J_dynamic_img fill_img" :src="item.pic" alt="">
                  	  	 	  </div>
                  	        <div class="mceWall_item_info"> 
	                  	        	<div class="title-text" v-text="item.c_title"></div> 
	                  	        	<div class="discount-wrap clearfix">  
	                  	        		<span class="discount fl">{{item.discount}}折</span> 
	                  	        	  <span class="space fl">{{(parseInt((item.price*(item.discount/10))),parseInt(item.price))|province(item.price*(item.discount/10),item.price)}}</span>  
	                  	        	</div> 
	                  	        	<div class="info_price"> 
	                  	        		<span class="cur-price">¥{{parseInt(item.price*(item.discount/10)).toFixed(2)}}</span>  
	                  	        		<span class="old-price">¥{{item.price}}</span> 
	                  	        	</div> 
                  	        </div>
                  	  	 </a>
                  	  </div>
                  </div>
               </div>
          </div>
     
          <!--leftsidebar-->
          <div class="brandSale-wall-nav" style="margin-left: -670px;">  
          	<div class="nav-item J_bs_tab_item" v-for="(item,i) in Tabs" :key="i" @click="changeclass(i,item.objname)" v-text="item.name"></div>  
          	<!--<div class="nav-item J_bs_tab_item">上衣</div>  
          	<div class="nav-item J_bs_tab_item">套装</div>  
          	<div class="nav-item J_bs_tab_item">裙裤</div>  
          	<div class="nav-item J_bs_tab_item">鞋包</div>  
          	<div class="nav-item J_bs_tab_item">美妆</div>  
          	<div class="nav-item J_bs_tab_item">男友</div>  
          	<div class="nav-item J_bs_tab_item">生活</div> -->
          </div>
          
          
          
     </div>
  </div>
</template>
<script>
export default{
   data(){
     return {
         Today:"",
         Tastegood:"",
         Preload:"",  //预加载
         ShowAll:true,
         Handpicks:"",  //tabs
         Tabs:[
         {name:"精选",objname:"choiceness"},
         {name:"上衣",objname:"tops"},
         {name:"套装",objname:"suit"},
         {name:"裙裤",objname:"skirt"},
         {name:"鞋包",objname:"shoebag"},
         {name:"美妆",objname:"makeup"},
         {name:"男友",objname:"boyfriend"},
         {name:"生活",objname:"lift"}
         ],
         Handall:""
     }
   },
   methods:{
      grouptimer(overtime){
    			var time=null;
    			var end=new Date(overtime);  //设置时间
     			var now=new Date();   //获取当前时间
     			var $span=$("[data-t=time] span");
     			var s=parseInt((end-now)/1000);
     			if(s>0){
     				var d=parseInt((s/3600)/24);
     				if(d<10) d="0"+d;
     				var h=parseInt(s%(3600*24)/3600);
     				if(h<10) h="0"+h;
     				 var m=parseInt(s%3600/60);
     				if(m<10) m="0"+m;
     				s%=60;
     				if(s<10) s="0"+s;
     				$span.eq(0).html(h);
     				$span.eq(1).html(m);
     				$span.eq(2).html(s);
     			// $span.html(h+":"+m+":"+s);
     			}else{
		          clearInterval(timer);
			        $span.eq(0).html(0);
	     			$span.eq(1).html(0);
	     			$span.eq(2).html(0);
        	   }		
      },
      groupToday(){
          var _this=this;
          $.ajax({
              type:"get",
              url:"http://127.0.0.1:3000/group/today",
              dataType:"JSON",
              success:data=>{
                  var arr=[];
                  var obj=[];
                  for(var i=0;i<data.result.length;i++){
                      arr.push(data.result[i]);
                      if(arr.length==4){
                          obj.push(arr);
                          arr=[];
                      }
                  }
                  _this.Today=obj; 
              }
          })
      },
      tastegood(){
      	var _this=this;
      	$.ajax({
      		type:"get",
      		url:"http://127.0.0.1:3000/group/tastegood",
      		dataType:"JSON",
      		success:data=>{
      			if(data.code==1){
      				var obj=[];
      				var preload=[];
                      data.result.reverse();
      				var surplus=preload.concat(data.result.slice(4)); //预加载
      				 var pageSize=data.result.length;  //设置当前好店数量
      				  for(var i=0;i<4;i++){
      				  	 obj.push(data.result[i]);
      				  }
      				  _this.Tastegood=obj;
                _this.Preload=surplus;
      			}
      		}
      	})
      },
      full(){
      	for(var i=0;i<this.Preload.length;i++){
      		this.Tastegood.push(this.Preload[i]);
      	}
      	this.ShowAll=!this.ShowAll;
      	this.scrolls();
      },
       surplus(){
       	 //剩余天数倒计时
       	 $(function(){
       	 	var $span=$(".shop-item-left-day span").html();
       	    
       	 })
       },
       handpicks(){//精品好装
       	  var _this=this;
       	  this.$http.get("http://127.0.0.1:3000/group/handpick").then(result=>{
       	  	 _this.Handpicks=result.body.choiceness.reverse();
       	  	 _this.Handall=result.body;
       	  	// console.log(result.body)
       	  })
       },
       changeclass(index,objname){ 	
  	     $(".mceWall_tab_item").eq(index).addClass("active").siblings().removeClass("active");
  	     $(".brandSale-wall-nav .J_bs_tab_item").eq(index).addClass("active").siblings().removeClass("active");
  	     //console.log(typeof objname)
  	     this.$nextTick(()=>{
  	     	  // this.Handpicks=this.Handall[objname];  
  	     	   for(var i in this.Handall){
  	     	       if(i==objname){
  	     	   	  	this.Handpicks=this.Handall[i];
                }
  	     	   }
  	     })
          
       },
       defaults(){
       	  $(".mceWall_tab_item").eq(0).addClass("active")
       	  $(".brandSale-wall-nav .J_bs_tab_item").eq(0).addClass("active")
       },
       scrolls(){
       	//元素到达顶部固定
					 $(function(){
					    //获取要定位元素距离浏览器顶部的距离
					  var navH = $(".mceWall_tab").offset().top;		
					    //滚动条事件
					    $(window).scroll(function(){
					    //获取滚动条的滑动距离
					       var scroH = $(this).scrollTop();
					      //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
					      if(scroH>=navH){
					        $(".mceWall_tab").css({"position":"fixed","top":0,"z-index":99});
					      }else if(scroH-100<navH){
					        $(".mceWall_tab").css({"position":"static"});
					      }
					    });
				  });
      },
      navscroll(){
      }
   },
   mounted(){
       var timer=setInterval(this.grouptimer("2018/12/31 23:59:59"),1000);
       this.groupToday();
       this.tastegood();
       this.surplus();
       this.handpicks();
       this.defaults();
       this.scrolls();
       this.navscroll();
   },
   computed:{
   	  //计算属性
   },
   watch:{
       //监听
   }
   
}
</script>
<style scoped>
.brankgroud{
  width:100%;
  height:100%;
  position:relative;
}
.brankgroud_title{
  width:100%;
  height:48px;
  margin-bottom:10px;
  background:#FB5A7A;
}
.brankgroud_content{
  height:48px;
}
.brankgroud_img{
  width:270px;
  height:48px;
}

/*banner*/
.banner{
  width:100%;
  overflow:hidden;
  margin-bottom:10px;
} 
.banner .banner_view {
    width: 970px;
    height: 402px;
    float: left;
    overflow:hidden;
}
.banner .banner_view .mslide_banners {
    background-color: #eee;
    width: 970px !important;
    height: 402px !important;
    position:relative;
    overflow:hidden;
}
.mslide_content_box{
   
}
.mslide_view{
    position:absolute;
    width:100%;
    display:block;
}
.mslide_view .mslide_img{
    width: 970px;
    height: 402px;
}
.banner .adv_view{
  float:right;
  width:220px;
  height:402px;
}
.banner .adv_view .right_first{
  width:220px;
  height:292px;
  margin-bottom:10px;
  background-color:#eee;
}
.banner .adv_view .right_two{
  width:220px;
  height:100px;
  background-color:#eee;
  display:inline-block;
}
.first_img{
      width: 220px;
    height: 292px;
}
.two_img{
  width: 220px;
    height: 100px;
}
a{
   display:inline-block;
}
.goods-image{
    position:relative;
}
.slider-wrap{
  margin-bottom:40px;
}
.save-price{
    width: 69px;
    height: 29px;
    background-color: #FE5878;
    color: #fff;
    font-size: 12px;
    line-height: 29px;
    text-align: center;
    border-top-right-radius: 8px 8px;
    position: absolute;
    left: 0;
    bottom: 0;
}
/*品牌好店 */
.taste_good{
   width:100%;
}
.taste_good .taste_good_title,.handpick_box_title{
  width:100%;
  height:45px;
}
.taste_good .taste_good_title .shop-list-title,.handpick-list-title{
    font-size: 22px;
    font-weight: 500;
    color: #333333;
    display: inline-block;
    line-height: 30px;
    height: 30px;
    margin-top: 5px;
}
.taste_good .taste_good_title .shop-list-title::before,.handpick-list-title::before{
    content: '';
    display: inline-block;
    width: 7px;
    height: 20px;
    background-color: #FE5878;
    margin-right: 10px;
    position: relative;
    top: 2px;
}
.shop-list-bd {
    overflow: hidden;
   margin-bottom: 20px; 
    width:100%;
}
.shop-list-box{
  width:1210px;
  overflow: hidden;
}
.View_More{
	width:100%;
	background:#f07;
	height:40px;
	line-height: 40px;
	text-align: center;
	opacity: .3;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
	transition: all .3s linear;
	cursor: pointer;
     margin-bottom: 20px; 
}
.View_More:hover{
	 opacity: .6;
}
.View_More span{
	color:#fff;
	font-family: "微软雅黑";
	font-size: 15px;
	font-weight: bold;
	letter-spacing:4px;
}
 .shop-list-bd .shop-item {
    position: relative;
    width: 595px;
    height: 180px;
    margin: 0 10px 10px 0;
    background-color:#f5f5f5;
    cursor: pointer;
    float:left;
    
}
.shop-list{
  width:100%;
  position:relative;
   height: 180px;
}
.fill-img{
  width:100%;
  border:0;
  vertical-align:middle;
}
.shop-item-info {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 250px;
    height: 140px;
    padding-top: 20px;
}
.shop-item-left-day {
    position: absolute;
    top: 20px;
    right: 0;
    width: 76px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: rgba(51, 51, 51, 0.7);
    color: #fff;
    font-size: 14px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.shop-item-info .shop-item-title {
    line-height: 37px;
    font-size: 26px;
    color: #333333;
}
.shop-item-info .shop-item-desc {
    line-height: 24px;
    font-size: 17px;
    color: #999999;
    margin-bottom: 5px;
}
.shop-item-promotion {
    display: inline-block;
    width: 116px;
    height: 34px;
    background-color: #FE5878;
    color: #fff;
    line-height: 34px;
    font-size: 16px;
    border-radius: 20px;
    text-align: center;
}
.shop-item-promotion::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 8px;
    background: url("../../../public/img/icon/jt.png") no-repeat center center;
    background-size: contain;
    margin-left: 4px;
    position: relative;
    top: -2px;
}

/*精选好货*/
.handpick{
	width:100%;
	overflow: hidden;
}
.handpick .brandSale-wall-tab {
    height: 48px;
    width: 1200px;
    margin-bottom: 20px;
    background-color: #fff;
    overflow: hidden;
}
.mceWall_tab {
    background-color: #fff;
    height: 48px;
    width: 1200px;
     display: flex;
    justify-content:space-between;
}
.mceWall_tab .active {
    color: #fe5878;
}
.active span::after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #fe5878;
    position: absolute;
    bottom: 0;
    left: 0;
}
.mceWall_tab_item {
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 18px;
    color: #333;
    font-size: 20px;
    cursor: pointer;
    
}
.J_bs_tab_item{
	width:132px;
	height:48px;
}
 .mceWall_tab_item span {
    display: inline-block;
    position: relative;
    padding: 0 19px;
}
.mceWall {
    width: 1190px;
}
.mceWall_box{
    width: 1250px;
    min-height: 1000px;
    overflow: hidden;
}
.mceWall_item {
    position: relative;
    width: 224px;
    height: 412px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: #fff;
    overflow: hidden;
}
.mceWall_item_image {
    width: 100%;
    height: 293px;
    overflow: hidden;
}
.left-bubbel-wrap {
    width: 85px;
    height: 29px;
    line-height: 29px;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    background-color: rgba(51, 51, 51, 0.7);
    position: absolute;
    top: 264px;
    left: 0;
    text-align: center;
    border-top-right-radius: 8px;
}
.mceWall_item_image img {
    display: block;
    width: 100%;
}
 .mceWall_item_info {
    width: 200px;
    height: 113px;
    padding: 5px 12px 0 12px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    overflow: hidden;
}
.mceWall_item_info .title-text {
    width: 100%;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 5px;
}
a.mceWall_item:hover{
	text-decoration: none;
}
 .mceWall_item_info {
    width: 200px;
    height: 113px;
    padding: 5px 12px 0 12px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    overflow: hidden;
    box-sizing: content-box;
}
 .mceWall_item_info .discount-wrap {
    line-height: 25px;
}
.mceWall_item_info .discount-wrap .discount {
    border-color: #fe5878;
    border-style: solid;
    border-width: 1px;
    width: 40px;
    height: 25px;
    font-size: 12px;
    text-align: center;
    color: #fe5878;
}
.mceWall_item_info .discount-wrap .space {
    height: 25px;
    background-color: #fe5878;
    color: #fff;
    padding-left: 6px;
    padding-right: 10px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    line-height:25px;
}
.mceWall_item_info .cur-price {
    color: #333333;
    font-size: 20px;
    margin-right: 5px;
}
 .mceWall_item_info .old-price {
    color: #999999;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: line-through;
}

/*leftsidebar*/
.brandSale-wall-nav {
    position: fixed;
    top: 50%;
    left: 50%;
}
.brandSale-wall-nav .nav-item{
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    position: relative;
    background-color: #7A7A7A;
    cursor: pointer;
    font-size:12px;
}
.brandSale-wall-nav .nav-item:hover,.brandSale-wall-nav .active {
    background-color: #fe5878!important;
}
.brandSale-wall-nav .nav-item {
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    position: relative;
    background-color: #7A7A7A;
    cursor: pointer;
}
.brandSale-wall-nav .nav-item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #656565;
}

</style>