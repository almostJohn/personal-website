"use client";

import { cn } from "@/util/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export function ModeToggle() {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			className={cn(
				"inline-flex size-7 cursor-pointer items-center justify-center rounded border border-neutral-300 p-1 transition-colors hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800",
			)}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Icons.Sun className="size-4 shrink-0 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Icons.Moon className="absolute size-4 shrink-0 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle Theme</span>
		</button>
	);
}
