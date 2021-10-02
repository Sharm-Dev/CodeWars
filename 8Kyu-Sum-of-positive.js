// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    const x = arr.filter(positiveNum => positiveNum >= 0).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    console.log(x)

}

positiveSum([1,2,3,4,5]);
positiveSum([1,-2,3,4,5]);
positiveSum([]);
positiveSum([-1,-2,-3,-4,-5]);
positiveSum([-1,2,3,4,-5]);