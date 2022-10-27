import { PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React from 'react';

export default function Body() {
  const router = useRouter();

  return (
    <div>
      <img
        src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fcbfb999473f1621527857/webp/koovs-banner-6-1600x900.png"
        alt="image"
      />
      <div>
        <h1 className="top-4 text-6xl text-center"> Trending Brands </h1>
      </div>
      <div className="grid grid-cols-12 mx-28 my-10 border-b-2 border-yellow-400 pb-10">
        <div className="col-span-4">
          <div className="relative">
            <div className="flex relative justify-end top-12 pr-8 ">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            <img
              className=""
              src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb393673ebbad30b4331d9/webp/shu-page-trending-brand-copy-746x1034.jpg"
              alt="image"
            />
            <button
              onClick={() => router.push('/shu')}
              className=" absolute top-[47%] left-[35%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
              type="button"
            >
              SHU
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="border-black border h-10 mt-6 hover:bg-black
               hover:text-white px-10 py-2"
              onClick={() => router.push('/shu')}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <div className="flex relative justify-end top-12 pr-8 ">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            {/* <div className="relative"> */}
              <img
                src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb365873ebbad30b42e518/webp/arkk-page-trending-brand-copy-746x1034.jpg"
                alt="image"
              />
              <button
                onClick={() => router.push('/arkk-copenhagen')}
                className=" absolute top-[47%] left-[35%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
                type="button"
              >
                ARKK
              </button>
            {/* </div> */}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="border-black border h-10 mt-6 hover:bg-black
               hover:text-white px-10 py-2"
              onClick={() => router.push('/arkk-copenhagen')}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>

        <div className="col-span-4">
          <div className="relative">
            <div className="flex relative justify-end top-12 pr-8 ">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            {/* <div className="relative"> */}
              <img
                src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fb36f7aeec57d409d18c3b/webp/tcc-page-trending-brand-copy-746x1034.jpg"
                alt="image"
              />
              <button
                onClick={() => router.push('/the-couture-club')}
                className=" absolute top-[47%] left-[20%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
                type="button"
              >
                Couture Club
              </button>
            {/* </div> */}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="border-black border h-10 mt-6 hover:bg-black
               hover:text-white px-10 py-2"
              onClick={() => router.push('/the-couture-club')}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
