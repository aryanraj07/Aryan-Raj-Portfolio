import { toggleProjectStatus } from "@/actions/projects";
import { useTransition } from "react";

export function ActiveSwitch({
  checked,
  id,
}: {
  checked: boolean;
  id: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      className={`
        relative h-7 w-12 rounded-full
        transition-colors
        ${checked ? "bg-primary" : "bg-blue-100"}
      `}
      onClick={async () => {
        startTransition(async () => {
          await toggleProjectStatus(id, !checked);
        });
      }}
    >
      <span
        className={`
          absolute top-1
          h-5 w-5 rounded-full bg-white
          transition-transform
          ${checked ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}
