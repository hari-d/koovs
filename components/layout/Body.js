import { PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Keyboard, Navigation, Pagination, Scrollbar,
} from 'swiper';

export default function Body() {
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fcbfb999473f1621527857/webp/koovs-banner-6-1600x900.png"
        alt="image"
      />
      <div>
        <h1 className="top-4 text-6xl text-center"> Trending Brands </h1>
      </div>
      <div className="tabSlider flex md:hidden col-span-12 mt-5 px-10">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 1,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={false}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="relative">
                <div className="flex  justify-end top-12 pr-8 ">
                  <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
                </div>
                <img
                  className=" flex flex-col items-center "
                  src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb393673ebbad30b4331d9/webp/shu-page-trending-brand-copy-746x1034.jpg"
                  alt=""
                />
                <button
                  onClick={() => router.push('/shu')}
                  className=" absolute top-[47%] left-[35%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
                  type="button"
                >
                  SHU
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="border-black border h-10 mt-6 hover:bg-black
               hover:text-white md:px-10 md:py-2 px-12 py-4 md:text-xs text-xs"
                  onClick={() => router.push('/shu')}
                >
                  EXPLORETHE BRAND
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="flex relative justify-end top-12 pr-8">
                <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
              </div>
              <img
                className=" flex flex-col items-center "
                src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb365873ebbad30b42e518/webp/arkk-page-trending-brand-copy-746x1034.jpg"
                alt=""
              />
              <button
                onClick={() => router.push('/shu')}
                className=" absolute top-[47%] left-[30%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
                type="button"
              >
                ARKK
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

          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="flex relative justify-end top-12 pr-8 ">
                <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
              </div>
              <img
                className=" flex flex-col items-center "
                src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fb36f7aeec57d409d18c3b/webp/tcc-page-trending-brand-copy-746x1034.jpg"
                alt=""
              />
              <button
                onClick={() => router.push('/shu')}
                className=" absolute top-[47%] left-[35%] px-10 py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
                type="button"
              >
                Couture Club
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

          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" grid-cols-12 hidden md:grid mx-28 my-10 border-b-2 border-yellow-400 pb-10 gap-2">
        <div className=" col-span-4 ">
          <div className="relative">
            <div className="flex relative justify-end lg:top-12 lg:pr-8 md:top-10 md:pr-4">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            <img
              className="md:h-[300px] md:w-[700px] lg:h-full "
              src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb393673ebbad30b4331d9/webp/shu-page-trending-brand-copy-746x1034.jpg"
              alt=""
            />
            <button
              onClick={() => router.push('/shu')}
              className=" absolute md:top-[47%] md:left-[20%] md:px-10 md:py-2 lg:top-[47%]
              lg:left-[30%] lg:px-10 lg:py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
              type="button"
            >
              SHU
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="border-black border  h-10 mt-6 hover:bg-black
               hover:text-white px-4 lg:px-10 py-2 md:text-xs"
              onClick={() => router.push('/shu')}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>
        <div className="  col-span-4 ">
          <div className="relative">
            <div className="flex relative justify-end top-12 pr-8 md:top-10 md:pr-4">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            {/* <div className="relative"> */}
            <img
              className="md:h-[300px] md:w-[700px] lg:h-full"
              src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62fb365873ebbad30b42e518/webp/arkk-page-trending-brand-copy-746x1034.jpg"
              alt=""
            />
            <button
              onClick={() => router.push('/arkk-copenhagen')}
              className=" absolute md:top-[47%] md:left-[13%] md:px-8 md:py-2 lg:top-[48%]
              lg:left-[35%] lg:px-10 lg:py-2 text-white text-4xl border border-white rounded-full hover:border-yellow-500"
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
               hover:text-white px-4 lg:px-10 py-2 md:text-xs "
              onClick={() => router.push('/arkk-copenhagen')}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>

        <div className=" col-span-4 ">
          <div className="relative">
            <div className="flex relative justify-end top-12 pr-8 md:top-10 md:pr-4">
              <PlusIcon className="h-8 w-8 stroke-white stroke-1 bg-black" />
            </div>
            {/* <div className="relative"> */}
            <img
              className="md:h-[300px] md:w-[700px] lg:h-full"
              src="https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fb36f7aeec57d409d18c3b/webp/tcc-page-trending-brand-copy-746x1034.jpg"
              alt=""
            />
            <button
              onClick={() => router.push('/the-couture-club')}
              className=" absolute md:top-[40%] md:left-[10%] md:px-8 md:py-1 lg:top-[45%]
              lg:left-[30%] lg:px-8 lg:py-1 text-white text-4xl border border-white rounded-full hover:border-yellow-500 "
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
               hover:text-white px-4 lg:px-10 py-2 md:text-xs "
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
