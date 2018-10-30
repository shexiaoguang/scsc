<template>
	<div>
		<div class="layer" islogin="login" data-target="bgclose">
  	 	   <!--X-->
  	 	   <!--<div class="close">X</div>-->
  	 	   <!--登录-->
  	 	   <div class="modal">
  	 	   	   <div class="rl-modal-header">
	  	 	   	   	<h1 data-target="tab">				
	  	 	   	   		<span :class="[Login ? 'active-title':'']" @click="tab(0)">登录</span>				
	  	 	   	   		<span :class="[Register ? 'active-title':'']" @click="tab(1)">注册</span>	
					    <button type="button" class="rl-close"  @click="close"></button>	
	  	 	   	    </h1>		    
	  	 	   	   	  
  	 	   	   </div>
  	 	   	   <div class="rl-modal-body">
  	 	   	    <form action="" autocomplete="off"  v-show="Login">
  	 	   	   	 	  	<p class="rlf-tip-globle"></p>
		  	 	   	   	  <div class="pr">
		  	 	   	   	  	<input type="text" name="username" maxlength="37" autocomplete="off" placeholder="请输入登录邮箱/手机号" class="ipt" v-model="username"/>
		  	 	   	   	  	<p class="rlf-tip-wrap" v-text="warnuser"></p>
		  	 	   	   	  </div>
		  	 	   	   	   <div class=" pr">
		  	 	   	   	  	<input type="password" name="password" maxlength="16" minlength="6" autocomplete="off" placeholder="6-16位密码，区分大小写，不能用空格" class="ipt" v-model="password"/>
		  	 	   	   	  	<p class="rlf-tip-wrap" v-text="warnpwd"></p>
		  	 	   	   	  </div>
		  	 	   	   	  <div class="rlf-appendix clearfix">							
		  	 	   	   	  	<label for="auto-signin" class="rlf-autoin fl" hidefocus="true">
		  	 	   	   	  		<input type="checkbox" v-model='checked' class="auto-cbx">7天内自动登录
		  	 	   	   	  	</label>
		  	 	   	   	  	<a href="" class="rlf-forget fr" target="_blank" hidefocus="true">忘记密码 </a>						
		  	 	   	   	  </div>
		  	 	   	   	  <div class="clearfix">							
		  	 	   	   	  	<input type="button" value="登录" hidefocus="true" class="moco-btn-red moco-btn-lg btn-full" @click="login">						
		  	 	   	   	  </div>
  	 	   	   	 </form>	  
  	 	   	   	 <!--注册模块-->
  	 	   	  	 <form action="" autocomplete="off" v-show="Register">
  	 	   	   	 	  	<p class="rlf-tip-globle"></p>
		  	 	   	   	  <div class="pr">
		  	 	   	   	  	<input type="text" name="uname" maxlength="37" autocomplete="off" placeholder="请输入注册邮箱/手机号" class="ipt"/>
		  	 	   	   	  	<p class="rlf-tip-wrap" data-error-hint="请输入正确的邮箱或手机号"></p>
		  	 	   	   	  </div>
		  	 	   	   	   <div class=" pr">
		  	 	   	   	  	<input type="pwd" name="upwd" maxlength="16" minlength="6" autocomplete="off" placeholder="请输入验证码" class="ipt"/>
		  	 	   	   	  	<p class="rlf-tip-wrap" data-error-hint="请输入6-16位密码，区分大小写，不能使用空格！"></p>
		  	 	   	   	  	<!--验证码-->
		  	 	   	   	  	<div class="code">
		  	 	   	   	  		<i class="yzm_pic" @click="code()"></i>
		  	 	   	   	  		<canvas id="c3" width="80" height="38" style="margin-top:1px"></canvas>
		  	 	   	   	  	</div>
		  	 	   	   	  </div>
		  	 	   	   	  <div class="rlf-appendix clearfix">							
		  	 	   	   	  	<label for="auto-signin" class="rlf-autoin fl" hidefocus="true">
		  	 	   	   	  		<input type="checkbox" checked="checked" class="auto-cbx">同意蘑菇街注册协议
		  	 	   	   	  	</label>					
		  	 	   	   	  </div>
		  	 	   	   	  <div class=" clearfix">							
		  	 	   	   	  	<input type="button" value="注册" hidefocus="true" class="moco-btn-red moco-btn-lg btn-full">						
		  	 	   	   	  </div>
  	 	   	   	 </form>  	 
  	 	   	   </div>
					<div class="rl-model-footer">			
						<div class="pop-login-sns clearfix">				
							<span class="fl " style="color:#666">其他方式登录</span>				
							<a href="javascript:void(0)" hidefocus="true"  class="pop-sns-weibo fl"><i class="icon-weibo"></i></a>				
							<a href="javascript:void(0)" hidefocus="true"  class="pop-sns-weixin fl"><i class="icon-weixin"></i></a>				
							<a href="javascript:void(0)" hidefocus="true" class="pop-sns-qq fl"><i class="icon-qq"></i></a>			
						</div>			 
						<div class="erweima" v-show="Ewm">
							<!--差二维码切换-->
							<div class="erweima-sjx"></div>
						</div>	
					</div>
  	 	   </div>
  	 </div>
	</div>
