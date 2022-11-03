import Link from 'next/link';
import React from 'react';

export default function Shipment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
      <img
        className="mt-9 lg:h-[700px] lg:w-[700px] md:h-[500px] md:w-[500px]"
        src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/60d2fa3ea4cdda932e525e1c/webp/static-page-banner-1366x1376.jpg"
        alt="image"
      />
      <div className="flex align-middle my-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-center pb-20">Shipment</h1>
          <p className="font-semibold mx-28 align-middle my-auto mt-10 text-2xl">
            India-wide Shipping Average time: 4-6 days after the order confirmation.
          </p>
        </div>
      </div>
      <div className="lg:mx-96 md:mx-44 sm:mx-24 w-full">
        <h1 className="font-bold  text-justify mx-auto  mt-7 text-lg">
          SHIPPING POLICY
        </h1>
        <p className=" text-base mt-5 text-justify mx-auto ">
          Any product bought from
          <span>
            <Link href="/">
              <a className="text-blue-500 mx-1">https://koovs.com</a>
            </Link>
          </span>
          , will be shipped to the cusrtomer maximum within 4 to 6 days. In case of any exceptions, due to non-availability of a certain product, we will inform the customer through the email id provided in the customer registration form.
        </p>
        <p className="mx-auto text-base mt-2 ">
          If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.
        </p>
        <p className="text-center text-base mt-2">
          Any COD orders, if available, will be charged extra @ INR 50 Flat.
        </p>
        <div className="border-t-2 border-gray-700 mt-28 my-14 w-[-1400px]" />
      </div>
    </div>
  );
}
