"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <main className="flex  flex-col items-center p-24">
      <Button onClick={onOpen}>Create Account</Button>
    </main>
  );
}
