"use client";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import React from "react";

type Props = {};

export default function SheetProvider({}: Props) {
  return (
    <>
      <NewAccountSheet />
    </>
  );
}
