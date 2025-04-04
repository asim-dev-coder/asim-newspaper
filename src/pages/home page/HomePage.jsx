import React from "react";
import LeftSection from "./components/hero section/LeftSection";
import RightSection from "./components/hero section/RightSection";
import MiddleSection from "./components/hero section/MiddleSection";
import Categories from "../CateGory";
import PopularCourses from "./components/PopularCourses";


function HomePage() {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div className="w-11/12 mx-auto flex gap-5 py-9 ">
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
      <Categories />
      <PopularCourses />
    </>
  );
}

export default HomePage;