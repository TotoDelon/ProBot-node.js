var sys = require('sys')
var exec = require('child_process').exec;
var child;

child = exec("pwd", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
function puts(error, stdout, stderr) { sys.puts(stdout) }

consoleLog = function (toWrite) {
    console.info(toWrite);
}

doubleLog = function (toWrite) {
    this.channelLog(toWrite)
    this.consoleLog(toWrite)
}
