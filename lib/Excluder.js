let baseExcp = require('./exceptions/exceptions.json');
let f_de = require('./exceptions/f_de.json');
let f_en = require('./exceptions/f_en.json');
let f_es = require('./exceptions/f_es.json');
let f_fr = require('./exceptions/f_fr.json');
let f_it = require('./exceptions/f_it.json');
let f_nl = require('./exceptions/f_nl.json');
let m_de = require('./exceptions/m_de.json');
let m_en = require('./exceptions/m_en.json');
let m_es = require('./exceptions/m_es.json');
let m_fr = require('./exceptions/m_fr.json');
let m_it = require('./exceptions/m_it.json');
let m_nl = require('./exceptions/m_nl.json');
let _ = require('underscore');


function Excluder(){}


Excluder.prototype.getAllExceptions = function () {
	var exceptions = baseExcp;
	// exceptions = _.union(baseExcp,
	// 	f_de,
	// 	f_nl,
	// 	f_es,
	// 	f_fr,
	// 	f_it,
	// 	f_en,
	// 	m_de,
	// 	m_en,
	// 	m_es,
	// 	m_fr,
	// 	m_it,
	// 	m_nl);
	return exceptions;
}

module.exports = new Excluder();


