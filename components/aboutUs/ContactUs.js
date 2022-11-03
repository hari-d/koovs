import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export default function ContactUs() {
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
      <div className=" dark:bg-black dark:text-white grid grid-cols-1 md:grid-cols-2 gap-9">
        <img
          className="mt-9 lg:h-[700px] lg:w-[700px] "
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63072cf6ed8633105bf83e75/webp/contact-us-1366x1376.jpg"
          alt="image"
        />
        <div className="flex align-middle my-auto">
          <div className=" dark:bg-black dark:text-white space-y-2">
            <h1 className="text-2xl font-semibold text-center text-4xl pb-20">Contact Us</h1>
            <p className="font-semibold mx-auto align-middle my-auto text-4xl mt-4">
              Please leave your comments/feedback any time - care@koovs.com
            </p>
          </div>
        </div>
        <div className="dark:bg-black dark:border-gray-50 w-[1200px] border-t-2
         border-gray-700 mt-28 py-14 ml-20"
        />
      </div>

    </div>

  );
}
