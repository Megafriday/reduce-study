// https://qiita.com/seira/items/5df10748fa35dd969681

// --------------------------------------------------------

// 目標：6
// const array = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }];

// const result = array.reduce((acc, i) => acc + i.x, 0);
// console.log(result);

// --------------------------------------------------------

// 目標：{keko: 25, taro: 19, mai: 17}
// const array = [
// 	{ name: "keko", age: 25 },
// 	{ name: "taro", age: 19 },
// 	{ name: "mai", age: 17 }
// ];

// const result = array.reduce((acc, i) => {
// 	acc[i.name] = i.age;
// 	return acc;
// }, {});

// console.log(result);

// --------------------------------------------------------
// 目標：
// {
//   1: {name: "keko", age: 25}
//   2: {name: "taro", age: 19}
//   3: {name: "mai", age: 17}
// }

// const array = [
// 	{ name: "keko", age: 25 },
// 	{ name: "taro", age: 19 },
// 	{ name: "mai", age: 17 }
// ];

// const result = array.reduce((acc, i, index) => {
// 	acc[index + 1] = i;
// 	return acc;
// }, {});

// console.log(result);

// --------------------------------------------------------
// 目標：
// {
//   Ehime: [
//     {name: "keko", age: 25 },
//     {name: "taro", age: 19 }],
//   Osaka: [
//     {name: "mai", age: 17 }]
// }

// const array = [
// 	{ name: "keko", age: 25, pref: "Ehime" },
// 	{ name: "taro", age: 19, pref: "Ehime" },
// 	{ name: "mai", age: 17, pref: "Osaka" }
// ];

// const result = array.reduce((acc, i) => {

// 	if (!acc[i.pref]) acc[i.pref] = [];

// 	const { name, age } = i;
// 	acc[i.pref].push({ name, age });

// 	return acc;
// }, {});

// console.log(result);

// --------------------------------------------------------
// 目標：[0, 1, 2, 3, 4, 5]
const array = [[0, 1], [2, 3], [4, 5]]





// --------------------------------------------------------
// 目標：
// --------------------------------------------------------
// 目標：
// --------------------------------------------------------
// 目標：
