import Link from "next/link";
import { Icons } from "./Icons";
import { ModeToggle } from "./ModeToggle";

export function Header() {
	return (
		<nav className="mt-3 flex w-full items-center justify-between px-6 py-4">
			<Link
				href="/"
				className="inline-flex size-8 items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 p-1 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-800"
			>
				<Icons.CurlyBrackets className="size-6 shrink-0" />
			</Link>
			<div className="flex items-center gap-2">
				<a
					href="https://twitter.com/almostJohn1"
					rel="noreferrer"
					target="_blank"
					className="inline-flex size-8 items-center justify-center rounded p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
				>
					<Icons.Twitter className="size-5 shrink-0" />
				</a>
				<a
					href="https://github.com/almostJohn"
					rel="noreferrer"
					target="_blank"
					className="inline-flex size-8 items-center justify-center rounded p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
				>
					<Icons.GitHub className="size-5 shrink-0" />
				</a>
				<ModeToggle />
			</div>
		</nav>
	);
}
