import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export default function FooterMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">ABOUT</a>
          </li>
          <Link href="/about-us">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-5">Our Story</a>
              <ArrowUpRightIcon className="h-4 mt-5" />
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Contact Us</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/careers">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Careers</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/privacy-policy">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Privacy Policy</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">SUPPORT</a>
          </li>
          <Link href="/payments">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-5">Payments</a>
              <ArrowUpRightIcon className="h-4 mt-5" />
            </li>
          </Link>
          <Link href="/returns-exchange">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Returns/Exchange</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/shipment">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Shipment</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/terms-conditions">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Terms and Conditions</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">TOPBRANDS</a>
          </li>
          <Link href="/the-couture-club">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-5">The Couture Club</a>
              <ArrowUpRightIcon className="h-4 mt-5" />
            </li>
          </Link>
          <Link href="/shu">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">SHU</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/ball">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">BALL</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/public-desire">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Public Desire</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/arkk-copenhagen">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Arkk Copenhagen</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/nike">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Nike</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
          <Link href="/koovs-sport">
            <li className="flex">
              <a href="#" className="hover:text-purple-500 text-sm mt-4">Koovs Sport</a>
              <ArrowUpRightIcon className="h-4 mt-4" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
