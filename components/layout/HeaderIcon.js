import React from "react";

export default function HeaderIcon({Icon,title}) {
  return (
    <div className="mx-4 cursor-pointer lg:mx-6">
      <Icon  className="h-5"/>
      <p className="my-1">{title}</p>
    </div>
  )
}
