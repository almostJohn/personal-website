import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/util/cn";
import { jetBrainsMono } from "@/util/fonts";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/ShibaCool.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
	},
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		type: "website",
		title: siteConfig.title,
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		creator: siteConfig.creator,
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-svh bg-neutral-900 text-neutral-100 antialiased",
					jetBrainsMono.className,
				)}
			>
				<div className="mx-auto flex max-w-4xl flex-col px-4 py-8">
					<SiteHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
