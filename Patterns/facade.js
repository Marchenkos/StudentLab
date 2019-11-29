class VideoFile {
    constructor(fileName) {
        this.name = fileName;
    }
}

class Codec {
    constructor(format) {
        this.format = format;
    }

    convert() {
    }
}

class MPG4Codec extends Codec {
    constructor() {
        super("MPG4");
    }

    convert(fileName) {
        console.log(`Convert ${fileName} to MPG4 format`);
    }
}

class OGGCodec extends Codec {
    constructor() {
        super("OGG");
    }

    convert(fileName) {
        console.log(`Convert ${fileName} to OGG format`);
    }
}

class VideoConverter {
    constructor() {
    }

    convert(fileName, codec) {
        codec.convert(fileName);
    }
}

class SimpleConverter {
    convert(fileName, format) {
        let videoFile = new VideoFile(fileName);
        let converter = new VideoConverter();

        if (format == "MPG4") {
            let mpg4 = new MPG4Codec();
            converter.convert(videoFile.name, mpg4)
        } else if(format == "OGG") {
            let ogg = new OGGCodec();
            converter.convert(videoFile.name, ogg);
        } else {
            console.log("No corect format. Choose between MPG4 and OGG");
        }
    }
}

let video = "Theory of the big bang";
let converter = new SimpleConverter();
converter.convert(video, "MPG4");
converter.convert(video, "HD");
converter.convert(video, "OGG");
