const array = [5, 7, [ 4, [2, 8], 8, [1,3], 2 ], [ 9, [1, 4, 6] ], 1, 8];

function treeSum(arr) {
    let sum = 0;

    for(let value of arr) {
        if(Array.isArray(value)) {
            sum += treeSum(value);
        } else {
            sum += value
        }
    }

    return sum;
}

console.log(treeSum(array));