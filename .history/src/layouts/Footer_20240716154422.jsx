import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/img/rekiteku-logo-white.svg";
import fb from "../assets/img/Facebook logo.svg";
import insta from "../assets/img/Instagram logo.svg";
import x from "../assets/img/X logo.svg";
import note from "../assets/img/Note Logo.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondaryColor mt-[100px] pt-[50px] pb-[16px]">
      {/* ロゴ・SNS・連絡先のWrap */}
      <div className="container flex justify-between gap-x-16 px-[100px]">
        {/* 左半分 ロゴとSNS */}
        <div className="flex flex-col gap-y-6">
          {/* ロゴと企業名 */}
          <div className="flex items-center gap-x-6">
            <img src={logo} alt="歴てくのロゴ" />
            <p className="text-4xl font-bold text-white">
              歴てく
              <span className="text-2xl">-INSIDE-</span>
            </p>
          </div>
          {/* SNS */}
          <div>
            <ul className="flex gap-x-6 items-center">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={x} alt="x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={note} alt="note" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 右半分 連絡先 */}
        <div className="flex flex-col gap-y-8">
          <div>
            <span className="text-slate-300 text-lg">メール</span>
            <p className="text-white text-base">yuki3086ny4403sdm@icloud.com</p>
          </div>
          <div className="flex gap-x-16">
            <div>
              <span className="text-slate-300 text-lg">電話番号</span>
              <p className="text-white text-base">090-2395-2427</p>
            </div>
            <div>
              <span className="text-slate-300 text-lg">住所</span>
              <p className="text-white text-base">
                福岡市西区横浜３丁目２７－１５
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* プライバシポリシー系 */}
      <div className="mt-16 mb-[32px]">
        <ul className="flex justify-center gap-x-20 text-white text-xs font-thin">
          <li>
            <a href="/travelAgencyAgreement">旅行業約款</a>
          </li>
          <li>
            <a href="/privacyPolicy">プライバシーポリシー</a>
          </li>
          <li>国内旅行業務取扱管理者第〇〇〇〇-〇〇〇〇号</li>
        </ul>
      </div>
      {/* copylight */}
      <p className="text-center text-xs">
        <small className="text-slate-300">
          Copyright &copy; by Rekiteku 2024
        </small>
      </p>
    </footer>
  );
}
