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
		SKULLHP:0x304, /* +0x4 = SP; +0x40 = XP */
		MONAHP:0x5ac,
		PANTHERHP:0x854,
		FOXHP:0xafc,
		QUEENHP:0xda4,
		ORACLEHP:0x104c,
		NOIRHP:0x12f4,
		CROWHP:0x159c,
		VIOLETHP:0x1844,
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
		setNumericRange('secondhandpoints', 0, 9999);
		setNumericRange('heroknowledge', 1, 192);
		setNumericRange('herocharm', 1, 132);
		setNumericRange('heroproficiency', 1, 87);
		//setNumericRange('heroguts', 1, );
		setNumericRange('herokindness', 1, 136);
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
		setValue('skullhp', tempFile.readU32(this.Offsets.SKULLHP));
		setValue('skullsp', tempFile.readU32(this.Offsets.SKULLHP+0x4));
		setValue('skullxp', tempFile.readU32(this.Offsets.SKULLHP+0x40));
		setValue('monahp', tempFile.readU32(this.Offsets.MONAHP));
		setValue('monasp', tempFile.readU32(this.Offsets.MONAHP+0x4));
		setValue('monaxp', tempFile.readU32(this.Offsets.MONAHP+0x40));
		setValue('pantherhp', tempFile.readU32(this.Offsets.PANTHERHP));
		setValue('panthersp', tempFile.readU32(this.Offsets.PANTHERHP+0x4));
		setValue('pantherxp', tempFile.readU32(this.Offsets.PANTHERHP+0x40));
		setValue('foxhp', tempFile.readU32(this.Offsets.FOXHP));
		setValue('foxsp', tempFile.readU32(this.Offsets.FOXHP+0x4));
		setValue('foxxp', tempFile.readU32(this.Offsets.FOXHP+0x40));
		setValue('queenhp', tempFile.readU32(this.Offsets.QUEENHP));
		setValue('queensp', tempFile.readU32(this.Offsets.QUEENHP+0x4));
		setValue('queenxp', tempFile.readU32(this.Offsets.QUEENHP+0x40));
		setValue('oraclehp', tempFile.readU32(this.Offsets.ORACLEHP));
		setValue('oraclesp', tempFile.readU32(this.Offsets.ORACLEHP+0x4));
		setValue('oraclexp', tempFile.readU32(this.Offsets.ORACLEHP+0x40));
		setValue('noirhp', tempFile.readU32(this.Offsets.NOIRHP));
		setValue('noirsp', tempFile.readU32(this.Offsets.NOIRHP+0x4));
		setValue('noirxp', tempFile.readU32(this.Offsets.NOIRHP+0x40));
		setValue('crowhp', tempFile.readU32(this.Offsets.CROWHP));
		setValue('crowsp', tempFile.readU32(this.Offsets.CROWHP+0x4));
		setValue('crowxp', tempFile.readU32(this.Offsets.CROWHP+0x40));
		setValue('violethp', tempFile.readU32(this.Offsets.VIOLETHP));
		setValue('violetsp', tempFile.readU32(this.Offsets.VIOLETHP+0x4));
		setValue('violetxp', tempFile.readU32(this.Offsets.VIOLETHP+0x40));
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
		tempFile.writeU32(this.Offsets.SKULLHP, getValue('skullhp'));
		tempFile.writeU32(this.Offsets.SKULLHP+0x4, getValue('skullsp'));
		tempFile.writeU32(this.Offsets.SKULLHP+0x40, getValue('skullxp'));
		tempFile.writeU32(this.Offsets.MONAHP, getValue('monahp'));
		tempFile.writeU32(this.Offsets.MONAHP+0x4, getValue('monasp'));
		tempFile.writeU32(this.Offsets.MONAHP+0x40, getValue('monaxp'));
		tempFile.writeU32(this.Offsets.PANTHERHP, getValue('pantherhp'));
		tempFile.writeU32(this.Offsets.PANTHERHP+0x4, getValue('panthersp'));
		tempFile.writeU32(this.Offsets.PANTHERHP+0x40, getValue('pantherxp'));
		tempFile.writeU32(this.Offsets.FOXHP, getValue('foxhp'));
		tempFile.writeU32(this.Offsets.FOXHP+0x4, getValue('foxsp'));
		tempFile.writeU32(this.Offsets.FOXHP+0x40, getValue('foxxp'));
		tempFile.writeU32(this.Offsets.QUEENHP, getValue('queenhp'));
		tempFile.writeU32(this.Offsets.QUEENHP+0x4, getValue('queensp'));
		tempFile.writeU32(this.Offsets.QUEENHP+0x40, getValue('queenxp'));
		tempFile.writeU32(this.Offsets.ORACLEHP, getValue('oraclehp'));
		tempFile.writeU32(this.Offsets.ORACLEHP+0x4, getValue('oraclesp'));
		tempFile.writeU32(this.Offsets.ORACLEHP+0x40, getValue('oraclexp'));
		tempFile.writeU32(this.Offsets.NOIRHP, getValue('noirhp'));
		tempFile.writeU32(this.Offsets.NOIRHP+0x4, getValue('noirsp'));
		tempFile.writeU32(this.Offsets.NOIRHP+0x40, getValue('noirxp'));
		tempFile.writeU32(this.Offsets.CROWHP, getValue('crowhp'));
		tempFile.writeU32(this.Offsets.CROWHP+0x4, getValue('crowsp'));
		tempFile.writeU32(this.Offsets.CROWHP+0x40, getValue('crowxp'));
		tempFile.writeU32(this.Offsets.VIOLETHP, getValue('violethp'));
		tempFile.writeU32(this.Offsets.VIOLETHP+0x4, getValue('violetsp'));
		tempFile.writeU32(this.Offsets.VIOLETHP+0x40, getValue('violetxp'));
		tempFile.writeU8(this.Offsets.LOCKPICK, getValue('lockpick'));
		tempFile.writeU8(this.Offsets.SILKYARN, getValue('silkyarn'));
		tempFile.writeU8(this.Offsets.TINCLASP, getValue('tinclasp'));
		/*var boughtPicrites=getValue('boughtpicrites');
		tempFile.writeU16(this.Offsets.BOUGHTPICRITES, boughtPicrites);*/
		/*var unlockedShopByte=tempFile.readU8(this.Offsets.UNLOCKEDSHOPFLAG) & ~0x01;
		tempFile.writeU8(this.Offsets.UNLOCKEDSHOPFLAG, unlockedShopByte+(boughtPicrites>=5000)?0x01:0x00);*/
	}
}
