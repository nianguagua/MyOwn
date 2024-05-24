<script setup>
import axios from "../store/axiosSet";
import { useBannerStaterStore } from "../store/storeSet";
const bannerStore = useBannerStaterStore();
bannerStore.setBannerState(2);
</script>
<template>
  <div id="product">
    <div style="display: flex">123</div>
    <el-table :data="data" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="action" label="操作">
        <template #default="scope">
          <el-button
            type="danger"
            @click="clickHander(scope.row, bannerStore.active)"
            >点击</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
      <RouterView />
    </div>
  </div>
</template>
<script>
import { useDemoStateStore } from "../store/demoStore";

export default {
  data() {
    return {
      data: [],
      count: 0,
    };
  },
  mounted() {
    //初始化
    this.initData();
    // ["1", "2", "3"].map((val, index) => {
    //   console.log("index=" + index + ";val=" + val);
    // });
  },
  methods: {
    clickHander(data, act) {
      let name = data.name;
      let address = data.address;
      this.$router.push("/news");
      // console.log("name:" + name + ";address:" + address);
      // console.log("active: " + act);
      //cookie测试
      //this.demoFun();
      //递归学习 ??
      // this.diguiFun(4);
      // console.log(this.count);
      // 浅拷贝
      // let demoObj = { name: "jack", age: 12, num: 20 };
      // let qkbObk = Object.assign(demoObj);
      // console.log(qkbObk);
      // qkbObk.name = "rose";
      // console.log(qkbObk);
      // console.log(demoObj);
      //深拷贝
      // let { ...skbObk } = demoObj;
      // console.log(skbObk);
      // skbObk.name = "rose";
      // console.log(skbObk);
      // console.log(demoObj);
      //数组去重
      // let arr = ["a", 1, 4, 6, "b", 5, 1, 6, "c", "b"];
      // this.arrFilter(arr);
      //数组排序
      // let arr = [7, 4, 1, 6, 2, 5, 12, 3, 23];
      // this.arrSort(arr);
      const demoStore = useDemoStateStore();
      demoStore.setDemoState(demoStore.num + 1);
      // alert(demoStore.num);
    },
    initData() {
      // this.data = [
      //   {
      //     date: "2024-05-04",
      //     name: "get呱呱1",
      //     address: "地址1",
      //   },
      //   {
      //     date: "2024-05-05",
      //     name: "get呱呱2",
      //     address: "地址2",
      //   },
      //   {
      //     date: "2024-05-06",
      //     name: "get呱呱3",
      //     address: "地址3",
      //   },
      //   {
      //     date: "2024-05-06",
      //     name: "get呱呱4",
      //     address: "地址4",
      //   },
      //   {
      //     date: "2024-05-06",
      //     name: "get呱呱4",
      //     address: "地址4",
      //   },
      // ];
      // return;
      axios({
        method: "post",
        url: "/api/getData",
        data: {
          param1: 111,
          param2: 222,
        },
      }).then((res) => {
        if (res && res.data) {
          this.data = res.data;
        }
      });
    },
    diguiFun(num) {},
    demoFun() {
      // alert(123);
      //获取cookie
      console.log(document.cookie);
      let strArr = document.cookie.split(";");

      let arr = strArr.map((item) => {
        let temp = item.split("=");
        let key = temp[0];
        let value = temp[1];
        return { key: key, value: value };
      });
      console.log(arr);
    },
    arrFilter(arr) {
      let [...tempArr] = arr;
      // for (let i = 0; i < tempArr.length; i++) {
      //   let tempItem = tempArr[i];
      //   for (let j = i + 1; j < tempArr.length; j++) {
      //     if (tempItem == tempArr[j]) {
      //       tempArr.splice(j, 1);
      //     }
      //   }
      // }

      //ES6
      // tempArr = Array.from(new Set(tempArr));
      // console.log(tempArr);

      //filter
      let t = tempArr.filter((item, index) => {
        return tempArr.indexOf(item) == index;
      });
      console.log(t);
    },
    arrSort(arr) {
      let [...tempArr] = arr;
      console.log(
        //升序
        tempArr.sort((a, b) => {
          return a - b;
        })
      );
    },
  },
};
</script>
<style lang="scss">
#product {
}
</style>
