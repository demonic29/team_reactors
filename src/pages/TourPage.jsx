/* eslint-disable jsx-a11y/anchor-is-valid */
import Accordion from "../layouts/Accordion";
import Gallery from "../layouts/Gallery";
import ReviewCard from "../layouts/ReviewCard";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import Button from "components/buttons/Button";
import { NavLink, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "firebase-config";

const TourPage = () => {
	const { tourId } = useParams();
	const [tour, setTour] = useState([]);

	const [noteData, setNoteData] = useState([
		{ link: "https://note.com/embed/notes/n6b12ce0e47ac" },
		{ link: "https://note.com/embed/notes/n05552824c0b4" },
	]);

	useEffect(() => {
		const getTour = async () => {
			const q = query(
				collection(db, "tours"),
				where("tourId", "==", tourId)
			);

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setTour(doc.data());
			});
		};
		getTour();
	}, [tourId]);

	return (
		<>
			<div className="mb-5 ">
				{tour && (
					<div>
						<div className="container mt-5 overflow-hidden rounded-lg">
							{/* main-img */}
							{tour.images && tour.images.length > 0 && (
								<div>
									<img
										className="w-full h-[600px] nd object-cover rounded-lg"
										srcSet={tour.images[0]}
										alt={`main-images`}
									/>
								</div>
							)}
							{/* main tour title */}
							<div className=" mt-[30px] ">
								<h1>{tour.title}</h1>
								<p> {tour.desc} </p>
							</div>
							{/* end tour title */}
							{/* about the fee */}
							<div className="overflow-hidden md:container ">
								<h2 className="mt-[40px]">
									<span className="mr-[10px] border-[#00A4EB] border-l-4 "></span>
									料金について
								</h2>
								<div className="mt-[25px] ml-[30px] mb-[50px] ">
									<div className="flex items-center">
										<p className=" text-[26px] ">
											<span className="mr-[25px] text-[18px] ">
												1泊2日
											</span>
											¥{tour.price}
										</p>
									</div>
									<p className="ml-[85px] text-lg text-[#666666] ">
										※食事代、宿泊費、交通費は別途お客様ご本人負担になります。
									</p>
								</div>
							</div>
							{/* end about the fee */}
							{/* Accordion */}
							<Accordion />
							{/* end Accordion */}
							{/* gallery */}
							<Gallery />
							{/* end gallery */}
							{/* review */}
							<ReviewCard />
							{/* end review */}

							{/* note */}
							<div>
								<div className="text-center mt-[100px]">
									<h2 className="text-3xl font-bold">
										ノート
									</h2>
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
								<NavLink
									className="flex justify-center"
									to={"https://note.com/reki_teku0531/"}
									target="_blank"
								>
									<Button>ノートのページへ</Button>
								</NavLink>
							</div>
							{/* end note */}
						</div>
					</div>
				)}
			</div>
			<Footer></Footer>
		</>
	);
};

export default TourPage;

// {/* <div>
// <div className="text-center mt-[100px]">
//     <h2 className="text-3xl font-bold">
//         ノート
//     </h2>
// </div>

// <div className="flex flex-wrap items-center justify-around mt-5">
//     {/* {noteData &&
//         noteData.length > 0 &&
//         noteData.map.match &&
//         noteData
//             .slice(0, 3)
//             .map((note, index) => (

//                 <div
//                     key={index}
//                     dangerouslySetInnerHTML={{
//                         __html: `<iframe class="note-embed"
//                                     src=${
//                                         note.map.match(
//                                             /src="([^"]+)"/
//                                         )[1]
//                                     }
//                                     style="
//                                         border: 0;
//                                         display: block;
//                                         max-width: 99%;
//                                         width: 500px;
//                                         padding: 0px;
//                                         margin: 10px 0px;
//                                         position: static;
//                                         visibility: visible;"
//                                         height="300px"
//                                     >
//                                     </iframe>
//                                     <script async src="https://note.com/scripts/embed.js" charset="utf-8"></script>`,
//                     }}
//                 />
//             ))} */}
//     {noteData.length > 0 &&
//         noteData.slice(0, 3).map(
//             (note, index) =>
//                 note.map && (
//                     <div
//                         key={index}
//                         dangerouslySetInnerHTML={{
//                             __html: note,
//                         }}
//                         // src={
//                         //     note.map.match(
//                         //         /src="([^"]+)"/
//                         //     )[1]
//                         // }
//                         // width="600px"
//                         // height="700px"
//                         // className="rounded-[10px]"
//                         // frameBorder="0"
//                         // allowFullScreen
//                         // title={`note${noteData.noteId}`}
//                     ></div>
//                 )
//         )}
// </div>
// </div> */}
