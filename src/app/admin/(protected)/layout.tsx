// app/admin/layout.tsx

import { ReactNode } from "react";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black-100 min-h-screen text-white">
      <div className="flex">
        <AdminSidebar />

        <div className="flex-1 flex flex-col">
          <AdminHeader />

          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
