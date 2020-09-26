import React from 'react';
import NavCategories from './NavCategories';
// import NavIcons from './NavIcons';
import { useMediaQuery } from 'react-responsive';
import NavSearchbar from './NavSearchbar';
export default function SecondaryNav() {
  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className="flex py-2">
      {isTabletOrAbove && <NavCategories />}
      {!isTabletOrAbove && <NavSearchbar />}
      {/* {isTabletOrAbove && <NavIcons />} */}
    </div>
  );
}
