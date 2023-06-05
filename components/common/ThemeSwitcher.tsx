"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Switch } from "../ui/switch";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  return (
    <div className="hidden sm:flex items-center space-x-2 mb-4 ">
      <label htmlFor="airplane-mode">
        {isDarkMode ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </label>
      <Switch id="airplane-mode" checked />
    </div>
  );
}
