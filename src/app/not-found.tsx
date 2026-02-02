import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="space-y-6 text-center">
				<h1 className="text-8xl font-black text-[#5865f2]">404</h1>
				<p className="text-neutral-400">
					oops! the page you are looking for does not exist.
				</p>
				<Link
					href="/"
					className="text-neutral-400 transition-colors hover:text-[#5865f2]"
				>
					return home
				</Link>
			</div>
		</div>
	);
}
