
const Discord = require('Discord.js');
exports.run = (bot, message, args, prefix) => {
    if (message.content.startsWith(prefix+'avatar')) {
        if (!message.mentions.users.size) {
            return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setTitle("Avatar")
				.setDescription("Avatar de **" + message.author.tag + "**: ")
				.setColor("#fffff")
        .setTimestamp()
				.setFooter('Demandé par ' + message.author.tag)
				.setImage(message.author.avatarURL)
			})
        }
        const avatarList = message.mentions.users.map(user => {
            return `Avatar de ${user.username}: ${user.displayAvatarURL}`;
        });
        message.channel.send(avatarList);
      }
}
