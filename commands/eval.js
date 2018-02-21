const Discord = require('discord.js')
const fs = require("fs")
const moment = require("moment")
const os = require("os")
const { inspect } = require('util');
const { post } = require('snekfetch');
exports.run = async (bot, message, args, prefix) => {
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(`//g, "" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)`);
        else
            return text;
      }
    if (message.content.startsWith(prefix + "eval")) {
      if(message.author.id !== "327376797211820035") return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

        message.channel.send(`\`\`\`js\n${evaled}\n\`\`\``);
      } catch (error) {
      message.channel.send(`The following error occured \`\`\`js\n${error.stack}\`\`\``);
    }
  }
}
