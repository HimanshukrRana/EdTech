import Image from "next/image";
import React from "react";
import Dropdown from "../dropdown/Dropdown";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white border-gray-200 h-[68px] px-6 sm:px-[50px]">
      <div className="container m-auto ">
        <div className=" flex items-center   gap-[48px] pt-3 ">
          <Link href="/">
            <Image
              src="/images/logo-ed.svg"
              height={44}
              width={138}
              alt="logo"
            />
          </Link>

          <Dropdown />
          <div className="hidden sm:block">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
