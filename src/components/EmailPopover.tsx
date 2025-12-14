import { Send } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/Popover";

export function EmailPopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="inline-flex size-10 cursor-pointer items-center justify-center rounded transition-colors hover:bg-blue-500/20">
					<Send className="size-6 shrink-0" />
				</button>
			</PopoverTrigger>
			<PopoverContent align="start" className="p-6">
				<div className="flex flex-col">
					<a
						href="mailto:garcia.johngale@gmail.com"
						rel="noreferrer"
						target="_blank"
						className="group inline-flex items-center justify-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-100 transition-colors hover:bg-neutral-900/80"
					>
						Message Me
						<ArrowUpRight className="size-4 shrink-0 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
					</a>
				</div>
			</PopoverContent>
		</Popover>
	);
}
