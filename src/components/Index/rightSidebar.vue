<template>
   <div>
       <div class="mgj_rightbar J_sidebar">
           <!--方便定margin的空dediv-->
         <div id="mgj_rightbar_blank_div"></div> 
           <!--购物车-->
           <div class="sidebar-item" v-for="(item,i) of sidebars" :key="i"> 
                <a target="_blank" href="#" rel="nofollow"> 
                    <i :class="fun(i,1,'s-icon')"></i> 
                    <div class="s-txt" v-text="item[0]"></div> 
                </a>
           </div>
          <!--二维码-->
            <div class="sidebar-item" > 
                <a rel="nofollow" data-trigger="dropdowns"> 
                    <i class="qr-icon"></i> 
                </a>
                <div id="detail-qrcode" class="dropdown-menus">
                    <img src="../../../public/img/icon/erweima181x200.png">
                </div>
            </div>
            <!--回到顶部-->
            <div class="sideBottom"> 
                <div class="sidebar-item mgj-back2top" data-target="backtop">
                    <a rel="nofollow" href="javascript:;">
                        <i class="s-icon position-backTop"></i>
                    </a>
                </div>
            </div>
       </div>
   </div>
</template>
<script>
export default{
        name:"rightSidebar",
        data(){
            return{
                sidebars:[
                    ["购物车","position-car"],
                    ["优惠券","position-coupon"],
                    ["钱包","position-wallet"],
                    ["足迹","position-browserlog"],
                ]
            }
        },
        methods:{
            //返回顶部按钮
          scroll(){
              if($(window).scrollTop()<0) $("[data-target=backtop]").hide();
              $(window).scroll(function(){
                  if($(this).scrollTop()>600) 
                  $("[data-target=backtop]").fadeIn(); 
                  else
                   $("[data-target=backtop]").fadeOut();
              });
             $("[data-target=backtop]").on("click",function(){
                   $('html,body').animate({scrollTop: 0},500);
                    return false;
             });
          },
          //拼接class方法
           fun(index,index1, dateString) {
                 return this.sidebars[index][index1] +" " + dateString
                } 
        },
        mounted(){
            this.scroll();
        },												
        computed:{
        }
    }
</script>
<style scopy>
.mgj_rightbar {
    position: fixed;
    height: 100%;
    z-index: 9999;
    top: 0;
    width: 30px;
    right: 0;
    color: #fff;
    font-size: 12px;
    background: #202020;
}
.mgj_rightbar #mgj_rightbar_blank_div {
    position: relative;
    top: 0;
    right: 0;
    height: 10%;
    width: 30px;
}
.mgj_rightbar .sidebar-item {
    position: relative;
    padding: 4px 4px 0;
    text-align: center;
    background: #202020;
}
.mgj_rightbar .sidebar-item:hover{
    background:#f04;
}
.mgj_rightbar .sidebar-item a {
    display: block;
    color: #fff;
    text-align: center;
    line-height: 15px;
    border-bottom: 1px solid rgba(221,221,221,.6);
    padding-bottom: 12px;
    text-decoration: none;
}

.mgj_rightbar .sidebar-item .s-icon{
    background-image: url(../../../public/img/icon/nav609x784.png);
    background-repeat: no-repeat;   
    width: 30px;
    height: 30px;
    display: block;
}
.mgj_rightbar .sidebar-item .position-car{
    background-position: -271px -132px;
}
.mgj_rightbar .sidebar-item .position-coupon {
    background-position: -271px -159px;
}
.mgj_rightbar .sidebar-item .position-wallet {
    background-position: -271px -219px;
}
.mgj_rightbar .sidebar-item .position-browserlog {
     background-position: -271px -189px;
}
.mgj_rightbar .sidebar-item .position-backTop{
    background-position: -270px -279px;
}

.mgj_rightbar .sidebar-item .qr-icon{
    width: 16px;
    height: 16px;
    display: block;
    background: url(../../../public/img/icon/menu.png) center no-repeat;
    margin-top: 7px;
    margin-left: 3px;
}
.mgj_rightbar .sideBottom {
    position: absolute;
    bottom: 10px;
    width: 30px;
}
.mgj_rightbar .mgj-back2top {
    background: #202020;
    display: none;
    cursor: pointer;
    padding-top: 0;
    padding-bottom: 0;
}
.mgj_rightbar .mgj-back2top a {
    border-top: 1px solid rgba(221,221,221,.6);
    border-top: 1px solid #ddd\9;
    padding-top: 4px;
}
.mgj_rightbar #detail-qrcode {
    display: none;
    position: absolute;
    width: 181px;
    height: 200px;
    left: -176px;
    top: -13px;
}
</style>