import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';

export default function SideMenu({
  sideMenuRef,

  handleSideMenuClose,
}) {
  return (
    <div
      ref={sideMenuRef}
      className=" px-4 py-3 absolute left-0 top-0 min-h-full min-w-75p bg-gray-300 z-30 transform -translate-x-full transition duration-300"
    >
      <div className="flex">
        <Hamburger color="#555" handleSideMenuClose={handleSideMenuClose} />
        <Logo color="#555" />
      </div>
    </div>
  );
}
