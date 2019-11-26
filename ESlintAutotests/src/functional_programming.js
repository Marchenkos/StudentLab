export function applyPartial(action) {
    const firstArguments = Array.prototype.slice.call(arguments, 1);

    return (...args) => action.apply(this, [...firstArguments, ...args]);
}

export function curry(action) {
    const arity = action.length;

    return function returnFunction(...args) {
        if (args.length >= arity) {
            return action.apply(this, args);
        }

        return (...moreArgs) => {
            const newArgs = [...args, ...moreArgs];

            return returnFunction(...newArgs);
        };
    };
}

export function memoize(action) {
    const cacheValues = new Map();

    return (...args) => {
        const parameters = args[0];

        if (cacheValues.has(parameters.toString())) {
            console.log("From cache");

            return cacheValues.get(parameters.toString());
        }

        console.log("Calculating");
        const result = action(parameters);
        cacheValues.set(parameters.toString(), result);

        return result;
    };
}

export function lazy(action) {
    const arrayOfParameters = Array.prototype.slice.call(arguments, 1);

    return () => action.apply(this, arrayOfParameters);
}
