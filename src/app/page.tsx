import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page() {
	return (
		<div className="mx-auto flex min-h-screen max-w-2xl flex-col place-content-center px-8 py-16 lg:px-6 lg:py-0">
			<Header />
			<Footer />
		</div>
	);
}
