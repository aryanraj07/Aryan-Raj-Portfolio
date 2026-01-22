"use client";
import ConfirmModal from "@/app/components/common/ConfirmModla";
import { createContext, useContext, useRef, useState } from "react";
type ConfirmResult = boolean;
interface PropsType {
  children: React.ReactNode;
}
export type ConfirmOptions = {
  message?: string;
  type?: string; // you can make it union later: "tel" | "link"
  value?: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
};
type ConfirmContextType = {
  confirm: (options: ConfirmOptions) => Promise<ConfirmResult>;
};
const confirmContext = createContext<ConfirmContextType | null>(null);

export const RedirectContextProvider = (props: PropsType) => {
  const [confirmOptions, setConfirmOptions] = useState<ConfirmOptions | null>();
  const resolveerRef = useRef<((value: ConfirmResult) => void) | null>(null);
  const confirm = (options: ConfirmOptions) => {
    return new Promise<ConfirmResult>((resolve) => {
      setConfirmOptions(options);
      resolveerRef.current = resolve;
    });
  };
  const handleClose = (result: ConfirmResult) => {
    resolveerRef?.current?.(result);
    setConfirmOptions(null);
  };

  return (
    <confirmContext.Provider value={{ confirm }}>
      {confirmOptions && (
        <ConfirmModal
          {...confirmOptions}
          onConfirm={() => handleClose(true)}
          onCancel={() => handleClose(false)}
        />
      )}
      {props.children}
    </confirmContext.Provider>
  );
};
export const useConfirm = () => {
  const ctx = useContext(confirmContext);
  if (!ctx) throw new Error("useConfirm must be inside ConfirmProvider");
  return ctx.confirm;
};
