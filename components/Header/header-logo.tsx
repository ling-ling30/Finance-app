import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function HeaderLogo({}: Props) {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="font-semibold text-white text-2xl ml-2">Finance</p>
      </div>
    </Link>
  );
}
