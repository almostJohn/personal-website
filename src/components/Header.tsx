import { Lanyard } from "./lanyard/Lanyard";

export function Header() {
	return (
		<main>
			<section>
				<h1 className="text-6xl leading-tight font-bold">
					Hey, I&apos;m <span className="text-blue-600">John</span>!
				</h1>
				<p className="text-2xl font-light">Software Developer</p>
			</section>
			<Lanyard />
		</main>
	);
}
