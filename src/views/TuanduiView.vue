<script setup>
import { useBannerStaterStore } from "../store/storeSet";
const bannerStore = useBannerStaterStore();
bannerStore.setBannerState(4);
</script>
<template>
  <input type="text" v-model="name" />
</template>
<script>
export default {
  data() {
    return {
      name: "我是念狗",
    };
  },
  watch: {
    name(newP, oldP) {
      //   let fn = this.debounce(function () {
      //     console.log(newP);
      //   }, 500);
      //   fn();
    },
  },
  mounted() {
    let fn = this.bibaoTest();
    fn();
    fn();
    // let fn1 = this.debounce(() => {
    //   console.log(111);
    // }, 500);
    // fn1();
    // fn1();
  },
  methods: {
    inputFun(val) {
      //防抖：用户出发事件过于频繁，实际只要最后一次操作的结果
      //console.log(val.target.value);

      //   let fn = this.debounce(function () {
      //     // let value = val.target.value;
      //     // console.log(value); //业务代码
      //     console.log(111);
      //   }, 0);
      fn();
    },
    debounce(fun, delay) {
      let t = null;
      console.log("调用闭包");
      //利用计时器setTimeout() 5毫秒之后再获取值，不是每次都触发
      return function () {
        // fun();
        if (t !== null) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          fun();
        }, delay);
      };
    },
    bibaoTest() {
      let num = 100;
      console.log("调用闭包");
      return function () {
        num = num + 1;
        console.log(num);
      };
    },
  },
};
</script>
<style>
input {
  float: right;
  height: 30px;
  padding: 5px 10px;
}
</style>
