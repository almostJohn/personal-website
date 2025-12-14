"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SiInstagram as Instagram } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/Popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

export function InstagramPopover() {
	const isMobile = useMediaQuery("(max-width: 640px)");

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="inline-flex size-10 cursor-pointer items-center justify-center rounded transition-colors hover:bg-blue-500/20">
					<Instagram className="size-6 shrink-0" />
				</button>
			</PopoverTrigger>
			<PopoverContent align={isMobile ? "center" : "start"} className="p-6">
				<div className="flex flex-col gap-4">
					<div className="mx-auto flex justify-center">
						<Avatar className="size-20 rounded-full border border-neutral-300">
							<AvatarImage
								src="https://github.com/almostJohn.png"
								alt="almostJohn"
								className="rounded-full"
							/>
							<AvatarFallback className="rounded-full bg-neutral-200 text-xl font-semibold">
								AJ
							</AvatarFallback>
						</Avatar>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<h2 className="text-lg font-bold">John</h2>
							<Instagram className="size-5 shrink-0" />
						</div>
						<span className="font-light text-neutral-500">almostjohn1</span>
					</div>
					<div className="flex flex-col">
						<a
							href="https://instagram.com/almostjohn1"
							rel="noreferrer"
							target="_blank"
							className="group inline-flex items-center justify-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-100 transition-colors hover:bg-neutral-900/80"
						>
							Follow
							<ArrowUpRight className="size-4 shrink-0 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
						</a>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
