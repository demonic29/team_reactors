import React from "react";
import loginImg from "../assets/img/about-main-img.jpg";
import logo from "../assets/img/rekiteku-logo.svg";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex font-kiwiMaru">
      <div className="w-1/2">
        <img
          className="w-full h-screen object-cover"
          src={loginImg}
          alt="login-img"
        />
      </div>
      <div className="w-1/2 pt-[150px] px-[180px]">
        <img
          className="aspect-square mx-auto mb-[20px]"
          src={logo}
          alt="歴てくのロゴ"
        />
        <h1 className="text-center mb-[40px]">
          歴てく IN - SIDE <br />
          ログインページへようこそ
        </h1>
        <div className="w-full mb-[16px] flex flex-col">
          <p className="text-base">メールアドレス</p>
          <input
            className="border border-black text-xl p-5 rounded-[10px]"
            type="email"
          />
        </div>
        <div className="w-full mb-[56px] flex flex-col">
          <p className="text-base">パスワード</p>
          <input
            className="border border-black text-xl p-5 rounded-[10px] "
            type="password"
          />
          <a className="text-base text-gray-500 text-[12px] underline" href="#">
            パスワードを忘れた場合
          </a>
        </div>
        <button className="w-full p-5 rounded-[10px] text-white text-xl bg-primaryColor hover:bg-secondaryColor">
          ログイン
        </button>
      </div>
    </div>
  );
}
