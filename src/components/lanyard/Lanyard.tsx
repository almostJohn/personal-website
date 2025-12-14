import { discordUserId } from "@/util/discordUserId";
import { Status } from "./Status";

export async function Lanyard() {
	const lanyardPromise = await fetch(
		`https://api.lanyard.rest/v1/users/${discordUserId}`,
	);
	const lanyardData = await lanyardPromise.json();

	return <Status initialData={lanyardData.data} className="mt-6" />;
}
