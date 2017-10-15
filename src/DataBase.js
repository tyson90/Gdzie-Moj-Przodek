import { Logger } from './Helper';

export class MyDB {
	add(tbl, col, val) {
		fakeDb[tbl].push({
			[col]: val
		});
		
		Logger.dumpLog(fakeDb);
	}
}

var fakeDb = {
	grave: [],
	graveyard: [],
}

const DataBase = new MyDB();

module.exports = {
	DataBase,
	fakeDb,
}