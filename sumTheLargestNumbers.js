const sumLargestNumbers = function(data) {
    data.sort((a, b) => a - b);
    let largest = data[data.length-1];
    let secondLargest = data[data.length-2];
    return largest + secondLargest;

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

