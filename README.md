# tool.js

## 前言
使用script标签引入此tool.js文件，会将对象$$挂载在window上，直接调用window上的$$对象上的方法
如：window.$$.deepClone(a) 或者 $$.deepClone(a);

## 工具方法

deepClone: 深拷贝对象或数组
```
  var a = {a: 1, b: 2, c: {m: 2}}
  var b = $$.deepClone(a);
  console.log(b);
```
 
lightClone: 浅拷贝对象或数组

```
  var a = {a: 1, b: 2, c: {m: 2}}
  var b = $$.lightCopy(a);
  console.log(b);
```
formateDate：格式化日期 格式化年月日 格式支持yyyy-mm-dd yyyymmdd yyyy/mm/dd
```
  var a = '20180909';
  var b = $$.formateDate(a);
  console.log(b); '2018/09/09';
```

