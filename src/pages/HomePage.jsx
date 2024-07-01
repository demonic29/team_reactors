import React, { useEffect, useState } from 'react';
import Button from '../components/buttons/Button';
import Card from '../components/card/Tour';
import tourInfo from '../components/card/tourInfo.json';
import note from '../components/card/note.json';
import Footer from '../layouts/Footer';
// import styled from 'styled-components';

import homeImg from '../assets/img/home-main.jpg';
import mainImg from '../assets/img/about-main-img.jpg'
import tourImg1 from '../assets/img/tour-img-1.jpg';
import tourImg2 from '../assets/img/tour-img-2.jpg';
import tourImg3 from '../assets/img/tour-img-3.jpg';

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    setInfo(tourInfo);
  }, []);

  useEffect(() => {
    setNoteData(note);
  }, []);

  const tourImages = [tourImg1, tourImg2, tourImg3];

  return (
    <div>
      <div className="container">

        {/* main-img */}

        <div className='container rounded-lg overflow-hidden mt-5'>
          <img 
            className='w-full aspect-[10/5] nd object-cover rounded-lg'
            srcSet={`${homeImg}`}
            alt='main-building'
          />
       </div>

        {/* about-us */}
        <div>
          <h2 className='text-3xl text-center font-bold mt-[100px]'>私たちについて</h2>
          <div className='flex mt-[50px] justify-between items-center'>
            <div className="w-[50%]">
              <img src={mainImg} alt="" className="w-[700px] rounded-xl" />
            </div>
            <div className='grid gap-10'>
              <p className="text-xl leading-10">
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
          <div className='flex justify-evenly'>
            {info.map((item, index) => (
              <Card
                key={index}
                imgSrc={tourImages[index % tourImages.length]}
                title={item.title}
                desc={item.desc}
                location={item.location}
                link={item.link}
              />
            ))}
          </div>

          <div className='mt-[100px] text-center'>
            <Button>もっとツアーをみる</Button>
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
