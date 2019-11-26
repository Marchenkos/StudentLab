class AbstractEngine {
    showEngineType() {
    }
}

class AbstractWheel {
    showWheelsType() {
    }
}

class AbstractSuspension {
    showSuspensionType() {
    }
}

class AbstractFactoyVehicle {
    addWheels() {
        return new AbstractWheel();
    }

    addEngine() {
        return new AbstractEngine();
    }

    addSuspension() {
        return new AbstractSuspension();
    }
}

class ExtraCar extends AbstractFactoyVehicle {
    addWheels() {
        return new BigWheel();
    }

    addEngine() {
        return new GasEngine();
    }

    addSuspension() {
        return new Cabriolet();
    }
}

class StandardCar extends AbstractFactoyVehicle {
    addWheels() {
        return new BigWheel();
    }

    addEngine() {
        return new DieselEngine();
    }

    addSuspension() {
        return new Coupe();
    }
}

class EconomyCar extends AbstractFactoyVehicle {
    addWheels() {
        return new SmallWheel();
    }

    addEngine() {
        return new PetrolEngine();
    }

    addSuspension() {
        return new StationWagon();
    }
}

class BigWheel extends AbstractWheel {
    constructor() {
        super();
        this.type = "Big wheels";
    }

    showWheelsType() {
        console.log(this.type);
    }
}

class SmallWheel extends AbstractWheel {
    constructor() {
        super();
        this.type = "Small wheels";
    }

    showWheelsType() {
        console.log(this.type);
    }
}

class PetrolEngine extends AbstractEngine {
    constructor() {
        super();
        this.type = "Petrol engine";
    }

    showEngineType() {
        console.log(this.type);
    }
}

class DieselEngine extends AbstractEngine {
    constructor() {
        super();
        this.type = "Diesel engine";
    }

    showEngineType() {
        console.log(this.type);
    }
}

class GasEngine extends AbstractEngine {
    constructor() {
        super();
        this.type = "Gas engine";
    }

    showEngineType() {
        console.log(this.type);
    }
}

class Cabriolet extends AbstractSuspension {
    constructor() {
        super();
        this.type = "Cabriolet";
    }

    showSuspensionType() {
        console.log(this.type);
    }
}

class Coupe extends AbstractSuspension {
    constructor() {
        super();
        this.type = "Coupe";
    }

    showSuspensionType() {
        console.log(this.type);
    }
}

class StationWagon extends AbstractSuspension {
    constructor() {
        super();
        this.type = "Station wagon";
    }

    showSuspensionType() {
        console.log(this.type);
    }
}

class Car {
    constructor(carType) {
        this.wheels = carType.addWheels();
        this.engine = carType.addEngine();
        this.suspension = carType.addSuspension();
    }

    showEngine() {
        this.engine.showEngineType();
    }

    showWeels() {
        this.wheels.showWheelsType();
    }

    showSuspension() {
        this.suspension.showSuspensionType();
    }
}

let newExtraCar = new Car(new ExtraCar);
newExtraCar.showEngine();
newExtraCar.showWeels();
newExtraCar.showSuspension();

let newEconomyCar = new Car(new EconomyCar);
newEconomyCar.showEngine();
newEconomyCar.showWeels();
newEconomyCar.showSuspension();

let newStandartCar = new Car(new StandardCar);
newStandartCar.showEngine();
newStandartCar.showWeels();
newStandartCar.showSuspension();
