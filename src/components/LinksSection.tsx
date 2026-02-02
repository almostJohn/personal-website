const links = [
	{ label: "email", href: "mailto:garcia.johngale@gmail.com" },
	{ label: "github", href: "https://github.com/almostJohn" },
	{ label: "x.com", href: "https://x.com/almostJohn1" },
	{ label: "fb.com", href: "https://facebook.com/alsojohn01" },
	{ label: "discord", href: "https://discord.com/users/996354867708841984" },
];

export function LinksSection() {
	return (
		<section>
			<h2 className="mb-6 text-2xl font-bold">
				<span className="text-[#5865f2]">*</span> links
			</h2>
			<div className="flex flex-wrap items-center gap-x-4 text-sm">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						rel="noreferrer"
						target="_blank"
						className="text-neutral-400 transition-colors duration-200 hover:text-[#5865f2]"
					>
						{link.label}
					</a>
				))}
			</div>
		</section>
	);
}
