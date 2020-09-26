import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
export default function Hamburger({
  color = '#fff',
  handleSideMenuOpen,
  handleSideMenuClose,
}) {
  return (
    <button
      onClick={handleSideMenuOpen || handleSideMenuClose}
      className="grid p-1 mr-2 flex-initial place-items-center"
    >
      <BiMenuAltLeft style={{ width: '25px', height: '25px', color: color }} />
    </button>
  );
}
