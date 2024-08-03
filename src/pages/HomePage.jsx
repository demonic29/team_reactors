

import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Card from "../components/card/Tour";
import Footer from "../layouts/Footer";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation, Pagination, Parallax, Scrollbar, A11y } from 'swiper';
import { getGeneral } from "utils/managerPage/getGeneral";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import CarouselImages from "components/Carousel/CarouselImages";
import { useApi } from "contexts/managerPage/api-context";

const HomePage = () => {
  const [carouselImgs, setCarouselImgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tourList, setTourList] = useState([]);
  const [about, setAbout] = useState({});
  const [imgSlides, setImgSlides] = useState([]);
  const navigate= useNavigate()

  useEffect(() => {
    const getTour = async () => {
      setLoading(true);
      try {
        const general = await getGeneral();
        const tours = await getItemFromOrderList(general.recommendTourOrder, "tours");
        setTourList(tours);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getTour();
  }, []);

  useEffect(() => {
    const getHomeAbout = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "general", "pageData");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAbout(docSnap.data().about.homeAbout);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHomeAbout();
  }, []);

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      try {
        const general = await getGeneral();
        const getNoteDatas = await getItemFromOrderList(general.recommendNoteOrder, "notes");
        setNotes(getNoteDatas);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getNotes();
  }, []);

  useEffect(() => {
    const getSlides = async () => {
      setLoading(true);
      try {
        const general = await getGeneral();
        const slideOrder = general?.slideOrder;
        const slides = await getItemFromOrderList(slideOrder, "slides");
        // console.log(slides);
        setImgSlides(slides);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSlides();
  }, []);

    // useApi
    const { data } = useApi();
    const [tourImg , setTourImg] = useState({});
    useEffect(() => {
      if(data && data.tours && data.tours.length > 0) {
          setTourImg(data.tours[0])
      }
  }, [data]) 

  return (
    <div>
      <div className="container">
        <div className="mt-5">
        {tourImg.images && <CarouselImages slides={tourImg.images.map(img => ({ src: img, title: tourImg.title, desc: tourImg.shortDesc }))}/>}
        </div>

        {/* about-us */}
        <div className="sub-container">
          <h2 className="text-3xl text-center font-bold mt-[120px]">私たちについて</h2>
          <div className="grid grid-cols-2 gap-10 mt-[50px] items-center">
            <div>
              <img
                src={about?.image?.downloadURL}
                alt=""
                className="w-[700px] rounded-xl"
              />
            </div>
            <div className="grid gap-10">
              <p
                className="leading-10 text-md"
                dangerouslySetInnerHTML={{
                  __html: `${about.content}`,
                }}
              ></p>
              <NavLink to={"/about"}>
                <Button>もっとツアーをみる</Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* popular-tour */}
        <div>
          <div className="text-center mt-[100px]">
            <h2 className="text-3xl font-bold">人気なツアー</h2>
            <p>心を込めて、私たちはお客さんにいろいろなツアーを提供しています。</p>
          </div>

          {/* tour-datas */}
          <div className="flex flex-wrap justify-center gap-10 sub-container">
            {tourList.map((tour) => (
              <div key={tour?.tourId} onClick={() => navigate(`/tour/${tour.tourId}`)} className={`${tourList.length > 3 ? 'max-w-[calc((100%-(40px)*1)/2)]' : 'max-w-[calc((100%-(40px)*2)/3)]'} w-full`}>
                <Card
                  imgSrc={tour.banner}
                  alt="tour-banner"
                  title={tour.title}
                  desc={tour.shortDesc}
                />
              </div>
            ))}
          </div>

          <NavLink to={"/tourList"} className="mt-[100px] flex justify-center">
            <Button>もっとツアーをみる</Button>
          </NavLink>
        </div>

        {/* note */}
        <div>
          <div className="text-center mt-[100px]">
            <h2 className="text-3xl font-bold">ノート</h2>
          </div>

          <div className="flex gap-5 mt-5">
            {notes && notes.length > 0 ? (
              notes.map((note) => (
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
          <NavLink to={"https://note.com/reki_teku0531/"} className="mt-[-100px] flex justify-center">
            <Button>もっとツアーをみる</Button>
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;