</template>
<script>

import {setCookie,getCookie} from '../../assets/js/cookie.js'
	export default{
	//	inject:['reload'],  //注入页面重加载依赖
		data(){
		  return {
		  	Code:"",
		  	Uname:"",
		  	Upwd:"",
		  	Login:true,
           Register:false,
           Ewm:true,
           cls:false,
		   username:"",
		   password:"",
		   warnuser :"",
		   warnpwd :"",
		   checked:true   //是否7天自动登录
		  }
		},
		    methods:{
				//用户手机/邮箱/密码验证
				Regexp(){
                    var pwdReg=/^[a-zA-Z0-9]{6,16}$/;  //密码验证
					var emailReg=/^(.+@?(.*?)\.(com|cn|net)(\.cn)?)$/;  //邮箱验证
					var iphoneReg=/^(\+86|0086)?\s*(1[3-8]\d{9})$/;   //手机号验证
					var  data = {};
					var  bool=false;
					//用户账号验证
					if(emailReg.test(this.username)){
							data.email=this.username;
							 bool=true;	
							 this.warnuser=""
						}else if(iphoneReg.test(this.username)){
							data.iphone = this.username;
							 bool=true;
							 this.warnuser=""
						}else {
							this.warnuser="请输入正确的邮箱或手机号"; 
							 bool=false;
						}
					//用户密码验证
				       if(pwdReg.test(this.password)) {
						   data.password=this.password;
						   this.warnpwd="";
						   bool=true;
						   }else{ 
						 this.warnpwd="请输入6-16位密码，区分大小写，不能使用空格!";
						  bool=false;
						}
					
						if(bool==true){ 
						 return data;
						}
 				   },
		    	//login-register
                login(){
					var _this=this;
                    if(this.username == '' || this.password == ''){
                         this.warnuser="请输入正确的邮箱或手机号";
						 this.warnpwd="请输入6-16位密码，区分大小写，不能使用空格!";
					}else{
						// let data = {'username':this.username,'password':this.password}  //获取用户输入的账户密码
						//接口请求
						var data=this.Regexp();
						if(data!=null){
						this.$http.post('http://127.0.0.1:3000/user/login',data).then(res=>{
                             if(res.body.msg== -1){
                                this.warnpwd="输入密码有误"
							 }else if(res.body.msg==1){
                                  console.log(this.checked);
								  //console.log(res.body.result[0].uname);

								  if(this.checked){
									  setCookie('uname',res.body.result[0].uname,1000*604800);
								  }else{
									  setCookie('uname',res.body.result[0].uname,1000*3600);
								  }
								  setTimeout(function(){
									//   _this.$router.push('/');   //路由跳转
									//  location.reload();      //  着三种会导致页面空白,体验不好
									 _this.$router.go(0);    
								  //	_this.reload();
								  },2000);
							 }
						});
						}
					}
				},
		    	tab(index){
				   if(index>0){
					   //1注册
					   this.Register=true;
					   this.Login=false;
				   }else{
					   //0登录
					    this.Register=false;
					   this.Login=true;
				   }
		    	},
				close(){
						//关闭登录-注册页面
                   	this.$emit("clo",this.cls);
				},
				//验证码
		    	 code(){
				  	  var c3 = document.getElementById("c3");
				        var ctx = c3.getContext("2d");
				        //1:创建矩形为验证创建背景(随机颜色)
				        ctx.fillStyle = rc(180,230);
				        ctx.fillRect(0,0,80,40);
				        //2:创建4个字符绘制背景上
				        var pool = "ABCDEFGHIJKLMNOPQRSTUVEXYZ1234567890";
				        for(var i=0;i<4;i++){
				          var c = pool[rn(0,pool.length)];
				          ctx.textBaseline = "top";
				          ctx.font = "23px SimHei";
				          ctx.fillStyle = rc(80,180);
				          ctx.fillText(c,i*22,5);
				          this.Code+=c;
				        }
				        //3:创建5条干扰线
				        for(var i=0;i<5;i++){
				           ctx.beginPath();
				           ctx.strokeStyle = rc(0,255)
				           ctx.moveTo(rn(0,120),rn(0,30));
				           ctx.lineTo(rn(0,120),rn(0,30));
				           ctx.stroke();
				        }
				        //4:创建20个干扰点
				        for(var i=0;i<20;i++){
				          ctx.fillStyle = rc(0,255);
				          ctx.beginPath();
				          ctx.arc(rn(0,120),rn(0,30),1,0,2*Math.PI);
				          ctx.fill();
				        }
				        //5:创建二个基本函数 
				        //返回指定范围随机数
				        function rn(min,max){
				          var n = Math.random()*(max-min)+min;
				          return Math.floor(n);
				        } 
				        //返回指定范围颜色
				        function rc(min,max){
				           var r = rn(min,max);
				           var g = rn(min,max);
				           var b = rn(min,max);
				           return `rgb(${r},${g},${b})`;
				        } 
			       }
		   },
		   mounted(){
		   	  this.code();
				 /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
				 if(getCookie('name')){
					  this.$router.push('/')
				 }
		   },
		   watch:{

		   }
	}
