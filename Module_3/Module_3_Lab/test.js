date = new Date();
wakeupTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric', 
    hour12: false
}).format(date);

console.log(wakeupTime);

function main(num) {
    let i = num;
    return {
      add: function (num) {
        i += num;
        return this;
      },
      subtract: function (num) {
        i -= num;
        return this;
      },
      divide: function (num) {
        i /= num;
        return this;
      },
      multiple: function (num) {
        i *= num;
        return this;
      },
      print() {
        return i;
      },
    };
  }
  
  const x = main(10)
  const res = x.add(6).subtract(4).divide(3).multiple(2).print();
  
  cosole.log(res)