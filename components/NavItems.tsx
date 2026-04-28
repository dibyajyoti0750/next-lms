"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

export default function NavItems() {
  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(pathName === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
