import { LinksSection } from "@/components/LinksSection";
import { Name } from "@/components/Name";
import { SectionList } from "@/components/SectionList";
import { Code2, MapPin } from "lucide-react";

const projectItems = [
	{
		title: "personal-website",
		role: "creator and maintainer",
		description: "My corner of the web — projects, ideas, and things I build.",
		href: "https://almostjohn.vercel.app",
	},
	{
		title: "app-tsconfig",
		role: "creator and maintainer",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
	},
];

export default async function Page() {
	return (
		<div className="mt-12 flex flex-col">
			<div className="mb-16 space-y-4">
				<h1 className="mb-4 text-4xl font-bold">
					<Name text="john gale garcia" />
				</h1>
				<div className="flex flex-col gap-2 text-neutral-400">
					<div className="flex items-center gap-2">
						<MapPin className="size-4 shrink-0" />
						<p>olongapo city, philippines</p>
					</div>
					<div className="flex items-center gap-2">
						<Code2 className="size-4 shrink-0" />
						<p>software developer</p>
					</div>
				</div>
				<p className="leading-relaxed">
					i&apos;m a 25 y/o software developer based in the philippines. i love
					building things, shuffling cards, and solving problems. i love
					language design and web development. i mostly use{" "}
					<a
						href="https://www.typescriptlang.org/"
						rel="noreferrer"
						target="_blank"
						className="text-[#5865f2] underline underline-offset-2"
					>
						typescript
					</a>
					,{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="text-[#5865f2] underline underline-offset-2"
					>
						next.js
					</a>
					, a full-stack framework built on top of{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="text-[#5865f2] underline underline-offset-2"
					>
						react
					</a>
					.
				</p>
			</div>
			<SectionList
				title="projects"
				items={projectItems}
				viewAllHref="/projects"
				viewAllText="all projects"
			/>
			<LinksSection />
		</div>
	);
}
