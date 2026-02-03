import { Icons } from "./Icons";

const projects = [
	{
		title: "personal-website",
		href: "https://almostjohn.vercel.app",
		description: "My corner of the web — projects, ideas, and things I build.",
		role: "creator and maintainer",
		stack: ["next.js", "react", "tailwindcss", "typescript"],
	},
	{
		title: "app-tsconfig",
		href: "https://app-tsconfig.vercel.app",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		role: "creator and maintainer",
		stack: ["next.js", "react", "tailwindcss", "typescript"],
	},
];

export function ProjectSection() {
	return (
		<section className="mb-16">
			<div className="space-y-8">
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.href}
						rel="noreferrer"
						target="_blank"
						className="group block"
					>
						<div className="flex flex-col">
							<div className="flex w-full items-center justify-between">
								<h2 className="text-sm font-bold underline underline-offset-4">
									{project.title}
								</h2>
								<Icons.ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</div>
							<div className="mt-3">
								<p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
									{project.role}
								</p>
								<p className="text-sm text-neutral-500">
									{project.description.toLowerCase()}
								</p>
								<div className="mt-4 flex flex-wrap gap-4">
									{project.stack.map((item) => (
										<span
											key={item}
											className="inline-flex items-center justify-center rounded border border-neutral-300 bg-neutral-200 px-1 py-0.5 text-xs font-medium whitespace-nowrap dark:border-neutral-700 dark:bg-neutral-800"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
