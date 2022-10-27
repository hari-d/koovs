import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import PublicDesireIcon from './PublicDesireIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f630eecb175a141ca1a92a/webp/0080_1e08734d-8c64-42c4-b2b8-a2d78a472a6e_720x-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f630eeeafa54151103005f/webp/0082_f237c4d3-1cb4-467a-a97d-2bbb0b260265_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'SUMMER MEMORIES BLACK PU STRAPPY LACE UP POINTED TOE STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f630b7eafa54151102fb0f/webp/0071_834c3248-45f6-4d07-aef3-d5d273ec9cc2_720x-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f630b7eafa54151102fb09/webp/0074_22d376a2-8e9c-414b-a95a-9e2d6b9c0019_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'SUMMER MEMORIES BEIGE PU STRAPPY LACE UP POINTED TOE STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f63074fd38b114a6889597/webp/0062_d732eb4b-6497-451c-a3f5-6cde8efb9af0_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f63074fd38b114a6889591/webp/0064_7ad825d0-f063-415e-ad7c-0b85a2b35a00_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'SUMMER MEMORIES WHITE PU STRAPPY LACE UP POINTED TOE STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f63022eafa54151102e896/webp/000810copy_7f095114-f1a6-4411-90bb-ae0e6ae4175d_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f63022cb175a141ca19329/webp/000713_b06927dd-035e-40d4-8d4c-f01232f2875b_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'WINTER WIDE FIT OFF WHITE ANKLE CHELSEA BOOTS',
    price: '3,590',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62fccfd38b114a68886d0/webp/walking_19c0f86d-c671-405d-b538-e0a742194a0f_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62fcceafa54151102dfff/webp/back_ff5e9b26-2ed1-4fa1-9699-4d5d15db34a1_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'OTTI ORANGE PU LACE UP STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62f35fd38b114a688769f/webp/walking_573293e9-6746-45f6-8795-6bc53b724afe_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62f352c644814e05da2e0/webp/front_eb012dd3-85e3-457a-81d8-ac7ece5fb674_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'OTTI ECRU PU LACE UP STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62f79eafa54151102d97c/webp/00042_414f5e18-f2c6-4c60-9917-d9286a4eff48_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62f79fd38b114a6887c87/webp/00051_f3aecba8-85c5-4fc1-8467-f3385852f2b4_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'MISHA BLACK SQUARE TOE STRAPPY LACE UP THIN BLOCK HEELS',
    price: '3,590',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62ecaeafa54151102c6f4/webp/771a3537_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62ecacb175a141ca17316/webp/771a3539_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'LAMOUR LILAC PU SQUARE TOE LACE UP HIGH HEELS',
    price: '2,990',
  },
  {
    id: 9,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62e812c644814e05d8ef6/webp/771a3519_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62e812c644814e05d8ef3/webp/771a3521_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'LAMOUR BLACK PU SQUARE TOE LACE UP HIGH HEELS',
    price: '2,990',
  },
  {
    id: 10,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62e33fd38b114a6885c7e/webp/grandecruwalking_720x-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62e332c644814e05d87de/webp/grandecruback_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'GRAND WHITE TOE THONG FRONT SQUARE TOE LACE UP STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 11,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62d6c2c644814e05d737e/webp/farawaygreenwalkig_720x-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62d6cfd38b114a688477b/webp/farawaygreenfront_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '',
    para6: '',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'FAR AWAY LIME GRAIN PU SQUARE TOE KNEE HIGH BOOTS',
    price: '3,990',
  },
  {
    id: 12,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62cffeafa541511029935/webp/771a4334_5869e1a2-cbf9-44b1-93c0-eb9ba5bf965f_720x-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62f62cffeafa541511029932/webp/771a4336_59c0605d-09dc-47b3-84b9-984f7c6163db_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'JUST REALISE WIDE FIT WHITE PU STRAPPY SQUARE TOE MID BLOCK HEELED SANDALS',
    price: '2,490',
  },
  {
    id: 13,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62cab2c644814e05d5db5/webp/9423d8de-71fa-4315-88d4-e94eced7253f_720x-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62cabcb175a141ca1361d/webp/771a4414_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'HOT FUZZ GREEN BORG CUT OUT FLAT SANDALS',
    price: '2,490',
  },
  {
    id: 14,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62c5feafa541511028acc/webp/f2738eac-a89a-40a6-a793-d4d47757b093_720x-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62c5fcb175a141ca1305e/webp/771a4406copy_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'HOT FUZZ BLACK BORG CUT OUT FLAT SANDALS',
    price: '2,490',
  },
  {
    id: 15,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62c192c644814e05d50e8/webp/771a4972_720x-600x800.jpg',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f62c19eafa54151102846b/webp/771a4975_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'HARRIET GREEN CROC SQUARE TOE LACE UP HEELS',
    price: '2,990',
  },
  {
    id: 16,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62bbbfd38b114a6881232/webp/771a3499_4a3b7d44-ce2c-4772-a3c4-5622288b006c_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62bbbcb175a141ca11a8d/webp/771a3501_2df54be2-5e0e-4bff-8689-c821d9365de4_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'HARRIET BLACK CROC SQUARE TOE LACE UP HEELS',
    price: '2,990',
  },
  {
    id: 17,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62b2d2c644814e05d356c/webp/771a4977_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62b2dcb175a141ca10957/webp/771a4978_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '',
    heading: 'PUBLIC DESIRE',
    subHeading: 'HARRIET LILAC CROC SQUARE TOE LACE UP HEELS',
    price: '2,990',
  },
  {
    id: 18,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62ac02c644814e05d2dc0/webp/0014_72d488cd-59b6-4d09-ab36-ed1ce9c4b457_720x-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62ac0fd38b114a687f948/webp/0015_1e1414c1-de45-4e18-a9b1-9545666dab9c_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'COINCIDENCE LILAC PU STRAPPY SQUARE TOE STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 19,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f62a51cb175a141ca0f8d8/webp/0002_b7873a28-bd19-4439-854e-6ef9210bcfe3_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f62a51fd38b114a687ece0/webp/0003_90aa2c42-b7b6-4ec3-be5c-7046e9cbef4d_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'COINCIDENCE GREEN PU STRAPPY SQUARE TOE STILETTO HEELS',
    price: '2,990',
  },
  {
    id: 20,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f6299feafa54151102475f/webp/amiragreenwalking_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f6299feafa541511024757/webp/amiragreenback_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'AMIRA OLIVE GREEN PU LACE UP BLOCK HEELS',
    price: '2,990',
  },
  {
    id: 21,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f626becb175a141ca09b0a/webp/0079_dda98107-a1a4-4cf2-98b8-c945e4415a31_720x-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f626be2c644814e05ca27b/webp/0080_8c6ad658-4fbc-48fc-a1d6-7f3e8c132b8d_720x-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '4',
    para3: '5',
    para4: '6',
    para5: '7',
    para6: '8',
    para7: '9',
    heading: 'PUBLIC DESIRE',
    subHeading: 'BERRY LIGHT GREY CROC SQUARE TOE STRAPPY LACE UP BLOCK HEELS',
    price: '2,990',
  },
];

export default function PublicDesire() {
  const renderData = (item) => {
    const {
      id, icon, image1, image2, para1, para2, para3, para4, para5, para6,
      para7, heading, subHeading,
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

          <div className="opacity-0 group-hover:opacity-100  bg-gray-50 relative bottom-4 text-gray-800">
            <div className="flex justify-between">
              <div>
                <p className="cursor-pointer">{para1}</p>
              </div>
              <p className="cursor-pointer font-bold text-xs">{para2}</p>
              <p className="cursor-pointer font-bold text-xs">{para3}</p>
              <p className="cursor-pointer font-bold text-xs">{para4}</p>
              <p className="cursor-pointer font-bold text-xs">{para5}</p>
              <p className="cursor-pointer font-bold text-xs">{para6}</p>
              <p className="cursor-pointer font-bold text-xs">{para7}</p>
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
        <h1 className="text-2xl font-semibold text-center mx-auto">PUBLIC DESIRE</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <PublicDesireIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <PublicDesireIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>21</b>
            {' '}
            styles
          </p>
          <PublicDesireIcon Icon={BiDotsVertical} title="2" />
          <PublicDesireIcon Icon={BiDotsHorizontal} title="4" />
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
