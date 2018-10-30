import Vue from 'vue'
// import App from './App.vue'

//时间过滤器
Vue.filter("dateFormat",(datestr,pattern="YYY-MM-DD")=>{
    return new Date(datestr).toLocaleString();
  });

 //直降x元过滤器
 Vue.filter("depreciate",(newpic,pic)=>{
    var str = `直降${parseInt(pic-newpic)}元`
  return str;
 });
 
//立省x元过滤器
Vue.filter("province",(price,discount)=>{
	//price原价,discount折后价
	var str = `立省${parseInt(price-discount)}元`
	return str;
});

//热销x件
Vue.filter("hot",(num)=>{
	return `热销${num}件`
})
//仅剩x天
Vue.filter("surplus",(num)=>{
	return `剩余${num}天`
})