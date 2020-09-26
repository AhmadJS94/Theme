import React, { useRef, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import useClickAway from '../../hooks/useClickAway';

export default function NavIcons() {
  const userIconRef = useRef(null);

  const userDropDownRef = useRef(null);
  const languageDropDownRef = useRef(null);
  const [userDropDownMenuOpen, setUserDropDownMenuOpen] = useState(false);
  const [languageDropDownMenuOpen, setLanguageDropDownMenuOpen] = useState(
    false
  );
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
  return (
    <div className="flex ml-5  ">
      <div
        ref={userIconRef}
        className="relative p-1 cursor-pointer grid place-items-center "
        onClick={handleUserIconClick}
      >
        <FaUser
          className=""
          style={{ height: '20px', width: '20px', color: 'white' }}
        />
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
        <span className="absolute right-n1 top-10 h-5 w-1p bg-white rounded-full" />
      </div>

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
          className="transform scale-0 transition origin-top duration-200 z-20 absolute top-100 rounded bg-white text-nav-primary "
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
