import React, { useEffect, useState } from "react";

function Categories({handleCName}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-[250px] h-[910px] bg-gray-50 p-5 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold text-center">ফিল্টার করুন
      </h1>
      <div className="mt-5">
        {categories.map((categorie, index) => (
          <div onClick={() => handleCName(categorie)}
            className="flex gap-6 items-center mb-5 cursor-pointer"
            key={index}
          >
            <img
              className="w-[30px]"
              src={categorie.icon}
              alt={categorie.name}
            />
            <h1 className="text-base hover:text-green-500">{categorie.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;