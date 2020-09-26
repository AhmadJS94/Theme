import React, { useState, useRef } from 'react';
import Logo from './NavComponents/Logo';
import NavRightSide from './NavComponents/NavRightSide';
import { useMediaQuery } from 'react-responsive';
import NavSearchbar from './NavComponents/NavSearchbar';
import SecondaryNav from './NavComponents/SecondaryNav';
import useClickAway from '../hooks/useClickAway';
import SideMenu from './NavComponents/SideMenu';
import Hamburger from './NavComponents/Hamburger';
export default function Navbar() {
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
  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <header className="  shadow-xl px-5 py-2 pb-0 sticky top-0 left-0 bg-nav-primary items-center z-20">
        <div className="  flex justify-between py-2  ">
          {!isTabletOrAbove && (
            <Hamburger handleSideMenuOpen={handleSideMenuOpen} />
          )}
          <Logo />
          {isTabletOrAbove && <NavSearchbar />}
          <NavRightSide />
        </div>
        <SecondaryNav />
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
