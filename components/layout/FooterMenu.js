import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function FooterMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">ABOUT</a>
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-5">Our Story</a>
            <ArrowUpRightIcon className="h-4 mt-5" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Contact Us</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Careers</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Privacy Policy</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">SUPPORT</a>
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-5">Payments</a>
            <ArrowUpRightIcon className="h-4 mt-5" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Returns/Exchange</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Shipment</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Terms and Conditions</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">TOPBRANDS</a>
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-5">The Couture Club</a>
            <ArrowUpRightIcon className="h-4 mt-5" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">SHU</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">BALL</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Public Desire</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Arkk Copenhagen</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Nike</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
          <li className="flex">
            <a href="#" className="hover:text-purple-500 text-sm mt-4">Koovs Sport</a>
            <ArrowUpRightIcon className="h-4 mt-4" />
          </li>
        </ul>
      </div>
    </div>
  );
}
