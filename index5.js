// 目標: { '2': 3, '3': 1, '4': 1, '5': 1 }

const array = [2, 3, 4, 5, 2, 2];

const result = array.reduce((acc, i) => {
	if (!(i in acc)) acc[i] = 0;
	acc[i]++;
	return acc;
}, {});

console.log(result);

