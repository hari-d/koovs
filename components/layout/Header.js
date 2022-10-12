import {
  BookmarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon
} from '@heroicons/react/24/Outline';
import React from 'react';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <div className="bg-gray-100 flex flex-col items-center select-none sm:flex-row justify-between px-8 border-b border-gray-800 hover:bg-gray-50 hover:border-none sticky top-0">
      <div>
        <ul className="ml-3 flex space-x-2 items-center ">
          <li className="border-r-2 border-gray-400">
            <a href="#" className="mr-2 hover:border-b-2 border-purple-500">MEN</a>
          </li>
          <li className="border-r-2 border-gray-400">
            <a href="#" className="mr-2 hover:border-b-2 border-purple-500">WOMEN</a>
          </li>
          <li className="border-r-2 border-gray-400">
            <a href="#" className="mr-2 hover:border-b-2 border-purple-500">ARTIST EDIT</a>
          </li>
          <li className="border-r-2 border-gray-400">
            <a href="#" className="mr-2 hover:border-b-2 border-purple-500">BRANDS</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 border-purple-500">KOOVS SPORT</a>
          </li>
        </ul>
      </div>
      <div className="font-extrabold cursor-pointer text-4xl">
        <h1>koovs</h1>
      </div>
      <div className="flex">
        <HeaderIcon Icon={MagnifyingGlassIcon} title="Search" />
        <HeaderIcon Icon={UserIcon} title="Log In" />
        <HeaderIcon Icon={BookmarkIcon} title="Save" />
        <HeaderIcon Icon={ShoppingBagIcon} title="Cart" />
      </div>
    </div>
  );
}
