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

{
	// 目標
	// [
	// 	{
	// 		dateFrom: "2022-11-12",
	// 		dateTo: "2022-11-15",
	// 		index: 0,
	// 		sample: { nameTitle: "sample1", unit: "dollar" },
	// 	},
	// 	{
	// 		dateFrom: "2022-11-12",
	// 		dateTo: "2022-11-15",
	// 		index: 1,
	// 		sample: { nameTitle: "sample1-2", unit: "dollar" },
	// 	},
	// 	{
	// 		dateFrom: "2022-11-12",
	// 		dateTo: "2022-11-16",
	// 		index: 2,
	// 		samples: { nameTitle: "sample2", unit: "yen" },
	// 	},
	// 	{
	// 		dateFrom: "2022-11-12",
	// 		dateTo: "2022-11-17",
	// 		index: 3,
	// 		samples: { nameTitle: "sample2", unit: "peso" },
	// 	},
	// ]


	const array = [
		{
			dateFrom: "2022-11-12",
			dateTo: "2022-11-15",
			samples: [
				{ nameTitle: "sample1", unit: "dollar" },
				{ nameTitle: "sample1-2", unit: "dollar" },
			],
		},
		{
			dateFrom: "2022-11-12",
			dateTo: "2022-11-16",
			samples: [{ nameTitle: "sample2", unit: "yen" }],
		},
		{
			dateFrom: "2022-11-12",
			dateTo: "2022-11-17",
			samples: [{ nameTitle: "sample2", unit: "peso" }],
		},
	];

	let count = 0;
	const result = array.reduce((acc, i) => {
		const rows = i.samples.map((sample) => {
			return {
				dataFrom: `${i.dateFrom}`,
				dataTo: `${i.dateTo}`,
				index: count++,
				sample: sample
			};
		});
		return acc.concat(...rows);
	}, []);


	console.log(result);
}

console.log("--------------------------------------------------------");
