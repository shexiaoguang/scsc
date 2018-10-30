<template>
	 <div>
	 	<div class="topsearch">
	 		<div class="topsearch-box clearfix">
	 			<div class="logo-warp clearfix">
	 				<a href="javascript:;" class="logo fl">
	 					<div class="search_nav_menu">
	 						<i class="nav_menu_logo"></i>
	 						<span class="nav_menu_all">全部商品分类</span>
	 						<i class="nav_menu_icon"></i>
	 					</div>
	 				</a>
	 		    </div>
	 		     <!--搜索拦-->
	 		    <div class="sticky-search-content">
	 		    	<div class="top_nav_search"> <!--搜索框 -->
		                <div class="search_inner_box clearfix">
		                    <div class="selectbox" >
		                        <span class="selected">搜商品</span>
		                        <ol>
		                            <li class="current" data-index="bao"><a href="#">商品</a></li>
		                            <li data-index="shop"><a href="#">店铺</a></li>
		                        </ol>
		                    </div>
		                    <form action="/search/" method="get" id="top_nav_form">
		                        <input type="text" data-tel="search_book" name="q" class="ts_txt fl" data-def="牛仔裤" value="" autocomplete="off" def-v="牛仔裤" data-acm="3.mce.1_4_11k.39084.77211.qiYpfr7FTwDjK.p_12_hotSearchKeywordRec-mid_39084-sd_115-mdt_sketch-dit_28-lc_201">
		                        <input type="submit" value="搜  索" class="ts_btn">
		                        <input type="hidden" name="t" value="bao" id="select_type">
		                    </form>
		                </div>
                    </div>
	 		    </div>
	 		</div>
	 	</div>
	 </div>
</template>

<script>
export default{
}
</script>

<style scoped>
	.topsearch{
		width:100%;
		background:#fff;
		box-shadow: 0 1px 6px 0 #ccc;
		height:50px;
		z-index: 9999;
		position: absolute;
		left:0;
	}
	.topsearch .topsearch-box{
		position:relative;
		height:50px;
	}
	.topsearch .topsearch-box .logo-warp {
    height: 43px;
    float: left;
    width: 240px;
    overflow: hidden;
    margin-top:7px;
	}
	.logo{
		width:200px;
		height:43px;
		overflow: hidden;
		position: relative;
	}
	.search_nav_menu{
		    display: inline-block;
		    width: 130px;
		    height: 64px;
		    line-height: 64px;
		    padding: 0px 5px;
		    cursor: pointer;
		    position: absolute;
		    left: 60px;
		    top: -14px;
	}
	.search_nav_menu .nav_menu_logo{
		    display: inline-block;
		    width: 20px;
		    height: 20px;
		    vertical-align: middle;
		    background: url(https://s10.mogucdn.com/p2/160829/upload_4ilai5dga816d62aeg4bkl820fh8d_20x20.png) center center / 100% 100% no-repeat;
	}
	.search_nav_menu .nav_menu_all{
		font-family: PingFangSC;
	    font-size: 14px;
	    color: rgb(255, 0, 119);
	    margin-left: 5px;
	    vertical-align: middle;
	}
	 .search_nav_menu .nav_menu_icon {
	    position: absolute;
	    right: 10px;
	    top: 30px;
	    width: 0px;
	    height: 0px;
	    vertical-align: middle;
	    border-width: 6px;
	    border-style: solid;
	    border-color: rgb(255, 0, 119) transparent transparent;
	    cursor: pointer; 
    } 
    
    /*搜索拦样式*/
   .topsearch-box .sticky-search-content {
    width: 482px;
    float: left;
    margin-left: 120px;
   }
  .sticky-search-content .top_nav_search {
    margin-top: 7px;
    width: 482px;
    position: relative;
    z-index: 50;
   }
   .sticky-search-content .top_nav_search .search_inner_box {
    border: 1px solid #f07;
    width: 480px;
    height: 34px;
    border-radius: 0 6px 6px 0;
    background: #fff;
   }
   .top_nav_search .selectbox {
    position: relative;
    float: left;
    width: 60px;
    z-index: 10;
    text-align: center;
}
.top_nav_search .selectbox .selected {
    display: block;
    height: 34px;
    line-height: 34px;
    color: #f07;
    cursor: pointer;
    background-color: #fff;
    background-image: url(../../../public/img/icon/sjx.png);
    background-repeat: no-repeat;
    background-position: 40px 2px;
    box-sizing: border-box;
    font-size:12px;
}
.top_nav_search .selectbox ol {
    background:#fff;
    border: 1px solid #ccc;
    border-top:none;
    position:absolute;
	display: inline-block;
	width:60px;
	left:-1px;
	top:35px;
}
.top_nav_search .selectbox li a {
    display: block;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #f07;
    text-align: center;
    text-decoration: none;
}
.top_nav_search .selectbox li a:hover{
	text-decoration: none;
	background:#F8D7DA;
}
#top_nav_form {
    overflow: hidden;
    height: 34px;
    
}
 .top_nav_search .ts_txt {
    width: 305px;
    background-color: #fff;
    height: 22px;
    line-height: 22px;
    padding: 6px 0 6px 10px;
    border: none;
    color: #999;
    font-size: 12px;
    display: block;
    overflow: hidden;
}
.top_nav_search .ts_btn {
    float: right;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    width: 100px;
    background-color: #f07;
    background-image: linear-gradient(to right,#f25,#ff1581);
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    border-radius: 0 5px 5px 0;
}
input, textarea {
    margin: 0;
    padding: 0;
    outline: 0;
    
}
</style>