pd = require('pandas-js')
const df = new DataFrame(Immutable.Map({x: new Series([1, 2]), y: new Series([2, 3])}));
console.log(df)