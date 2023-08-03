module.exports = function reverse(n) {
    let strN = n.toString();
    let arrN = Array.from(strN);
    let revA = arrN.reverse();
    let revR = revA.join("");
    if (revA[revA.length - 1] == "-") {
        let revS = revR.substring(0, revR.length - 1);
        return Number(revS);
    } else {
        let revS = revR.substring(0, revR.length);
        return Number(revS);
    }
};