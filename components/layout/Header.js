import {
  BookmarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon
} from '@heroicons/react/24/Outline';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Tabs from '../Tabs';
import HeaderIcon from './HeaderIcon';
import Men from './popovers/Men';
import Women from './popovers/Women';


export default function Header() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  return (
    <div className="relative">

      <div className="bg-gray-100 items-center select-none flex justify-between px-14 border-b border-gray-800 hover:bg-gray-50 hover:border-none sticky top-0 z-50">
        {
          nav ? (
            <button
              onClick={() => setNav(!nav)}
              type="button"
              className="md:hidden block border px-2 text-lg"
            >
              x
            </button>

          ) : (
            <button
              onClick={() => setNav(!nav)}
              type="button"
              className="md:hidden block"
            >
              <FaBars />

            </button>
          )
        }

        <div className=" my-1 ml-4 mr-1 ">
          <ul className=" md:flex hidden space-x-2 items-center">
            <Men />
            <Women />
           
            <li className="border-r-2 border-gray-400">
              <a href="#" className="mr-2 hover:border-b-2 border-purple-500 md:text-xs">
                ARTIST EDIT
              </a>
            </li>
            <li className="border-r-2 border-gray-400">
              <a href="#" className="mr-2 hover:border-b-2 border-purple-500 md:text-xs">
                BRANDS
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 border-purple-500 md:text-xs">
                KOOVS SPORT
              </a>
            </li>
          </ul>
        </div>

        <div className="font-extrabold cursor-pointer text-4xl text-center">
          <button
            type="button"
            onClick={() => router.push('/')}
          >
            koovs
          </button>
        </div>
        <div className="flex">
          <div>
            <HeaderIcon Icon={MagnifyingGlassIcon} />
            <span className="md:block hidden text-center">Search</span>
          </div>
          <div>
            <HeaderIcon Icon={UserIcon} />
            <span className="md:block hidden text-center">Log In</span>
          </div>
          <div>
            <HeaderIcon Icon={BookmarkIcon} />
            <span className="md:block hidden text-center">Save</span>
          </div>
          <div>
            <HeaderIcon Icon={ShoppingBagIcon} />
            <span className="md:block hidden text-center">Cart</span>
          </div>
        </div>
      </div>
      <div>

        <div className="my-1 ml-0 mr-1 md:hidden block">
          <div className={` h-[70vh] flex ${nav ? 'navbar-active' : 'navbar'} flex-col p-5 space-y-10 bg-gray-100 absolute z-50 w-[100vw]`}>
            <Tabs />

          </div>
        </div>
      </div>
    </div>
  );
}
