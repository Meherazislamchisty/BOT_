module.exports = {
	config: {
		name: "offbot",
		version: "1.0",
		author: "Samir",
		countDown: 45,
		role: 2,
		shortDescription: "Turn off bot",
		longDescription: "Turn off bot",
		category: "owner",
		guide: "{p}{n}"
	},
	onStart: async function ({event, api}) {
		api.sendMessage("╔═════════════╗\n\n📴Successfully Turned Off Archives System ✅\n╚═════════════╝",event.threadID, () =>process.exit(0))}
};
