import { Switch } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AboutUs() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className='dark:bg-black'>
      <div className="py-16">
        <p className="text-xl text-blue-600">
          Normal Mode
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-md
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}

        >

          <span className="sr-only">
            Use Setting
          </span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform
          rounded-md bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />

        </Switch>
        <p className="text-xl text-blue-600">Dark Mode</p>
      </div>
      <div className="dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 h-[700px] w-[700px]"
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62fb7cc0b584b058444cf216/webp/a656a150-930f-4a07-9566-42b9dcb95ea3-1366x1376.jpeg"
          alt="image"
        />
        <div className="flex align-middle my-auto sm:">
          <h1 className=" dark:bg-black dark:text-white text-2xl font-semibold mx-auto">About Us</h1>
        </div>
      </div>
      <div className="mx-auto dark:bg-black">
        <p className="dark:bg-black dark:text-white text-sm mt-7 text-justify mx-auto w-1/2">
          We are KOOVS - young and fresh and ever so happening! We are here to be a part of each
          of your communities! We have been around for about 10 years but at that time we
          weren’t this cool, now we are learning from the best I think we all can agree it’s a
          much needed make over for us! We have changed the way we look, the way we dress and
          definitely changed friend gangs ;
        </p>
        <p className="dark:bg-black dark:text-white text-center text-lg font-extrabold mt-4">
          So come shop, learn, chill and do much more with us - the new KOOVS
        </p>
        <div className="dark:bg-black dark:border-gray-50 border-t-2 border-gray-700
        mt-28 py-14 mx-24" />
      </div>
    </div>
  );
}
