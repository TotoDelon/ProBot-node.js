exports.run = async (bot, message, args) => {
  let commandfile = require(`../commands/info.js`);
  commandfile.run(bot, message, args);
}
