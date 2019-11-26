function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;

    for(arg of arguments) {
        sum = sum + arg;
    }

    return sum * 10;
}

function applyPartial(action) {
    let firstArguments = Array.prototype.slice.call(arguments, 1);

    return (...args) => {
        return action.apply(this, [...firstArguments, ...args]);
    }
}

function curry(action) {
    let arity = action.length;

    return function returnFunction(...args) {
        if(args.length >= arity) {
            return action.apply(this, args);
        }
        else {
            return (...moreArgs) => {
                let newArgs = [...args, ...moreArgs];

                return returnFunction(...newArgs);
            }
        }
    }
}

function map(array, callback) {
    return folding(array, (element, accumulator) => {
        accumulator.push(callback(element));

        return accumulator;
    }, []);
}

function filter(array, callback) {
    return folding(array, (element, accumulator) => {
        if(callback(element)) {
            accumulator.push(element)
        }

        return accumulator;
    }, []);
}

function average(array) {
    let averageValue = folding(array, (a, b) => a + b, 0);

    return averageValue / array.length;
}

function folding(array, foldcCallback, accumulator = 0) {
    let result = accumulator;

    for(let i = 0; i < array.length; i++) {
        result = foldcCallback(array[i], result);
    }

    return result;
}

function averageOfEven(array) {
    let evenArray = filter(array, a => a % 2 == 0);
    let result = average(evenArray);

    return result;
}

function createMemoizedFunction(action) {
    return (memoize) => {
        let memoizedAction = memoize(action);

        return (parameters) => {
            return memoizedAction(parameters);
        }    
    }
}

function memoize(action) {
    let cacheValues = new Map();

    return (...args) => {
        let parameters = args[0];

        if(cacheValues.has(parameters.toString())) {
           console.log("From cache");

           return cacheValues.get(parameters.toString());
        }
        else {
           console.log("Calculating");
           let result = action(parameters);
           cacheValues.set(parameters.toString(), result);
           
           return result;
        }
    }
}

function multiplicationOfParameters(action) {
    return (...args) => {
        let result = 1;

        for(let i = 0; i < args.length; i++) {
            result = result * args[i];
        }

        return result;
    }
}

function forLazy(arrayPar, n) {
    let newArray = []; 
    
    for(key of arrayPar) {
        if(key > n) {
            newArray.push(key);
        }
    } 
    
    return newArray; 
} 
    
function lazy(action) { 
    let arrayOfParameters = Array.prototype.slice.call(arguments, 1);
    
    return () => {
        return action.apply(this, arrayOfParameters); 
    }
}

class Shape {
    constructor(name) {
        this.name = name;
    }

    calculateArea() {
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super("Rectangle");
        this.height = height;
        this.width = width;
    }
    
    calculateArea() {
        return this.height * this.width;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Square");
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
}

class ShapesStore extends Shape {
    constructor(shapesArray) {
        super();
        this.shapesArray = shapesArray;
    }

    calculateArea() {
        let areaValue = 0;

        for(let i = 0; i < this.shapesArray.length; i++) {
            areaValue = areaValue + this.shapesArray[i].calculateArea();
        }

        return areaValue;
    }
}

let partial1 = applyPartial(pureFunction, 3, 3, 2, 6);
console.log(partial1(4, 8));
let partial2 = applyPartial(pureFunction, 15, 4);
console.log(partial2(7, 8, 9, 10));
let result = curry(pureFunction);
console.log(result(2)(3)(5)(3)(5)(2));
console.log(map([1, 5, 10, 5, 11, 44], (a) => a * 2));
console.log(filter([1, 5, 10, 5, 11, 44], (a) => a > 5));
console.log(average([1, 5, 6]));
console.log(averageOfEven([1,2,3,4,5]));
let mult = multiplicationOfParameters(pureFunction);
console.log(mult(10, 2, 30, 1, 4, 8));
console.log(folding([1,2,3,4], (a, b) => a + b));
let lazyAction = lazy(forLazy, [1,2,3,4,5], 3);
console.log(lazyAction());
let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(15, 2);
console.log("Area: " + rectangle1.calculateArea() + "\nWidth: " + rectangle1.width + "\nHeight: " + rectangle1.height);
let square1 = new Square(10);
let square2 = new Square(20);
let circle = new Circle(17);
console.log("Area: " + square1.calculateArea() + "\nSide length: " + square1.sideLength);
console.log("Area: " + circle.calculateArea() + "\nRadius: " + circle.radius);
let store = new ShapesStore([rectangle1, square1, square2, rectangle2, circle]);
console.log("Total area of shapes: " + store.calculateArea());