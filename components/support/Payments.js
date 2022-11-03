import React from 'react';

export default function Payments() {
  return (
    <div>
      {/*
        <div className="flex align-middle my-auto">
          <h1 className="text-2xl font-semibold mx-auto">SUPPORT</h1>
        </div>
        <div className="">
          <ul className="text-center text-lg items-center flex">
            <li className="">
              <a href="#" className="font-medium hover:border-b hover:border-gray-800 hover:text-purple-500">Terms and Conditions</a>
            </li>
            <li>
              <a href="#" className="font-medium hover:border-b hover:border-gray-800 hover:text-purple-500">Shipment</a>
            </li>
            <li>
              <a href="#" className="font-medium hover:border-b hover:border-gray-800 hover:text-purple-500">Return/Exchange</a>
            </li>
            <li>
              <a href="#" className="font-medium hover:border-b hover:border-gray-800 hover:text-purple-500">Payment</a>
            </li>
          </ul>
    </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 lg:h-[700px] lg:w-[700px] md:h-[500px] md:w-[500px]"
          src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/60d2fa9ca4cdda932e5270e9/webp/static-page-banner-1366x1376.jpg"
          alt="image"
        />
        <div className="flex align-middle my-auto">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-center pb-20">Payments</h1>
            <p className="font-semibold mx-auto align-middle my-auto text-3xl">
              100% Secure Checkout UPI / Debit Card / Credit Card/ Net Banking
            </p>
          </div>
        </div>
        <div className="lg:mx-96 md:mx-44 sm:mx-24 w-full">
          <p className=" text-base mt-7 text-justify mx-auto ">
            koovs offers the following payment options: advance payment, payment by credit or debit card (Visa, Master Card, American Express). We reserve the right not to offer all payment options for all orders and will refer to current payment options. We only accept payment from accounts within India. You are responsible for any costs associated with your account transactions.
          </p>
          <p className="text-center text-base mt-2">
            By accepting these General Terms and Conditions, you are deemed to have given your consent to any invoices and credit invoices being sent exclusively to you in electronic form.
          </p>
          <div className="border-t-2 border-gray-700 mt-28 my-14 w-[-1400px] " />
        </div>
      </div>
    </div>
  );
}
