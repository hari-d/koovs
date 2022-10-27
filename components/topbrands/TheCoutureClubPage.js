import { BookmarkIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

export default function TheCoutureClubPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="mt-4 flex flex-wrap space-x-2 ml-12">
          <div>
            <Image
              className="px-4"
              width="400"
              height="500"
              src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp"
            />
          </div>
          <div>
            <Image
              className="px-4"
              width="400"
              height="500"
              src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2c/webp/multilogographict-shirt-black8_800x-jpg-2-600x800.webp"
            />
          </div>
          <div>
            <Image
              className="px-4"
              width="400"
              height="500"
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209f4010bee7a696457/webp/multilogographict-shirt-black5_800x-jpg-600x800.webp"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="mt-4 pr-10 mr-10">
          <h1 className="text-left ">MULTI LOGO GRAPHIC T-SHIRT - BLACK</h1>
          <h3 className="text-left">₹3,490</h3>
          <div className="border-b border-gray-300 py-4 px-4  pr-10 mr-10" />
          <h1 className="mt-4 pl-4">SIZE</h1>
          <div className="flex space-x-4 pl-4 mt-4">
            <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">XS</button>
            <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">S</button>
            <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">M</button>
            <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">L</button>
            <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">XL</button>
          </div>
          <h1 className="font-bold mt-6 pl-4">Product Details:</h1>
          <ul className="list-disc pl-12">
            <li>
              Crew neck
            </li>
            <li>
              Short sleeves
            </li>
            <li>
              Logo print details
            </li>
            <li>
              Oversized fit
            </li>
            <li>
              Jersey: soft and stretchy
            </li>
            <li>
              Fabric Composition: 100% Cotton
            </li>
            <li>
              Colour - Black
            </li>
          </ul>
          <div className="pl-4 flex mt-8">
            <button type="button" className="border border-black px-16 hover:bg-black hover:text-white">Add to Bag</button>
            <BookmarkIcon className="h-5 w-5 cursor-pointer bg-gray-200" />
          </div>
          <div className="pl-4">
            <button type="button" className="border border-black hover:bg-black hover:text-white mt-4 px-20">Buy Now</button>
          </div>
          <div className="flex  py-8 pl-4">
            <p className="text-xs mr-1 cursor-pointer">
              {' '}
              Or 3 interest-free payments of ₹ 1163 with   Zest logo
            </p>
            <img
              className="mr-1 cursor-pointer"
              width="50"
              height="50"
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Zest_logo.png"
              alt="image"
            />
            <ExclamationCircleIcon className="h-5 w-5 rotate-180 cursor-pointer" />
          </div>
          <div className="border-b border-gray-500 my-4 " />
        </div>
      </div>
    </div>
  );
}
