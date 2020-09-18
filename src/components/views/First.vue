<template>
    <div class="first-app">
       
 <el-row>
     <Navgation :imgUrl="imgUrl">
         
     </Navgation>
  
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
 
 <el-row class="news">

  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="20"><div class="grid-content">
      <el-row :gutter="20">
        <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url1"/>
             <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div>
       
             </div></el-col>
      <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url1"/>
               <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div></div></el-col>
             <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url1"/>
               <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div></div></el-col>      
  </el-row>
  </div>
  </el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

 <el-row class="news">

  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="20"><div class="grid-content">
       <el-row :gutter="20">
        <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url2"/>
             <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div>
             </div></el-col>
      <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url2"/>
             <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div>
             </div></el-col>
             <el-col :span="8"><div class="news_img grid-content bg-purple">
             <img :src="url2"/>
             <div class="word">
      <h4>自紧王新闻标题</h4>
      <p>如果说，制造和使用石器工具是人猿揖别的分水岭，那么制造和使用紧固件、扳手就是现代工业的里程碑。很难想象没有紧固件连接，火车能跑、飞机能飞？也难想象没有扳手，紧固件如何松紧？紧固件、扳手犹如一对孪生兄弟在世界各地被广泛应用，是彻头彻尾的大众产品，早已低调得没有光鲜热闹，对于它们的缺陷，也被世人熟视无睹。        
</p>
             </div>
             </div></el-col>      
  </el-row>
  </div>
  </el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<el-row class="footer">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple-light">
     <ul>
         <li>导航</li>
         <li><router-link target="_blank" class="link_jianjie2" to="/"  tag='a'>首页</router-link></li>
          <li><router-link target="_blank" class="link_jianjie2" to="/second"  tag='a'>自紧王</router-link></li>
           <li><router-link  class="link_jianjie2" to="/first"  tag='a'>产品中心</router-link></li>
            <li><router-link  class="link_jianjie2" to="/first"  tag='a'>新闻中心</router-link></li>
             <li><router-link  class="link_jianjie2" to="/first"  tag='a'>联系我们</router-link></li>
              <li><router-link  class="link_jianjie2" to="/first"  tag='a'>招商加盟</router-link></li>
             
     </ul>
      
  
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
         <ul>
         <li>联系方式</li>
         <li><router-link class="link_jianjie2" to="/first"  tag='a'>电话：400-181-2828</router-link></li>
           <li><router-link class="link_jianjie2" to="/first"  tag='a'>传真：0576-83110913</router-link></li>
              <li><router-link class="link_jianjie2" to="/first"  tag='a'>邮编：317101</router-link></li>
                 <li><router-link class="link_jianjie2" to="/first"  tag='a'>网站：www.zijinwang.cn</router-link></li>
                    <li><router-link class="link_jianjie2" to="/first"  tag='a'>地址：中国-浙江台州三门县珠岙镇</router-link></li>
            
     </ul>
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple-light">
     <ul>
         <li>友情链接</li>
          <li><router-link class="link_jianjie2" to="/first"  tag='a'>三门通顺铆钉有限公司</router-link></li>
     </ul>
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
         <img :src="url"/>
      <p>©Copyright 2019-2020 All Rights Reserved</p>
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

    </div>
</template>

<script>

export default {
    name: "First",
     components: {

            'Navgation': () => import('./Navgation')
        },

    data() {
        return {
           imgUrl:'./static/image/logo2.png',
            imgUrl2:'./static/image/newscenter.png',
            url:'./static/image/logo_bottom.png',
            url1:'./static/image/1.png',
            url2:'./static/image/2.png',

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

  .news {
      height: 393px;
       margin-bottom: 56px;
      overflow: hidden;
  }

  .news img {
      width: 100%;
      height: 288px;
  }

  .news .word {
    
      margin-top: 14px;
     
      width: 100%;
      height: 91px;
  }

  .news .word h4{
      font-size: 16px;
  }

    .news .word p{
      font-size: 14px;
  }

  .footer {
      height: 288px;
      border-top: 8px solid #E8AC45;
      background-color: #3A1684;
      font-size: 16px;
      color: #fff;
  }

  .footer .el-col {

      margin-top: 55px;
  }

.footer ul {
    float: left;
    text-align: left;
}

  .footer ul li:first-child {
      margin-bottom: 15px;
  }

  .link_jianjie2 {
      display: block;
      
      font-size: 14px;
      color: #fff;
      margin-top: 6px;
      text-decoration: none;
  }

  .footer img {
      float: right;
      padding-bottom: 127px;
  }
  .footer p {
      float: right;
  }

</style>