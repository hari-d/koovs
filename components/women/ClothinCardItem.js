import Link from 'next/link';
import React, { useState } from 'react';

export default function ClothinCardItem({ items }) {
  const [active, setActive] = useState(items[0]);
  return (
    <Link href="/clothing-page">
      <a>
        <div>
          <img
            src={active.image}
            alt="image"
          />
          <div className="flex space-x-4 flex-wrap py-2 cursor-pointer">
            {
          items.map((mapItem) => (
            <img
              key={mapItem.id}
              src={mapItem.image}
              alt="image"
              className="h-10 w-10"
              onMouseEnter={() => setActive(mapItem)}
            />
          ))
        }
          </div>
          <h3 className="text-left text-red-600">{ active.justIn}</h3>
          <h3 className="text-left text-black">{ active.title}</h3>
          <h3 className="text-left text-gray-500">
            {active.description}
          </h3>
          <h3 className="text-left text-gray-500">{active.description1}</h3>
          <h3 className="text-left text-gray-500">{active.description2}</h3>
          <h3 className="text-left text-gray-900">
            ₹
            {active.price}
          </h3>
        </div>
      </a>
    </Link>
  );
}
