class Logger {
	constructor(format = '[date]: [message]') {
		this.format = format;
	}

	log(message) {
		const color = '';
		const level = '';
		this._log(message, level, color);
	}

	info(message) {
		const color = 'color: #0000FF';
		const level = 'INFO';
		this._log(message, level, color);
	}

	warning(message) {
		const color = 'color: #ffc100';
		const level = 'WARNING';
		this._log(message, level, color);
	}
	
	error(message) {
		const color = 'color: #ff1a00';
		const level = 'ERROR';
		this._log(message, level, color);
	}

	_convertDateToStrring(date) {
		return date.toLocaleString();
	}

	_createVocabulary(message, level, color) {
		let date = new Date();

		return {
		    '[date]': this._convertDateToStrring(date),
		    '[message]': message,
		    '[level]': level,
		    '[color]': color
		};
	}

	_log(message, level, color) {
		let vocabulary = this._createVocabulary(message, level, color);

		if (Array.isArray(message) || typeof message === 'object') {
		    vocabulary['[message]'] = '';
		    console.log(`%c ${this._format(vocabulary)}`, color);
		    console.table(message);
		} else {
		    console.log(`%c ${this._format(vocabulary)}`, color);
		}
	}

	_format(vocabulary) {
		let formattedString = this.format;

		for (let key in vocabulary) {
		    formattedString = formattedString.replace(key, vocabulary[key]);
		}

		return formattedString;
	}
}

let logger = new Logger('[date] [level]: [message]');
logger.log('hello');
logger.info('hello');
logger.warning({ 'f': 'bla', 's': 'blabla' });
logger.error('hello');
logger.error({ 'f': 'bla', 's': 'blabla' });
