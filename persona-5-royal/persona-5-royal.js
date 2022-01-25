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
		HEROHP:0x5c, /* +0x4 = SP; +0x10 = XP */
		HEROKNOWLEDGE:0x13868, /* U16, 2 Byte */ /* +2 = charm, proficiency, guts, kindness = 0x13870 */
		RYUJIHP:0x304, /* +0x4 = SP; +0x40 = XP */
		MORGANAHP:0x5ac,
		ANNHP:0x854,
		YUSUKEHP:0xafc,
		MAKOTOHP:0xda4,
		HARUHP:0x104c,
		FUTABAHP:0x12f4,
		GOROHP:0x159c,
		KASUMIHP:0x1844,
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
		setValue('herohp', tempFile.readU32(this.Offsets.HEROHP));
		setValue('herosp', tempFile.readU32(this.Offsets.HEROHP+0x4));
		setValue('heroxp', tempFile.readU32(this.Offsets.HEROHP+0x10));
		setValue('heroknowledge', tempFile.readU16(this.Offsets.HEROKNOWLEDGE));
		setValue('herocharm', tempFile.readU16(this.Offsets.HEROKNOWLEDGE+0x2));
		setValue('heroproficiency', tempFile.readU16(this.Offsets.HEROKNOWLEDGE+0x4));
		setValue('heroguts', tempFile.readU16(this.Offsets.HEROKNOWLEDGE+0x6));
		setValue('herokindness', tempFile.readU16(this.Offsets.HEROKNOWLEDGE+0x8));
		setValue('ryujihp', tempFile.readU32(this.Offsets.RYUJIHP));
		setValue('ryujisp', tempFile.readU32(this.Offsets.RYUJIHP+0x4));
		setValue('ryujixp', tempFile.readU32(this.Offsets.RYUJIHP+0x40));
		setValue('morganahp', tempFile.readU32(this.Offsets.MORGANAHP));
		setValue('morganasp', tempFile.readU32(this.Offsets.MORGANAHP+0x4));
		setValue('morganaxp', tempFile.readU32(this.Offsets.MORGANAHP+0x40));
		setValue('annhp', tempFile.readU32(this.Offsets.ANNHP));
		setValue('annsp', tempFile.readU32(this.Offsets.ANNHP+0x4));
		setValue('annxp', tempFile.readU32(this.Offsets.ANNHP+0x40));
		setValue('yusukehp', tempFile.readU32(this.Offsets.YUSUKEHP));
		setValue('yusukesp', tempFile.readU32(this.Offsets.YUSUKEHP+0x4));
		setValue('yusukexp', tempFile.readU32(this.Offsets.YUSUKEHP+0x40));
		setValue('makotohp', tempFile.readU32(this.Offsets.MAKOTOHP));
		setValue('makotosp', tempFile.readU32(this.Offsets.MAKOTOHP+0x4));
		setValue('makotoxp', tempFile.readU32(this.Offsets.MAKOTOHP+0x40));
		setValue('haruhp', tempFile.readU32(this.Offsets.HARUHP));
		setValue('harusp', tempFile.readU32(this.Offsets.HARUHP+0x4));
		setValue('haruxp', tempFile.readU32(this.Offsets.HARUHP+0x40));
		setValue('futabahp', tempFile.readU32(this.Offsets.FUTABAHP));
		setValue('futabasp', tempFile.readU32(this.Offsets.FUTABAHP+0x4));
		setValue('futabaxp', tempFile.readU32(this.Offsets.FUTABAHP+0x40));
		setValue('gorohp', tempFile.readU32(this.Offsets.GOROHP));
		setValue('gorosp', tempFile.readU32(this.Offsets.GOROHP+0x4));
		setValue('goroxp', tempFile.readU32(this.Offsets.GOROHP+0x40));
		setValue('kasumihp', tempFile.readU32(this.Offsets.KASUMIHP));
		setValue('kasumisp', tempFile.readU32(this.Offsets.KASUMIHP+0x4));
		setValue('kasumixp', tempFile.readU32(this.Offsets.KASUMIHP+0x40));
		setValue('lockpick', tempFile.readU8(this.Offsets.LOCKPICK));
		setValue('silkyarn', tempFile.readU8(this.Offsets.SILKYARN));
		setValue('tinclasp', tempFile.readU8(this.Offsets.TINCLASP));
	},

	/* save function */
	save:function(){
		tempFile.writeU32(this.Offsets.MONEY, getValue('money'));
		tempFile.writeU32(this.Offsets.SECONDHANDPOINTS, getValue('secondhandpoints'));
		tempFile.writeU32(this.Offsets.MEMENTOFLOWERS, getValue('mementoflowers'));
		tempFile.writeU32(this.Offsets.HEROHP, getValue('herohp'));
		tempFile.writeU32(this.Offsets.HEROHP+0x4, getValue('herosp'));
		tempFile.writeU32(this.Offsets.HEROHP+0x10, getValue('heroxp'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE, getValue('heroknowledge'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE+0x2, getValue('herocharm'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE+0x4, getValue('heroproficiency'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE+0x6, getValue('heroguts'));
		tempFile.writeU16(this.Offsets.HEROKNOWLEDGE+0x8, getValue('herokindness'));
		tempFile.writeU32(this.Offsets.RYUJIHP, getValue('ryujihp'));
		tempFile.writeU32(this.Offsets.RYUJIHP+0x4, getValue('ryujisp'));
		tempFile.writeU32(this.Offsets.RYUJIHP+0x40, getValue('ryujixp'));
		tempFile.writeU32(this.Offsets.MORGANAHP, getValue('morganahp'));
		tempFile.writeU32(this.Offsets.MORGANAHP+0x4, getValue('morganasp'));
		tempFile.writeU32(this.Offsets.MORGANAHP+0x40, getValue('morganaxp'));
		tempFile.writeU32(this.Offsets.ANNHP, getValue('annhp'));
		tempFile.writeU32(this.Offsets.ANNHP+0x4, getValue('annsp'));
		tempFile.writeU32(this.Offsets.ANNHP+0x40, getValue('annxp'));
		tempFile.writeU32(this.Offsets.YUSUKEHP, getValue('yusukehp'));
		tempFile.writeU32(this.Offsets.YUSUKEHP+0x4, getValue('yusukesp'));
		tempFile.writeU32(this.Offsets.YUSUKEHP+0x40, getValue('yusukexp'));
		tempFile.writeU32(this.Offsets.MAKOTOHP, getValue('makotohp'));
		tempFile.writeU32(this.Offsets.MAKOTOHP+0x4, getValue('makotosp'));
		tempFile.writeU32(this.Offsets.MAKOTOHP+0x40, getValue('makotoxp'));
		tempFile.writeU32(this.Offsets.HARUHP, getValue('haruhp'));
		tempFile.writeU32(this.Offsets.HARUHP+0x4, getValue('harusp'));
		tempFile.writeU32(this.Offsets.HARUHP+0x40, getValue('haruxp'));
		tempFile.writeU32(this.Offsets.FUTABAHP, getValue('futabahp'));
		tempFile.writeU32(this.Offsets.FUTABAHP+0x4, getValue('futabasp'));
		tempFile.writeU32(this.Offsets.FUTABAHP+0x40, getValue('futabaxp'));
		tempFile.writeU32(this.Offsets.GOROHP, getValue('gorohp'));
		tempFile.writeU32(this.Offsets.GOROHP+0x4, getValue('gorosp'));
		tempFile.writeU32(this.Offsets.GOROHP+0x40, getValue('goroxp'));
		tempFile.writeU32(this.Offsets.KASUMIHP, getValue('kasumihp'));
		tempFile.writeU32(this.Offsets.KASUMIHP+0x4, getValue('kasumisp'));
		tempFile.writeU32(this.Offsets.KASUMIHP+0x40, getValue('kasumixp'));
		tempfile.writeU8(this.Offsets.LOCKPICK, getValue('lockpick'));
		tempfile.writeU8(this.Offsets.SILKYARN, getValue('silkyarn'));
		tempfile.writeU8(this.Offsets.TINCLASP, getValue('tinclasp'));
		/*var boughtPicrites=getValue('boughtpicrites');
		tempFile.writeU16(this.Offsets.BOUGHTPICRITES, boughtPicrites);*/
		/*var unlockedShopByte=tempFile.readU8(this.Offsets.UNLOCKEDSHOPFLAG) & ~0x01;
		tempFile.writeU8(this.Offsets.UNLOCKEDSHOPFLAG, unlockedShopByte+(boughtPicrites>=5000)?0x01:0x00);*/
	}
}
