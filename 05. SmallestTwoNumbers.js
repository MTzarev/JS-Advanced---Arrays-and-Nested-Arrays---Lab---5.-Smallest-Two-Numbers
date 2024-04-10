function smallestTwoNumbers(array) {
    let resArr = [];
    let sorted = array.sort((a, b) => a - b);
    let first = sorted[0];
    let second = sorted[1];
    resArr.push(first, second);

    return resArr.join(` `);
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));