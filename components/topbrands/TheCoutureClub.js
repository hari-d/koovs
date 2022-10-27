import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import TheCoutureClubIcon from './TheCoutureClubIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664def/webp/ctre3dmultilogot-shirt-white2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664dec/webp/ctre3dmultilogot-shirt-white10_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'CTRE 3D MULTI LOGO T-SHIRT',
    price: '2,990',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f19f4010bee7a691fff/webp/dropcrotchlightweightshort-charcoal2_800x-jpg-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f193ba2cdeee60a14f6/webp/dropcrotchlightweightshort-charcoal10_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'DROP CROTCH LIGHTWEIGHT SHORT - CHARCOAL',
    price: '3,290',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65fd1f4010bee7a693361/webp/racerappliquebadgedgraphichoodie-black1_800x-jpg-2-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65fd1f4010bee7a69335e/webp/racerappliquebadgedgraphichoodie-black3_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'WORLD SERIES APPLIQUE BADGED HOODIE - BLACK',
    price: '5,990',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f6603e476422ef14666140/webp/varsityprintrelaxedfitt-shirt-acidwash5_3928e3da-5ebb-4fcb-b777-d0c6361897d2_800x-jpg-3-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f6603ef4010bee7a693c29/webp/varsityprintrelaxedfitt-shirt-acidwash7_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'VARSITY PRINT RELAXED T-SHIRT - ACID WASH',
    price: '3,990',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e646a31ee1e3d717e/webp/shortsleevelightweightsweatshirt-charcoal2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e3ba2cdeee60a0dae/webp/shortsleevelightweightsweatshirt-charcoal3_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'HEAVYWEIGHT TWINSET TSHIRT - CHARCOAL',
    price: '3,290',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f663fb3ba2cdeee60a874e/webp/23343f2cfde04c1c98a618a5b279639a-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f663fb476422ef1466b237/webp/915ce8c235ae4933a31a35e6f0662227-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: '',
    heading: 'THE COUTURE CLUB',
    subHeading: 'DISTRESS DETAIL SPADE PRINT HOODIE - OFFWHITE',
    price: '4,990',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fce0874b5dcf78432bbbd3/webp/shortsleevelightweightsweatshirt-stone_800x-jpg-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fce0874b5dcf78432bbbcc/webp/shortsleevelightweightsweatshirt-stone5_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'M',
    para4: 'L',
    para5: 'XL',
    para6: 'XXL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'HEAVYWEIGHT TWINSET T-SHIRT - STONE',
    price: '3,290',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f659413ba2cdeee6097a0f/webp/couturevarsityswimshortwithzips-white1_800x-jpg-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f65940476422ef1465851e/webp/tccm20262926_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'VARSITY SWIM SHORT WITH ZIPS - WHITE',
    price: '2,990',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f659d6646a31ee1e3cf06f/webp/spadeappliqueredvarsityjacket-red1_800x-jpg-2-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f659d6f4010bee7a689763/webp/spadeappliqueredvarsityjacket-red7_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'SPADE APPLIQUE RED VARSITY JACKET - RED',
    price: '6,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f660f03ba2cdeee60a4300/webp/tccm20500029_800x-jpg-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f660f0f4010bee7a694d6d/webp/photographicregularfitt-shirt-black8_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'PHOTO GRAPHIC REGULAR FIT T-SHIRT - BLACK',
    price: '2,990',
  },
  {
    id: 11,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f66177f4010bee7a6958e6/webp/photographicregularfitt-shirt-white2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f66178476422ef14667d34/webp/photographicregularfitt-shirt-white1_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'PHOTO GRAPHIC REGULAR FIT T-SHIRT - WHITE',
    price: '2,990',
  },
  {
    id: 12,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f67d378b2e63581fd481c3/webp/cactusprintedpuffsleevehoodie-offwhite2_800x-jpg-600x800.webp',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f67d378b2e63581fd481c0/webp/cactusprintedpuffsleevehoodie-offwhite5_800x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'CACTUS PRINTED PUFF SLEEVE HOODIE - OFF WHITE',
    price: '4,490',
  },
  {
    id: 13,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63076572b7e1b2f44412442c/webp/17-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/6307658ab7e1b2f444124729/webp/koovs-2_2346-304-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: '',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'SIGNATURE REFLECTIVE REGULAR HOODIE',
    price: '3,290',
  },
  {
    id: 14,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63466c5f06697513a981600a/webp/koovs-2_2052-258-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63466c5f94259113879eaac2/webp/koovs-2_2051-257-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'SIGNATURE SEASON SLIM JOGGERS',
    price: '2,290',
  },
  {
    id: 15,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fbc81ea19fb6bee5b6300e/webp/copy-of-koovs-2_1757-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/6304a60435ddd6be8863ea0c/webp/koovs-2_1760-218-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'BADGED LOGO BOYFRIEND JOGGERS',
    price: '1,990',
  },
  {
    id: 16,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63087748a21d1703ec8057f8/webp/23-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63087757a21d1703ec8059d4/webp/koovs-2_1902-238-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'SIGNATURE SEASON CROPPED VOLUME HOODIE',
    price: '3,090',
  },
];

export default function TheCoutureClub() {
  const renderData = (item) => {
    const {
      id, icon, image1, image2, para1, para2, para3, para4, para5, para6, heading, subHeading,
      price,
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

          <div className="opacity-0 group-hover:opacity-100 bg-gray-50 relative bottom-4 text-gray-800">
            <div className="flex justify-between">
              <div>
                <p className="cursor-pointer">{para1}</p>
              </div>
              <p className="cursor-pointer font-bold text-xs">{para2}</p>
              <p className="cursor-pointer font-bold text-xs">{para3}</p>
              <p className="cursor-pointer font-bold text-xs">{para4}</p>
              <p className="cursor-pointer font-bold text-xs">{para5}</p>
              <p className="cursor-pointer font-bold text-xs">{para6}</p>
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
    <div className="pl-12 pr-12 ">
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-semibold text-center mx-auto">THE COUTURE CLUB</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <TheCoutureClubIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <TheCoutureClubIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>74</b>
            {' '}
            styles
          </p>
          <TheCoutureClubIcon Icon={BiDotsVertical} title="2" />
          <TheCoutureClubIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        {data.map((item) => (
          renderData(item)
        ))}
        {/* <div className="col-span-3 ">

          <div className="">
            <div className="flex justify-end pr-6 relative top-8">
              <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />
            </div>
            <img
              src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp"
              alt="Image notfound"
              onMouseOver={(e) => e.currentTarget.src = 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2c/webp/multilogographict-shirt-black8_800x-jpg-2-600x800.webp'}
              onMouseOut={(e) => e.currentTarget.src = 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp'}
              className=" mx-auto my-auto transition ease-in-out duration-700 w-[300px]
              h-[300px] "
            />
          </div>
        </div> */}
      </div>
      {/* <h3 className="text-gray-500 text-center cursor-pointer text-sm pl-10">
        THE COUTURE CLUB
      </h3>
      <h3 className="text-center cursor-pointer text-sm pl-12">
        MULTI LOGO GRAPHIC T-SHIRT - BLACK
      </h3>
      <h4 className="text-center cursor-pointer text-sm pl-10">₹3,490</h4> */}
    </div>

  );
}
