"use client";

import { useLanyardWS, type Types } from "use-lanyard";
import {
	SiDiscord as Discord,
	SiSpotify as Spotify,
} from "@icons-pack/react-simple-icons";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/Popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { discordUserId } from "@/util/discordUserId";
import { getDiscordAvatarUrl } from "@/util/getDiscordAvatarUrl";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type DiscordPopoverProps = {
	readonly initialData?: Types.Presence;
};

export function DiscordPopover({ initialData }: DiscordPopoverProps) {
	const data = useLanyardWS(discordUserId, { initialData });

	const isMobile = useMediaQuery("(max-width: 640px)");

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="inline-flex size-10 cursor-pointer items-center justify-center rounded transition-colors hover:bg-blue-500/20">
					<Discord className="size-6 shrink-0" />
				</button>
			</PopoverTrigger>
			<PopoverContent align={isMobile ? "center" : "start"} className="p-6">
				<div className="flex flex-col gap-4">
					<div className="mx-auto flex justify-center">
						<Avatar className="size-20 rounded-full border border-neutral-300">
							<AvatarImage
								src={getDiscordAvatarUrl(
									data?.discord_user.id ?? "",
									data?.discord_user.avatar ?? "",
								)}
								alt={data?.discord_user.username}
								className="rounded-full"
							/>
							<AvatarFallback className="rounded-full bg-neutral-200 text-xl font-semibold">
								AJ
							</AvatarFallback>
						</Avatar>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<h2 className="text-lg font-bold">
								{data?.discord_user?.global_name}
							</h2>
							<Discord className="size-5 shrink-0" />
						</div>
						<span className="font-light text-neutral-500">
							{data?.discord_user.username}
						</span>
					</div>
					{data?.spotify ? (
						<div className="flex flex-col gap-2 rounded border border-neutral-300 bg-neutral-200 p-4 shadow-sm">
							<div className="text-xs">
								Listening to{" "}
								<div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
									Spotify <Spotify className="size-3 shrink-0" />
								</div>
							</div>
							<div className="flex items-center gap-3">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={data.spotify.album_art_url!}
									alt={data.spotify.song}
									className="size-12 rounded"
								/>
								<div className="flex flex-col text-xs/normal">
									<p className="font-medium">{data.spotify.song}</p>
									<p className="text-neutral-500">by {data.spotify.artist}</p>
								</div>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center rounded border border-neutral-300 bg-neutral-200 p-4 text-center text-sm italic shadow-sm">
							I&apos;m not currently doing anything!
						</div>
					)}
					<div className="flex flex-col">
						<a
							href={`https://discord.com/users/${discordUserId}`}
							rel="noreferrer"
							target="_blank"
							className="group inline-flex items-center justify-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-100 transition-colors hover:bg-neutral-900/80"
						>
							View Profile
							<ArrowUpRight className="size-4 shrink-0 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
						</a>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
