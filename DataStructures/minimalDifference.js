function minimalDifference(array, k) {
    let pair = [array[0]];
    let arrayForBackpack = [];

    for(let number of array) {
        if(number > k) {
            pair.push(number);

            break;
        }

        arrayForBackpack.push(number);
    }

    let backpack = [];
    let bestSum = 0;

    for (let i = arrayForBackpack.length - 1; i >= 0; i--) {
        let currentBackpack = [];
        let currentSum = 0;

        if(arrayForBackpack[i] < k) {
            currentBackpack.push(arrayForBackpack[i]);
            currentSum = arrayForBackpack[i];

            for (let j = i - 1; j >= 0; j--) {
                currentSum = currentBackpack.reduce((a, b) => a + b);

                if(arrayForBackpack[j] + currentSum < k) {
                    currentBackpack.push(arrayForBackpack[j]);
                }

            }
        }

        if(currentSum <= k && currentSum > bestSum && currentBackpack.length > 1) {
            backpack = currentBackpack;
            bestSum = currentSum;
        }
    }

    if (k - bestSum < pair.reduce((a, b) => a + b) - k) {
        pair = [backpack[0], backpack[1]];
    }

    return pair;
}

console.log(minimalDifference([1, 9, 12, 18, 21, 25], 22));