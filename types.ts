const Themes = ["system", "light", "dark"] as const;

export type UseThemeProps = {
  themes: typeof Themes;
  setTheme: (theme: typeof Themes[number]) => void;
  theme: typeof Themes[number];
};

export type ThemeProviderProps = {
  themes?: typeof Themes;
  storageKey?: string;
  defaultTheme?: typeof Themes[number];
  value?: { [themeName: string]: string };
};
