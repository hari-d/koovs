import { AdjustmentsHorizontalIcon, ArrowDownIcon } from '@heroicons/react/24/Outline';
import React from 'react';
import { AiOutlineHolder } from 'react-icons/ai';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import TshirtIcon from './TshirtIcon';

const data = [
  {
    id: 1,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 2,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 3,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 4,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 5,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 6,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 7,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
  {
    id: 8,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,400',
  },
];

export default function Tshirt() {
  const renderData = (item) => {
    const {
      id, image, heading, subHeading, price,
    } = item;
    return (
      <div className="my-1" key={id}>
        <img
          className=""
          src={image}
          alt={heading}
        />
        <h3 className="text-gray-500 text-center cursor-pointer">{heading}</h3>
        <h3 className="text-center cursor-pointer">{subHeading}</h3>
        <h4 className="text-center cursor-pointer">
          ₹
          {price}
        </h4>
      </div>
    );
  };

  return (
    <div>
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">T-SHIRT</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <TshirtIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <TshirtIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer">showing 80 styles</p>
          <TshirtIcon Icon={BiDotsVertical} title="2" />
          <TshirtIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-20">
        {data.map((item) => (
          renderData(item)
        ))}
        <div className="my-1">
          <img
            className=""
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp"
            alt="image"
          />
          <h3 className="text-gray-500 text-center">THE COUTURE CLUB</h3>
          <h3 className="text-center">MULTI LOGO GRAPHIC T-SHIRT BLACK</h3>
          <h4 className="text-center">₹3,490</h4>
        </div>
        <div className="my-1">
          <img
            className=""
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664def/webp/ctre3dmultilogot-shirt-white2_800x-jpg-2-600x800.webp"
            alt="image"
          />
          <h3 className="text-gray-500 text-center">THE COUTURE CLUB</h3>
          <h3 className="text-center">CTRE 3D MULTILOGO T-SHIRT</h3>
          <h4 className="text-center">₹2,990</h4>
        </div>
        <div className="my-1">
          <img
            className=""
            src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f6603e476422ef14666140/webp/varsityprintrelaxedfitt-shirt-acidwash5_3928e3da-5ebb-4fcb-b777-d0c6361897d2_800x-jpg-3-600x800.webp"
            alt="image"
          />
          <h3 className="text-gray-500 text-center">THE COUTURE CLUB</h3>
          <h3 className="text-center">VARSITY PRINT RELAXED T-SHIRT-ACID WASH</h3>
          <h4 className="text-center">₹2,990</h4>
        </div>
        <div className="my-1">
          <img
            className=""
            src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e646a31ee1e3d717e/webp/shortsleevelightweightsweatshirt-charcoal2_800x-jpg-2-600x800.webp"
            alt="image"
          />
          <h3 className="text-gray-500 text-center">THE COUTURE CLUB</h3>
          <h3 className="text-center">HEAVYWEIGHT TWINSET TSHIRT-CHARCOAL</h3>
          <h4 className="text-center">₹3,290</h4>
        </div>
      </div>
    </div>
  );
}
