import { create } from "zustand";

type NewAccountState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
const useNewAccountStore = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

// Create a typed hook
export const useNewAccount = () =>
  useNewAccountStore((state) => ({
    isOpen: state.isOpen,
    onOpen: state.onOpen,
    onClose: state.onClose,
  }));
