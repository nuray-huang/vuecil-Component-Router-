<template>
    <div class="header">
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
            <router-link target="_blank" class="link_jianjie" to="/second"  tag='a'>自紧王</router-link>
                    <router-link  class="link_jianjie" to="/first"  tag='a'>产品中心</router-link>
                       <router-link  class="link_jianjie" to="/first"  tag='a'>新闻中心</router-link>
                          <router-link  class="link_jianjie" to="/first"  tag='a'>合作加盟</router-link>
          </div></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple">
      <i > <img :src="url3"/></i></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
</div>
</template>
<script>

export default {
        name: "Navgation",
      
    data() {
        return {
     
            imgUrl2:'./static/image/newscenter.png',
            url:'./static/image/logo_bottom.png',
            url1:'./static/image/1.png',
            url2:'./static/image/2.png',
            url3:'./static/image/fdj.png'
        };
    },
    props:['imgUrl']
};

</script>

<style scoped>
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
</style>