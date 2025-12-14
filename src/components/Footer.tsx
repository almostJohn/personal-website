import { discordUserId } from "@/util/discordUserId";
import { DiscordPopover } from "./DiscordPopover";
import { GitHubPopover } from "./GitHubPopover";
import { TwitterPopover } from "./TwitterPopover";
import { InstagramPopover } from "./InstagramPopover";
import { FacebookPopover } from "./FacebookPopover";
import { EmailPopover } from "./EmailPopover";

export async function Footer() {
	const lanyardPromise = await fetch(
		`https://api.lanyard.rest/v1/users/${discordUserId}`,
	);
	const lanyardData = await lanyardPromise.json();

	return (
		<footer className="mt-6 flex items-center">
			<EmailPopover />
			<GitHubPopover />
			<TwitterPopover />
			<DiscordPopover initialData={lanyardData.data} />
			<InstagramPopover />
			<FacebookPopover />
		</footer>
	);
}
