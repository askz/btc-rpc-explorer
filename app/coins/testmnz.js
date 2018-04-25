var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"Monaize",
	logoUrl:"/img/logo/testmnz.svg",
	siteTitle:"TESTMNZ Explorer",
	nodeTitle:"Monaize Full Node",
	nodeUrl:"https://monaize.com/",
	currencyUnits:[
		{
			name:"TESTMNZ",
			multiplier:1,
			default:true,
			values:["", "testmnz", "TESTMNZ"],
			decimalPlaces:8
		},
		{
			name:"mTESTMNZ",
			multiplier:1000,
			values:["mtestmnz"],
			decimalPlaces:5
		}
	],
	genesisBlockHash: "09ea07477992c131d92692edbc91edbeca1665f8c3a2574651fa7352bb060b0c",
	genesisCoinbaseTransactionId: "f6fae763cd20cb070344e5fc42e09b88296956cec36914d41c0d903b3c694824",
	genesisCoinbaseTransaction: {
		"txid": "f6fae763cd20cb070344e5fc42e09b88296956cec36914d41c0d903b3c694824",
		"version": 1,
		"locktime": 0,
		"vin": [
			{
				"coinbase": "510101",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 257142857.16695050,
				"n": 0,
				"scriptPubKey": {
					"asm": "031d43926ea309bb883577ef18ab145df529c7e7cb1b6d1ae9b37f85d98f61be14 OP_CHECKSIG",
					"hex": "21031d43926ea309bb883577ef18ab145df529c7e7cb1b6d1ae9b37f85d98f61be14ac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"RNAeVFjJrgsTtCGD1sjkUk4apuDGsqcj6K"
					]
				}
			}
		],
		"vjoinsplit": [
		]
	},	
	specialTransactions:{
	},
	historicalData: [
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Komodo/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return responseBody[0].price_usd;
			}
			
			return -1;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 840000);

		return eras[index];
	}
};