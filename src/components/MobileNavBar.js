import React, { useState, useRef } from 'react';
import Logo from './NavComponents/Logo';
import useClickAway from '../hooks/useClickAway';
import SideMenu from './NavComponents/SideMenu';
import Hamburger from './NavComponents/Hamburger';
import NavIcons from './NavComponents/NavIcons';
export default function MobileNavBar() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const sideMenuRef = useRef();
  useClickAway(sideMenuRef, () => {
    if (sideMenuOpen) {
      sideMenuRef.current.classList.add('-translate-x-full');
      setSideMenuOpen(false);
    }
  });
  const handleSideMenuOpen = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.remove('-translate-x-full');
      setSideMenuOpen(true);
    }
  };
  const handleSideMenuClose = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.add('-translate-x-full');
      setSideMenuOpen(false);
    }
  };
  return (
    <>
      <header className="  shadow-xl p-2  sticky top-0 left-0  bg-nav-primary items-center z-20">
        <div className="  flex justify-between  ">
          <Hamburger handleSideMenuOpen={handleSideMenuOpen} />

          <Logo />
          <NavIcons isMobile={true} />
        </div>
      </header>
      <div
        id="dropdownbg"
        className="w-full h-full hidden absolute top-0 left-0 bg-gray-800 opacity-50 z-10"
      />
      <SideMenu
        sideMenuRef={sideMenuRef}
        sideMenuOpen={sideMenuOpen}
        handleSideMenuClose={handleSideMenuClose}
      />
    </>
  );
}
