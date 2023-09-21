function saturdayFun(arg='roller-skate'){
    return `This Saturday, I want to ${arg}!`
}

function mondayWork(arg='go to the office'){
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(arg1){
    const inner = function (arg2='special'){
        return `You are ${arg1}${arg2}${arg1}!`
    }
    return inner;
}

console.log(wrapAdjective("%")("a dedicated programmer"));