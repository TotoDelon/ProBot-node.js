const Discord = require('discord.js')
function processFile(inputFile, outputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream),
        upFile = new File(outputFile);
    rl.on('line', function (line) {
        console.log(line);
        upFile.writeln(line);
        return;
    });

    rl.on('close', function (line) {
        console.log(line);
        console.log('done reading file.');
    });
}
exports.run = (bot, message, args, prefix) => {
  processFile('./alts/spotify/alts.txt', './alts/spotify/used.txt');
}
