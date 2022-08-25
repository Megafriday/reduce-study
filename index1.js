// https://qiita.com/tetsuya-zama/items/6c88f26302a3fe9b28f3

const data = [
	{ code: "IP", nameJa: "ITパスポート試験", nameEn: "Information Technology Passport Examination", season: ["随時"] },
	{ code: "SG", nameJa: "情報セキュリティマネジメント試験", nameEn: "Information Security Management Examination", season: ["春", "秋"] },
	{ code: "FE", nameJa: "基本情報技術者試験", nameEn: "Fundamental Information Technology Engineer Examination", season: ["春", "秋"] },
	{ code: "AP", nameJa: "応用情報技術者試験", nameEn: "Applied Information Technology Engineer Examination", season: ["春", "秋"] },
	{ code: "ST", nameJa: "ITストラテジスト試験", nameEn: "Information Technology Strategist Examination", season: ["秋"] },
	{ code: "SA", nameJa: "システムアーキテクト試験", nameEn: "Systems Architect Examination", season: ["秋"] },
	{ code: "PM", nameJa: "プロジェクトマネージャ試験", nameEn: "Project Manager Examination", season: ["春"] },
	{ code: "NW", nameJa: "ネットワークスペシャリスト試験", nameEn: "Network Specialist Examination", season: ["秋"] },
	{ code: "DB", nameJa: "データベーススペシャリスト試験", nameEn: "Database Specialist Examination", season: ["春"] },
	{ code: "ES", nameJa: "エンベデッドシステムスペシャリスト試験", nameEn: "Embedded Systems Specialist Examination", season: ["春"] },
	{ code: "SM", nameJa: "ITサービスマネージャ試験", nameEn: "Information Technology Service Manager Examination", season: ["秋"] },
	{ code: "AU", nameJa: "システム監査技術者試験", nameEn: "Systems Auditor Examination", season: ["春"] },
	{ code: "SC", nameJa: "情報処理安全確保支援士試験", nameEn: "Registered Information Security Specialist Examination", season: ["春", "秋"] }
];

const result = data.reduce(function (prev, row) {

	//開催時期が"春"の試験数と"秋"の試験数をそれぞれカウントする
	// var next = Object.assign({}, prev);
	// if (row.season.indexOf("春") > -1) next["春"] += 1;
	// if (row.season.indexOf("秋") > -1) next["秋"] += 1;

	if (row.season.indexOf("春") > -1) prev["春"] += 1;
	if (row.season.indexOf("秋") > -1) prev["秋"] += 1;

	return prev;
}, { "春": 0, "秋": 0 });

//これに関してはアロー関数で書いてもあまり変わらないので省略します

console.log(result);//->{ '春': 8, '秋': 8 }


