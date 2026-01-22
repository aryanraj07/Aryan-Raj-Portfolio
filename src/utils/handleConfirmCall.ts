"use client";

import { useConfirm } from "@/context/confirmContext";
type ConfirmRedirectArgs = {
  value: string;
  type?: string;
  message?: string;
};

export const useConfirmRedirect = () => {
  const confirm = useConfirm();
  return async ({
    value,
    type = "",
    message = "You are about to leave this site. Do you want to proceed?",
  }: ConfirmRedirectArgs) => {
    const ok = await confirm({
      value,
      type,
      message,
    });

    if (!ok) return;

    if (type === "tel") {
      window.location.href = `tel:${value}`;
    } else {
      window.open(value, "_blank", "noopener,noreferrer");
    }
  };
};
