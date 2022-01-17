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
		HEROXP:0x6c,
		HEROHP:0x5c,
		HEROSP:0x60,
		RYUJIXP:0x344,
		MORGANAXP:0x5ec,
		ANNXP:0x894,
		YUSUKEXP:0xb3c,
		BOUGHTPICRITES:0x0b44,
		PENDINGPICRITES:0x0b48, /* if there is an error after buying, they are queued here */
		UNLOCKEDSHOPFLAG:0x0b4c,
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
		setValue('heroxp', tempFile.readU32(this.Offsets.HEROXP));
		setValue('herohp', tempFile.readU32(this.Offsets.HEROHP));
		setValue('herosp', tempFile.readU32(this.Offsets.HEROSP));
		setValue('ryujixp', tempFile.readU32(this.Offsets.RYUJIXP));
		setValue('morganaxp', tempFile.readU32(this.Offsets.MORGANAXP));
		setValue('annxp', tempFile.readU32(this.Offsets.ANNXP));
		setValue('yusukexp', tempFile.readU32(this.Offsets.YUSUKEXP));
		setValue('boughtpicrites', tempFile.readU16(this.Offsets.BOUGHTPICRITES));
	},

	/* save function */
	save:function(){
		tempFile.writeU32(this.Offsets.MONEY, getValue('money'));
		tempFile.writeU32(this.Offsets.HEROXP, getValue('heroxp'));
		tempFile.writeU32(this.Offsets.HEROHP, getValue('herohp'));
		tempFile.writeU32(this.Offsets.HEROSP, getValue('herosp'));
		tempFile.writeU32(this.Offsets.RYUJIXP, getValue('ryujixp'));
		tempFile.writeU32(this.Offsets.MORGANAXP, getValue('morganaxp'));
		tempFile.writeU32(this.Offsets.ANNXP, getValue('annxp'));
		tempFile.writeU32(this.Offsets.YUSUKEXP, getValue('yusukexp'));
		/*var boughtPicrites=getValue('boughtpicrites');
		tempFile.writeU16(this.Offsets.BOUGHTPICRITES, boughtPicrites);*/
		/*var unlockedShopByte=tempFile.readU8(this.Offsets.UNLOCKEDSHOPFLAG) & ~0x01;
		tempFile.writeU8(this.Offsets.UNLOCKEDSHOPFLAG, unlockedShopByte+(boughtPicrites>=5000)?0x01:0x00);*/
	}
}
