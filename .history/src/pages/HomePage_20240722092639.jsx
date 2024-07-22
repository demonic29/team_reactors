
import React, { useEffect, useState } from 'react';
import Button from '../components/buttons/Button';
import Card from '../components/card/Tour';
import Footer from '../layouts/Footer';
import CarouselImages from '../components/Carousel/CarouselImages';

// Json-Datas
import slides from '../components/Carousel/CarouselData.json';
import tourInfo from '../components/card/tourInfo.json';
import note from '../components/card/note.json';

// Import-Images
import mainImg from '../assets/img/about-main-img.jpg'
import tourImg1 from '../assets/img/tour-img-1.jpg';
import tourImg2 from '../assets/img/tour-img-2.jpg';
import tourImg3 from '../assets/img/tour-img-3.jpg';
import { Link, NavLink } from 'react-router-dom';

// useApi
import { useApi } from '../contexts/managerPage/api-context';

// firebase
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { getGeneral } from 'utils/managerPage/getGeneral';
import { getItemFromOrderList } from 'utils/managerPage/getItemFromOrderList';

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [carouselImgs, setCarouselImgs] = useState([]);

  // useApi
  const { data } = useApi();
  const [tourImg , setTourImg] = useState({});
  useEffect(() => {
    if(data && data.tours && data.tours.length > 0) {
        setTourImg(data.tours[0])
    }
}, [data]) 

  // about
  const [homeAbout, setHomeAbout] = useState({}); 
  useEffect(() => {
    const getHomeAbout = async () => {
      const docRef = doc(db, "general", "pageData");
      const docSnap = await getDoc(docRef);
      setHomeAbout(docSnap.data().about.homeAbout);
    };
    getHomeAbout();
  }, []);

  // note
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    const getnotes = async() => {
      const docRef = doc(db, "notes")
      const docSnap = await getDoc(docRef);
      
      if(docSnap.exists()) {
        return setnotes(docSnap.data())

      }else{
        console.log("no doc")
        return null
      }
    }
    getnotes()
  }, [])

  const filterImages = tourInfo.filter(item => item.show)

  useEffect(() => {
    setInfo(tourInfo);
  }, []);

  useEffect(() => {
    setNoteData(note);
  }, []);

  useEffect(() => { setCarouselImgs(slides) }, []);

  const tourImages = [tourImg1, tourImg2, tourImg3];

  return (
    <div>
      <div className="container">
        
      {tourImg.images && <CarouselImages slides={tourImg.images.map(img => ({ src: img, title: tourImg.title, desc: tourImg.shortDesc }))}/>}

        {/* about-us */}
        <div className='sub-container'>
          <h2 className='text-3xl text-center font-bold mt-[120px]'>私たちについて</h2>
          <div className='grid grid-cols-2 gap-10 mt-[50px]  items-center'>
            <div>
              <img src={homeAbout?.image?.downloadURL} alt="" className="w-[700px] rounded-xl" />
            </div>
            <div className='grid gap-10'>
              <p 
                className="text-md leading-10"
                dangerouslySetInnerHTML={{
                  __html : `${homeAbout?.content}`
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
            <p>心を込めて、私たちはお客さんにいろいろなツアーを提供しています。</p>
          </div>

          {/* card-datas */}
          {/* <div className='flex gap-10 justify-center'>
            {tours.map((item, index) => (
              <Card
                key={index}
                imgSrc={tourImages[index % tourImages.length]}
                item={item}
                title={item.title}
                desc={item.desc}
                location={item.location}
                link={item.link}
              />
            ))}
          </div> */}

          <div className='mt-[100px] text-center'>
            <NavLink to={"/tourList"}>
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
          <div className="text-center">
            <Button>ノートのページへ</Button>
          </div>
        </div>
        </div>
            <div className='text-center'>
              <Button>ノートのページへ</Button>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;