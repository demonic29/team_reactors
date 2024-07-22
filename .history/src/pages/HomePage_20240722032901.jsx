import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Card from "../components/card/Tour";
import Footer from "../layouts/Footer";
import CarouselImages from "../components/Carousel/CarouselImages";

// Json-Datas
import slides from "../components/Carousel/CarouselData.json";
import tourInfo from "../components/card/tourInfo.json";
import note from "../components/card/note.json";

// Import-Images
import mainImg from "../assets/img/about-main-img.jpg";
import tourImg1 from "../assets/img/tour-img-1.jpg";
import tourImg2 from "../assets/img/tour-img-2.jpg";
import tourImg3 from "../assets/img/tour-img-3.jpg";
import { doc, getDoc } from "firebase/firestore";

const HomePage = () => {
	const [info, setInfo] = useState([]);
	const [noteData, setNoteData] = useState([]);
	const [carouselImgs, setCarouselImgs] = useState([]);

	useEffect(() => {
		setInfo(tourInfo);
	}, []);

	useEffect(() => {
		setNoteData(note);
	}, []);

	useEffect(() => {
		setCarouselImgs(slides);
	}, []);

  const [homeAbout, setHomeAbout] = useState({});
  useEffect(() => {
		const getHomeAbout = async () => {
		
			const docRef = doc(db, "general", "pageData");
			const docSnap = await getDoc(docRef);
			setHomeAbout(docSnap.data().about.homeAbout);
			
		};
		getHomeAbout();
	}, []);

	const tourImages = [tourImg1, tourImg2, tourImg3];

	return (
		<div>
			<div className="container">
				<div className="mt-5">
					<CarouselImages slides={slides} />
				</div>

				{/* about-us */}
				<div className="sub-container">
					<h2 className="text-3xl text-center font-bold mt-[120px]">
						私たちについて
					</h2>
					<div className="grid grid-cols-2 gap-10 mt-[50px]  items-center">
						<div>
							<img
								src={homeAbout?.}
								alt=""
								className="w-[700px] rounded-xl"
							/>
						</div>
						<div className="grid gap-10">
							<p 
                className="leading-10 text-md"
                dangerouslySetInnerHTML={{
                  __html : `${homeAbout.content}`
                }}  
              >
                
						
							</p>

							<div>
								<Button>詳しくはこちら</Button>
							</div>
						</div>
					</div>
				</div>

				{/* popular-tour */}
				<div>
					<div className="text-center mt-[100px]">
						<h2 className="text-3xl font-bold">人気なツアー</h2>
						<p>
							心を込めて、私たちはお客さんにいろいろなツアーを提供しています。
						</p>
					</div>

					{/* card-datas */}
					<div className="flex flex-wrap justify-center gap-10 sub-container">
						{[...info].map((item, index) => (
							<div key={index} className="max-w-[calc((100%-(40px)*2)/3)]">
								<Card
									imgSrc={
										tourImages[index % tourImages.length]
									}
									item={item}
									title={item.title}
									desc={item.desc}
									location={item.location}
									link={item.link}
								/>
							</div>
						))}
					</div>

					<div className="mt-[100px] text-center">
						<Button>もっとツアーをみる</Button>
					</div>
				</div>

				{/* note */}
				<div>
					<div className="text-center mt-[100px]">
						<h2 className="text-3xl font-bold">ノート</h2>
					</div>

					<div className="flex mt-5">
						{noteData.map((item, index) => (
							<div
								key={index}
								dangerouslySetInnerHTML={{
									__html: `<iframe class="note-embed" 
                      src=${item.link} 
                      style="
                        border: 0; 
                        display: block; 
                        max-width: 99%; 
                        width: 500px; 
                        padding: 0px; 
                        margin: 10px 0px; 
                        position: static; 
                        visibility: visible;" 
                        height="300px"
                      >
                    </iframe>
                    <script async src="https://note.com/scripts/embed.js" charset="utf-8"></script>`,
								}}
							/>
						))}
					</div>
					<div className="text-center">
						<Button>ノートのページへ</Button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
