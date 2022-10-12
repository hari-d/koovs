import React from 'react';
import {
  FaFacebook, FaInstagram, FaWhatsapp, FaYoutubeSquare,
} from 'react-icons/fa';

export default function MediaPayment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="col-span-1">
        <ul>
          <li>
            <a href="#" className="border-b border-purple-500">SOCIAL MEDIA</a>
          </li>
          <li className="flex gap-4">
            <FaInstagram className="h-5 mt-5" />
            <a href="#" className="hover:text-purple-400 text-sm mt-5">instagram</a>
          </li>
          <li className="flex gap-4">
            <FaFacebook className="h-5 mt-4" />
            <a href="#" className="hover:text-purple-400 text-sm mt-4">facebook</a>
          </li>
          <li className="flex gap-4">
            <FaYoutubeSquare className="h-5 mt-4" />
            <a href="#" className="hover:text-purple-400 text-sm mt-4">youtube</a>
          </li>
          <li className="flex gap-4">
            <FaWhatsapp className="h-5 mt-4" />
            <a href="#" className="hover:text-purple-400 text-sm mt-4">whatsapp</a>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <div>
          <a href="#" className="border-b border-purple-500">PAYMENT METHODS</a>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/amex_new.png"
              className=""
              alt="amex logo"
            />
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/rupay_new.png"
              className=""
              alt="RuPay_logo"
            />
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/diners_club_icon.png"
              className=""
              alt="diners club logo"
            />
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/mastercard_icon.png"
              className=""
              alt="Mastercard logo"
            />
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/visa_new.png"
              className=""
              alt="visa logo"
            />
            <img
              src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/ms.files/webp/google_pay_new.png"
              className=" rounded-lg"
              alt="G-Pay Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
