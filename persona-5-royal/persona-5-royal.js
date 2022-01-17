/*
	Persona 5 Royal for HTML5 Save Editor v20220117
	by Marc Robledo 2016-2017
	subworx 2022
*/

SavegameEditor={
	Name:'Persona 5 Royal',
	Filename:'DATA.DAT',

	Offsets:{
		MONEY:0x357c,
		PROTAGONISTXP:0x6c,
		PROTAGONISTSTATS:0x6c,
		RYUJIXP:0x344,
		BOUGHTPICRITES:0x0b44,
		PENDINGPICRITES:0x0b48, /* if there is an error after buying, they are queued here */
		UNLOCKEDSHOPFLAG:0x0b4c,
	},

	Constants:{
		PROTAGONISTSTATS:[
			'XP',
			'HP',
			'SP',
			'Courage',
			'Knowledge',
			'Expression',
			'Understanding',
			'Diligence'
		],
		CHARACTERSTATS:[
			'XP',
			'HP',
			'SP'
		]
	},

	/* check if savegame is valid */
	checkValidSavegame:function(){
		return (tempFile.fileSize===262144)
	},

	/* preload function */
	preload:function(){
		setNumericRange('money', 0, 9999999);
		setNumericRange('boughtpicrites', 0, 5000);
	},

	/* load function */
	load:function(){
		tempFile.fileName='DATA.DAT';

		setValue('money', tempFile.readU32(this.Offsets.MONEY));
		setValue('boughtpicrites', tempFile.readU16(this.Offsets.BOUGHTPICRITES));

		/* PROTAGONISTSTATS */
		for(var i=0; i<this.Constants.PROTAGONISTSTATS.length; i++){
			var val,input;
			/*if(i==24 || i==25){
				val=tempFile.readF32(this.Offsets.PROTAGONISTSTATS+i*4);
				//console.log((this.Offsets.STATS+i*4).toString(16));
				input=inputFloat('stat'+i, 0.0, 9.0, val);
			}else{ */
				val=tempFile.readU32(this.Offsets.PROTAGONISTSTATS+i*4);
				input=inputNumber('protagoniststat'+i, 0, 0xffffffff, val);
			//}

			document.getElementById('protagoniststats').appendChild(
				row(
					[8,4],
					label('protagoniststat'+i, this.Constants.PROTAGONISTSTATS[i]),
					input
				)
			);
		}
	},

	/* save function */
	save:function(){
		tempFile.writeU32(this.Offsets.MONEY, getValue('money'));
		var boughtPicrites=getValue('boughtpicrites');
		tempFile.writeU16(this.Offsets.BOUGHTPICRITES, boughtPicrites);
		var unlockedShopByte=tempFile.readU8(this.Offsets.UNLOCKEDSHOPFLAG) & ~0x01;
		tempFile.writeU8(this.Offsets.UNLOCKEDSHOPFLAG, unlockedShopByte+(boughtPicrites>=5000)?0x01:0x00);
	}
}
