import React from 'react';
import MenClothingPopover from '../MenClothingPopover';
import CommoPopover from './CommoPopover';

export default function Men() {
  return (
    <li className=" border-r-2 border-gray-400">
      <CommoPopover
        popoverClassName="absolute mt-4 w-screen"
        buttonText={(
          <p className="mr-2 hover:border-b-2 border-purple-500 md:text-xs">
            MEN
          </p>
        )}
      >
        <div className="border-b border-gray-300 max-w-xl">
          <div className="flex justify-between ">
            <CommoPopover
              popoverClassName="absolute mt-4 w-screen"
              buttonText={(
                <p className="hover:border-b-2 border-purple-500 md:text-xs">
                  Clothing
                </p>
              )}
            >
              <MenClothingPopover />
            </CommoPopover>
            <p className="text-xs mb-3 hover:border-b-2 border-purple-500">
              <a href="#">Essentials</a>

            </p>
            <p className="text-xs mb-3 hover:border-b-2 border-purple-500">
              <a href="#">Accessories</a>

            </p>
            <p className="text-xs mb-3 hover:border-b-2 border-purple-500">
              <a href="#">
                Sneakers
              </a>
            </p>
            <p className="text-xs mb-3 hover:border-b-2 border-purple-500">
              <a href="#">
                Footwear
              </a>
            </p>
          </div>
        </div>
      </CommoPopover>
    </li>
  );
}
