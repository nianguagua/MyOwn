<template>
  <div>产品页面</div>
  <EchartCom @someFun="doSomeFun" :charData="data" />
</template>
<script>
import EchartCom from "../components/EchartCom.vue";
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
  components: {
    EchartCom,
  },
  methods: {
    doSomeFun: function (param) {
      debugger;
    },
  },
};
</script>
