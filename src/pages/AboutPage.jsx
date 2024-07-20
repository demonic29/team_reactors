import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-config";
import Footer from "layouts/Footer";
import { logDOM } from "@testing-library/react";

export const fetchAboutData = async () => {
  const docRef = doc(db, "general", "pageData");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

const AboutPage = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAboutData();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  console.log(pageData);

  const accessLink = () => {
    window.open(
      pageData.about.owner.accessLink,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      {/* main-img */}
      <div className="container rounded-lg overflow-hidden mt-5">
        <img
          className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
          src={pageData.about.vision.image.downloadURL}
          alt={pageData.about.vision.image.name}
        />
      </div>

      {/* main-text */}
      <div className="text-center mt-[50px] flex justify-center">
        <div className="w-full max-w-[1080px] px-10">
          <h2 className="text-3xl font-bold mb-10">我々の理念</h2>
          <p className="text-gray-800 text-xl leading-8">
            {pageData.about.vision.content}
          </p>
        </div>
      </div>

      {/* main-profile */}
      <div className="grid grid-cols-2 mt-[150px] bg-primaryColor">
        <div className="m-auto pl-5">
          <h2 className="text-[50px] font-bold mb-5 text-white">
            {pageData.about.owner.name}
          </h2>
          <p className="text-slate-100 text-xl leading-7 tracking-wider">
            {pageData.about.owner.introduce}
          </p>
          <div className="mt-[80px]">
            <button
              onClick={accessLink}
              className="text-black bg-white px-8 py-4 rounded-md transition-all hover:bg-slate-200"
            >
              {pageData.about.owner.buttonContent}
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-[100%] h-[600px] object-cover"
            src={pageData.about.owner.image.downloadURL}
            alt={pageData.about.owner.image.name}
          />
        </div>
      </div>

      {/* company-infos */}
      <h2 className="text-3xl text-center font-bold mt-[100px]">会社概要</h2>
      <div className="flex mt-[50px] justify-evenly items-center">
        <div>
          <ul className="grid gap-5">
            <li>会社名（事業名） : {pageData.about.access.companyData.name}</li>
            <li>成立 : {pageData.about.access.companyData.foundDate}</li>
            <li>住所 : {pageData.about.access.companyData.access}</li>
            <li className="mt-8">
              連絡先 : {pageData.about.access.contact.phoneNumber}
            </li>
            <li>問い合わせメール : {pageData.about.access.contact.email}</li>
          </ul>
        </div>
        <div
          className="rounded-lg"
          dangerouslySetInnerHTML={{ __html: pageData.about.access.map }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
