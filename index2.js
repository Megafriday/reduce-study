// https://qiita.com/seira/items/5df10748fa35dd969681

{
	// 目標：6
	const array = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }];

	const result = array.reduce((acc, i) => acc + i.x, 0);
	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：{keko: 25, taro: 19, mai: 17}
	const array = [
		{ name: "keko", age: 25 },
		{ name: "taro", age: 19 },
		{ name: "mai", age: 17 }
	];

	const result = array.reduce((acc, i) => {
		acc[i.name] = i.age;
		return acc;
	}, {});

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：
	// {
	//   1: {name: "keko", age: 25}
	//   2: {name: "taro", age: 19}
	//   3: {name: "mai", age: 17}
	// }

	const array = [
		{ name: "keko", age: 25 },
		{ name: "taro", age: 19 },
		{ name: "mai", age: 17 }
	];

	const result = array.reduce((acc, i, index) => {
		acc[index + 1] = i;
		return acc;
	}, {});

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：
	// {
	//   Ehime: [
	//     {name: "keko", age: 25 },
	//     {name: "taro", age: 19 }],
	//   Osaka: [
	//     {name: "mai", age: 17 }]
	// }

	const array = [
		{ name: "keko", age: 25, pref: "Ehime" },
		{ name: "taro", age: 19, pref: "Ehime" },
		{ name: "mai", age: 17, pref: "Osaka" }
	];

	const result = array.reduce((acc, i) => {

		if (!acc[i.pref]) acc[i.pref] = [];

		const { name, age } = i;
		acc[i.pref].push({ name, age });

		return acc;
	}, {});

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：[0, 1, 2, 3, 4, 5]
	const array = [[0, 1], [2, 3], [4, 5]]

	//別解 console.log(array.flat());

	const result = array.reduce((acc, i) => {
		return acc.concat(i);
	}, []);

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：[0, 1, 2, 3, 4, 5]（別解で解く）
	const array = [[0, 1], [2, 3], [4, 5]];

	const result = array.reduce((acc, i) => {
		return [...acc, ...i];
	}, []);

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：[ 1, 2, 3, 'a', 'b' ]
	const array = [1, 2, 2, 3, 1, "a", "b", "b"];

	// 別解 console.log([...new Set(array)]);

	const result = array.reduce((acc, i) => {
		if (!acc.includes(i)) {
			acc.push(i);
		}
		return acc;
	}, []);

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：20歳以上
	// [
	// 	{ id: 1, name: "keko" },
	// 	{ id: 4, name: "hiro" }
	// ]

	const array = [
		{ id: 1, name: "keko", age: 25 },
		{ id: 2, name: "taro", age: 19 },
		{ id: 3, name: "mai", age: 17 },
		{ id: 4, name: "hiro", age: 30 }
	]

	const result = array.reduce((acc, i) => {
		if (i.age >= 20) {
			const { id, name } = i;
			acc.push({ id, name });
		}
		return acc;
	}, []);

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 目標：20歳以上（filter, mapを使用する）
	// [
	//   {id: 1, name: "keko"},
	//   {id: 4, name: "hiro"}
	// ]

	const array = [
		{ id: 1, name: "keko", age: 25 },
		{ id: 2, name: "taro", age: 19 },
		{ id: 3, name: "mai", age: 17 },
		{ id: 4, name: "hiro", age: 30 }
	]

	const result = array.filter(i => i.age >= 20)
		.map(({ id, name }) => ({ id, name }));

	console.log(result);
}

console.log("--------------------------------------------------------");

{
	// 多次元配列を一次元配列にする
	// 目標：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const array = [0, [1, 2, 3, [4, 5], [6, 7, [8, 9]]]];

	const mergeArry = arr => {
		const result = arr.reduce((acc, current) => {
			return acc.concat(current);
		}, []);
		return result;
	};

	const hasArry = arr => arr.some(item => Array.isArray(item));

	const mergeAll = arr => {
		if (!hasArry(arr)) {
			return arr;
		}
		const result = mergeArry(arr);
		return mergeAll(result);
	};

	const sample09 = mergeAll(array);

	console.log(sample09); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

console.log("--------------------------------------------------------");
