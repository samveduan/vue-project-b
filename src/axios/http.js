import axios from 'axios';

let HTTP = axios.create({
  baseURL:'http://127.0.0.1:8000/',
  timeout:1000, //单位是ms，请求超过这个时间就取消，即请求超时
  responseType:'json', //后端返回的数据类型
  header:{  //自定义请求头
    'custom-header':'xiao', //Request Headers里面就多了一个custom-header:xiao，后端可以拿到这个数据
    'content-type':'application/x-www-form-urlencoded' //设置这个，那么经过transformRequest处理之后的数据格式就变为了  miaov=ketang&username=leo，只支持POST请求方式
  },
  params:{  //查询字符串，传给后端的数据，不管是get还是post请求，这条数据都会附在url后面，发送给后端
    bookId:'123'
  },
  transformResponse:[function(data){ //数组格式，用于处理返回的数据格式，data是后端发送回来的数据
    data.abc = 'miaov'; //对返回数据做进一步处理，请求此类地址的返回值都拥有abc这个属性，值是miaov
    return data; //需要return出来
  }]
});

//添加一个请求拦截器：请求之前的拦截
HTTP.interceptors.request.use(function(config){ //config就是自定义请求的配置信息，即HTTP的配置参数
                                                //在发送请求之前做某事
  console.log("拦截");
  //这里可以对配置项config做处理，取消某些配置或增加
  return config;  //return config请求会继续进行，否则请求就被拦截了
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});

//添加一个请求拦截器：请求之后的拦截
HTTP.interceptors.response.use(function(data){
  console.log("response");
  console.log(data);
  return data;  //需要return data才能拿到数据，否则就是undefined
});

export default HTTP;
