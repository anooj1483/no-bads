var NoBads = require('../lib/NoBads'),
   filter = new NoBads({languages:['en']});


var word = "Where is that wtf"
console.log(filter.isBad(word));
