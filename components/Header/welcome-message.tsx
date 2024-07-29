"use client";

import { useUser } from "@clerk/nextjs";

type Props = {};

function WelcomeMessage({}: Props) {
  const { user, isLoaded } = useUser();
  return (
    <div className="'space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Welcome Back
        {user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial overview report
      </p>
    </div>
  );
}

export default WelcomeMessage;
