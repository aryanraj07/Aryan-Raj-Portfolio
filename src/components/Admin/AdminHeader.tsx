import Link from "next/link";
import Button from "../Button";
import { ExternalLink } from "lucide-react";
export default function AdminHeader() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-xl px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <Link href="/" target="_blank">
        <Button size="sm">
          <ExternalLink size={16} /> View Portfolio
        </Button>
      </Link>
    </header>
  );
}
