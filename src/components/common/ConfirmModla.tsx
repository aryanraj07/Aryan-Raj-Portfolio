"use client";
import React, { useEffect } from "react";
import Button from "../Button";
type ConfirmModalProps = {
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({ message, onConfirm, onCancel }: ConfirmModalProps) => {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);
  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4">
      <div className=" bg-surface z-50 shadow-lg max-w-sm w-full rounded-lg p-4 ">
        <div className="leading-relaxed text-sm sm:text-base">{message}</div>
        <div className="mt-5 flex justify-end gap-4">
          <Button variant="danger" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="success" size="sm" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
