import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Card from "../components/card/Tour";
import Footer from "../layouts/Footer";
import CarouselImages from "../components/Carousel/CarouselImages";

// firebase datas
import { getGeneral } from "utils/managerPage/getGeneral";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import { collection, doc, getDoc, } from "firebase/firestore";
import { db } from "firebase-config";
import { NavLink } from "react-router-dom";

import { useApi } from "contexts/managerPage/api-context";

const HomePage = () => {
	const [carouselImgs, setCarouselImgs] = useState([]);


  // loading
  const [loading, setLoading] = useState(false);

  // tour database
  const [tourList, setTourList] = useState([])
  useEffect(() => {
    const getTour = async() => {
      setLoading(true);
      try {
        const general = await getGeneral();
        const tours = await getItemFromOrderList(general?.tourOrder, "tours");
        setTourList(tours);
        setLoading(false)
      }catch(error){
        // console.log(error);
        setLoading(false)
      }
    };
    getTour();
  }, [])

  // about database
  const [about, setAbout] = useState([]);
  useEffect(() => {
		const getHomeAbout = async () => {
			setLoading(true);
			const docRef = doc(db, "general", "pageData");
			const docSnap = await getDoc(docRef);
			setAbout(docSnap.data().about.homeAbout);
			setLoading(false);
		};
		getHomeAbout();
	}, []);

  // note database
  const [notes, setNotes] = useState([]);
  useEffect(() => {
	const getTour = async () => {
		setLoading(true);
			try {
				const general = await getGeneral();
				const notes = await getItemFromOrderList(
					general?.noteOrder,
					"notes"
				);
				setNotes(notes);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
	getTour();
	}, []);

	// sliders
	const [imgSlides, setImgSlides] = useState([]);
	useEffect(() => {
		const getSlides = async () => {
			setLoading(true);
			const general = await getGeneral("itemOrder");
			const slideOrder = general?.slideOrder;
			const slides = await getItemFromOrderList(slideOrder, "slidesId",);
			console.log(slides)
			setImgSlides(slides);
			setLoading(false);
		};

		getSlides();
	}, []);

// 	const { data } = useApi();
// 	const [tourImg , setTourImg] = useState({});
// 	useEffect(() => {
// 	  if(data && data.tours && data.tours.length > 0) {
// 		  setTourImg(data.tours[0])
// 	  }
//   }, [data]) 

	return (
		<div>
			<div className="container">
				{
					imgSlides.map((imgslide) => (
						<CarouselImages slides={imgSlides}/>
					))
				}
				{/* {tourImg.images && <CarouselImages slides={tourImg.images.map(img => ({ src: img, title: tourImg.title, desc: tourImg.shortDesc }))}/>} */}

				{/* about-us */}
				<div className="sub-container">
					<h2 className="text-3xl text-center font-bold mt-[120px]">
						私たちについて
					</h2>
					<div className="grid grid-cols-2 gap-10 mt-[50px]  items-center">
						<div>
							<img
								src={about?.image?.downloadURL}
								alt=""
								className="w-[700px] rounded-xl"
							/>
						</div>
						<div className="grid gap-10">
							<p className="leading-10 text-md"
									dangerouslySetInnerHTML={{
									__html : `${about.content}`
									}}
								>
							</p>

						<NavLink to={"/tourList"}>
                  			<Button>もっとツアーをみる</Button>
                		</NavLink>
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

					{/* tour-datas */}
					<div className="flex flex-wrap justify-center gap-10 sub-container">

						{
						tourList.slice(0,3).map((tour) => (
							<div key={tour?.tourId} className="max-w-[calc((100%-(40px)*2)/3)]">
								<Card
								imgSrc={tour.banner}
								alt="tour-banner"
								title={tour.title}
								desc={tour.shortDesc}
								/>
							</div>
						))
						}
					</div>

					<div className="mt-[100px] flex justify-center">

						<NavLink to={"/tourList"} target="_blank">
							<Button>もっとツアーをみる</Button>
						</NavLink>
					</div>
					
					
				</div>

				{/* note */}
				<div>
          <div className="text-center mt-[100px]">
            <h2 className="text-3xl font-bold">ノート</h2>
          </div>

          <div className="flex mt-5">
            {notes && notes.length > 0 ? (
              notes.slice(0, 3).map((note) => (
                <div key={note.noteId}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${note.content}`,
                    }}
                  ></p>
                </div>
              ))
            ) : (
              <p>No notes available.</p>
            )}
          </div>
          <div className="flex justify-center">
            <NavLink to={"https://note.com/reki_teku0531/"} target="_blank">
				<Button>ノートのページへ</Button>
			</NavLink>
          </div>
        </div>
      
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
