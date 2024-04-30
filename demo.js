// "use strict";

window.onload = function () {
  // debugger;
};
function name() {
  let a = 1;
  for (let i = 1; i < 5; i++) {
    a = a + i;
  }
  return a;
}
function funClick(e) {
  e.style.color = "#" + Math.round(Math.random() * 1e6);
}
function funMouseover(e) {
  // e.style.color = "#" + Math.round(Math.random() * 1e6);
}
document.getElementById("title").textContent = (function () {
  return Math.random() * 100;
})();
document.write("Hello World!");
console.log(8 + "8");
console.log("8" + 8);
console.log("8" + "8");
console.log(8 + 8);
console.log((8).toString() + 8);
console.log(Number.isInteger(8.2));
let b = "hahaha";
console.log(`my name is ${b}`);

console.log("Hello");
console.log(isNaN(1.25));
let aARR = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
];
console.log(aARR[0].name + ":" + aARR[0].age);
let bArr = [{ name: "jack", age: 28 }];
// let bArr = [];
// bArr["name"] = "jack";
// bArr["age"] = 28;
console.log(bArr.length);

let aObj = {
  name: "John",
  age: 30,
};
console.log(aObj["name"]);
console.log("--------------------------------");
/* 全局变量 */
var aa;
function funA() {
  aa = 100;
  console.log(aa); // 100
}
funA();
console.log(aa); // 100
/* 局部变量 */
function funB() {
  var bb = 100;
  console.log(bb); // 100
}
funB();
//console.log(bb); // ReferenceError: bb is not defined
function funC() {
  cc = "Windows变量";
}
funC();
console.dir(window.cc); // Windows变量
// delete cc;
console.dir(window.cc); // undefined
delete aa;
console.log(aa); //声明过的变量不能删除，未声明的变量可删除

console.log("hahahah".substring(1, 3));

var dd = 123;
console.log(typeof dd);
console.log(typeof dd.toString());

console.log(parseInt("1.22")); // 1
console.log(parseFloat("1.22")); //1.22
console.log(Number("1.22")); //1.22
console.log(
  (() => {
    return 5 == "5";
  })()
);

let cArr = [
  {
    name: "jack",
    age: 28,
  },
  {
    name: "jane",
    age: 25,
  },
  {
    name: "john",
    age: 30,
  },
];
for (let x in cArr) {
  if (x == 1) {
    break; // 跳出循环（jack）  continue 跳过当前循环,进行下一次循环（jack john）
  }
  console.log(cArr[x].name);
}

console.log("hahaha".constructor.toString());

console.log(typeof String(8 + 8));
console.log(typeof String(true));

console.log(typeof "5"); //String
console.log(typeof +"5"); //number
console.log(typeof +"abc"); //NaN (number)

console.log(5 + null); // 5

console.log(this);