</script>
<style scoped>
	 /*登录*/
	
.layer{
		background:rgba(0,0,0,.75);
	  top:0;
	  left:0;
	  bottom: 0;
    left: 0;
		position: fixed;
		z-index: 10000;
		/*opacity: .75;*/
		width:100%;
	}
.layer .close{
	width:50px;
	height:50px;
	background:#fff;
	border-radius: 50%;
	text-align: center;
	font-size: 30px;
	color:#000;
	line-height: 40px;
	border: 5px solid #c9c9c9;
	position: fixed;
	right:-10px;
	top:-10px;
}
.modal{
    position: fixed;
    background: #fff;
    z-index: 100000;
    width: 360px;
    height:380px;
    padding-bottom: 30px;
    left: 50%;
    top: 50%;
    right:0;
    margin: -218px 0 0 -180px;
    box-shadow: 0 0 3px rgba(0,0,0,.25);
    display: block;
    box-sizing: border-box;
}
.rl-modal-header {
    position: relative;
    padding: 0 20px;
}
.rl-modal-header h1 {
    font-size: 16px;
    line-height: 49px;
    height: 49px;
    color: #787d82;
    border-bottom: 1px solid #d0d6d9;
}
.rl-modal-header .active-title,.rl-modal-header span:hover {
    border-bottom: 1px solid #FF0077;
    color: #FF0077;
}
.rl-modal-header h1 span {
    float: left;
    width: 80px;
    text-align: center;
    height: 49px;
    line-height: 49px;
    cursor: pointer;
}
.rl-close{
    float:right;
    display: inline-block;
    width:29px;
    height:49px;
    cursor: pointer;
    background: url(../../../public/img/icon/x.png) no-repeat center center;
    border:none;
    outline: none;
	-weibkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;
}
button.rl-close:hover{
    background:url(../../../public/img/icon/x-pink.png) no-repeat center center;
}
.rl-modal-body{
	width:100%;
	padding:0 30px;
	box-sizing: border-box;
}
.rlf-tip-globle {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
}
.pr{
	position: relative;
}
.modal .ipt {
    width: 300px;
    padding: 12px 14px;
    background-color: #fff;
    box-shadow: 2px 0 5px 0 #fff;
    border: 1px solid rgba(84,92,99,.6);
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    color:#66666;
    box-sizing: border-box;
}
::-webkit-input-placeholder{/*Webkit browsers*/
    color:#DEE2E6;
}
:-moz-placeholder{/*Mozilla Firefox 4 to 8*/
   color:#DEE2E6;
}
::moz-placeholder{/*Mozilla Firefox 19+*/
   color:#DEE2E6;
}
:-ms-input-placeholder{/*Internet Explorer 10+*/
    color:#DEE2E6;
}
.rlf-tip-wrap {
    font-size: 12px;
    height: 20px;
    clear: both;
	color:#f07;
}

