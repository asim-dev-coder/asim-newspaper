import React from "react";
import TextSection from "./components/TextSection";
import Categories from "../CateGory";

function SearchPage() {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div className="w-10/12 mx-auto flex gap-6 py-20 ">
          <TextSection />
        </div>
      </div>
      <Categories />
    </>
  );
}

export default SearchPage;