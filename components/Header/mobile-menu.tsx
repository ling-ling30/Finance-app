import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "./navitagiton";

type Props = {};

export default function MobileMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            asChild
            variant={"outline"}
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <div>
              <Menu className="size-4" />
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2">
          <SheetTitle>Menu</SheetTitle>
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route, index) => (
              <Button
                key={index}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
