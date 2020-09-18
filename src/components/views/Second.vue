<template>
    <div class="second-app">
        <el-row class="header">
  <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="7"><div class="grid-content bg-purple-light">
      <div class="img_logo">
   <img :src="imgUrl"/>
 </div>
 </div>
 </el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">
      <div class="link_header">
         <router-link target="_blank" class="link_jianjie" to="/"  tag='a'>首页</router-link>
            <router-link class="link_jianjie" to="/second"  tag='a'>自紧王</router-link>
                    <router-link  class="link_jianjie" to="/second"  tag='a'>产品中心</router-link>
                       <router-link target="_blank" class="link_jianjie" to="/first"  tag='a'>新闻中心</router-link>
                          <router-link  class="link_jianjie" to="/second"  tag='a'>合作加盟</router-link>
          </div></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple">
      <i><img :src="url2"/></i></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<el-row class="banner">
  <el-col :span="24">
         <div class="img_banner">
   <img :src="imgUrl2"/>
 </div>
      </el-col>
</el-row>

  <el-row class="nav">
        <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="1"><div class="two grid-content bg-purple-light"></div></el-col>
 <el-col :span="4"><div class="grid-content bg-purple">
     浙江自紧王机械有限公司母公司
     </div></el-col>
       <el-col :span="17"><div class="two grid-content bg-purple-light"></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<el-row class="jian_one">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
      <ul>
          <li>浙江自紧王机械有限公司成立于2019年，坐落于台州市三门县，毗邻杭州湾大湾区。</li>
          <li>为三门通顺铆钉有限公司全资控股子公司，企业前身为深圳自紧王科技有限公司， 依托母公司三十余年的紧固件研发及生产经验，并与国家钢铁材料测试中心、浙江大学机械工程学院、上海同济大学铁道与城市轨道交通研究院 、华南理工大学材料科学与工程学院、杭州电子科技大学机械工程学院建立长期的产学研合作关系，致力于永不松动的 紧固件、自紧扳手、自紧系列产品的设计、研发及生产制造。</li>
      </ul>
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<el-row class="jian_img">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
      <ul>
          <li>产学研合作关系</li>
          <li>  <img :src="imgUrl3"/></li>
      </ul>
     
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<el-row class="jian_three">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
      <ul>
          <li>防松紧固件业务介绍</li>
          <li>                                
浙江自紧王机械有限公司为三门通顺铆钉有限公司全资控股子公司，企业前身为深圳自紧王科技有限公司。公司现已紧固件加工为主。专业生产各类汽车离合器总成、压板总成、制动碲及刹车片系列铆钉、限位销和离合器盘毂，是中国离合器行业铆钉标准修订单位。执行标准含盖国标(GB)、德标(DIN)、美标(ANSI)、英标(BS)等系列国内国际标准。</li>
<li>公司拥有台湾产多功位冷墩机45台，数控车床及CNC设备20多台，完善的检测设备（专业的理化实验室、影像分析仪、金相分析仪、钢材万能拉力实验机等)，精装高精度影像筛选中心，可实现0 PPM的质量控制目标，公司于2000年开始成为汽车制造行业二级配套商，主要成为法雷奥VALEO、萨克斯SACHS、舍弗勒LUK、伊顿Eaton等全球性知名企业配套战略合作供应商，并远销欧美、非洲、东南亚、中东等30多个国家和地区。
</li>
      </ul>
     
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<el-row class="liyou">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
      <ul>
          <li>选择我们的理由</li>
          <li>1.高质量产学研院校合作</li>
          <li>2.销售网络遍布30多国家地区</li>
          <li>3.众多知名企业客户认证</li>
      </ul>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple">
         <img :src="imgUrl4"/>
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>

</el-row>

<el-row>
    <Footer></Footer>
  
</el-row>

    </div>
</template>

<script>
export default {
    name: "Second",
         components: {

            'Footer': () => import('./Footer')
        },

    data() {
        return {
            imgUrl:'./static/image/logo2.png',
            imgUrl2:'./static/image/gsjj.png',
            imgUrl3:'./static/image/123.png',
            imgUrl4:'./static/image/ly.png',
            url:'./static/image/logo_bottom.png',
            url2:'./static/image/fdj.png'
        };
    }
};
</script>

<style scoped>
li {
    list-style: none;
}

.img_logo {
    float: left;
}

.el-row {
   margin: 0;
   padding: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding:0;
    background-color: #f9fafc;
  }

  .header {
  height: 28px;
  margin-top: 50px;
  margin-bottom: 50px;
  }

.link_jianjie{
      text-decoration: none;
      height: 28px;
      line-height: 28px;
      margin-left: 70px;
      color: #000;
  }

  i {
      float: right;

  }

  i img {
      width: 24px;
      height: 24px;
  }

   .banner img{
      height: 512px;
      width:100%; 
  }

  .nav {
      margin-top: 100px;
      margin-bottom: 60px;
      height: 24px;
      line-height: 24px;
      font-size: 18px;
  }

  .nav .two{
min-height: 15px;
border-radius: 0;
border-bottom: 1px solid #707070;
  }

  .jian_one {
      height: 155px;
      margin-bottom: 20px;
  }

  .jian_one ul li {
   
      font-size: 14px;
  }

  .jian_one ul li:first-child {
      color: #3A1684;
      font-size: 16px;
      margin-bottom:30px;
  } 

  .jian_img li{
      margin-bottom:40px ;
  }

  .jian_img img {
      width: 100%;
  }

    .jian_three {
      height: 248px;
      margin-bottom: 60px;
  }

  .jian_three ul li {
   
      font-size: 14px;
      margin-bottom: 10px;
  }

  .jian_three ul li:first-child {
      color: #3A1684;
      font-size: 16px;
      margin-bottom:30px;
  } 

  .liyou {
      height: 442px;
  }

  .liyou ul {
      margin-top: 95px;
  }

  .liyou ul li {
      font-size: 16px;
      margin-bottom: 23px;
  }

  .liyou ul li:first-child {
      color: #3A1684;
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 40px;
  }

  .liyou img {
      width: 100%;
  }

 
</style>