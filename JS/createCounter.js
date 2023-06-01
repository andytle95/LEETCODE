// Write a function createCounter. It should accept an initial integer init.
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

let increment = (up) => {
    return up + 1;
}

let reset = (zero) => {
    return zero;
}

let decrement = (decrease) => {
    return decrease - 1;
}



let createCounter = (init) => {
    increment(init);
    reset(init);
    decrement(init);
}
