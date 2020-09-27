import React, { useRef, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

import useClickAway from '../../hooks/useClickAway';

export default function NavIcons({ isMobile = false }) {
  const userIconRef = useRef(null);
  const searchBarRef = useRef(null);
  const userDropDownRef = useRef(null);
  const languageDropDownRef = useRef(null);
  const [userDropDownMenuOpen, setUserDropDownMenuOpen] = useState(false);
  const [languageDropDownMenuOpen, setLanguageDropDownMenuOpen] = useState(
    false
  );
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  useClickAway(userDropDownRef, () => {
    if (userDropDownMenuOpen) {
      userDropDownRef.current.classList.replace('scale-100', 'scale-0');
      setUserDropDownMenuOpen(false);
    }
  });
  useClickAway(languageDropDownRef, () => {
    if (languageDropDownMenuOpen) {
      languageDropDownRef.current.classList.replace('scale-100', 'scale-0');
      setLanguageDropDownMenuOpen(false);
    }
  });
  const handleUserIconClick = () => {
    setUserDropDownMenuOpen(true);
    userDropDownRef.current.classList.replace('scale-0', 'scale-100');
  };

  const handleLanguageIconClick = () => {
    setLanguageDropDownMenuOpen(true);
    languageDropDownRef.current.classList.replace('scale-0', 'scale-100');
  };
  const handleSearchBarOpen = () => {
    setSearchBarOpen(!searchBarOpen);
    // searchBarRef.current.classList.replace('hidden', 'block');
    // searchBarRef.current.classList.remove('-translate-y-full');
    // }
  };
  return (
    <div className="flex ml-5  ">
      {!isMobile && (
        <button
          ref={userIconRef}
          className="relative p-1 cursor-pointer grid place-items-center "
          onClick={handleUserIconClick}
        >
          <FaUser className="w-20p h-20p text-white" />
          <div
            id="userdropdown"
            ref={userDropDownRef}
            className="scale-0   transform z-20 transition duration-200 origin-top rounded absolute top-100  bg-white text-nav-primary   "
          >
            <button className="p-2 w-full  text-center hover:text-nav-secondary hover:bg-nav-primary ">
              Login
            </button>
            <button className="p-2  text-center  hover:text-nav-secondary hover:bg-nav-primary">
              Register
            </button>
          </div>
        </button>
      )}

      {isMobile && (
        <button
          onClick={handleSearchBarOpen}
          className="py-0 px-1 grid place-items-center "
        >
          <BiSearch className="w-25p h-25p text-white"></BiSearch>
        </button>
      )}
      {searchBarOpen && (
        <div className="absolute p-1 flex items-center opacity-0 animate-fadeIn top-100 min-w-full bg-white  left-0">
          <BiSearch className="w-20p h-20p    text-nav-primary"></BiSearch>
          <input
            ref={searchBarRef}
            type="search"
            className="py-1 px-4 flex-grow  placeholder-black "
            placeholder="Search..."
            autoFocus={true}
          />
          <button className="p-1 bg-nav-primary rounded text-white">
            Search
          </button>
        </div>
      )}

      <button className="p-1 outline-none grid place-items-center text-nav-secondary relative">
        <TiShoppingCart className="w-25p h-25p" />
        <span className="h-4 w-4 text-nav-secondary font-bold rounded-full absolute top-0 right-0 text-xs grid place-items-center bg-orange-400">
          5
        </span>
      </button>
      <div
        onClick={handleLanguageIconClick}
        className="p-1 outline-none grid place-items-center hover:text-orange-400 text-nav-secondary relative cursor-pointer"
      >
        <MdLanguage className="w-25p h-25p" />
        <div
          ref={languageDropDownRef}
          className="transform scale-0 transition origin-top-right duration-200 z-20 absolute top-100 right-0 rounded bg-white text-nav-primary "
        >
          <button className="p-2 w-full text-center font-cairo hover:text-nav-secondary hover:bg-nav-primary">
            العربية
          </button>
          <button className="p-2 w-full text-center hover:text-nav-secondary hover:bg-nav-primary">
            English
          </button>
        </div>
      </div>
    </div>
  );
}
