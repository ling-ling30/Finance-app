import dynamic from "next/dynamic";
import HeaderLogo from "./header-logo";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMessage from "./welcome-message";
const Navigation = dynamic(() => import("@/components/Header/navitagiton"), {
  ssr: false,
});

type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 ;g:px-14 pb-36">
      <div className=" max-w-screen-xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMessage />
      </div>
    </header>
  );
}

export default Header;
