import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import AccountForm from "./account-form";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center">
            New Account
          </SheetTitle>
          <SheetDescription className="text-center">
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm onSubmit={() => {}} disabled={false} />
      </SheetContent>
    </Sheet>
  );
};
