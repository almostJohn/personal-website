import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";

describe("components/ui/avatar", () => {
	it("renders avatar image", () => {
		render(
			<Avatar>
				<AvatarImage src="https://github.com/almostJohn.png" alt="almostJohn" />
				<AvatarFallback>AJ</AvatarFallback>
			</Avatar>,
		);

		expect(screen.getByText("AJ")).toBeInTheDocument();
	});
});
