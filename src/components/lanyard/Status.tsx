"use client";

import { discordUserId } from "@/util/discordUserId";
import { useLanyardWS, Types } from "use-lanyard";
import { Circle } from "lucide-react";
import { cn } from "@/util/cn";

type StatusProps = {
	readonly className?: string;
	readonly initialData?: Types.Presence;
};

export function Status({ className, initialData }: StatusProps) {
	const data = useLanyardWS(discordUserId, { initialData });
	const discordStatus = data?.discord_status;

	return (
		<div
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-200 px-4 py-2 font-medium whitespace-nowrap",
				className,
			)}
		>
			{discordStatus === "idle" && (
				<>
					<Circle className="size-4 shrink-0 fill-current text-orange-500" />
					<span>Idle</span>
				</>
			)}
			{discordStatus === "dnd" && (
				<>
					<Circle className="size-4 shrink-0 fill-current text-red-500" />
					Do Not Disturb
				</>
			)}
			{discordStatus === "online" && (
				<>
					<Circle className="size-4 shrink-0 fill-current text-green-500" />
					Online
				</>
			)}
			{discordStatus === "offline" && (
				<>
					<Circle className="size-4 shrink-0 fill-current text-neutral-500" />
					Offline
				</>
			)}
		</div>
	);
}
