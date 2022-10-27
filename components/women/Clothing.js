import { AdjustmentsHorizontalIcon, ArrowDownIcon } from '@heroicons/react/24/Outline';
import React, { useState } from 'react';
import ClothinCardItem from './ClothinCardItem';
import ClothingIcon from './ClothingIcon';

export default function Clothing() {
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="flex space-x-4 flex-row-reverse">
        <ClothingIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
        <ClothingIcon Icon={ArrowDownIcon} title="Sort By" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-20">
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/543babe9-f8b7-4356-85d5-9833c5ede24a/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png',
              title: 'Nike Sportswear Phoenix Fleece',
              price: '3 795',
              description: 'Womens Over-Oversized Crew-Neck',
              description1: 'Sweatshirt',
              description2: '4 Colours',
              justIn: 'just In',
            },
            {
              id: 2,
              image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cee61d9-f639-4c9e-bad3-9a957c015b23/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png',
              title: ' ',
              price: '3 795',
              description: ' ',
              justIn: 'just In',
            },
            {
              id: 3,
              image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3db42c20-af91-49ea-9b91-da9c2942fec0/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png',
              title: ' ',
              price: '3 795',
              description: ' ',
              justIn: '',
            },
            {
              id: 4,
              image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f67c3da0-3a6f-46bf-a4a3-807650b818bd/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png',
              title: ' ',
              price: '3 795',
              description: ' ',
              justIn: '',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c53fe803-fb33-4790-ad2e-f1c15f5f1c8d/acg-dri-fit-adv-goat-rocks-sleeveless-tank-1PBlTS.png',
              title: 'Nike ACG Dri-FIT ADV Goat Rocks',
              price: '2 495',
              description: 'Womens Sleeveless Tank',
              description1: '2 Colours',
              justIn: 'Sustainable Materials',
            },
            {
              id: 2,
              image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7fdbfe67-9d17-4823-a6a4-ad1381285a5e/acg-dri-fit-adv-goat-rocks-sleeveless-tank-1PBlTS.png',
              title: ' ',
              price: '2 495',
              description: ' ',
              justIn: 'Sustainable Materials',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fbdf7eb-0163-4ce5-8423-20b1f1b2b09c/sportswear-phoenix-fleece-high-waisted-oversized-tracksuit-bottoms-xBczt0.png',
              title: 'Nike Sportswear Phoenix Fleece',
              price: '3 695',
              description: 'Womens High-Waisted Oversized Tracksuit',
              description1: 'Bottoms',
              description2: '3 Colours',
              justIn: 'Member Access',
            },
            {
              id: 2,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3e7db75-c2e7-448e-9bfe-90193cc47052/sportswear-phoenix-fleece-high-waisted-oversized-tracksuit-bottoms-xBczt0.png',
              title: ' ',
              price: '3 695',
              description: ' ',
              justIn: '',
            },
            {
              id: 3,
              image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/871092f3-ff07-433e-b833-ecee83c6873a/sportswear-phoenix-fleece-high-waisted-oversized-tracksuit-bottoms-xBczt0.png',
              title: '',
              price: '3 695',
              description: '',
              justIn: 'Member Access',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0cc29ac-e80f-4214-a52b-7203b3bba047/sportswear-club-fleece-mid-rise-shorts-MWZjWc.png',
              title: 'Nike Sportswear Club Fleece',
              price: '2 595',
              description: 'Womens Mid-Rise Shorts',
              description1: '2 Colours',
              justIn: 'Just In',
            },
            {
              id: 2,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a920a6f9-b23f-479e-96d0-4f95009791cc/sportswear-club-fleece-mid-rise-shorts-MWZjWc.png',
              title: ' ',
              price: '2 595',
              description: ' ',
              justIn: '',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24b1ec31-6de5-48cc-8adf-9b11f33d6613/sportswear-club-fleece-oversized-crop-graphic-hoodie-dBh3mq.png',
              title: 'Nike Sportswear Club Fleece',
              price: '3 495',
              description: 'Womens Oversized Crop Graphic Hoodie',
              description1: '1 Colour',
              justIn: 'Just In',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35106472-f83f-45b5-84c2-a6f5e09582f6/sportswear-phoenix-fleece-over-oversized-pullover-hoodie-s4mSXr.png',
              title: 'Nike Sportswear Phoenix Fleece',
              price: '3 995',
              description: 'Womens Over-Oversized pullover Hoodie',
              description1: '2 Colours',
              justIn: 'Just In',
            },
            {
              id: 2,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82cc9f81-52d9-4e27-ba71-8ec552bae8be/sportswear-phoenix-fleece-over-oversized-pullover-hoodie-s4mSXr.png',
              title: ' ',
              price: '3 995',
              description: ' ',
              justIn: 'Just In',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/15f99715-45f1-43ca-829f-d55b70bc08ed/one-graphic-long-sleeve-top-7lSx7q.png',
              title: 'Nike Therma-FIT One',
              price: '3 595',
              description: 'Womens Graphic Long-Sleeve Top',
              description1: '1 Colour',
              justIn: 'Just In',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9ec0463a-d493-447c-9995-720dbb049c52/air-high-waisted-leggings-Cllfzw.png',
              title: 'Nike Air',
              price: '2 895',
              description: 'Womens High-Waisted Leggings',
              description1: '1 Colour',
              justIn: 'Just In',
            },
          ]}
        />
        <ClothinCardItem
          items={[
            {
              id: 1,
              image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3a28130-90c9-45ce-9d49-1412cf5f0739/air-all-over-print-long-sleeve-top-4r5Dt3.png',
              title: 'Nike Air',
              price: '3 095',
              description: 'Womens All-Over Print Long-Sleeve Top',
              description1: '1 Colour',
              justIn: 'Just In',
            },
          ]}
        />
      </div>
    </div>
  );
}
