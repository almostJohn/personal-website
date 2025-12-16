import { InfoSection } from "@/components/InfoSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { discordUserId } from "@/util/discordUserId";
import {
	SiNextdotjs as NextJSIcon,
	SiReact as ReactIcon,
} from "@icons-pack/react-simple-icons";

export default async function Page() {
	const lanyardPromise = await fetch(
		`https://api.lanyard.rest/v1/users/${discordUserId}`,
	);
	const lanyardData = await lanyardPromise.json();

	return (
		<div className="mx-auto flex min-h-screen max-w-2xl flex-col p-6 pt-12 pb-32 md:pt-20">
			<div className="flex flex-col gap-6">
				<div className="flex items-start">
					<Avatar className="size-30 rounded-full border border-neutral-700">
						<AvatarImage
							src="https://github.com/almostJohn.png"
							alt="almostJohn"
						/>
						<AvatarFallback className="rounded-full bg-neutral-800 text-4xl font-bold">
							AJ
						</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl leading-tight font-bold">John</h2>
					<span className="text-sm">
						<a
							href="https://github.com/almostJohn"
							rel="noreferrer"
							target="_blank"
							className="hover:underline"
						>
							almostJohn
						</a>{" "}
						• he/him
					</span>
				</div>
				<p className="w-full text-sm/6.5 whitespace-pre-wrap">
					I&apos;m a Software Developer based in the Philippines. I love
					building things, shuffling cards, and solving problems. I love
					language design and web development. I mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="inline-flex items-center justify-center gap-1 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs font-medium whitespace-nowrap underline"
					>
						<NextJSIcon className="size-3.5 shrink-0" /> Next.js
					</a>
					, a full-stack framework built with{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="inline-flex items-center justify-center gap-1 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs font-medium whitespace-nowrap underline"
					>
						<ReactIcon className="size-3.5 shrink-0" /> React
					</a>
					.
				</p>
			</div>
			<InfoSection initialData={lanyardData.data} />
		</div>
	);
}
