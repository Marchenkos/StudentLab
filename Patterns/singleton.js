let instance = null;

class DataBase {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        this.isConnectionOpened  = false;
    }
    openConnection() {
        this.isConnectionOpened  = true;
    }

    closeConnection() {
        if(this.isConnectionOpened) {
            this.isOpenConnection = false;
        } else {
            console.log("Connection isn't open");
        }
    }

    executeQueries() {
        this.isOpenConnection ? console.log("Querie is executing") : console.log("Querie failed! Connection isn't open");
    }
}


let newDataBase = new DataBase();
console.log(newDataBase.isConnectionOpened);
newDataBase.openConnection();
console.log(newDataBase.isConnectionOpened);

let newDataBase2 = new DataBase();
console.log(newDataBase2.isConnectionOpened);
newDataBase.closeConnection();