import Link from 'next/link';
import React from 'react';

export default function MenClothingPopover() {
  return (
    <div className="shadow-lg ring-1 ring-black ring-opacity-5 px-14 py-10 bg-gray-400">
      <div className="flex justify-between">
        <div>
          <img
            className="h-80 w-80 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/636219181f7ebe6e0dd21bc5/webp/menu-banner-01-524x772.png"
            alt="image"
          />
          <button
            type="button"
            className="text-white text-2xl absolute top-[40%] left-[10%]"
          >
            Essentials By Koovs
          </button>
        </div>
        <div className="">
          <p className="text-xs text-purple-600 my-10 ">Categories</p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#"> ALL CLOTHING </a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#"> Sweatshirts & Hoodies </a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">T-Shirt</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Shorts</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Pants</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">OuterWear</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Shirt</a>
          </p>
        </div>
        <div>
          <p className="text-xs text-purple-600 my-10">Top Brands</p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#"> Essentials By Koovs </a>
          </p>
          <Link href="/arkk-copenhagen">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#">Arkk Copenhagen</a>
            </p>
          </Link>
          <Link href="/ball">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#">BALL</a>
            </p>
          </Link>
          <Link href="/the-couture-club">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#">The Couture Club</a>
            </p>
          </Link>
          <Link href="/nike">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#">Nike</a>
            </p>
          </Link>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">KEEN</a>
          </p>
        </div>
        <div>
          <img
            className="h-80 w-80 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63621c5cfbe8e0f9a9181a1c/webp/menu-banner02-01-524x772.jpg"
            alt="image"
          />
          <button
            type="button"
            className="absolute top-[40%] right-[9%] rotate-90 text-white text-xs hover:bg-purple-600 border px-10 rounded-full py-2 border-purple-500"
          >
            New In
          </button>
        </div>
      </div>
    </div>
  );
}
