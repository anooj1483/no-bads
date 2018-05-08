# no-bads
Javascript library for finding bad words (profanity).
This library will help you to check bad words in user input fields like feedback form, username entry, messages, etc.

This library is still under development. For avoiding issues like, the word 'Hello' is a bad word because it contains "Hell".
For avoiding this issues, I've created a excpetions list. 

Supported Languages: English
If anyone has details of any language, add the json array file containing the bad words in lib/bads folder. 

The filename should be like this "bads_<language code>.json"

# Usage

```javascript
var NoBads = require('../lib/NoBads'),
   filter = new NoBads({languages:['en']});


var word = "Where is that hell"
console.log(filter.isBad(word));
```

# Options

```javascript
{
  languages:["en","mal"],//en- English (default), mal- Malayalam
  disableDefaultException:true,//false by-default (true -> disable all default exception words)
  include:["custom"],//includes custom words that needs to be avoided
  exclude:["hell"],//excludes the word hell, now hell is not a bad word
}

```
