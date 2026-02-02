import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Item = {
	title: string;
	href: string;
	role: string;
	description: string;
};

type SectionListProps = {
	title: string;
	items: Item[];
	viewAllHref?: string;
	viewAllText?: string;
};

export function SectionList({
	title,
	items,
	viewAllHref,
	viewAllText,
}: SectionListProps) {
	return (
		<section className="mb-16">
			<h2 className="mb-6 text-2xl font-bold">
				<span className="text-[#5865f2]">*</span> {title}
			</h2>
			<div className="space-y-8">
				{items.map((item) => (
					<div key={item.title} className="group">
						<Link href={item.href}>
							<h3 className="mb-1 text-xl font-semibold transition-colors duration-200 group-hover:text-[#5865f2]">
								{item.title}
							</h3>
							<p className="mb-2 text-sm text-neutral-400">{item.role}</p>
							<p className="text-neutral-300">
								{item.description.toLowerCase()}
							</p>
						</Link>
					</div>
				))}
			</div>
			{viewAllHref && (
				<Link
					href={viewAllHref}
					className="group mt-6 inline-flex items-center gap-1 font-medium text-[#5865f2] hover:underline"
				>
					{viewAllText}
					<ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</Link>
			)}
		</section>
	);
}
