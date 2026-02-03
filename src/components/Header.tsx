import Link from "next/link";
import { Icons } from "./Icons";
import { ModeToggle } from "./ModeToggle";

export function Header() {
	return (
		<nav className="mt-3 flex w-full items-center justify-between px-6 py-4">
			<Link href="/" className="text-sm font-bold underline underline-offset-4">
				almostjohn
			</Link>
			<div className="flex items-center gap-2">
				<a
					href="https://github.com/almostJohn"
					rel="noreferrer"
					target="_blank"
					className="inline-flex size-7 items-center justify-center rounded border border-neutral-300 p-1 transition-colors hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800"
				>
					<Icons.GitHub className="size-4 shrink-0" />
				</a>
				<ModeToggle />
			</div>
		</nav>
	);
}
