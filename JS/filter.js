// Given an integer array arr and a filtering function fn,
// return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i)
// evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.



let filter = (arr, fn) => {
    let array = [];
    for (let i = 0; i < arr.length; i ++) {
        if (fn(arr[i], i)) {
            array.push(arr[i]);
        }
        // return arr;
    }
    return array;
}
