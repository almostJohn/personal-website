"use client";

import { cn } from "@/util/cn";
import {
	SiSpotify as Spotify,
	SiMailboxdotorg as Mailbox,
	SiGithub as GitHub,
	SiDiscord as Discord,
	SiX as X,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { discordUserId } from "@/util/discordUserId";
import { ExternalLink, Folder } from "lucide-react";
import { useState } from "react";
import { useLanyardWS, type Types } from "use-lanyard";

const tabs = [
	{
		id: "projects",
		label: "Projects",
	},
	{
		id: "activity",
		label: "Activity",
	},
	{
		id: "socials",
		label: "Socials",
	},
];

const projects = [
	{
		label: "personal-website",
		href: "https://github.com/almostJohn/personal-website",
		description: "My corner of the web — projects, ideas, and things I build.",
	},
	{
		label: "app-tsconfig",
		href: "https://github.com/almostJohn/app-tsconfig",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
	},
];

const socials = [
	{
		label: "Email",
		href: "mailto:garcia.johngale@gmail.com",
		icon: Mailbox,
	},
	{
		label: "GitHub",
		href: "https://github.com/almostJohn",
		icon: GitHub,
	},
	{
		label: "Discord",
		href: `https://discord.com/users/${discordUserId}`,
		icon: Discord,
	},
	{
		label: "X (formerly known Twitter)",
		href: "https://x.com/almostJohn1",
		icon: X,
	},
	{
		label: "Instagram",
		href: "https://instgram.com/almostjohn1",
		icon: Instagram,
	},
	{
		label: "Facebook",
		href: "https://facebook.com/alsojohn01",
		icon: Facebook,
	},
];

type InfoSectionProps = {
	readonly initialData?: Types.Presence;
};

export function InfoSection({ initialData }: InfoSectionProps) {
	const data = useLanyardWS(discordUserId, { initialData });

	const [activeTab, setActiveTab] = useState("projects");

	return (
		<div className="mt-3 flex w-full flex-col">
			{/* Tabs */}
			<div className="inline-flex gap-5 border-b border-neutral-700">
				{tabs.map((tab) => {
					const isActive = activeTab === tab.id;
					return (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={cn(
								"relative cursor-pointer py-3 text-sm font-medium transition-colors",
								"hover:text-neutral-100",
								isActive ? "text-neutral-100" : "text-neutral-500",
							)}
						>
							{tab.label}
							{isActive && (
								<span className="animate-in fade-in slide-in-from-bottom-1 absolute right-0 bottom-0 left-0 h-0.5 bg-neutral-100 duration-300" />
							)}
						</button>
					);
				})}
			</div>

			{activeTab === "projects" && (
				<div className="mt-4 flex flex-col gap-4">
					{projects.map((project) => (
						<a
							key={project.label}
							href={project.href}
							rel="noreferrer"
							target="_blank"
							className="group flex gap-3 rounded-md border border-neutral-700 p-4 text-sm font-medium transition-colors hover:bg-neutral-700"
						>
							<Folder className="size-5 shrink-0" />
							<div className="flex flex-col gap-1">
								<h3 className="text-lg leading-tight font-semibold group-hover:underline">
									{project.label}
								</h3>
								<p className="w-full text-sm whitespace-pre-wrap text-neutral-500">
									{project.description}
								</p>
							</div>
						</a>
					))}
				</div>
			)}

			{activeTab === "activity" && (
				<div className="mt-4 flex w-full flex-col">
					<div className="flex flex-col gap-2">
						<span className="text-sm font-medium">Current Activity</span>
						{data?.spotify ? (
							<div className="flex flex-col gap-2 rounded-md bg-neutral-700 p-4 shadow">
								<h3 className="inline-flex items-center gap-1 text-xs font-bold">
									Listening to Spotify <Spotify className="size-3 shrink-0" />
								</h3>
								<div className="flex items-center gap-3">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={data.spotify.album_art_url!}
										alt={data.spotify.song}
										className="size-20 rounded"
									/>
									<div className="flex flex-col text-xs/normal">
										<p className="font-medium">{data.spotify.song}</p>
										<p className="text-neutral-500">by {data.spotify.artist}</p>
									</div>
								</div>
							</div>
						) : (
							<div className="flex justify-center rounded-md bg-neutral-700 p-6 shadow-md">
								<p className="text-center text-sm font-light italic">
									I&apos;m not currently doing anything!
								</p>
							</div>
						)}
					</div>
				</div>
			)}

			{activeTab === "socials" && (
				<div className="mt-4 flex flex-col gap-4">
					{socials.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							rel="noreferrer"
							target="_blank"
							className="group flex items-center justify-between rounded-md border border-neutral-700 p-4 text-sm font-medium transition-colors hover:bg-neutral-700"
						>
							<Icon className="size-6 shrink-0" />
							<div className="flex flex-1 items-center justify-center">
								{label}
							</div>
							<ExternalLink className="size-5 shrink-0 text-neutral-500 group-hover:text-neutral-100" />
						</a>
					))}
				</div>
			)}
		</div>
	);
}
