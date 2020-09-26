import React from 'react';

export default function NavCategories() {
  return (
    <div className="flex flex-grow justify-around   text-white">
      <div className="relative grid items-center   cursor-pointer hover:bg-nav-primary">
        <button className="nav-cat__item  ">Deals</button>
        <div className=" text-nav-primary text-center bg-gray-100 hidden absolute top-100 p-1 rounded left-0 w-full">
          <p className="p-1 hover:bg-nav-primary hover:text-white">
            Something cool
          </p>
          <p className="p-1 hover:bg-nav-primary hover:text-white">
            Something cool
          </p>
          <p className="p-1 hover:bg-nav-primary hover:text-white">
            Something cool
          </p>
        </div>
      </div>
      <button className="nav-cat__item    ">Fresh food</button>
      <button className="nav-cat__item ">Bulk Savings</button>
      <button className="nav-cat__item  ">Baby Products</button>
      <button className="nav-cat__item  ">Food</button>
      <button className="nav-cat__item ">Something</button>
    </div>
  );
}
