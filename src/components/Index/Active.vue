<template>
   <div>
      
	   <!--今日必抢-->
	   <div>
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
						<img src='../../../public/img/icon/jrbq.png' alt='今日必抢'>
					</a>
                 <!--右边轮播-->
					<div class='pfr'>
						<div class='pfr-content' data-target="broadcast">
						    <div class="pfr-view">
								<div class='mslide-box' v-for="(item,i) in Today" :key="i">
									<div class='fl item-box' v-for="(itemlis,k) in item" :key="k">
										<a class='goods-image' href='#' target="_blank">
											<img :src='itemlis.img'>
										</a>
										<a class="goods-title" href="#" target="_blank" v-text="itemlis.carousel_title"></a>
										<div class="goods-price"> 
											<em>¥{{itemlis.price.toFixed(2)}}</em> 
											<del>¥{{itemlis.new_price.toFixed(2)}}</del> 
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
		  <!--广告图-->
		     <div class='dev-box'>
				 <div class='bot-dev'>
				 	<div class='bot-dev-box fl' v-for="(item,i) in Dev.slice(0,1)" :key="i">
				 		<a href="#" target="_blank" rel="">
				 		  <img :src="item.img" alt="" /> 
				 		</a>
				 	</div>
				 	
				  	<div class='bot-dev-sm-box fl'>
						<div class='bot-dev-sm-boxlist' v-for="(item,i) in Dev.slice(1)" :key="i" :title="item">
							<a href="#" target="_blank">
								<img :src="item.img" alt="" />
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
    			Today:[],
				Dev:[]
    		}
    	},
    	methods:{
    		timer(){
    			var time=null;
    			var end=new Date("2018/12/31 23:59:59");  //设置时间
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
			today(){
               var _this=this;  //给this 赋值变量,防止$http函数this作用域改变
				this.$http.get("http://127.0.0.1:3000/carousel/today").then(result=>{
					var obj=result.body.msg;
                    var arr=[];
					var T = {},k=0;
                    for(var i=0;i<obj.length;i++){
						arr.push(obj[i]);
						if(arr.length==4){
						    T[k]=arr;
							arr=[];
							k++;
							continue;
						}
					}
					_this.Today=T;
				});
			},
			dev(){
				var _this =this;
				this.$http.get("http://127.0.0.1:3000/carousel/dev").then(result=>{
                    var obj = result.body.msg;
					_this.Dev=obj;	
				});
			},
			lb(){  
			   this.$emit("lbt",{
			     prev:".prev",
				  next:".next",
				  view:".pfr-view",
				  w:960,
				  data:"[data-target=broadcast]"//固定,不用改
			   })
			 }
			},
    	 mounted(){
    		//倒计时
    		var timer=setInterval(this.timer,1000);
			//轮播
			this.today();
			this.dev();
			this.lb();
    	}
    }
</script>
<style>
    .mod_row{
	font-size:24px;
	margin-bottom:48px; 
	width:1200px;
	margin:0 auto;
	background-color: #ffffff;
}
.slider-wrap {
    overflow: hidden;
    width: 100%;
    height: 294px;
    background-color: #ffffff;
    margin-bottom: 10px;
    position: relative;
}
.slider-wrap .big-banner {
    display: block;
    width: 230px;
    height: 294px;
    overflow: hidden;
}
.slider-wrap .big-banner img{
	width:100%;
}
 .slider-wrap .pfr {
    width: 970px;
    height: 294px;
    float: left;
}
.pfr-content{
	width:100%;
	height:294px;
	position:relative;
	overflow:hidden;
}
.pfr-view{
	width:9999px;
	height:294px;
	float:left;
}
 .slider-wrap .mslide-box{
	 width:auto;
	 height:294px;
	 float:left;
	 padding:0 21px 0 21px;
	 transition:all .3s linear;
 }

.slider-wrap .mslide-box .item-box{
	width: 190px;
    height: 248px;
    padding: 30px 20px 16px 20px;
	box-sizing:content-box;
}
.slider-wrap .item-box .goods-image {
    width: 190px;
    height: 190px;
    overflow: hidden;
    display: block;
}
.slider-wrap .mslide-box .item-box img{
	width:190px;
}
.slider-wrap .item-box .goods-title{
    color: #666;
    font-size: 16px;
    line-height: 20px;
    height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-top: 13px;
    margin-bottom: 2px;
    padding: 0 10px;
	text-decoration:none;
}
.slider-wrap .item-box .goods-price {
    position: relative;
    top: -5px;
    padding: 0 10px;
    font-family: Arial, Helvetica, sans-serif;
}
.slider-wrap .item-box .goods-price em {
    display: inline-block;
    color: #FF4B6D;
    font-style: normal;
    font-size: 22px;
    float: left;
}
.slider-wrap .item-box .goods-price del {
    display: inline-block;
    font-size: 14px;
    color: #999;
    margin-left: 10px;
    float: right;
    position: relative;
    top: 9px;
}
/*秒杀下广告*/
.dev-box{
	width:1200px;
	margin:0 auto;
}
.bot-dev{
	width:100%;
	height:140px;
	overflow: hidden;
	margin-bottom: 48px;
}
.bot-dev .bot-dev-box{
	width:450px;
	height:140px;
	margin-right:14px;
}
.bot-dev .bot-dev-box img{
	width:100%;
}
.bot-dev .bot-dev-box a,.bot-dev-sm-boxlist a{
	display:inline-block;
	width:100%;
	height:140px;
}
.bot-dev-sm-box{
	width:736px;
	height:140px;
}
.bot-dev-sm-box .bot-dev-sm-boxlist{
	width:236px;
	margin-right:14px;
	height:140px;
	float:left;
}
.bot-dev-sm-box div.bot-dev-sm-boxlist:last-child{
	margin-right:0px;
}
.bot-dev-sm-box .bot-dev-sm-boxlist img{
	width:100%;
	height:140px;
}

/*倒计时*/
.time{
	width:172px;
	height:40px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 30px;
	left:30px;
}
.time span{
	width:48px;
	display: inline-block;
	height:40px;
	background:#000000;
	border-radius: 8px;	
	font-size: 30px;
	color:#fff;
   text-align: center;
    line-height:40px;
}
.time i{
	font-style: normal;
	font-size: 30px;
	font-weight: bold;
	font-family: "微软雅黑";
}
/*[data-t=time]{
	position: absolute;
	color:#fff;
	font-size: 30px;
	left:50%;
	margin-left:-58px;
}*/
</style>