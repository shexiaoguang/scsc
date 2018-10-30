<template>
	<div>
		<div class="c-like">
			<div class="c-like-title">
				<span class="c-span">猜你喜欢</span>
			</div>
			<div class="c-like-content clearfix">
				<div class="c-like-box clearfix">
					 <div class="c-like-list">
					 	 <div class="c-like-item iwf" v-for="(item,i) in Like" :key="i">
					 	 	
					 	 	<a href="" class="c-img-box">
					 	 		<div class="ly">
					 	 			<div class="ly-xs">
					 	 				找相似
					 	 			</div>
					 	 	    </div>
					 	 		<div class="c-like-imgbox">
					 	 			<img :src="item.pic" alt="" class="img"/>
					 	 		</div>
					 	 		<a href="" class="c-like-title">
					 	 			<p class="c-title" v-text="item.e_title"></p>
					 	 			<div class="goods_info fl">
					 	 				<b class="price_info yahei">¥{{item.new_price.toFixed(2)}}</b>
					 	 				<p class="org_price fl yahei">¥&nbsp;<span>{{item.price.toFixed(2)}}</span></p>
					 	 				<span class="fav_num fr">
					 	 					<img src="../../../public/img/icon/xx.png" alt="">{{item.collect}}
					 	 				</span>
					 	 			</div>
					 	 		</a>
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
			Like:""
		}
	},
	methods:{
		dt(){
			var _this=this;
			this.$http.get("http://127.0.0.1:3000/like").then(result=>{
				_this.Like=result.body
			})
		}
	},
	 mounted(){
		this.dt();
	}
}
</script>

<style  scoped>
	.c-like-title{	 
    width: 100%;
     box-sizing: border-box;
    line-height: 25px; 
    font-family: "PingFang SC", Georgia, "Times New Roman", "Microsoft YaHei", 微软雅黑, STXihei, 华文细黑, serif;
	}
	.c-like-title .c-span{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
	}
	.c-like-content{
		width:100%;
		overflow:hidden;
	}
	.c-like-box{
		height:auto;
		width:100%;
		margin-top:30px;
	}
	.c-like-list{
		color:#333;
		height:auto;
		width:1300px;
	}
	.iwf {
    margin: 0 25px 25px 0;
    float: left;
    position: relative;
    overflow: hidden;												
     }
	.c-like-item{
	    width: 218px;
	    height: 373px;
	    background: #fff;																														
	}
	.c-img-box{
		width:100%;
		overflow:hidden;
		height:auto;
		height:373px;
		box-sizing: border-box;
	}
	.ly{
		width:100%;
		overflow:hidden;
		height:auto;
		border:1px solid rgba(250,122,193,1);
		position:absolute;
		height:373px;
		display: none;
		z-index: 999;
		box-sizing: border-box;
	}
	.c-img-box:hover div.ly{
		display: block;
	}
	.ly-xs{
		position: absolute;
		width:100%;
		background:rgba(250,182,193,.8);
		height:28px;
		font-size:12px;
		color:#fff;
		text-align: center;
		line-height: 28px;
		top:262px;
		font-weight: bold;
	}
	.c-like-imgbox{
		display:block;
		width:218px;
		height:290px;
		overflow:hidden;
		cursor: pointer;
		background:#fff;																						
	}														
	.img{
		width:100%;
		display:block;
		border:0;
		vertical-align: middle;
	}
	.c-like-title{
    display: block;
    padding: 0 8px;
    overflow: hidden;
   }
   a{
   	text-decoration:none;
   }
   .c-title{
   	height:40px;
   	margin-bottom:3px;
   	color:#333;
   	line-height: 20px;
    position: relative;
    margin-top: 6px;
    font-size: 14px;
    width: 100%;
   overflow: hidden;
     font-family: arial, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, 宋体, 宋体, Tahoma, Arial, Helvetica, STHeiti;
   }
   .goods_info {
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    color: #333;
    width: 100%;
   										
}
.price_info {
    float: left;
    color: #333;
    font-weight: 700;
    font-size: 16px;
}
.yahei {
    font-family: arial, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, 宋体, 宋体, Tahoma, Arial, Helvetica, STHeiti;
}
.goods_info .org_price {
    font-size: 14px;
    color: #666;
    margin: 3px 0 0 8px;
    line-height: 20px;
}
.fav_num {
    font-size: 12px;
    color: #999;
}
 .org_price span {
    text-decoration: line-through;
    font-size:14px;
    font-weight:normal;
}
 span.fav_num {
    font-size: 12px;
    color: #999;
    font-family: arial, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, 宋体, 宋体, Tahoma, Arial, Helvetica, STHeiti;
}
.fav_num img{
    height: 15px;
    width: 16px;
    vertical-align: -2px;
    margin-right: 4px;
}
</style>