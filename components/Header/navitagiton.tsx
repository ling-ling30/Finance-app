"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavButton } from "./nav-button";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import dynamic from "next/dynamic";
import MobileMenu from "./mobile-menu";
const NoSSR = dynamic(() => import("@/components/Header/navitagiton"), {
  ssr: false,
});

type Props = {};

export const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export default function Navigation({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return <MobileMenu />;
  }

  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route, index) => (
        <NavButton
          key={index}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </div>
  );
}
