
let badsList	=	require('./bads/bads_en.json');
let excludeList	=	require('./Excluder').getAllExceptions();
let _ = require('underscore');
let baseLanguages = ['en'];


function NoBads(options){
	options	= options || {};
	this.disableDefaultException = options.disableDefaultException || false;
	this.languages = (options.languages != undefined && options.languages instanceof Array)?Array.prototype.concat.apply(baseLanguages,options.languages):baseLanguages;
	this.loadLanguages(options);
	this.exclude = (options.exclude != undefined && options.exclude instanceof Array)?Array.prototype.concat.apply(excludeList,options.exclude):excludeList;
	this.exclude = (this.disableDefaultException)?((options.exclude != undefined && options.exclude instanceof Array)?options.exclude:[]):this.exclude;
}

NoBads.prototype.loadLanguages = function(options){

	try{
		let self = this;
		this.include = [];
		this.languages = _.uniq(this.languages);
		this.languages.map(function(langCode){
			var badsOfLang = require('./bads/bads_'+langCode+'.json');
			self.include = _.union(self.include,badsOfLang);
		},this);
		self.include = (options.include != undefined && options.include instanceof Array)?Array.prototype.concat.apply(self.include,options.include):(self.include);
	}catch(err){
		console.log('-- NoBads Alert --- Error occured while loading language. Load default language');
		this.include = (options.include != undefined && options.include instanceof Array)?Array.prototype.concat.apply(badsList,options.include):(badsList);
	}

}

NoBads.prototype.isBad = function (words) {
	let self = this;
	let isBad = false;
	try{
	words.split(' ').map(function (word) {
		self.include.map(function (eachBadWord) {
			return new RegExp(eachBadWord.replace(/(\W)/g, '\\$1'), 'gi');
		},this).reduce(function (o,w) {
			if (w.test(word)) {
				isBad = !self.isExcluded(word);
				return !self.isExcluded(word);
	        }
	        return o;
		},false);
	});
	return isBad;
}catch(err){
	return "-- NoBads Alert --- We got a problem. Console the err. Post the issue in our github";
}

}

NoBads.prototype.isExcluded = function (word) {
	let self = this;
	let isGood = false;

	self.exclude.map(function (eachGoodWord) {
		return new RegExp(eachGoodWord.replace(/(\W)/g, '\\$1'), 'gi');
	},self).reduce(function (o,w) {
		if (w.test(word)) {
			isGood = true;
			return true;
		}
	},false);
	return isGood;
}



module.exports = NoBads;