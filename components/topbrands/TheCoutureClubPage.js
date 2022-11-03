import { BookmarkIcon, ExclamationCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

export default function TheCoutureClubPage() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-2 my-2">
          <div className="col-span-8">
            <div className="grid grid-cols-12 gap-2 ml-2">
              <div className="col-span-6 flex justify-center">
                <Image
                  // className="px-4"
                  width="400"
                  height="500"
                  src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp"
                />
              </div>
              <div className="col-span-6 flex justify-center">
                <Image
                  // className="px-4"
                  width="400"
                  height="500"
                  src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2c/webp/multilogographict-shirt-black8_800x-jpg-2-600x800.webp"
                />
              </div>
              <div className="col-span-6  flex justify-center">
                <Image
                  // className="px-4"
                  width="400"
                  height="500"
                  src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209f4010bee7a696457/webp/multilogographict-shirt-black5_800x-jpg-600x800.webp"
                />
              </div>
              <div className="col-span-6  flex justify-center">
                <Image
                  // className="px-4"
                  width="400"
                  height="500"
                  src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688ef/webp/multilogographict-shirt-black3_800x-jpg-2-600x800.webp"
                />
              </div>
              <div className="col-span-6  flex justify-center">
                <Image
                  // className="px-4"
                  width="400"
                  height="500"
                  src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2f/webp/multilogographict-shirt-black2_800x-jpg-600x800.webp"
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="mt-4 pr-10 mr-10">
              <h1 className="text-left ">MULTI LOGO GRAPHIC T-SHIRT - BLACK</h1>
              <h3 className="text-left">₹3,490</h3>
              <div className="border-b border-gray-300 py-4 px-4  pr-10 mr-10" />
              <h1 className="mt-4 pl-4">SIZE</h1>
              <div className="grid md:grid-cols-3 gap-2 lg:grid-cols-5 pl-4 mt-4 space-x-4">
                <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">XS</button>
                <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">S</button>
                <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white">M</button>
                <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white ">L</button>
                <button type="button" className="border px-3 py-1 hover:bg-black hover:text-white ">XL</button>
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
                <button type="button" className="border border-black px-8 lg:px-16 hover:bg-black hover:text-white">Add to Bag</button>
                <BookmarkIcon className="h-5 w-5 cursor-pointer bg-gray-200" />
              </div>
              <div className="pl-4">
                <button type="button" className="border border-black hover:bg-black hover:text-white px-10 mt-1 lg:mt-4 lg:px-20">Buy Now</button>
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
              {/* { <iframe width="440" height="248" src="https://www.youtube.com/embed/m-ugwoEOMvg" title="Apple on iPhones, Chips, Privacy, Working From Home and More | WSJ Tech Live 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />} */}
              <div className="border-b border-gray-500 my-4 " />
            </div>
          </div>
          {/* <div>
        <div className="border-t-2 border-black w-full mt-10" />
        <div className="flex">
          <p className="mt-4 text-sm ml-16">COMPOSITION & CARE</p>
          <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
          <p className="mt-4 text-sm">SHIPPING & RETURNS</p>
          <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
          <p className="mt-4 text-sm">SUSTAINABILITY</p>
          <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
        </div>
        <div className="border-b-2 border-black w-full mt-4 mb-28" />
      </div> */}
        </div>
          <div className="flex justify-between border-t-2 border-black w-screen pb-3 border-b-2 mt-5 mb-5">
            <p className="mt-4 text-sm ml-16">COMPOSITION & CARE</p>
            <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
            <p className="mt-4 text-sm">SHIPPING & RETURNS</p>
            <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
            <p className="mt-4 text-sm">SUSTAINABILITY</p>
            <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black mt-3 mx-16" />
          </div>
      </div>
    </div>
  );
}
