import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-slate-600 dark:border-slate-400 border-2"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border-slate-600 dark:border-slate-400 border-2"
        >
          <DropdownMenuItem
            onClick={() => setThemeState("theme-light")}
            className="hover:bg-slate-600 dark:hover:bg-slate-400 hover:text-slate-100 dark:hover:text-slate-900"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setThemeState("dark")}
            className="hover:bg-slate-600 dark:hover:bg-slate-400 hover:text-slate-100 dark:hover:text-slate-900"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setThemeState("system")}
            className="hover:bg-slate-600 dark:hover:bg-slate-400 hover:text-slate-100 dark:hover:text-slate-900"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
