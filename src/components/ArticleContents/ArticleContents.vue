<template>
<!-- 首页组件 -->
  <div>
    <!-- <scrollContainer ref="scrollbarRef" height="100%" class="scroll-container"> -->
    <h2>{{ data.title }}</h2>
    <div class="timeBox">
      <span v-if="data.create_time" class="timer">
        <!-- 时间 -->
        <i class="iconfont icon-date"></i>
        {{ data.create_time | timer() }}
      </span>
      <span><i class="el-icon-view"></i>{{ data.visited }}</span>
    </div>
    <!-- 具体文章内容 -->
    <div class="detail">
      <mavon-editor
        v-model="data.content"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :subfield="false"
        codeStyle="atom-one-dark"
        :boxShadow="false"
      >
      </mavon-editor>
    </div>
    <!-- </scrollContainer>  -->
  </div>
</template>

<script>
import scrollContainer from './scrollContainer.vue'
export default {
  
  props: ["data"],
  filters: {
    timer(str) {
      // 截取时间字符
      return str.substring(0, 10);
    },
  },
  created() {
    console.log(this.data);
  },
  components:{
    scrollContainer
  }
};
</script>

<style lang="scss" scoped>
.timer {
  margin-right: 15px;
}
.timeBox {
  margin-bottom: 20px;
}
i {
  margin-right: 5px;
}
h2 {
  font-size: 25px;
  font-weight: 550;
  margin: 20px 0;
}
// 自定义滚动条
.scroll-container{
  border: 1px solid #e4e4ed;
  border-radius: 4px;
}

</style>