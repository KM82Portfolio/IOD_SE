const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Please refactor your code');
console.log(result);