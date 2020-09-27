import React from 'react';
import Logo from './NavComponents/Logo';
import NavRightSide from './NavComponents/NavRightSide';

import NavSearchbar from './NavComponents/NavSearchbar';
import SecondaryNav from './NavComponents/SecondaryNav';

export default function Navbar() {
  return (
    <>
      <header className="  shadow-xl p-2 pb-0 sticky top-0 left-0 bg-nav-primary items-center z-20">
        <div className="  flex justify-between   ">
          <Logo />
          <NavSearchbar />
          <NavRightSide />
        </div>
        <SecondaryNav />
      </header>
      <div
        id="dropdownbg"
        className="w-full h-full hidden absolute top-0 left-0 bg-gray-800 opacity-50 z-10"
      />
    </>
  );
}
