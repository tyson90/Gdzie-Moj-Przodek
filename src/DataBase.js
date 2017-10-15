import { Logger } from './Helper';

export class MyDB {
	_db_data = {
		grave: [],
		graveyard: [],
	}
	
	add(tbl, col, val) {
		this._db_data[tbl].push({
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
	// fakeDb,
}