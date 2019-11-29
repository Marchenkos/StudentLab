class IYesterdayRate {
    getRate() {
    }
}

class YesterdayRate extends IYesterdayRate {
    constructor() {
        super();
    }

    getRate() {
        return ["firstInformation", "secondInformation", "thidInformation"];
    }
}

class CachedExchangeRate extends IYesterdayRate {
    constructor() {
        super();
        this.yesterdayRate = new YesterdayRate();
        this.listOfRate = [];
    }

    getRate() {
        if(this.listOfRate.length == 0) {
            this.listOfRate = [this.listOfRate, ...this.yesterdayRate.getRate()];
        }

        return this.listOfRate;
    }
}

let realClass = new YesterdayRate();
let proxyClass = new CachedExchangeRate(realClass);
console.log(proxyClass.getRate());
console.log(proxyClass.getRate());
