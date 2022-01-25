// // EASY: Write a function that would allow you to do this:

// var run = exercise('running');

// console.log(run()); // prints "Today's exercise: running"

// var swim = exercise('swimming');

// console.log(swim()); // prints "Today's exercise: swimming"

const run = {
    exercise: 'Todays exercise: running.',
    func: function(){
        return this.exercise
    }
}

console.log(run.func());

const swim = {
    exercise1: 'Todays exercise1: swimming.',
    func: function(){
        return this.exercise1
    }
}

console.log(swim.func());