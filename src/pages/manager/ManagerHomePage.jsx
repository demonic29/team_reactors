import React, { useState } from "react";
import SectionTitle from "../../components/managerPage/SectionTitle";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "../../components/buttons/Button";
import DraggableList from "../../components/managerPage/draggable/DraggableList";

const ManagerHomePage = () => {
	const [sliderList, setSliderList] = useState(sliders);
	// const [recommendTour, setRecommendTour] = useState(tours.slice(0, 3));

	return (
		<div className="flex-1">
			{/* Slider manager  */}
			<div className="mb-10">
				<div className="flex justify-between mb-3 gap-x-4">
					<SectionTitle>スライダー</SectionTitle>
					<button className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor">
						<IoMdAddCircleOutline size={16} />
						<span className="text-sm">スライド追加</span>
					</button>
				</div>
				<DraggableList items={sliderList} setItems={setSliderList} />
			</div>
			{/* Home about manager  */}
			<div className="mb-10">
				<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src="https://i.pinimg.com/736x/31/4e/59/314e59fc4a0e278fbb4b31ac392cd187.jpg"
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<p className="mb-4">
							「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。
						</p>
						<Button className={"px-6 py-[6px]"}>編集</Button>
					</div>
				</div>
			</div>
			{/* Recommend tour  */}
			<div>
				<SectionTitle className="mb-3">おすすめツアー</SectionTitle>
				
			</div>
		</div>
	);
};

const sliders = [
	{
		id: 1,
		image: "https://i.pinimg.com/564x/1e/7a/69/1e7a69ab9ac14e9b11b367d23fedbcaa.jpg",
		title: "忠義の福岡武将物語 1",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 111 心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 111",
	},
	{
		id: 2,
		image: "https://i.pinimg.com/736x/18/dd/dc/18dddc546606f6f81df3c895b38d758e.jpg",
		title: "忠義の福岡武将物語 2",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 222",
	},
	{
		id: 3,
		image: "https://i.pinimg.com/736x/34/f6/4b/34f64bc24f145db4251cb6d73b5842b3.jpg",
		title: "忠義の福岡武将物語 3",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 333",
	},
];

