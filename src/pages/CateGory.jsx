import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

function Categories() {
 
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold">আরো দেখুন
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-4 mt-16">
        {categories.map((categori, index) => (
         <Link to={`/categories/${categori.id}`}>
          <div
            key={index}
            className=" h-[50px] flex items-center gap-5 rounded-md mb-1 p-5 cursor-pointer hover:bg-[#ee4023] group"
          >
            <img className="w-9 h-9" src={categori.icon} alt={categori.name} />
            <h1 className="text-lg  text-gray-600 group-hover:text-white">
              {categori.name}
            </h1>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;