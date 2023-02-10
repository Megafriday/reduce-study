// https://zenn.dev/rio_dev/articles/c4773cdf76a535

{
	// 目標：{a: 0, b: 4}
	const array = [{ a: 0 }, { b: 2 }, { a: -3 }, { a: 3, b: 2 }];

	const result = array.reduce((acc, i) => {
		if (i.a) acc.a += i.a;
		if (i.b) acc.b += i.b;
		return acc;
	}, { a: 0, b: 0 });

	console.log(result);
}

console.log("--------------------------------------------------------");