.modal .form-control,.modal .proclaim-loc {
    position: relative;
}
.rlf-appendix {
    line-height: 1em;
    margin-bottom: 20px;
}
.rlf-appendix .rlf-autoin, .rlf-appendix .rlf-forget {
    color: #787d82;
}
a.rlf-forget{
	text-decoration: none;
}
a.rlf-forget:hover{
	color:#f07;
}
.rlf-appendix .auto-cbx {
    margin-right: 10px;
    vertical-align: -1px;
}
.rlf-appendix .rlf-autoin, .rlf-appendix .rlf-forget {
    color: #787d82;
    font-size:14px;
}
.btn-full {
    width: 300px;
    box-sizing: border-box;
}
.moco-btn-lg {
    padding: 11px 32px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 24px;
}
.moco-btn-red {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    color: #fff;
    background-color: #f07;
    border-color: #f07;
    opacity: 1;
	outline:none;
	transition: all .2s linear;
	-weibkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
}
.moco-btn-red:hover{ 
	box-shadow:0 0 60px 4px rgba(0,0,0,.2) inset;
}
.rl-model-footer {
    padding: 20px 30px 4px;
}
.pop-login-sns {
    text-align: center;
    font-size: 14px;
}
.pop-login-sns span {
    color: #b5b9bc;
    display: inline-block;
    margin-top: 4px;
}
.pop-login-sns a {
    font-size: 14px;
    margin-left: 21px;
    height: 20px;
    color: #c8cdd2;
    transition: color .2s;
}
.mr60 {
    margin-right: 60px;
}

.icon-weibo{
	display: inline-block;
	width:29px;
	height:29px;
	background:url("../../../public/img/icon/weibo.png") no-repeat;
}
.icon-weibo:hover{
	background:url("../../../public/img/icon/weibo-pink.png") no-repeat;
}
.icon-weixin{
	display: inline-block;
	width:29px;
	height:29px;
	background:url("../../../public/img/icon/weixin.png") no-repeat;
}
.icon-weixin:hover{
	background:url("../../../public/img/icon/weixin-pink.png") no-repeat;
}
.icon-qq{
	display: inline-block;
	width:29px;
	height:29px;
	background:url("../../../public/img/icon/qq.png") no-repeat;
}
.icon-qq:hover{
	background:url("../../../public/img/icon/qq-pink.png") no-repeat;
}
.erweima {
    background: url("../../../public/img/icon/ewm.png") no-repeat;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    display: inline-block;
    box-shadow: 0 0 4px 2px #999 inset;
}
.erweima-sjx{
	width:0px;
	height:0px;
	border:30px solid #fff;
	border-right-color: transparent;
  border-bottom-color: transparent;
	position: absolute;
	top:0;
	left:0;
	
}
.label{
	display: inline-block;
	margin-bottom: none;
}
.code{
	width:110px;
	height:40px;
	position:absolute;
	top:1px;
	right:3px;
	overflow: hidden;
	box-sizing: border-box;
}
.code canvas{
	 background:#FFF0F5;
	 margin-left:28px;
}
.yzm_pic{
	width:24px;
	height:24px;
	display: inline-block;
	background:url("../../../public/img/icon/sx.png");
	position: absolute;
	margin-top:8px;
	transition: all 1s linear;
}
.yzm_pic:hover{
	transform:rotate(360deg);
-ms-transform:rotate(360deg); 	/* IE 9 */
-moz-transform:rotate(360deg); 	/* Firefox */
-webkit-transform:rotate(360deg); /* Safari 和 Chrome */
-o-transform:rotate(360deg); 	/* Opera */
}
</style>