import React from "react";
import FirstSection from "./components/FirstSection";
import Categories from "../CateGory";

function LatestPage() {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div className="py-7 ">
          <FirstSection />
        </div>
      </div>
      <Categories />
    </>
  );
}

export default LatestPage;