const Discord = require('discord.js')
const os = require('os');
const moment = require("moment");
const macosRelease = require('macos-release');
var prefix = "??"
exports.run = (bot, message, args, prefix) => {
    if (message.content.startsWith(prefix+'info')) {
        var used_os = os.type().replace("_", " ") + os.release();
        if(used_os.indexOf('Darwin') > -1) used_os = 'Darwin ' + os.release() + ' (Mac OSX/macOS ' + macosRelease().name + ' ' + macosRelease().version + ')';
        message.channel.send('', {
            embed: new Discord.RichEmbed()
            .setTitle("Informations avancées")
            .setDescription(':tools: Temps d\'exécution: **' + format(process.uptime()) + '**\n:pushpin: Latence de l\'API: **' + Math.round(bot.ping) + ' millisecondes**\n\nSystème d\'exploitation utilisé: **' + used_os + '**\n:hammer_pick: Temps d\'exécution de l\'OS: **' + format(os.uptime()) + '**\n\n' + bot.emojis.find("name", "shell") + ' **Bot développé en _NodeJS_ par Léo Thery & TotoDelon.**\n'+ bot.emojis.find("name", "github") +' **GitHub: https://github.com/ProDiscordBotJS **\n' + bot.emojis.find("name", "floobits") + '** Floobits: https://floobits.com/LeoThery/ProDiscordBot.JS **')
            .setColor("#0073ff")
            .setTimestamp()
            .setFooter('Demandé par ' + message.author.tag)
          });
    }
}

function format(seconds){
  var days = 0;
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  if(hours >= 24) {
      days = Math.floor(hours/24);
      hours = Math.floor(hours - (days*24));
  }
  return days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes et ' + seconds + ' secondes';
}
