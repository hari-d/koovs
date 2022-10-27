import { AdjustmentsHorizontalIcon, ArrowDownIcon } from '@heroicons/react/24/Outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import NikeIcon from './NikeIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6333d94dd684e7d43cfbcbe7/webp/61eusw5v3ul-_uy695_-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'W BLAZER MID 77 SE',
    price: '9,295',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f105cdb29f11fe23e8805d/webp/example-600x800-for-product-catalogue-05-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'COURT ROYALE',
    price: '4,495',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f1035adf6e923c3966ecbf/webp/example-600x800-for-product-catalogue-06-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'BENASSI JDI',
    price: '2,495',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f0fcbdff73023bb7eab405/webp/example-600x800-for-product-catalogue-02-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'VICTORI ONE SLIDE PRINT',
    price: '2,595',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f0f238df6e923c39640e30/webp/example-600x800-for-product-catalogue-02-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'WAFFLE ONE CRATER',
    price: '9,295',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f0ede3df6e923c39638252/webp/example-600x800-for-product-catalogue-03-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'COURT LEGACY SUEDE',
    price: '5,995',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f10314df6e923c3966e62e/webp/drive-download-20220801t061343z-001-03-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'KYRIE FLYTRAP III EP',
    price: '6,495',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f0f3071a5d403c7df87d85/webp/example-600x800-for-product-catalogue-02-600x800.jpg',
    heading: 'NIKE',
    subHeading: 'W BLAZER MID 77 SE',
    price: '9,295',
  },
];
export default function Nike() {
  const renderData = (item) => {
    const {
      id, icon, image, heading, subHeading, price,
    } = item;
    return (
      // <div className="my-1" key={id}>
      //   <img
      //     className=""
      //     src={image}
      //     alt={heading}
      //   />
      //   <h3 className="text-gray-500 text-center">{heading}</h3>
      //   <h3 className="text-center">{subHeading}</h3>
      //   <h4 className="text-center">
      //     ₹
      //     {price}
      //   </h4>
      //   {icon}
      // </div>
      <div className=" col-span-3 py-10" key={id}>
        <div className="">
          <div className="flex justify-end pr-10 relative top-6">
            {icon}
          </div>
          <img
            className="h-[300px] w-[300px]"
            src={image}
            alt={heading}
          />
        </div>
        <h3 className="text-gray-500 text-center cursor-pointer text-sm">{heading}</h3>
        <h3 className="text-center cursor-pointer text-sm">{subHeading}</h3>
        <h4 className="text-center cursor-pointer text-sm">
          ₹
          { price}
        </h4>
      </div>
    );
  };
  return (
    <div>
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">NIKE</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <NikeIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <NikeIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>8</b>
            {' '}
            styles
          </p>
          <NikeIcon Icon={BiDotsVertical} title="2" />
          <NikeIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12 px-10">
        {data.map((item) => (
          renderData(item)
        ))}
        {/* <div className="col-span-3 py-10">
          <div className="">
            <div className="flex justify-end pr-10">
             <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />
            </div>
            <img
              className="h-[300px] w-[300px]"
              src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f0f3071a5d403c7df87d85/webp/example-600x800-for-product-catalogue-02-600x800.jpg"
              alt="image"
            />
          </div>
          <h3 className="text-gray-500 text-center cursor-pointer text-sm">NIKE</h3>
          <h3 className="text-center cursor-pointer text-sm">AIR MAX EXCEE</h3>
          <h4 className="text-center cursor-pointer text-sm">₹8,195</h4>
        </div> */}
      </div>
    </div>
  );
}
