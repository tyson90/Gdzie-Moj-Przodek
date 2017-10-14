export const DEBUG = !!__DEV__;

export function formatFloat(val) {
	val= (val +'').split('.');
	if(!val[1]) val[1]= '00';
	while(val[1].length < 2) val[1]= '0'+''+ val[1];
	
	let v1= val[0].split('').reverse(),
			val1= [];
	val[0]= '';
	for (var i = 0; i < v1.length; i++) {
		if(i % 3 == 0) val[0] += ' ';
		val[0] += ''+ v1[i];
	}
	val[0]= val[0].split('').reverse().join('').replace(/\s$/, '');
	// console.log(val1);
	// val[0]= val1.join(' ');
	
	return val.join(',');
}

export function getDateStringFromDays(days=0, starting_day='') {
	let day= starting_day ? new Date(starting_day) : new Date();
	day.setDate(day.getDate() + days);
	day= [day.getFullYear(), day.getMonth() +1, day.getDate()];
	for (var i= 1; i < day.length; i++) {
		if (day[i] < 10) day[i]= '0'+ day[i];
	}
	day= day.join('-');
	return day;
}

export function fullFormattedDateString(custom_string, is_end=false) {
	let date_string,
			time_string= is_end ? '23:59:59' : '00:00:00';
	
	let matches= `${custom_string}`.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
	if(matches) {
		date_string= matches[0];
	}
	else {
		switch(custom_string *1) {
			case 1:
				date_string= getDateStringFromDays(-1);
				break;
			case 7:
				date_string= is_end ? getDateStringFromDays(-1) : getDateStringFromDays(-7);
				break;
			case 30:
				date_string= is_end ? getDateStringFromDays(-1) : getDateStringFromDays(-30);
				break;
				
			default:
				return null;
				break;
		}
	}
	
	return `${date_string} ${time_string}`;
}

export function getKeyForDateRange(d1, d2) {
	return [d1, d2].join('-').replace(/\W/g, '-').replace(/(\-)+/g, '-').replace(/(^-|-$)/g, '');
}

export function moveReportToBegin(report, reports) {
	let new_reports = [report];
	for (var i = 0; i < reports.length; i++) {
		if (reports[i].key != report.key) new_reports.push(reports[i]);
	}
	
	return new_reports;
}

function ToolsLogger() {};

ToolsLogger.prototype.dump = function(obj, lvl=0, max_lvl=2, arr_limit=10) {
    if (!DEBUG) return '';
    var self = this;
    
    var str = '\n';
    str += '\t'.repeat(lvl);
    
    if(lvl > max_lvl) return `[${typeof obj}]`;
    
    var limit= arr_limit;
    for(k in obj) {
        if (typeof obj == 'object' && obj.length && !limit--) {
            str += '[...]';
            break;
        }
        str += k+': ';
        if(typeof obj[k] == 'object' && obj[k]) str += self.dump(obj[k], lvl+1, max_lvl, limit);
        else if(typeof obj[k] == 'function') str += `[function()]`;
        else str += obj[k];
        
        str += '\n';
        str += '\t'.repeat(lvl);
    }
    
    return str;
};

ToolsLogger.prototype.buildPrettyMessage = function(...messages) {
    var max_len = 80 - 4;
    
    messages[0] += '';
    let len = messages[0].length;
        
    for (var i = 1; i < messages.length; i++) {
        let mlen = messages[i].length;
        if (mlen > len) len = mlen;
    }
    if (len > max_len) len = max_len;
        
    for (var i = 0; i < messages.length; i++) {
        messages[i] += '';
        let mlen = messages[i].length;
        if (mlen > max_len) {
            let lines = messages[i].match(new RegExp('.{1,' + (max_len + 2) + '}', 'g'));
            
            messages[i] = '| ';
            while(line = lines.shift()) {
                let mlen = line.length;
                let nbsp = mlen < len ? ' '.repeat(len - mlen) : '';
                messages[i] += `${line}${nbsp}`;
                if (lines.length) messages[i] += '\n';
            }
            messages[i] += '   |';
        } else {
            let nbsp = mlen < len ? ' '.repeat(len - mlen) : '';
            messages[i] = `| ${messages[i]}${nbsp} |`;
        }
    }
    
    let ___ = '-'.repeat(len +2);
        
    message = `Logger.log() ->
*${___}*
${messages.join('\n')}
*${___}*
    `;
    
    return message;
};

ToolsLogger.prototype.prettyLog = function(...messages) {
  if (!DEBUG) return;
	console.log(this.buildPrettyMessage(...messages));
};

ToolsLogger.prototype.prettyWarn = function(obj, max_lvl, limit) {
  if (!DEBUG) return;
  if (typeof obj != 'object') console.warn(this.buildPrettyMessage(`[${typeof obj}]`, `${' '.repeat(4)}${obj}`));
  else console.warn(this.buildPrettyMessage(...this.dump(obj, 0, max_lvl, limit).replace(/\t/g, ' '.repeat(4)).split('\n')));
};

ToolsLogger.prototype.prettyDumpLog = function(obj, max_lvl, limit) {
  if (!DEBUG) return;
  if (typeof obj != 'object') this.prettyLog(`[${typeof obj}]`, `${' '.repeat(4)}${obj}`);
  else this.prettyLog(...this.dump(obj, 0, max_lvl, limit).replace(/\t/g, ' '.repeat(4)).split('\n'));
};

ToolsLogger.prototype.log = function(...args) {
	return this.prettyLog(...args);
};

ToolsLogger.prototype.dumpLog = function(...args) {
	return this.prettyDumpLog(...args);
};

ToolsLogger.prototype.warn = function(obj, max_lvl, limit) {
	return this.prettyWarn(obj, max_lvl, limit);
};

export const Logger = new ToolsLogger();


export function interpolate(anim, start, end) {
	return anim.interpolate({
		inputRange: [0, 1],
		outputRange: [start, end]
	});
}

import Alert, { a } from './components/Alert';
export function showInfo(txt, typ) {
	switch(typ) {
		default: a(txt);
	}
}

export function getLangImg(lang) {
	switch(lang) {
		default: return require('./images/langs/undefined.png');
		case 'en': return require('./images/langs/en.png');
		case 'pl': return require('./images/langs/pl.png');
		case 'de': return require('./images/langs/de.png');
		case 'fr': return require('./images/langs/fr.png');
	}
}

export function random(from_n, to_n) {
	return Math.floor((Math.random()*(to_n - from_n + 1)) + from_n);
}

