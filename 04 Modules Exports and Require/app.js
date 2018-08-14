'use strict';

var Greetr =require('./GREETR');

var greeter1=new Greetr();

greeter1.on('greet',function(data){
    console.log('some greeted! '+data);
});
greeter1.greet('Tony');