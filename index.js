// code your solution here
function saturdayFun(satadayActivity = "roller-skate"){
    return `This Saturday, I want to ${satadayActivity}!`
}


const mondayWork = function(office = 'go to the office'){
    return `This Monday, I will ${office}.`;
    
}
mondayWork("work from home")

function wrapAdjective(result = '*'){
    /*if(emphatic = result) {
        console.log(`You are ${result}a hard worker${result}!`);
    } else if(emphatic = result) {
        console.log("You are ||a dedicated programmer||!");
    }*/


    return function(george = 'special'){

        return `You are ${result}${george}${result}!`

    }
}
const promptFun = wrapAdjective("!!!");



