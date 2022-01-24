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
		SECONDHANDPOINTS:0x411c,
		MEMENTOFLOWERS:0x17da8, /* U16, crashes at FFFF */
		HEROXP:0x6c,
		HEROHP:0x5c,
		HEROSP:0x60,
		HEROKNOWLEDGE:0x13868, /* U16, 2 Byte */
		HEROGUTS:0x1386e,
		HEROKINDNESS:0x13870,
		HEROCHARM:0x1386a,
		HEROPROFICIENCY:0x1386c,
		RYUJIXP:0x344,
		MORGANAXP:0x5ec,
		ANNXP:0x894,
		YUSUKEXP:0xb3c,
		LOCKPICK:0x264c, /* U8 */
		SILKYARN:0x2569,
		TINCLASP:0x256b,
	},

	/* check if savegame is valid */
	checkValidSavegame:function(){
		return (tempFile.fileSize===262144)
	},

	/* preload function */
	preload:function(){
		setNumericRange('money', 0, 9999999);
		setNumericRange('mementoflowers', 0, 500);
	},

	/* load function */
	load:function(){
		tempFile.fileName='DATA.DAT';

		setValue('money', tempFile.readU32(this.Offsets.MONEY));
		setValue('secondhandpoints', tempFile.readU32(this.Offsets.SECONDHANDPOINTS));
		setValue('mementoflowers', tempFile.readU32(this.Offsets.MEMENTOFLOWERS));
		setValue('heroxp', tempFile.readU32(this.Offsets.HEROXP));
		setValue('herohp', tempFile.readU32(this.Offsets.HEROHP));
		setValue('herosp', tempFile.readU32(this.Offsets.HEROSP));
		setValue('heroknowledge', tempFile.readU16(this.Offsets.HEROKNOWLEDGE));
		setValue('heroguts', tempFile.readU16(this.Offsets.HEROGUTS));
		setValue('herokindness', tempFile.readU16(this.Offsets.HEROKINDNESS));
		setValue('herocharm', tempFile.readU16(this.Offsets.HEROCHARM));
		setValue('heroproficiency', tempFile.readU16(this.Offsets.HEROPROFICIENCY));
		setValue('ryujixp', tempFile.readU32(this.Offsets.RYUJIXP));
		setValue('morganaxp', tempFile.readU32(this.Offsets.MORGANAXP));
		setValue('annxp', tempFile.readU32(this.Offsets.ANNXP));
		setValue('yusukexp', tempFile.readU32(this.Offsets.YUSUKEXP));
		setValue('lockpick', tempFile.readU8(this.Offsets.LOCKPICK));
		setValue('silkyarn', tempFile.readU8(this.Offsets.SILKYARN));
		setValue('tinclasp', tempFile.readU8(this.Offsets.TINCLASP));
	},

	/* save function */
	save:function(){
		tempFile.writeU32(this.Offsets.MONEY, getValue('money'));
		tempFile.writeU32(this.Offsets.SECONDHANDPOINTS, getValue('secondhandpoints'));
		tempFile.writeU32(this.Offsets.MEMENTOFLOWERS, getValue('mementoflowers'));
		tempFile.writeU32(this.Offsets.HEROXP, getValue('heroxp'));
		tempFile.writeU32(this.Offsets.HEROHP, getValue('herohp'));
		tempFile.writeU32(this.Offsets.HEROSP, getValue('herosp'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE, getValue('heroknowledge'));
		tempFile.writeU16(this.Offsets.HEROGUTS, getValue('heroguts'));
		tempFile.writeU16(this.Offsets.HEROKINDNESS, getValue('herokindness'));
		tempFile.writeU32(this.Offsets.RYUJIXP, getValue('ryujixp'));
		tempFile.writeU32(this.Offsets.MORGANAXP, getValue('morganaxp'));
		tempFile.writeU32(this.Offsets.ANNXP, getValue('annxp'));
		tempFile.writeU32(this.Offsets.YUSUKEXP, getValue('yusukexp'));
		tempfile.writeU8(this.Offsets.LOCKPICK, getValue('lockpick'));
		tempfile.writeU8(this.Offsets.SILKYARN, getValue('silkyarn'));
		tempfile.writeU8(this.Offsets.TINCLASP, getValue('tinclasp'));
		/*var boughtPicrites=getValue('boughtpicrites');
		tempFile.writeU16(this.Offsets.BOUGHTPICRITES, boughtPicrites);*/
		/*var unlockedShopByte=tempFile.readU8(this.Offsets.UNLOCKEDSHOPFLAG) & ~0x01;
		tempFile.writeU8(this.Offsets.UNLOCKEDSHOPFLAG, unlockedShopByte+(boughtPicrites>=5000)?0x01:0x00);*/
	}
}