// const tours = [
// 	{
// 		id: 1,
// 		title: "忠義の福岡武将物語",
// 		shortDesc: "場所: 立花山城, 梅岳寺, 四王寺城, ...",
// 		desc: "「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 		banner: "https://i.pinimg.com/564x/4a/4b/a9/4a4ba9b956fd4d76ddfff7da9bca2c3b.jpg",
// 		images: [
// 			"https://i.pinimg.com/564x/b9/b4/a4/b9b4a4d59bf2ed596141859971f56a4c.jpg",
// 			"https://i.pinimg.com/564x/6d/63/be/6d63be05abade733ebf6449e8a7a7c88.jpg",
// 			"https://i.pinimg.com/564x/46/50/be/4650bee00c6b3ff5fbce6c782359434e.jpg",
// 			"https://i.pinimg.com/564x/a7/a7/29/a7a729ca2178096bbd3e2dc01476048c.jpg",
// 		],
// 		price: 15000,
// 		locations: [
// 			{
// 				name: "立花山城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "梅岳寺",
// 				lever: "2",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "四王寺城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "観世音寺 ",
// 				lever: "5",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 		],
// 		plans: [
// 			{
// 				id: 1,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 			{
// 				id: 2,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 		],
// 		feedbacks: [
// 			{
// 				name: "akiaki",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "2024/05/19",
// 				age: "36",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "nyamu",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "18",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "ahihi",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "20",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		title: "忠義の福岡武将物語 2",
// 		shortDesc: "場所: 立花山城, 梅岳寺, 四王寺城, ...",
// 		desc: "「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 		banner: "https://i.pinimg.com/564x/4a/4b/a9/4a4ba9b956fd4d76ddfff7da9bca2c3b.jpg",
// 		images: [
// 			"https://i.pinimg.com/564x/b9/b4/a4/b9b4a4d59bf2ed596141859971f56a4c.jpg",
// 			"https://i.pinimg.com/564x/6d/63/be/6d63be05abade733ebf6449e8a7a7c88.jpg",
// 			"https://i.pinimg.com/564x/46/50/be/4650bee00c6b3ff5fbce6c782359434e.jpg",
// 			"https://i.pinimg.com/564x/a7/a7/29/a7a729ca2178096bbd3e2dc01476048c.jpg",
// 		],
// 		price: 15000,
// 		locations: [
// 			{
// 				name: "立花山城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "梅岳寺",
// 				lever: "2",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "四王寺城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "観世音寺 ",
// 				lever: "5",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 		],
// 		plans: [
// 			{
// 				id: 1,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 			{
// 				id: 2,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 		],
// 		feedbacks: [
// 			{
// 				name: "akiaki",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "2024/05/19",
// 				age: "36",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "nyamu",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "18",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "ahihi",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "20",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		title: "忠義の福岡武将物語 3",
// 		shortDesc: "場所: 立花山城, 梅岳寺, 四王寺城, ...",
// 		desc: "「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 		banner: "https://i.pinimg.com/564x/4a/4b/a9/4a4ba9b956fd4d76ddfff7da9bca2c3b.jpg",
// 		images: [
// 			"https://i.pinimg.com/564x/b9/b4/a4/b9b4a4d59bf2ed596141859971f56a4c.jpg",
// 			"https://i.pinimg.com/564x/6d/63/be/6d63be05abade733ebf6449e8a7a7c88.jpg",
// 			"https://i.pinimg.com/564x/46/50/be/4650bee00c6b3ff5fbce6c782359434e.jpg",
// 			"https://i.pinimg.com/564x/a7/a7/29/a7a729ca2178096bbd3e2dc01476048c.jpg",
// 		],
// 		price: 15000,
// 		locations: [
// 			{
// 				name: "立花山城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "梅岳寺",
// 				lever: "2",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "四王寺城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "観世音寺 ",
// 				lever: "5",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 		],
// 		plans: [
// 			{
// 				id: 1,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 			{
// 				id: 2,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 		],
// 		feedbacks: [
// 			{
// 				name: "akiaki",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "2024/05/19",
// 				age: "36",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "nyamu",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "18",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "ahihi",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "20",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 		],
// 	},
// 	{
// 		id: 4,
// 		title: "忠義の福岡武将物語 4",
// 		shortDesc: "場所: 立花山城, 梅岳寺, 四王寺城, ...",
// 		desc: "「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 		banner: "https://i.pinimg.com/564x/4a/4b/a9/4a4ba9b956fd4d76ddfff7da9bca2c3b.jpg",
// 		images: [
// 			"https://i.pinimg.com/564x/b9/b4/a4/b9b4a4d59bf2ed596141859971f56a4c.jpg",
// 			"https://i.pinimg.com/564x/6d/63/be/6d63be05abade733ebf6449e8a7a7c88.jpg",
// 			"https://i.pinimg.com/564x/46/50/be/4650bee00c6b3ff5fbce6c782359434e.jpg",
// 			"https://i.pinimg.com/564x/a7/a7/29/a7a729ca2178096bbd3e2dc01476048c.jpg",
// 		],
// 		price: 15000,
// 		locations: [
// 			{
// 				name: "立花山城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "梅岳寺",
// 				lever: "2",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "四王寺城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "観世音寺 ",
// 				lever: "5",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 		],
// 		plans: [
// 			{
// 				id: 1,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 			{
// 				id: 2,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 		],
// 		feedbacks: [
// 			{
// 				name: "akiaki",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "2024/05/19",
// 				age: "36",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "nyamu",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "18",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "ahihi",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "20",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 		],
// 	},
// 	{
// 		id: 5,
// 		title: "忠義の福岡武将物語",
// 		shortDesc: "場所: 立花山城, 梅岳寺, 四王寺城, ...",
// 		desc: "「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 		banner: "https://i.pinimg.com/564x/4a/4b/a9/4a4ba9b956fd4d76ddfff7da9bca2c3b.jpg",
// 		images: [
// 			"https://i.pinimg.com/564x/b9/b4/a4/b9b4a4d59bf2ed596141859971f56a4c.jpg",
// 			"https://i.pinimg.com/564x/6d/63/be/6d63be05abade733ebf6449e8a7a7c88.jpg",
// 			"https://i.pinimg.com/564x/46/50/be/4650bee00c6b3ff5fbce6c782359434e.jpg",
// 			"https://i.pinimg.com/564x/a7/a7/29/a7a729ca2178096bbd3e2dc01476048c.jpg",
// 		],
// 		price: 15000,
// 		locations: [
// 			{
// 				name: "立花山城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "梅岳寺",
// 				lever: "2",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "四王寺城",
// 				lever: "1",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 			{
// 				name: "観世音寺 ",
// 				lever: "5",
// 				explain: "体力面の説明, 体力面の説明",
// 			},
// 		],
// 		plans: [
// 			{
// 				id: 1,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 			{
// 				id: 2,
// 				start: "博多駅or福岡空港",
// 				end: "博多駅or福岡空港",
// 				destination: [
// 					{ id: 1, name: "立花山城" },
// 					{ id: 2, name: "梅岳寺" },
// 					{ id: 3, name: "四王寺城" },
// 					{ id: 4, name: "観世音寺" },
// 				],
// 				map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
// 			},
// 		],
// 		feedbacks: [
// 			{
// 				name: "akiaki",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "2024/05/19",
// 				age: "36",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "nyamu",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "18",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 			{
// 				name: "ahihi",
// 				avatar: "https://i.pinimg.com/736x/94/94/fa/9494facebfb6dd342d6ce549a2fbbedb.jpg",
// 				address: "大阪市天王寺区",
// 				time: "",
// 				age: "20",
// 				content:
// 					"「忠義の福岡武将物語」は本当に最高の体験でした！1日目は古代の遺跡を巡り、太宰府天満宮では歴史の深さに感動。2日目は中世の歴史に触れ、元寇の激闘を体感できました。福岡が国防の要所だったと知り、新たな発見に胸躍る旅でした。ガイドさんの説明も分かりやすく、福岡の歴史と文化にどっぷり浸れた2日間。歴史好きにはたまらない、大満足のツアーです！",
// 				rate: "4",
// 			},
// 		],
// 	},
// ];

export default ManagerHomePage;
