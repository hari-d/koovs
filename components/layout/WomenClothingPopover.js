import Link from 'next/link';
import React from 'react';

export default function WomenClothingPopover() {
  return (
    <div className="shadow-lg ring-1 ring-black ring-opacity-5 px-14 py-10 bg-gray-400">
      <div className="flex justify-between">
        <div>
          <img
            className="h-80 w-80 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63623b6b48a2ed604e1d9a27/webp/koovs-sport-menu-banner-01-524x772.jpg"
            alt="image"
          />
          <button
            type="button"
            className="text-white text-2xl absolute top-[40%] left-[10%]"
          >
            Koovs Sport
          </button>
        </div>
        <div className="">
          <p className="text-xs text-purple-600 my-10 ">Categories</p>
          <Link href="/clothing">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#"> ALL CLOTHING </a>
            </p>
          </Link>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#"> Tops </a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">T-Shirt</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Shirts</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">SportsBra</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Bodysuit</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Sweatshirts & Hoodies </a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">OuterWear</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Dress</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Shorts</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Pants</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Legging</a>
          </p>
        </div>
        <div>
          <p className="text-xs text-purple-600 my-10">Top Brands</p>
          <Link href="/public-desire">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#"> Public Desire </a>
            </p>
          </Link>
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
          <Link href="/koovs-sport">
            <p className="text-xs mb-3 hover:border-b hover:border-b-white">
              <a href="#">Koovs Sport</a>
            </p>
          </Link>
        </div>
        <div>
          <img
            className="h-80 w-80 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63623b8e6077e660dcb3f20d/webp/koovs-sport-menu-banner2-01-524x772.jpg"
            alt="image"
          />
          <button
            type="button"
            className="absolute top-[40%] right-[10%] rotate-90 text-white text-xs hover:bg-purple-600 border px-10 rounded-full py-2 border-purple-500"
          >
            New In
          </button>
        </div>
      </div>
    </div>
  );
}
