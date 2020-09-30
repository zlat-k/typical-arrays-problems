exports.min = function min(array) {

    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let tmpArrMin = array.slice()
    tmpArrMin = tmpArrMin.sort(function (a, b) {
        return a - b;
    });
    return tmpArrMin[0];
}

exports.max = function max(array) {

    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let tmpArrMax = array.slice()
    tmpArrMax = tmpArrMax.sort(function (a, b) {
        return a - b;
    });
    return tmpArrMax[tmpArrMax.length - 1];
}

exports.avg = function avg(array) {
    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let tmpArrAvg = array.slice()
    let tmp = 0;
    for (let i = 0; i < tmpArrAvg.length; i++) {
        tmp = tmp + tmpArrAvg[i];
    }
    return tmp/ tmpArrAvg.length
}

