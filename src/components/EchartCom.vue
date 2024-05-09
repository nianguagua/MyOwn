<template>
  <div id="chartBox"></div>
  <el-button @click="changeSize">change size</el-button>
</template>
<script>
import * as echarts from "echarts";
var myChart;
export default {
  props: ["charData"],
  emits: ["someFun"],
  data() {
    return {};
  },
  mounted() {
    myChart = echarts.init(document.getElementById("chartBox"));
    myChart.setOption({
      series: [
        {
          type: "pie",
          data: this.charData,
          radius: ["40%", "70%"],
        },
      ],
    });
  },
  methods: {
    changeSize: function () {
      //   myChart.resize({
      //     width: 600,
      //     height: 600,
      //   });
      this.$emit("someFun", "这是来自子组件的参数");
    },
  },
};
</script>
<style scoped>
#chartBox {
  min-height: 400px;
}
</style>
