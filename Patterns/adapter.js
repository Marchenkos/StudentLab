class IXML {
    showInXMLFormat() {
    }
}

class IJSON {
    showInJSONFormat() {
    }
}

class XMLFormatTransformer  extends IXML {
    showInXMLFormat(value) {
        return value;
    }
}

class JSONFormatTransformer extends IJSON {
    showInJSONFormat(value) {
        return value[value.length - 1];
    }
}

class ListOfBooks {
    constructor(books) {
        this.list = books;
    }

    show(XMLFormat) {
        return XMLFormat.showInXMLFormat(this.list);
    }
}

class XMLToJSONFormatAdapter extends IXML{
    constructor() {
        super();
        this.JSONFormat = new JSONFormatTransformer();
    }

    showInXMLFormat(value) {
        return this.JSONFormat.showInJSONFormat(value);
    }
}

let newList = new ListOfBooks([1, 2, 3, 4]);
let newXmlFormat = new XMLFormatTransformer();
console.log(newList.show(newXmlFormat));

let transform = new XMLToJSONFormatAdapter();
console.log(newList.show(transform));
