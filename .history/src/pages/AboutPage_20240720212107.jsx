import React from "react";
import Footer from "../layouts/Footer";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
    const yoshimaru = require("../assets/img/yoshimarusan.jpg");
    const mainImg = require("../assets/img/about-main-img.jpg");
    return (
        <div>
            {/* main-img */}

            <div className="container rounded-lg overflow-hidden mt-5">
                <img
                    className="w-full h-[600px] nd object-cover rounded-lg"
                    srcSet={`${mainImg}`}
                    alt="main-building"
                />
            </div>

            {/* main-text */}
            <div className="text-center mt-[50px] flex justify-center">
                <div className="w-full max-w-[1080px] px-10">
                    <h2 className="text-3xl font-bold mb-10">我々の理念</h2>
                    <p className="text-gray-800 text-xl leading-8">
                        歴史は人が生きていくための教科書。栄養剤です。いにしえの人物それぞれが歩んだ足跡を訪ね、遺構や文物を目にすると、生き方の助けになる「発見」があります。また、地域の過去~現在にわたる史跡を巡り、通史を知れば、その地域の「個性」が見えてきます。
                        　有名、無名の史跡をてくてくと歩き、「今後の人生の糧」や「地域のより深い魅力」を見つけませんか。
                    </p>
                </div>
            </div>

            {/* main-profile */}
            <div className="grid grid-cols-2 mt-[150px] bg-primaryColor">
                <div className="m-auto">
                    <h2 className="text-[50px] font-bold mb-5 text-white">
                        私について
                    </h2>
                    <p className="text-slate-100 text-xl leading-7 tracking-wider">
                        福岡県福岡市に在住。歴史が大好き。 <br />{" "}
                        趣味は名所や旧跡、足跡巡り。特に好きな時代は中世史と幕末。
                    </p>
                    <div className="mt-[80px]">
                        <NavLink>
                            <button className="text-black bg-white px-5 py-2 rounded-md">note ページへ</button>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img
                        className="w-[100%] h-[600px] object-cover"
                        srcSet={`${yoshimaru}`}
                        alt="吉丸さんの写真"
                    />
                </div>
            </div>

            {/* company-infos */}
            <h2 className="text-3xl text-center font-bold mt-[100px]">
                会社概要
            </h2>
            <div className="flex mt-[50px] justify-center items-center">
                <div>
                    <ul className="grid gap-5">
                        <li>
                            会社名（事業名）：「歴てく」 ~ INSIDE（いんさいど）{" "}
                        </li>
                        <li>成立：2024/05/20</li>
                        <li>住所：福岡市西区横浜３丁目２７－１５ </li>
                        <li>連絡先：090-2395-2427 </li>
                        <li>問い合わせメール：yuki3086ny4403sdm@icloud.com</li>
                    </ul>
                </div>

                <div>
                    {/* <iframe className='rounded-lg' src="https://www.google.com/maps/d/embed?mid=1WXqpVV81x3-GEBP2vF4UkctoIPtATAU&ehbc=2E312F" width="640" height="400"></iframe> */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
