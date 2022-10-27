import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const links = [
  {
    id: 1,
    name: 'Terms and Conditions',
    value: 'terms-conditions',
    href: '/terms-conditions',
  },
  {
    id: 2,
    name: 'Shipment',
    value: 'shipment',
    href: '/shipment',
  },
  {
    id: 3,
    name: 'Returns and Exchange',
    value: 'returns-exchange',
    href: '/returns-exchange',
  },
  {
    id: 4,
    name: 'Payments',
    value: 'payments',
    href: '/payments',
  },
];

export default function SupportUsLinks() {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-7">SUPPORT</h1>
      </div>
      <div>
        <ul className="flex justify-center ml-3 space-x-6 mt-6">
          {links.map((item) => {
            const {
              id, name, value, href,
            } = item;
            return (
              <li className="text-center text-lg items-center" key={id}>
                <Link href={href}>
                  <a className={`${router.asPath.includes(value) ? 'underline hover:text-purple-500 text-base' : 'hover:text-purple-500 hover:border-b hover:border-gray-800 text-base'}`}>
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
