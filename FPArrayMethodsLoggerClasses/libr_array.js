let MyArray = {
    array : [],

    chain(array) {
        this.array = array;

        return this;
    },

    take (n, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < n; i++) {
            newArray.push(arrayValue[i]);
        }

        if(this.array != arrayValue) {
            return newArray;
        }

        this.array = newArray;

        return this;
    },

    map(callback, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < arrayValue.length; i++) {
            newArray.push(callback(arrayValue[i]));
        }

        if(this.array != arrayValue) {
            return newArray;
        }

        this.array = newArray;

        return this;
    },

    skip(n, arrayValue = this.array) {
        let newArray = [];

        for(let i = n; i < arrayValue.length; i++) {
            newArray.push(arrayValue[i]);
        }

        if(this.array != arrayValue) {
            return newArray;
        }

        this.array = newArray;

        return this;
    },

    filter(callback, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < arrayValue.length; i++) {
            if(callback(arrayValue[i])) {
                newArray.push(arrayValue[i]);
            }
        }

        if(this.array != arrayValue) {
            return newArray;
        }

        this.array = newArray;

        return this;
    },
    
    foreach(callback, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < arrayValue.length; i++) {
            newArray.push(callback(arrayValue[i]));
        }

        if(this.array != arrayValue) {
            return newArray;
        }

        this.array = newArray;

        return this;
    },
    
    value() {
        return this.array;
    }
}

const squared = (array) => {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i]);
    }

    return newArray;
}

const memoize = (fn) => {
    let cacheValues = new Map();

    return (array) => {
       if(cacheValues.has(array.toString())) {
           console.log("From cache");

           return cacheValues.get(array.toString());
       }
       else {
           console.log("Calculating");
           let result = fn(array);
           cacheValues.set(array.toString(), result);
           
           return result;
       }
   }
}

console.log(MyArray.chain([1,2,3]).take(2).map(a => 2 * a).skip(1).value());
console.log(MyArray.take(4, [1,2,3,4,5,6,7]));
console.log(MyArray.map(a => 2 * a, [1,2,3,4,5,6,7]));
console.log(MyArray.skip(2, [1,2,3,4,5,6,7]));
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(MyArray.filter(word => word.length > 6, words));
console.log(MyArray.foreach(a => 2 * a, [1,2,3]));
const memoizedAdd = memoize(squared);
console.log(memoizedAdd([1,2,3]));  
console.log(memoizedAdd([1,5,3]));  
console.log(memoizedAdd([1,2,3]));  
