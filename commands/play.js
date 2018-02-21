const Discord = require('discord.js')
exports.run = (bot, message, args, prefix, status, twitchstreamchannel) => {
    if(message.author.id !== '327376797211820035') {
        if(message.author.id !== '269554301746020362') {
            message.delete();
            message.channel.send('Are you my owner ? :@');
            return;
        }
    }
    if(status !== 'streaming') {
        bot.user.setStatus(status);
        bot.user.setPresence({ game: { name: args.join(' '), type: 0 } });
    } else {
        if(twitchstreamchannel === '') bot.user.setGame(args.join(' '), "https://twitch.tv/twitch")
        else bot.user.setGame(args.join(' '), twitchstreamchannel)
    }
}
