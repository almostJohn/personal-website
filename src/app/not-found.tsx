import { Icons } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
	title: "page not found!",
};

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="space-y-8 text-center">
				<div className="flex justify-center">
					<Icons.NotFound className="size-36 shrink-0" />
				</div>
				<p className="text-sm text-neutral-500">
					oops! the page you are looking for does not exist.
				</p>
				<Link
					href="/"
					className="text-sm font-medium underline underline-offset-4"
				>
					return home
				</Link>
			</div>
		</div>
	);
}
