import { Header } from "@/components/Header";
import { ProjectSection } from "@/components/ProjectSection";

export default async function Page() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto flex max-w-2xl flex-col">
				<Header />
				<main className="mt-4 flex flex-col px-6">
					<p className="mb-6 text-sm leading-relaxed text-pretty">
						i&apos;m a 25 y/o software developer based in the philippines. i
						love building things, shuffling cards, and solving problems. i love
						language design and web development. if i&apos;m not coding,
						i&apos;m probably doing workouts, watching anime, or playing video
						games.
					</p>
					<ProjectSection />
				</main>
			</div>
		</div>
	);
}
