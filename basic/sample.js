const sayHello = function (name){
    return('Hello'+name)
}
//out put hello and name 


const multi=function(a,b){
    sum=a+b;
    console.log(sum)
}
//a+b we can calculate

module.exports={sayHello,multi};//in here if we want to use custom module we want to exports them .using {} here we can add many function name , also we can use[]array here only can add same type of datas