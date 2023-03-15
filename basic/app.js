//custom module build in sample.js file 
const myModule=require('./sample');//when I import custom module into here, we want to use "./filename"like this

console.log(myModule.sayHello('Aruna'));//I write the sayHello function in sample.js,In here I take only sayHello method 

myModule.multi(4,5);//multi funtion in sample.js