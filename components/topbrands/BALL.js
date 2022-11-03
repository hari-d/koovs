import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import BALLIcon from './BALLIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6307539ab641068c1e891149/webp/koovs-2_0426-37-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6307539ab2e9bc8cdfab4b85/webp/koovs-2_0388-34-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH FLOCK SWEAT SHORTS-SKY BLUE',
    price: '3,290',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6308a3ff2347ca150b227966/webp/46-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/630752dfb2e9bc8cdfab2b83/webp/koovs-2_0281-16-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH FLOCK TEE-OFF WHITE',
    price: '2,490',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6308a39e4c49e014a1a72924/webp/5-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/63075557b7e1b2f44410353b/webp/koovs-2_1193-137-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH FLOCK TEE-BLACK',
    price: '2,490',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6308a3634c49e014a1a72237/webp/44-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/630757cd33ed10d152590028/webp/koovs-2_0350-26-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: '',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH CIRCLE TEE-WOOD BROWN',
    price: '2,990',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6308a2b909899c14ad7bbeeb/webp/zoomed-top-catalogue-template-koovs-copy-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63089cbfed1d4b144730d05a/webp/koovs-2_3587-518-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH CIRCLE TEE-ROSE',
    price: '2,990',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6307582b4c7859d1ae5507bc/webp/koovs-2_0562-50-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6307582b165f31d1ba22a3e8/webp/koovs-2_0568-53-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'RIMINI SWEAT PANTS-BLACK',
    price: '3,490',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/630753fdcc6eb98cab514556/webp/koovs-2_3559-514-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/630753fccc6eb98cab514553/webp/koovs-2_3552-512-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'CPH FLOCK SWEAT PANT-BLACK',
    price: '3,990',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f696fa254356c26467cda0/webp/690-1-2221962_black-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f696fa78b889c2a09ba970/webp/690-1-2221962_black_1-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'WHAM FLOCK CREW NECK-BLACK',
    price: '3,490',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/630a05b7f99789adb3374cff/webp/73-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/630754ce4520cff411bd879b/webp/koovs-2_3559-514-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'SUMMER FLOCK CREW NECK-SKY BLUE',
    price: '3,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/630a05e9f99789adb33774bd/webp/4-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/6307550c4520cff411bd8e9f/webp/koovs-2_1292-151-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'BALL',
    subHeading: 'SUMMER CHAIN CREW NECK-BROWN',
    price: '3,990',
  },
];

export default function BALL() {
  const renderData = (item) => {
    const {
      id, icon, image1, image2, para1, para2, para3, para4, para5, para6, heading, subHeading,
      price,
    } = item;
    return (
      <div className="group col-span-6  md:col-span-3 mx-2" key={id}>

        <div className="">
          <div className="flex justify-end pr-6 relative top-8">
            {icon}
          </div>

          <img
            src={image1}
            alt="Image notfound"
            onMouseOver={(e) => e.currentTarget.src = image2}
            onMouseOut={(e) => e.currentTarget.src = image1}
            className=" mx-auto my-auto transition ease-in-out duration-700
            w-[200px] h-[200px]  lg:w-[300px] lg:h-[400px]"
          />

          <div className="opacity-0 group-hover:opacity-100  bg-gray-50 relative bottom-4 text-gray-800">
            <div className="flex justify-between">
              <div>
                <p className="cursor-pointer">{para1}</p>
              </div>
              <p className="cursor-pointer font-bold text-xs">{para2}</p>
              <p className="cursor-pointer font-bold text-xs">{para3}</p>
              <p className="cursor-pointer font-bold text-xs">{para4}</p>
            </div>
          </div>
        </div>

        <div className="py-1 cursor-pointer">
          <h3 className="text-gray-500 text-center cursor-pointer text-sm pl-10">
            {heading}
          </h3>
          <h3 className="text-center cursor-pointer text-sm pl-12">
            {subHeading}
          </h3>
          <h4 className="text-center cursor-pointer text-sm pl-10">
            ₹
            {price}
          </h4>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">BALL</h1>
      </div>
      <div className="border-b-2 border-gray-300 mx-14 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <BALLIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <BALLIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>11</b>
            {' '}
            styles
          </p>
          <BALLIcon Icon={BiDotsVertical} title="2" />
          <BALLIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12 px-10">
        {data.map((item) => (
          renderData(item)
        ))}
      </div>
    </div>
  );
}
