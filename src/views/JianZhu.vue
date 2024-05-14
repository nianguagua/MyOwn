<template>
  <div style="color: red">
    <input class="name" type="text" v-model="name" @input="changeNameFun" />
    <div class="result">
      <p v-for="(item, index) in arr" :key="index">{{ item }}</p>
    </div>
    <span class="in1">hhh</span>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
  </div>
</template>
<script>
let t = null;
export default {
  data() {
    return {
      name: "三花",
      arr: ["瓜皮", "花花"],
    };
  },
  mounted() {
    let arr = new Array(1, 2, 3);
    arr.sort((a, b) => {
      return b - a;
    });
    //console.log(arr.__proto__ === Array.prototype);//true
    let obj1 = {
      name: "obj1",
      age: 18,
      fn: function (msg) {
        console.log("name=" + this.name + ";age=" + this.age);
        console.log("Msg=" + msg);
      },
    };
    let obj2 = {
      name: "obj2",
      age: 20,
      fn: function () {
        console.log("name=" + this.name + ";age=" + this.age);
      },
      fn2: function (msg) {
        console.log("msg=" + msg);
      },
    };
    obj1.fn.call(obj2, "hahahha");
  },
  methods: {
    changeNameFun() {
      let that = this;
      if (t != null) {
        clearTimeout(t);
      }
      t = setTimeout(function () {
        that.arr = ["坨坨", "槑槑"];
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
.name {
  padding: 10px 15px;
  margin-top: 10px;
}
.in1 {
  margin-left: 30px;
  border: 1px solid red;
}
.box1 {
  height: 30px;
  width: 100px;
  background: #999;
}
.box2 {
  height: 30px;
  width: 100px;
  background: #666;
}
</style>
