import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export default function () {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <div className="py-16">
        <p className="text-xl text-blue-600">
          Normal Mode
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full
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
          rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <p className="text-xl text-blue-600">Dark Mode</p>
      </div>
      <div className="dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 h-[700px] w-[700px]"
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/60d2fadcf0ede093094f722b/webp/static-page-banner-1366x1376.jpg"
          alt="image"
        />
        <div className=" dark:bg-black dark:text-white flex align-middle my-auto">
          <div className="dark:bg-black dark:text-white space-y-2">
            <h1 className="dark:text-white text-2xl font-semibold text-center">Careers</h1>
            <p className="dark:bg-black dark:text-white font-semibold mx-auto align-middle my-auto text-xl">
              Age is just a number. To us, youth means fresh energy, creative novelty, untapped potential in every individual. Feel like you fit in? Hop on to join this ever-young crew.
            </p>
          </div>
        </div>
      </div>

      <div className="dark:bg-black dark:text-white mx-auto">
        <p className=" text-base mt-7 text-justify mx-auto w-1/2">
          koovs has launched this digital portal to reimagine denim fashion with a powerful purpose for the new generation. We're always on the lookout for potential value addition to our team. In short, potential denim heads who are ready to be a part of an evolution.
        </p>
        <p className="text-center text-base mt-2">
          Find a connect with us? Mail your resume to: hello@koovs.com
        </p>
        <p className="text-center text-base mt-2">
          *koovs believes in absolute neutral treatment of candidates and has a stringent policy against discrimination of any sort.
        </p>
        <div className="dark:bg-black dark:border-gray-50 border-t-2 border-gray-700 mt-28 py-14 mx-24" />
      </div>
    </div>
  );
}
