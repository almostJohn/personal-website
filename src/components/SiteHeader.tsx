"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
	{
		label: "[h] home",
		href: "/",
	},
	{
		label: "[b] blog",
		href: "/blog",
	},
	{
		label: "[p] projects",
		href: "/projects",
	},
];

export function SiteHeader() {
	const pathname = usePathname();

	const handleKeyDown = (e: KeyboardEvent) => {
		const key = e.key.toLowerCase();
		const navItem = navItems.find((item) => item.label.startsWith(`[${key}]`));
		if (navItem) {
			e.preventDefault();
			window.location.href = navItem.href;
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<header className="w-full">
			<nav className="flex items-center gap-x-4">
				{navItems.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						title={item.label.replace(/\[.\] /, "")}
						className={cn(
							"text-sm font-medium transition-colors hover:text-[#5865f2]",
							pathname === item.href ? "text-[#5865f2]" : "text-neutral-500",
						)}
					>
						{item.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
