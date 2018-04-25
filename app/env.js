module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	debug: false,
	showForkBanner: false,
	coin: "TESTMNZ",

	rpcBlacklist:[
		"stop",
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"setban",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange"
	],

	// Uncomment "bitcoind" below to automatically connect via RPC.
	// Otherwise, you can manually connect via the UI.

	bitcoind:{
		host:"komodo_core",
		port:13353,
		rpc: {
			username:"test",
			password:"net"
		}
	}
};