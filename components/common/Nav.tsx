"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypographySmall } from "../Typography";

type Tab = { id: string; label: string; pathname: string };
type Tabs = Tab[];

let tabs: Tabs = [
  { id: "home", label: "Home", pathname: "/" },
  { id: "contact", label: "Contact", pathname: "/contact" },
  { id: "blog", label: "Blog", pathname: "/blog" },
  // { id: "resume", label: "Experience", pathname: "/resume" },
  { id: "stack", label: "Stack", pathname: "/stack" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.aside
      className="sm:min-w-[150px] sm:mt-64 pt-2 mb-10 sm:mb-6 text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <nav>
        <motion.div className="flex sm:flex-col justify-between">
          {tabs.map((tab) => {
            let activeTab = tab.pathname === pathname;
            if (!activeTab && tab.pathname !== "/") {
              activeTab = pathname.includes(tab.pathname);
            }
            return (
              <Link
                href={tab.pathname}
                key={tab.id}
                className={`relative px-3 py-1.5 font-medium transition max-w-min uppercase ml-0`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab && (
                  <motion.span
                    layoutId="nav-bubble"
                    className="absolute inset-0 z-10 bg-dark/10 dark:bg-light/10 mix-blend-difference rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <TypographySmall>{tab.label}</TypographySmall>
              </Link>
            );
          })}
        </motion.div>
      </nav>
    </motion.aside>
  );
}
