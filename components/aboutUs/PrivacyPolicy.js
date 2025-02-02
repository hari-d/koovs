import { Switch } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PrivacyPolicy() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="py-16 mt-4">
        <p className="text-xl text-blue-600">
          Normal Mode
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">
            Use Setting
          </span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform
          rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <p className="text-xl text-blue-600">Dark Mode</p>
      </div>
      <div className="dark:bg-black dark:text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 h-[700px] w-[700px]"
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/60d2fab6a4cdda932e5275d5/webp/static-page-banner-1366x1376.jpg"
          alt="image"
        />
        <div className="flex align-middle my-auto">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-center pb-20">Privacy Policy</h1>
            <p className="font-semibold mx-auto align-middle my-auto text-3xl">
              We value your privacy and the trust you place in us.
            </p>
          </div>
        </div>

        <div className="lg:mx-96 md:mx-48 sm:mx-24 w-full">
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Introduction
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto ">
            We value the trust you place in us. That's why we insist upon the highest standards
            for secure transactions and customer information privacy. Please read the following
            statement to learn about our information gathering and dissemination practices.
          </p>
          <p className=" text-sm  mt-3 text-justify mx-auto ">
            Note: Our privacy policy is subject to change at any time without notice. To make
            sure you are aware of any changes, please review this policy periodically.
          </p>
          <p className=" text-sm  mt-3 text-justify mx-auto ">
            By visiting this Website or mobile application you agree to be bound by the terms
            and conditions of this Privacy Policy. If you do not agree please do not use or
            access our Website.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            By mere use of the Website, you expressly consent to our use and disclosure of your
            personal information in accordance with this Privacy Policy. This Privacy Policy is
            incorporated into and subject to the Terms of Use.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Collection of Personally Identifiable Information and other Information
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            When you use our Website, we collect and store your personal information which is
            provided by you from time to time. Our primary goal in doing so is to provide you a
            safe, efficient, smooth and customized experience. This allows us to provide
            services and features that most likely meet your needs, and to customize our Website
            to make your experience safer and easier. More importantly, while doing so we
            collect personal information from you that we consider necessary for achieving this
            purpose.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Website. We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address. We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie". We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If you choose to buy on the Website, we collect information about your buying behaviour.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If you transact with us, we collect some additional information, such as a billing address, a credit / debit card number and a credit / debit card expiration date and/ or other payment instrument details and tracking information from cheques or money orders.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up a free account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as placing an order) do require registration. We do use your contact information to send you offers based on your previous orders and your interests.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Use of Demographic / Profile Data / Your Information
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            With your consent, we will have access to your SMS, contacts in your directory, location and device information. We may share this data with our affiliates. In the event that consent to this such use of data is withdrawn in the future, we will stop collection of such data but continue to store the data and use it for internal purposes to further improve our services.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our Website.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like pin code, age, or income level). We use this data to tailor your experience at our Website, providing you with content that we think you might be interested in and to display content according to your preferences.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Sharing of personal information
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We may disclose personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Links to Other Sites
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            Our Website links to other websites that may collect personally identifiable information about you.  We are not responsible for the privacy practices or the content of those linked websites.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Security Precautions
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Choice/Opt-Out
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If you want to remove your contact information from all
            <span>
              <Link href="/">
                <a className="text-blue-500 mx-1">https://koovs.com</a>
              </Link>
            </span>
            lists and newsletters, please email to us at hello@koovs.com
          </p>
          <h1 className="font-extrabold  text-justify mx-auto  mt-7 text-2xl">
            Your Consent
          </h1>
          <p className=" text-sm  mt-7 text-justify mx-auto">
            By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.
          </p>
          <p className="text-sm  mt-3 text-justify mx-auto">
            If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
          </p>
          <div className="dark:border-gray-50 border-t-2 border-gray-700 w-[1200px]
           mt-28 my-14 -mx-72"
          />
        </div>
      </div>
    </div>

  );
}
