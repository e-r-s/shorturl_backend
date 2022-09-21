const stream = require('stream');

function setupStreams(dataInputStream, dataOutputStream, callback) {

    var index = 0;


    dataInputStream.on('data', function (chunk) {
        var ch = JSON.parse(Buffer.from(chunk).toString('utf8'));
        ch.id = index;
        index++;
        dataOutputStream.write(ch);
    });
    dataInputStream.on('end', function () {
        callback();
    });


}


let readable = new stream.Readable();
let writable = new stream.Writable({
    objectMode: true,
    write: (chunk, encoding, callback) => {
        console.log(chunk);
        callback(null, true);
    }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;