export function getDiscordAvatarUrl(userId: string, avatarHash: string) {
	return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${avatarHash.startsWith("a_") ? "gif" : "png"}`;
}
