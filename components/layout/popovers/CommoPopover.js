import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment } from 'react';

export default function CommoPopover({ children, buttonText, popoverClassName }) {
  return (
    <Popover className="">
      {({ open }) => (
        <>
          <Popover.Button
            className="text-gray-700 hover:underline hover:underline-offset-8 focus:outline-none text-xs"
          >
            {buttonText}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className={popoverClassName}>
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
