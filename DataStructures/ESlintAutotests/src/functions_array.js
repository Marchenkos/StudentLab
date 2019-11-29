export function folding(array, foldCallback, accumulator = 0) {
    let result = accumulator;

    for (let i = 0; i < array.length; i++) {
        result = foldCallback(array[i], result);
    }

    return result;
}

export function map(array, callback) {
    return folding(array, (element, accumulator) => {
        accumulator.push(callback(element));

        return accumulator;
    }, []);
}

export function filter(array, callback) {
    return folding(array, (element, accumulator) => {
        if (callback(element)) {
            accumulator.push(element);
        }

        return accumulator;
    }, []);
}

export function average(array) {
    const averageValue = folding(array, (a, b) => a + b, 0);

    return averageValue / array.length;
}

export function averageOfEven(array) {
    const evenArray = filter(array, (a) => a % 2 == 0 && a != null);
    const result = average(evenArray);

    return result;
}
