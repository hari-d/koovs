import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import KoovsSportIcon from './KoovsSportIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/630486b8ee5cca24fe1c01af/webp/koovs-15july221076-142__close-up-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/630486d8ee5cca24fe1c0538/webp/vjn00059-1-362-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Rust All Time Seamless Bra',
    price: '1,290',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6303661ac64f920b562ae8f3/webp/koovs-15july222541-310__close-up-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/630365ecc64f920b562ae632/webp/vjn00332-488-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Caramel Ribbed Full Sleeve Seamless Top',
    price: '1,790',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6303728984b25a6cc9c1422d/webp/koovs-15july222245-275-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/630371a984b25a6cc9c12fe6/webp/vjn00243-7-453-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Grey Court Seamless Legging',
    price: '1,990',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63036fcadbfcd10adb0d0a58/webp/koovs-15july221324-171-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63036f0fc64f920b562cc3b5/webp/vjn00162-1-406-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Powder Court Seamless Shorts',
    price: '1,690',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/630356e08aa1f1532b461299/webp/koovs-15july220529-73__close-up-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6303569a8aa1f1532b4608b5/webp/vjn00023-344-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Blue Seamless Sports Bra',
    price: '1,290',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63036967dbfcd10adb0c6ae6/webp/koovs-15july221657-205__close-up-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63036957dbfcd10adb0c6934/webp/vjn00338-7-490-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Sage Ribbed Full Sleeve Seamless Top',
    price: '1,790',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63038b289a435dd4f7a48f29/webp/koovs-15july220447-60-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63038aa39a435dd4f7a4844d/webp/vjn09983-320-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Tea Move Free Legging',
    price: '1,990',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63038817e8bf89d5260954c2/webp/koovs-15july221789-216__close-up-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63038817b952f4d478e60f3b/webp/koovs-15july221793-217-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Grey Move Free Crop Zip-Up',
    price: '2,290',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/630361ea84b25a6cc9bf7203/webp/koovs-15july222541-310-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/6303617c84b25a6cc9bf69f7/webp/vjn00210-437-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Caramel Ribbed Seamless Shorts',
    price: '1,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63037a32ce68356d637c76a1/webp/koovs-15july221453-184__close-up-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63037a4c46d30d6ceed3b79c/webp/vjn00101-1-382-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Caramel Seamless Crop Tank Top',
    price: '1,490',
  },
  {
    id: 11,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/630387629a435dd4f7a44649/webp/koovs-15july220443-59__close-up-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63038762e8bf89d526094524/webp/koovs-15july220443-59-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Tea Nimbus Bra',
    price: '1,490',
  },
  {
    id: 12,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63037c68b952f4d478e50120/webp/koovs-15july220971-131-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63037c689a435dd4f7a3455a/webp/koovs-15july220971-131__close-up-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Sunrise Seamless Bodysuit',
    price: '2,290',
  },
  {
    id: 13,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/63047a5a665648bc6621dfc2/webp/koovs-15july221953-240__close-up-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/63047a400ceef0bcbfed9c6f/webp/vjn00110-8-384-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Grey Warm Up Seamless Crop Top',
    price: '1,690',
  },
  {
    id: 14,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/6303707b46d30d6ceed2d4a2/webp/koovs-15july220900-123-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/63037052ce68356d637b91cb/webp/vjn00169-411-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Crepe Court Seamless Shorts',
    price: '1,690',
  },
  {
    id: 15,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/630330e25771fb96f721f3ac/webp/koovs-15july221277-165-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/63032e675771fb96f721b30d/webp/vjn00180-3-416-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Beige High Rise Shorts',
    price: '1,690',
  },
  {
    id: 16,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f758fd089e45a6a8ae858d/webp/zoomed-top-catalogue-template-koovs-copy-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f758fd4b0f0ea710f5ab28/webp/flat-top-template-koovs-copy-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Minnesota Seamless Shorts',
    price: '1,790',
  },
  {
    id: 17,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63048bc40fde7b5dc41d3b69/webp/koovs-15july222335-287__close-up-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63048b5a0fde7b5dc41d29ee/webp/vjn00124-5-390-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Black Sunday Seamless Crop Top',
    price: '1,290',
  },
  {
    id: 18,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63033bcd379dea33548a80d7/webp/koovs-15july221408-180__close-up-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63033b6cb7df41331cecafee/webp/vjn00087-1-375-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Beige Seamless Sports Bra',
    price: '1,290',
  },
  {
    id: 19,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63038991e8bf89d526096e6e/webp/koovs-15july221908-233__close-up-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/6303896a4ff885d4a1106c0f/webp/vjn00045-8-354-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Grey Move Free Bra',
    price: '1,490',
  },
  {
    id: 20,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63047db12f1e797062cff00c/webp/koovs-15july221376-175-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/63047d8b3a45dd6ff6c4148e/webp/vjn00233-3-450-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'S',
    para3: 'M',
    para4: 'L',
    heading: 'KOOVS SPORT',
    subHeading: 'Black All Time Seamless Legging',
    price: '1,990',
  },
];

export default function KoovsSport() {
  const renderData = (item) => {
    const {
      id, icon, image1, image2, para1, para2, para3, para4, heading,
      subHeading, price,
    } = item;
    return (

      <div className="group col-span-3" key={id}>

        <div className="">
          <div className="flex justify-end pr-6 relative top-8">
            {icon}
          </div>

          <img
            src={image1}
            alt="Image notfound"
            onMouseOver={(e) => e.currentTarget.src = image2}
            onMouseOut={(e) => e.currentTarget.src = image1}
            className=" mx-auto my-auto transition ease-in-out duration-700 w-[300px]
              h-[300px]"
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
    <div className="pl-12 pr-12">
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-semibold text-center mx-auto">KOOVS SPORT</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <KoovsSportIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <KoovsSportIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>78</b>
            {' '}
            styles
          </p>
          <KoovsSportIcon Icon={BiDotsVertical} title="2" />
          <KoovsSportIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        {data.map((item) => (
          renderData(item)
        ))}
      </div>
    </div>
  );
}
