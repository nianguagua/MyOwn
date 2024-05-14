<script setup>
import axios from "../store/axiosSet";
import EchartCom from "../components/EchartCom.vue";
import { useBannerStaterStore } from "../store/storeSet";
const bannerStore = useBannerStaterStore();
bannerStore.setBannerState(3);
</script>

<template>
  <div>NewsView页面</div>
  <!-- <EchartCom :charData="charData" /> -->
  <div class="" id="parent">
    <div class="floatBox">1</div>
    <div class="floatBox">2</div>
    <div class="floatBox">3</div>
    <div class="floatBox">4</div>
    <div class="floatBox">5</div>
    <!-- <div class="clear"></div> -->
  </div>
  <div id="box">
    <div class="sbox"></div>
  </div>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      name: 111,
      charData: [
        {
          value: 335,
          name: "直接访问",
        },
        {
          value: 234,
          name: "联盟广告",
          itemStyle: {
            // color: "pink",
          },
        },
        {
          value: 1548,
          name: "搜索引擎",
        },
        {
          value: 1106,
          name: "测试测试",
        },
      ],
    };
  },
  mounted() {
    /** 异步函数async await */
    //this.testAsync();
    /** 数组操作方法 */
    this.testArray();
  },
  components: {
    EchartCom,
  },
  methods: {
    testAsync: function () {
      function a(text, delay) {
        return new Promise((resolve, reject) => {
          setTimeout((e) => {
            console.log("hello world:" + text);
            resolve();
          }, delay);
        });
      }
      async function b() {
        await a("第一段", 500);
        await a("第二段", 1000);
        await a("第三段", 200);
      }
      // b(); //1,2,3
      b().then((e) => {
        console.log("b()返回promise对象");
      });
      // a("第一段", 500);
      // a("第二段", 1000);
      // a("第三段", 200);
      //3,1,2
    },
    testArray: function () {
      let arr1 = [1, 2, 3, 4, 5];
      let arr2 = ["a", "b", "c", "d", "e"];
      let arr3 = arr1.concat(arr2);
      /**数组循环 */
      for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
      }
      arr2.forEach((item, index) => {
        console.log("数组" + (index + 1) + ":" + item);
      });
      // console.log(arr2.reverse());
      // console.log("arr2=" + arr2);
      // console.log("c第一次出现的下标是:" + arr2.indexOf("f"));
      // console.log(arr2.join());
      // console.log("arr1=" + arr1);
      // console.log("arr2=" + arr2);
      // console.log("arr3=" + arr3);
      // console.log(arr2.pop());
      // console.log(arr2.push("hahah"));
    },
  },
};
</script>
<style scoped lang="scss">
#parent {
  border: 1px solid red;
  padding: 10px 20px;
  // overflow: hidden;
  // .clear {
  //   clear: both;
  // }
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .floatBox {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    background: #999;
  }
}
#box {
  height: 300px;
  border: 1px solid red;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .sbox {
    width: 50px;
    height: 50px;
    background: #999;
  }
}
</style>
