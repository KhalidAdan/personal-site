"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { id: string; label: string; pathname: string }[];

let tabs: Tab = [
  { id: "home", label: "khld.dev", pathname: "/" },
  { id: "contact", label: "Contact", pathname: "/contact" },
  { id: "blog", label: "Blog", pathname: "/blog" },
  { id: "resume", label: "Experience", pathname: "/resume" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <aside className="sm:w-[150px] sm:mt-64 pt-2 mb-4 text-left">
      <nav>
        <div className="flex sm:flex-col justify-between">
          {tabs.map((tab) => (
            <Link
              href={tab.pathname}
              key={tab.id}
              className={cn(
                pathname == tab.pathname ? "bg-light/10" : "",
                "opacity-50 hover:opacity-100 font-medium uppercase px-4 py-2 rounded-xl text-left text-sm transition-all max-w-min"
              )}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
