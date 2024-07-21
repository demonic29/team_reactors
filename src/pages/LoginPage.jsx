import React, { useState } from "react";
import loginImg from "../assets/img/about-main-img.jpg";
import logo from "../assets/img/rekiteku-logo.svg";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const showError = (message) => {
      Swal.fire({
        icon: "error",
        title: "入力してください",
        text: message,
        customClass: {
          confirmButton:
            "bg-primaryColor text-white hover:bg-[#005AA3] transition-all",
        },
      });
    };

    // 何も入力されていない場合
    if (!email.value && !password.value) {
      showError("メールアドレスとパスワードを入力してください。");
      return;
    }
    // メールアドレスが入力されていない場合
    if (!email.value) {
      showError("メールアドレスを入力してください。");
      return;
    }
    // パスワードが入力されていない場合
    if (!password.value) {
      showError("パスワードを入力してください。");
      return;
    }

    setLoading(true);

    try {
      const userLogin = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log("ログイン成功:", userLogin.user);
      navigate("/manager/home");
    } catch (error) {
      console.error("ログイン:", error);
      Swal.fire({
        icon: "error",
        title: "ログイン失敗",
        text: "メールアドレスまたはパスワードが間違っています",
        customClass: {
          confirmButton:
            "bg-primaryColor text-white hover:bg-[#005AA3] transition-all",
        },
      });
      email.value = "";
      password.value = "";
    } finally {
      setLoading(false);
    }
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
      <div className="w-1/2 px-[10%] py-[6%] ">
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
          <button
            className="w-full h-[64px] rounded-[10px] text-[#fefefe] text-xl bg-primaryColor hover:bg-[#005AA3] transition-all flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 24c6.627 0 12-5.373 12-12h-4a8 8 0 01-8 8v4z"
                ></path>
              </svg>
            ) : (
              "ログイン"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
