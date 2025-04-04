import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null); // This will reference the menu div
  const buttonRef = useRef(null); // This will reference the hamburger button

  const toggleMenus = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the menu and the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false); // Close the menu if the click is outside both
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    // Optionally, you can navigate here or perform any additional logic
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  return (
    <div className="bg-white py-3 shadow-lg">
      <div className="flex items-center w-11/12 mx-auto justify-between">
        <div>
          <ul className="lg:flex lg:items-center lg:gap-7">
            <div className="lg:flex lg:gap-0.5 lg:items-center">
              <Link to="/">
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  হোম
                </li>
              </Link>
            </div>

            <div className="lg:flex lg:gap-0.5 lg:items-center">
              <Link to="/latest">
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  সর্বশেষ
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/politics">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  রাজনীতি
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/bangladesh">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  বাংলাদেশ
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/crime">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  অপরাধ
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/international">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  বিশ্ব
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/trade">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  বাণিজ্য
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/opinion">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  মতামত
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/sports">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  খেলা
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/entertainment">
                {" "}
                <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                  বিনোদন
                </li>
              </Link>
            </div>

            <Link to="/jobs">
              {" "}
              <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                চাকরি
              </li>
            </Link>

            <Link to="/lifestyle">
              <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600 hidden lg:block">
                জীবনযাপন
              </li>
            </Link>
          </ul>
        </div>


        <div className="flex items-center gap-39 lg:gap-6 ">
          <Link to="/search">
            <div className="flex items-center gap-39 lg:gap-3 duration-400 ease-in-out hover:scale-120">
              <IoSearch size={25} />
              <p className="text-black text-lg">
                খুঁজুন
              </p>
            </div>
          </Link>
          <Link to="/login" >
            {" "}
            <button className="text-lg cursor-pointer font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-red-400 hover:to-rose-600">
              Log in
            </button>
          </Link>
          <Link to="/signup" >
            <button className="btn cursor-pointer text-lg font-semibold rounded-lg border-none bg-[#ee4023] hover:bg-sky-500 text-white">
              Sign Up
            </button>
          </Link>
          <GiHamburgerMenu
            onClick={toggleMenus}
            size={25}
            className="cursor-pointer"
            ref={buttonRef} // Attach ref to the hamburger button
          />
          <div>
            <ul
              ref={menuRef} // Attach ref to the menu
              className={`${isCategoriesOpen
                  ? 'text-xl text-gray-500 w-[460px] h-[340px] lg:w-[960px] lg:h-[225px] bg-white rounded-md absolute p-4 top-35 left-71 lg:left-135 z-10 shadow-lg'
                  : 'hidden'
                }`}
            >
              <li className="grid grid-cols-2 gap-y-2 lg:grid lg:grid-cols-4 lg:gap-4">
                {categories.map((categorie, index) => (
                  <Link
                    key={index}
                    to={`/categories/${categorie.id}`}
                    onClick={handleCategoryClick} // Prevent closing when a category is clicked
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      <img
                        className="w-[26px] h-[26px]"
                        src={categorie.icon}
                        alt=""
                      />
                      <h1 className="hover:text-sky-500">{categorie.name}</h1>
                    </div>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;