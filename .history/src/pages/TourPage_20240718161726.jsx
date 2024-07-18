/* eslint-disable jsx-a11y/anchor-is-valid */
import Accordion from "../layouts/Accordion";
import Gallery from "../layouts/Gallery";
import ReviewCard from "../layouts/ReviewCard";
import Footer from "../layouts/Footer";
import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";

const TourPage = () => {
    const { loading, data } = useApi();
    const [tourList, setTourList] = useState([]);
    const [noteData, setNoteData] = useState([]);
    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
            setNoteData(data.notes);
        }
    }, [data]);

    console.log(noteData);

    return (
        <>
            {loading ? (
                <div className="skeleton"></div>
            ) : (
                <div className=" mb-5 ">
                    {tourList && (
                        <div>
                            <div className="container rounded-lg overflow-hidden mt-5">
                                {/* main-img */}
                                {tourList.images &&
                                    tourList.images.length > 0 && (
                                        <div>
                                            <img
                                                className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
                                                srcSet={tourList.images[0]}
                                                alt={`main-images`}
                                            />
                                        </div>
                                    )}
                                {/* main tour title */}
                                <div className=" mt-[30px] ">
                                    <h1>{tourList.title}</h1>
                                    <p> {tourList.desc} </p>
                                </div>
                                {/* end tour title */}
                                {/* about the fee */}
                                <div className="md:container overflow-hidden ">
                                    <h2 className="mt-[40px]">
                                        <span className="mr-[10px] border-[#00A4EB] border-l-4 "></span>
                                        料金について
                                    </h2>
                                    <div className="mt-[25px] ml-[30px] mb-[50px] ">
                                        <div className="flex  items-center">
                                            <p className=" text-[26px] ">
                                                <span className="mr-[25px] text-[18px] ">
                                                    1泊2日
                                                </span>
                                                ¥{tourList.price}
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

                                    <div className="flex flex-wrap justify-between items-center mt-5">
                                        {noteData &&
                                            noteData.length > 0 &&
                                            noteData
                                                .slice(0, 3)
                                                .map((note, index) => (
                                                    <div
                                                        key={index}
                                                        dangerouslySetInnerHTML={{
                                                            __html: note.iframe(
                                                                "<iframe",
                                                                '<iframe style="border: 0; display: flex; justify-contents : center; max-width: 100%; width: 350px; height: 300px; margin: 0px 0;"'
                                                            ),
                                                        }}
                                                    />
                                                ))}
                                    </div>
                                </div>
                                {/* end note */}
                            </div>
                        </div>
                    )}
                </div>
            )}
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

// <div className="flex flex-wrap justify-around items-center mt-5">
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
