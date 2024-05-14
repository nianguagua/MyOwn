<template>
  <div>产品页面</div>
  <EchartCom @someFun="doSomeFun" :charData="data" />
  <el-button @click="changeRoute">按钮</el-button>
</template>
<script>
import { useDemoStateStore } from "../store/demoStore";
import EchartCom from "../components/EchartCom.vue";
import { ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      data: [
        {
          value: 111,
          name: "产品1",
        },
        {
          value: 222,
          name: "产品2",
        },
        {
          value: 151,
          name: "产品3",
        },
        {
          value: 233,
          name: "产品4",
        },
      ],
    };
  },
  mounted() {
    let para = this.$route.params;
    let path = this.$route.fullPath;
    console.log(para);
    console.log(path);
  },
  components: {
    EchartCom,
  },
  beforeRouteEnter(to, from, next) {
    next((that) => {
      // debugger;
    });
  },
  beforeRouteLeave(to, from) {
    // const answer = window.confirm(
    //   "Do you really want to leave? you have unsaved changes!"
    // );
    // if (!answer) return false;
    // ElMessageBox.confirm("Are you sure to close this dialog?")
    //   .then(() => {
    //     debugger;
    //   })
    //   .catch(() => {
    //     // catch error
    //   });
  },
  methods: {
    doSomeFun: function (param) {
      const demoStore = useDemoStateStore();
      demoStore.setDemoState(888);
      alert(demoStore.num);
    },
    changeRoute: function () {
      // this.$router.push("/products/chanpin/8/23412");
      // this.$router.go(-1);
    },
  },
};
</script>
