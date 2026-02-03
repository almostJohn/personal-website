import { Header } from "@/components/Header";
import { ProjectSection } from "@/components/ProjectSection";

export default async function Page() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto flex max-w-2xl flex-col">
				<Header />
				<main className="mt-6 px-6">
					<ProjectSection />
				</main>
			</div>
		</div>
	);
}
