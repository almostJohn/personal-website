import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/Popover";
import userEvent from "@testing-library/user-event";

describe("components/ui/popover", () => {
	it("opens the popover when trigger is clicked", async () => {
		const user = userEvent.setup();

		render(
			<Popover>
				<PopoverTrigger>Label</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		);

		expect(screen.queryByText("Content")).not.toBeInTheDocument();

		await user.click(screen.getByText("Label"));

		expect(screen.getByText("Content")).toBeInTheDocument();
	});
});
