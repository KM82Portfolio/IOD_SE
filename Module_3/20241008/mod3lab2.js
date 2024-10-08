obj1 = {k1:1,k2:'val2',k3:{k31:11,k32:'val32'}};
const obj2 = obj1
console.log(obj1,obj2);

var _ = require('lodash');
let obj3 = _.cloneDeep(obj1);
console.log(obj1['k3']['k32'],obj2['k3']['k32'],obj3['k3']['k32']);

//Shallow Copy
const obj4={};
for(let key in obj1){
    obj4[key]=obj1[key];
}

obj2['k3']['k32']='val33'; //changing both obj1 & obj2
obj3['k3']['k32']='val33'; //changing obj3 directly
obj4['k3']['k32']='val33'; //obj1 already changed by obj2['k3']['k32']='val33'; earlier

console.log(obj1['k3']['k32'],obj2['k3']['k32'],obj3['k3']['k32'],obj4['k3']['k32']);
//const obj4 = {...obj};

//Spread {...<obj to clone without referencing>}
obj5 = {k1:1,k2:'val2',k3:{k31:11,k32:'val32'}};
obj6 = {k1:1,k2:'val2',k3:{k31:11,k32:'val32'}};

let obj7={...obj5}; //obj7 is a clone of obj5 not referenced to obj5

obj7.k1=2;
console.log(obj5.k1,obj7.k1);