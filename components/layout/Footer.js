import { ArrowLongRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/Outline';
import React from 'react';
import FooterMenu from './FooterMenu';
import MediaPayment from './MediaPayment';

export default function Footer() {
  return (
    <div className="bg-gray-200 space-y-4 p-8">
      <div className="grid grid-cols-12 gap-4 px-4 py-8">
        <div className="col-span-5">
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-700 w-80 bg-gray-200"
            />
            <button type="button" className="border border-gray-700">
              <ArrowLongRightIcon className="h-6 w-8" />
            </button>
          </div>
          <div className="mt-7">
            <p className="text-sm">
              Subscribe to receive communications about koovs products, services, stores,
              events and matters of cultural interest.
            </p>
          </div>
        </div>
        <div className="col-span-7 space-y-10">
          <FooterMenu />
          <MediaPayment />
        </div>
      </div>
      <div className="border-t border-yellow-400">
        <div className="mt-8">
          <p className="text-sm text-center">
            The content of this site is copyright-protected and is the property of New Brave
            Technologies Pvt Ltd (koovs).
          </p>
          <p className="text-sm text-center mt-4">
            koovs business concept is to offer fashion and quality at the best price.
          </p>
        </div>
        <div />
      </div>
    </div>
  );
}
