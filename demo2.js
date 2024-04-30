var obj1 = {
  name: "obj1",
  age: 18,
  obj1Fun: function (param1, param2) {
    console.log("姓名：" + this.name);
    console.log("年纪：" + this.age);
    console.log("参数1：" + param1 + ";参数2：" + param2);
  },
};

var obj2 = {
  name: "对象2",
  age: 20,
  obj1Fun: (param) => {
    console.log("姓名：" + this.name);
    console.log("年纪：" + this.age);
    console.log("参数：" + param);
  },
};
// obj1.obj1Fun("这是参数1", "这是参数2");
// obj1.obj1Fun.call(obj2, "这是参数1", "这是参数2");
// obj1.obj1Fun.apply(obj2, ["这是参数1", "这是参数2"]);

for (var i = 0; i < 10; i++) {}
console.log(i); // 10

for (let j = 0; j < 10; j++) {} //let声明的变量只能在块级作用域内使用
//console.log(j); // ReferenceError: j is not defined

const PI = 3.1415926; // 常量声明  不可修改
console.log(PI); // 3.1415926
// PI = 3; // TypeError: Assignment to constant variable.
// console.log(PI);

console.log(dd);
var dd = 200;
/**
 * var dd;
 * console.log(dd); // undefined
 * dd = 200;
 */
// console.log(ee); // ReferenceError: ee is not defined
// let ee = 300;

var text =
  '{ "sites" : [' +
  '{ "name":"Runoob" , "url":"www.runoob.com" },' +
  '{ "name":"Google" , "url":"www.google.com" },' +
  '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

var obj = JSON.parse(text);
console.dir(obj.sites[1].name);

// setTimeout(() => {
//   console.log("定时器执行2");
// }, 3000);
// console.log("定时器执行1"); //先执行主线程代码，再执行定时器

// setTimeout(() => {
//   console.log("间隔1秒");
//   setTimeout(() => {
//     console.log("间隔4秒");
//     setTimeout(() => {
//       console.log("间隔3秒");
//     }, 3000);
//   }, 4000);
// }, 1000);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("间隔1秒");
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("间隔4秒");
//         resolve();
//       }, 4000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("间隔3秒");
//         reject();
//       }, 3000);
//     });
//   })
//   .catch(() => {
//     console.log("运行完成");
//   });

function print(second, msg, end) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      if (end == 1) {
        reject();
      } else {
        resolve();
      }
    }, second);
  }).catch(() => {
    console.log("运行完成");
  });
}
// print(1000, "间隔1秒")
//   .then(() => {
//     return print(4000, "间隔4秒");
//   })
//   .then(() => {
//     print(3000, "间隔3秒", 1);
//   });

// async function print2() {
//   await print(1000, "间隔1秒");
//   await print(4000, "间隔4秒");
//   await print(3000, "间隔3秒", 1);
// }
// print2();

const con1 = 123;
function fun1() {
  var con1 = 456;
}

fun1();
console.log(con1);

function fun3() {
  let num = 1;
  return function fun2() {
    num++;
    console.log("闭包测试 ：" + num);
  };
}
var fun4 = fun3();

// window.onload = () => {
//   alert("页面加载");
// };
// window.unload = () => {
//   alert("离开页面");
// };
// window.addEventListener("beforeunload", () => {
//   alert("离开页面");
// }); //谷歌浏览器不支持
// document.getElementById("sbox1").onclick = function () {
//   console.log("sbox1");
// };
// document.getElementById("sbox2").onclick = function (e) {
//   console.log("sbox2");
//   e.stopPropagation(); //阻止事件冒泡
// };
// document.getElementById("sbox3").onclick = function (e) {
//   console.log("sbox3");
//   e.stopPropagation(); //阻止事件冒泡
// };
document.getElementById("sbox1").addEventListener(
  "click",
  function () {
    console.log("sbox1");
  },
  true
);
document.getElementById("sbox2").addEventListener("click", function () {
  console.log("sbox2");
});
document.getElementById("sbox3").addEventListener("click", function () {
  console.log("sbox3");
});
