import Link from 'next/link';
import React from 'react';

export default function ReturnsandExchange() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
      <img
        className="mt-9 lg:h-[700px] lg:w-[700px] md:h-[500px] md:w-[500px]"
        src="https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/60d2fa52acb3f492bf82bfcb/webp/static-page-banner-1366x1376.jpg"
        alt="image"
      />
      <div className="flex align-middle my-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-center lg:pb-24">Return/Exchange</h1>
          <p className="font-semibold mx-28 align-middle my-auto mt-10 text-2xl">
            koovs has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the product.
          </p>
        </div>
      </div>
      <div className="lg:mx-96 md:mx-48 sm:mx-24 w-full">
        <h1 className="font-bold  text-justify mx-auto  mt-7 text-lg">
          RETURNS/EXCHANGE
        </h1>
        <p className=" text-base mt-5 text-justify mx-auto ">
          7 days returns and replacement accepted from the date of receipt of the product by the customer.
        </p>
        <h6 className="underline mt-7">
          Replacement Policy:
        </h6>
        <ul className="list-disc mt-5">
          <li>
            Any problem in size or fitting.
          </li>
          <li>
            Any visible manufacturing defect.
          </li>
          <li>
            The product must be unused with all the tags and labels.
          </li>
          <li>
            The reverse shipping cost will be borne by the customer.
          </li>
          <li>
            The replacement will be shipped within 2 business days after the product reaches our warehouse, and runs through a quality check.
          </li>
        </ul>
        <h6 className="underline mt-7">
          Returns Policy:
        </h6>
        <ul className="list-disc mt-5">
          <li>
            Any problem in size fitting.
          </li>
          <li>
            Any visible manufacturing defect.
          </li>
          <li>
            The product must be unused with all the tags and labels.
          </li>
          <li>
            Refunds will be processed within 1-3 business days after the product reaches our warehouse and runs through a quality check. Thereafter on approval, the refund will reflect in your original payment mode within 7-10 business days.
          </li>
          <li>
            If an order is cancelled after the product has been shipped from our warehouse, the refund will be then processed only after it reaches back to our warehouse and runs through the quality check. On approval, it will then follow the standard refund procedure as mentioned above.
          </li>
        </ul>
        <p className="text-center text-base mt-2">
          For any returns, please goto your Account/My Orders, and manage your order accordingly.
        </p>
        <p className="text-center text-base mt-2">
          For any other inquiries, please email us at
          <span>
            <Link href="/">
              <a className="text-blue-500 mx-1">https://koovs.com</a>
            </Link>
          </span>
        </p>
        <div className="border-t-2 border-gray-700 mt-28 my-14  w-[-1400px]" />
      </div>
    </div>

  );
}
