function addCommas(num) {
    let isNegative;
    if(num < 0){
        isNegative = true;
        num = num*-1;
    }
    let numStr = num.toString();
    let numArr = numStr.split("");
    let repetitions = Math.floor(numArr.length/3)
    let insertIdx;
    if(numArr.length % 3 != 0){
        insertIdx = numArr.length % 3;
    } else {
        insertIdx = 3;
        repetitions -= 1;
    }
    for (let i = 0; i < repetitions; i++){
        numArr.splice(insertIdx, 0, ",")
        insertIdx += 4;
    }
    if (isNegative === true){
        numArr.unshift("-")
    }
    console.log(numArr.join(""))
    return numArr.join("");
}

module.exports = addCommas;