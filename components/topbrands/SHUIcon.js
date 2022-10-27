import React from 'react';

export default function SHUIcon({ Icon, title }) {
  return (
    <div className="mx-4 cursor-pointer lg:mx-6 flex space-x-2">
      <Icon className="h-5 w-5" />
      <p className="mx-1">{title}</p>
    </div>
  );
}
