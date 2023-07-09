import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black md:px-[50px]">
      <div className="container m-auto">
        <div className=" p-4 flex flex-col gap-6 md:flex-row md:justify-between  flex-wrap">
          <div className="text-white">
            <h5>Connect with Us</h5>
            <div className="flex gap-4 pt-3">
              <Link href="http://www.linkedin.com">
                <Icon icon="devicon:linkedin" width="30" height="30" />
              </Link>
              <Link href="http://www.facebook.com">
                <Icon icon="logos:facebook" width="30" height="30" />
              </Link>
              <Link href="http://www.instagram.com">
                <Icon icon="skill-icons:instagram" width="30" height="30" />
              </Link>
              <Link href="http://www.youtube.com">
                <Icon icon="logos:youtube-icon" width="30" height="30" />
              </Link>
              <Link href="http://www.twitter.com">
                <Icon icon="devicon:twitter" width="30" height="30" />
              </Link>
            </div>
          </div>
          <div className="text-white">
            <h5>We Accept</h5>
            <div className="flex flex-wrap gap-2">
              <Image
                src="/images/payment/Paytm.svg"
                alt="upi"
                height={50}
                width={70}
              />
              <Image
                src="/images/payment/PhonePe.svg"
                alt="upi"
                height={50}
                width={70}
              />
              <Image
                src="/images/payment/GooglePay.svg"
                alt="upi"
                height={50}
                width={70}
              />
              <Image
                src="/images/payment/AmazonPay.svg"
                alt="upi"
                height={50}
                width={70}
              />
            </div>
          </div>
          <div className="flex gap-4 text-white">
            <Icon
              icon="simple-line-icons:call-in"
              color="white"
              width={20}
              height={20}
            />
            <h6>+91 701087774</h6>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="p-4 flex text-white justify-between flex-wrap">
          <p className="text-white">
            © 2023 Sde-camp Inc. All rights reserved.
          </p>
          <div className="flex gap-4 pt-6 md:pt-0">
            <Link href="/privacy"> Privacy Policy</Link>
            <Link href="/terms-condition">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
