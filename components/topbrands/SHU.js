import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import SHUIcon from './SHUIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62eba78f81ea7b4c91aab0c4/webp/shu_277768-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62eba78f4cbf244d4ec6b6c5/webp/shu_29-4-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: '',
    para5: 'ONE SIZE',
    para6: '',
    heading: 'SHU',
    subHeading: 'Panama Hat - Brown',
    price: '1,990',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62eba748abfb1ee2f3ec2887/webp/shu_288-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62eba748abfb1ee2f3ec2887/webp/shu_288-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: '',
    para5: 'ONE SIZE',
    para6: '',
    heading: 'SHU',
    subHeading: 'Panama Hat - Black',
    price: '1,990',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb3d5fa38365361f7b3cd/webp/shu_product-110-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb3d59f846352b4361d33/webp/shu_30-6-211743-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: '',
    para5: '',
    para6: '',
    heading: 'SHU',
    subHeading: 'Belt Bag - Cream',
    price: '2,990',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb3a1fa38365361f7aef3/webp/shu_product-110-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb3a19f846352b436177e/webp/-4935-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: '',
    para5: '',
    para6: '',
    heading: 'SHU',
    subHeading: 'Belt Bag - Brown',
    price: '2,990',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb3609f846352b4360fb7/webp/shu_product-110-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb33bfa38365361f7a191/webp/-4740-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: '',
    para5: '',
    para6: '',
    heading: 'SHU',
    subHeading: 'Belt Bag - Black',
    price: '2,990',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb2ba480a97531a985aff/webp/102-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb2ba9f846352b435fdb0/webp/shu_18-6-211072-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: '',
    heading: 'SHU',
    subHeading: 'Ripstop Poncho - Black',
    price: '7,790',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f2310624480329ed1769fc/webp/shu_30-6-212301-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f2310624480329ed1769ff/webp/shu_30-6-212341-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Warm Shirt - Grey',
    price: '4,990',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb1aa480a97531a9839e0/webp/03-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb1aa480a97531a9839e0/webp/03-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Warm Shirt - Brown',
    price: '4,990',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb1d6480a97531a983f25/webp/01-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebb1d6480a97531a983f25/webp/01-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Warm Shirt - Black',
    price: '4,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebae8d480a97531a97e647/webp/-5264-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebae8d480a97531a97e644/webp/-5255-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Ripstop Trench Coat - Cream',
    price: '7,990',
  },
  {
    id: 11,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62ebac4e480a97531a97b337/webp/shu_18-6-211083-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebac4e6fb376524ba6e476/webp/9065-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Ripstop Trench Coat - Black',
    price: '7,990',
  },
  {
    id: 12,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaca7480a97531a97bbd5/webp/-5292-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaca76fb376524ba6ecb7/webp/-5289-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Ripstop Trench Coat - Brown',
    price: '7,990',
  },
  {
    id: 13,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaaf09f846352b433faed/webp/shu_30-6-211718-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaaf09f846352b433faea/webp/shu_30-6-211685-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Ripstop Anorak - Peach',
    price: '6,990',
  },
  {
    id: 14,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaa146fb376524ba6b92e/webp/shu_30-6-211269-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62ebaaf09f846352b433faea/webp/shu_30-6-211685-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'SHU',
    subHeading: 'Ripstop Anorak - Black',
    price: '6,990',
  },
];
export default function SHU() {
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
        <h1 className="text-2xl font-bold text-center mx-auto">SHU</h1>
      </div>
      <div className="border-b-2 border-gray-300 mx-14 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <SHUIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <SHUIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>15</b>
            {' '}
            styles
          </p>
          <SHUIcon Icon={BiDotsVertical} title="2" />
          <SHUIcon Icon={BiDotsHorizontal} title="4" />
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
