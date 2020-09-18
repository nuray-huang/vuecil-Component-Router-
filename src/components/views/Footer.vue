<template>
    <div class="footer">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple-light">
     <ul>
         <li>导航</li>
               <li><router-link target="_blank" class="link_jianjie2" to="/"  tag='a'>首页</router-link></li>
          <li><router-link  class="link_jianjie2" to="/second"  tag='a'>自紧王</router-link></li>
           <li><router-link  class="link_jianjie2" to="/second"  tag='a'>产品中心</router-link></li>
            <li><router-link target="_blank" class="link_jianjie2" to="/first"  tag='a'>新闻中心</router-link></li>
             <li><router-link  class="link_jianjie2" to="/second"  tag='a'>联系我们</router-link></li>
              <li><router-link  class="link_jianjie2" to="/second"  tag='a'>招商加盟</router-link></li>
             
     </ul>
      
  
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
         <ul>
             <li>联系方式</li>
         <li><router-link class="link_jianjie2" to="/second"  tag='a'>电话：400-181-2828</router-link></li>
           <li><router-link class="link_jianjie2" to="/second"  tag='a'>传真：0576-83110913</router-link></li>
              <li><router-link class="link_jianjie2" to="/second"  tag='a'>邮编：317101</router-link></li>
                 <li><router-link class="link_jianjie2" to="/second"  tag='a'>网站：www.zijinwang.cn</router-link></li>
                    <li><router-link class="link_jianjie2" to="/second"  tag='a'>地址：中国-浙江台州三门县珠岙镇</router-link></li>
            
     </ul>
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple-light">
     <ul>
         <li>友情链接</li>
       <li><router-link class="link_jianjie2" to="/second"  tag='a'>三门通顺铆钉有限公司</router-link></li>
     </ul>
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
         <img :src="url"/>
      <p>©Copyright 2019-2020 All Rights Reserved</p>
      </div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</div>
</template>

<script>
export default {
    name: "Footer",
        data() {
        return {
            imgUrl:'./static/image/logo2.png',
            imgUrl2:'./static/image/newscenter.png',
            url:'./static/image/logo_bottom.png',
            url1:'./static/image/1.png',
            url2:'./static/image/2.png',
            url3:'./static/image/fdj.png'
        };
    }
}
</script>

<style scoped>
li {
    list-style: none;
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