let instance = null;

class DataBase {
    constructor() {
        this.isOpenConnection = false;
    }

    openConnection() {
        const createConnection = new Connection();
        this.isOpenConnection = true;
    }

    closeConnection() {
        const removeConnection = new Connection();

        if(removeConnection.closeConnection()) {
            this.isOpenConnection = false;
        } else {
            console.log("Connection isn't open");
        }
    }

    executeQueries() {
        this.isOpenConnection ? console.log("Querie is executing") : console.log("Querie failed! Connection isn't open");
    }
}

class Connection {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.connection = true;

        return instance;
    }
    
    closeConnection() {
        if (this.connection) {
            this.connection = false;

            return true;
        }

        return false;
    }
}

let newDataBase = new DataBase();
newDataBase.openConnection();
console.log(newDataBase.isOpenConnection);
newDataBase.executeQueries();
newDataBase.closeConnection();
console.log(newDataBase.isOpenConnection);
newDataBase.closeConnection();
newDataBase.executeQueries();
