// code your solution here
function saturdayFun(defaultActivity = "roller-skate"){
   return `This Saturday, I want to ${defaultActivity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");


function mondayWork(defaultParam = "go to the office"){
    return `This Monday, I will ${defaultParam}.`;    
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function innerFunc(defaultInner = "special") {
        return `You are ${flair}${defaultInner}${flair}!`;
    }
}

wrapAdjective("a hard worker");
wrapAdjective("||")("a dedicated programmer");





