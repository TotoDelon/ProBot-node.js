const Discord = require('discord.js')
exports.run = (bot, message, args, prefix) => {
    if(message.content.startsWith(prefix+"ping")) {
        message.channel.send('Lancement du ping...').then(m => m.edit(`:ping_pong: Pong ! Ma latence est de \`\`${m.createdTimestamp - message.createdTimestamp}\`\` millisecondes. _ Plus d'infos dans le **${prefix}info** !_`) ); //Latence de l'API: ${Math.round(bot.ping)}ms
    }
}
