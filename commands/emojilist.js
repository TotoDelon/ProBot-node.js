const Discord = require("discord.js")
exports.run = async (bot, message, args, prefix) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(' ');
  if(emojiList === "") return;
  message.channel.send("Voici la liste des emojis ajoutés sur ce serveur: " + emojiList);
}
