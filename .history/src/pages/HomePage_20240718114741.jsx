
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
import axios from 'axios';

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [carouselImgs, setCarouselImgs] = useState([]);

  // useApi
  const { data } = useApi()
  
  useEffect(() => {
    const [tourImg , setTourImg] = useState({});
    
    async function data () {
      try {
        const [tourimgs , setTourImgs] = await Promise.all(
          axios.get(`${API.GET_DATA}?action=getSlide`),
        )
      }catch (err) {
        console.error("this is img error", err)
      }
    }
    if(data && data.tours && data.tours.length > 0) {
      setTourImg(data.tours[0])
    }
}, [data]) 


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
              <img src={mainImg} alt="" className="w-[700px] rounded-xl" />
            </div>
            <div className='grid gap-10'>
              <p className="text-md leading-10">
                「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。<br />
                知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。
                「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。<br />
                知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。
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
          <div className='flex gap-10 justify-center'>
            {filterImages.map((item, index) => (
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
          </div>

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

          <div className='flex mt-5'>
            {noteData.map((item, index) => (
              <div 
                key={index}
                dangerouslySetInnerHTML={{ 
                  __html: 
                    `<iframe class="note-embed" 
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
                    <script async src="https://note.com/scripts/embed.js" charset="utf-8"></script>`
                }} 
              />
            ))}
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
