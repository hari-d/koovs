import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';

export default function MyViewProductDetail({ showModal, setShowModal }) {
  return (
    <div className="overflow-y-scroll">
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all h-[600px] overflow-y-scroll">
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <XMarkIcon className="w-6 h-6 text-xl" onClick={() => setShowModal(false)} />
                    </button>
                  </div>
                  <div className="flex space-x-8">
                    <Image
                      className=""
                      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cee61d9-f639-4c9e-bad3-9a957c015b23/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png"
                      alt="image"
                      width="80px"
                      height="80px"
                    />
                    <div className="space-y-2">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Nike Sportswear Phoenix Fleece
                      </Dialog.Title>
                      <p>MRP : ₹3,795</p>
                      <p className="text-gray-500">incl. of taxes</p>
                      <p className="text-gray-500">(Also includes all applicable duties)</p>
                    </div>
                  </div>
                  <div className="mt-10 py-6">
                    <p className="text-lg text-gray-900">
                      Rise up and transform your fleece wardrobe with strong cosy vibes. With a voluminous fit and exaggerated ribbing, this Phoenix Fleece sweatshirt gives you a look that's anything but basic.
                    </p>
                  </div>
                  <div className="">
                    <h2 className="text-left">Benefits</h2>
                    <ul className="list-disc">
                      <li>
                        Smooth on the outside and cosy on the inside, brushed fleece is our go-to sweatshirt material for colder temperatures.
                      </li>
                      <li>
                        Elongated ribbing on the cuffs and hem provides extra comfort and structure.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-left">Product Details</h2>
                    <ul className="list-disc">
                      <li>
                        80% cotton/20% polyester
                      </li>
                      <li>
                        Embroidered Swoosh logo
                      </li>
                      <li>
                        Machine wash
                      </li>
                      <li>
                        Imported
                      </li>
                      <li>
                        Colour Shown: Black/Sail
                      </li>
                      <li>
                        Style: DQ5762-010
                      </li>
                      <li>
                        Country/Region of Origin: China
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
