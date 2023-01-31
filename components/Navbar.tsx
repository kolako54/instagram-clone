import React from "react";
import Image from "next/image";
import Logo from "../public/725b68f9-0f16-43be-984e-19e9263e35fb.jpg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="items-center flex flex-row justify-center p-3 pb-4 border-b">
      <div className="mr-auto w-[2.2rem]">
        <Link href="/">
          <Image
            src={Logo}
            layout="responsive"
            className="rounded-full"
            alt="logo"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <p className="mr-auto">item 1</p>
      <p className="mr-3">item 2 </p>
      <p className="mr-3">item 3 </p>
      <p className="ml-3">item 4 </p>
    </div>
  );
};

export default Navbar;
