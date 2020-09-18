<template>
  <div class="hello">
 <div class="img_logo">
   <img :src="imgUrl"/>
 </div>
     <div class="wel">
        {{msg}}
    </div>
 <el-row>
<!-- 点击跳转新页面的两种方法 -->
  <!-- <el-button type="success" @click="tiao" >新闻中心</el-button> -->
  <el-button type="success">
  <router-link target="_blank" class="link_jianjie" to="/second"  tag='a'>公司简介</router-link>
</el-button>
<el-button type="warning">
  <router-link target="_blank" class="link_jianjie" to="/first"  tag='a'>新闻中心</router-link>
</el-button>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 自紧王!',
     imgUrl:'./static/image/logo.png',
    }
  },
  methods: {
    tiao:function(){
      this.$router.push('./first')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 500px;
  height: 500px;
  margin-top: 200px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.el-button {
  margin-top: 15px;
}

.link_jianjie {

  color: #fff;
  text-decoration: none;

}

.wel {
  color: #361586;
  font-size: 24px;
 
}

</style>
