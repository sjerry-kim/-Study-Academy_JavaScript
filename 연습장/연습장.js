'use strict'

let test = function(){    console.log("테스트 함수입니다.");}

let add = (a,b) => a+b;
let messageAlert =() => alert("화살표식 함수로 바꿨습니다")

function power(a,b=undefined){
    if(b===undefined){
        return a**a;
    }else{
        return a**b;
    }
}
console.log(power(2));


let multiply = function(...a){
    let multi=1;
    for(a of arguments){
        multi *= a;
    }
    return multi;
}
console.log(multiply(1,2,3,4,5));


function meetAt(year, month, day){
    if(month===undefined&&day===undefined){
        return console.log(`${year}년`);
    }else if(day===undefined){
        return console.log(`${year}년 ${month}월`);
    }else if(true){
        return console.log(`${year}/${month}/${day}`);
    }
}

meetAt(2022);
meetAt(2032, 3);
meetAt(1987, 10, 28);