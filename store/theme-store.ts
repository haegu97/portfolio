import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return { theme: newTheme };
    }),
}));

if (typeof window !== "undefined") {
  const localTheme = window.localStorage.getItem("theme") as Theme | null;
  if (localTheme) {
    useThemeStore.setState({ theme: localTheme });
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    useThemeStore.setState({ theme: "dark" });
    document.documentElement.classList.add("dark");
  }
}

export default useThemeStore;
