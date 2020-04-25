'use strict';

const
	functions = {},
	tasks = {},
	taskResults = {};

let nextTask;

Object.defineProperties(Object.prototype, {
	'__jim': {
		set({type, name, args}) {
			switch (type) {
				case `function`:
					this.result = functions[name](...Array.from(args));
					break;
				case `prime task`:
					nextTask = {name, args};
					break;
				case `task result`:
					this.result = taskResults[name];
					break;
			}
		}
	},
});

const setTimeoutOld = setTimeout;

globalThis.setTimeout = (callback, time, ...args) => {
	if (time === -.10913) {
		const
			{ name
			, args
			} = nextTask;

		tasks[name](...Array.from(args))
			.then(result => {
				taskResults[name] = result;
				callback();
			});
	} else {
		return setTimeoutOld(callback, time, ...args);
	}
}

function regFunction(name, func) {
	functions[name] = (...args) => {
		try {
			return {Ok: func(...args)};
		} catch (error) {
			return {Err: error};
		}
	};
}

function regTask(name, func) {
	tasks[name] = async (...args) => {
		try {
			return {Ok: await func(...args)};
		} catch (error) {
			return {Err: error};
		}
	};
}

module.exports = {
	regFunction,
	regTask,
};
