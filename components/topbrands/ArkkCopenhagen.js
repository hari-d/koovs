import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon }
  from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import ArkkCopenhagenIcon from './ArkkCopenhagenIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f21b5cfc49017f62212f04/webp/example-600x800-for-product-catalogue-09-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Oserra Mesh S-SP - Marshamallow Velled Rose',
    price: '10,990',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f21caab6f7867f6188425d/webp/example-600x800-for-product-catalogue-09-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Oserra Mesh S-SP - White Wind Grey',
    price: '10,990',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/630325d53ece83ca7f388e22/webp/raven-mesh-white-gum-01-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Raven Mesh PET S-E15 - White Gum',
    price: '9,990',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/630324eb3ece83ca7f38758c/webp/raven-mesh-grey-01-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Raven Mesh PET S-E15 - Grey White',
    price: '9,990',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f21ac64324867ed00f2e26/webp/example-600x800-for-product-catalogue-03-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Oserra Mesh S-SP - Marshamallow Paradise Green',
    price: '10,990',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f2154b3297437fce0a7a8d/webp/example-600x800-for-product-catalogue-01-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Forthline FG PET Vulkn Vibram',
    price: '13,990',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f21481b6f7867f61877223/webp/example-600x800-for-product-catalogue-06-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Cruisr Mesh Vulkn Vibram - Grey Peach Cobber',
    price: '14,990',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f213e1731a4e9a3ec007d3/webp/example-600x800-for-product-catalogue-07-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Cruisr Mesh Vulkn Vibram - White Peach Cobber',
    price: '14,990',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f21187fc49017f6220348b/webp/example-600x800-for-product-catalogue-07-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Raven mesh PET S-E15 - Black White',
    price: '9,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f211053297437fce0a0612/webp/example-600x800-for-product-catalogue-07-600x800.jpg',
    heading: 'ARKK COPENHAGEN',
    subHeading: 'Visuklas leather S-C18',
    price: '9,990',
  },
];
export default function ArkkCopenhagen() {
  const renderData = (item) => {
    const {
      id, icon, image, heading, subHeading, price,
    } = item;
    return (
      <div className=" col-span-3 py-10"  key={id}>
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
        <h1 className="text-2xl font-bold text-center mx-auto">ARKK COPENHAGEN</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <ArkkCopenhagenIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <ArkkCopenhagenIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">showing <b>10</b> styles</p>
          <ArkkCopenhagenIcon Icon={BiDotsVertical} title="2" />
          <ArkkCopenhagenIcon Icon={BiDotsHorizontal} title="4" />
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
