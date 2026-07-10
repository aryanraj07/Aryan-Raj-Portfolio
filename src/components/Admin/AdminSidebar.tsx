"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Settings,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-border bg-card">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold">Aryan Admin</h2>

        <p className="text-blue-50 text-sm mt-1">Portfolio CMS</p>
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-surface"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/admin/projects"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-surface"
        >
          <FolderKanban size={18} />
          Projects
        </Link>

        <Link
          href="/admin/blogs"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-surface"
        >
          <FileText size={18} />
          Blogs
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-surface"
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
