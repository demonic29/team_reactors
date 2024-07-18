import React from "react";
import loginImg from "../assets/img/about-main-img.jpg";
import logo from "../assets/img/rekiteku-logo.svg";
import { auth } from "../firebase-config";
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/cordova";
import Swal from "sweetalert2";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userLogin) => {
        // ユーザーのログインに成功
        const user = userLogin.user;
        console.log("ログイン成功:", user);
      })
      .catch((error) => {
        // エラー処理
        console.error("ログイン:", error);
        Swal.fire({
          icon: "error",
          title: "ログイン失敗",
          text: "メールアドレスまたはパスワードが間違っています",
        });
        email.value = "";
        password.value = "";
      });
  };

  return (
    <div className="w-full h-screen flex font-kiwiMaru">
      <div className="w-1/2">
        <img
          className="w-full h-screen object-cover"
          src={loginImg}
          alt="login-img"
        />
      </div>
      <div className="w-1/2 px-[10%] py-[6%] text-[#333333]">
        <img
          className="aspect-square mx-auto mb-[20px]"
          src={logo}
          alt="歴てくのロゴ"
        />
        <h1 className="text-center mb-[8%]">
          歴てく IN - SIDE <br />
          ログインページへようこそ
        </h1>
        <form onSubmit={handleLogin}>
          <div className="w-full mb-[2%] flex flex-col">
            <p className="text-base">メールアドレス</p>
            <input
              className="border border-[#333333] text-xl p-2 rounded-[10px]"
              type="email"
              name="email"
            />
          </div>
          <div className="w-full mb-[16%] flex flex-col">
            <p className="text-base">パスワード</p>
            <input
              className="border border-[#333333] text-xl p-2 rounded-[10px] "
              type="password"
              name="password"
            />
            {/* <a
              className="text-base text-gray-500 text-[12px] underline"
              href="#"
            >
              パスワードを忘れた場合
            </a> */}
          </div>
          <button className="w-full p-4 rounded-[10px] text-[#fefefe] text-xl bg-primaryColor hover:bg-secondaryColor">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
