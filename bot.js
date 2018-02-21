const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const functions = require('./includes/functions.js')
const prefix = '??';
const status = 'streaming'; //online, dnd, idle, offline, streaming
const isInExtinction = false;
const token = 'Your token here';

var sys = require('sys')
var exec = require('child_process').exec;
var child;

var guildID = '414812967541014528';

var twitchstreamchannel = ''; // leave blank if you don't use status "streaming" or if u don't have twitch channel
var game = 'PrøBot :: ??info'

/* Impossible de créer cette fonction ailleurs...)
 > Reste des fonctions dans includes/functions.js */
channelLog = function (toWrite) {
    var channelLog = bot.channels.get('414819725928038410');
    channelLog.send(toWrite);
}

bot.on('ready', () => {
    // bot.user.setAvatar('./images/avatar.png')
    // Création des emojis
    consoleLog("[?] Recherche de l'emoji \"ayy1\"...")
    var actualGuild = bot.guilds.get(guildID);
    var emojiList = actualGuild.emojis.map(e=>e.toString()).join(' ');
    if(emojiList.indexOf('ayy1') < 0) {
        doubleLog("[!] Création de l'emoji \"ayy1\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/ayy1.png', 'ayy1')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"ayy1\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var ayy1 = bot.emojis.find("name", "ayy1");
            doubleLog("[!] Emoji \"ayy1\" créé: " + ayy1);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"ayy1\" existe.");
    }
    if(emojiList.indexOf('ayy2') < 0) {
        doubleLog("[!] Création de l'emoji \"ayy2\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/ayy2.png', 'ayy2')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"ayy2\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var ayy2 = bot.emojis.find("name", "ayy2");
            doubleLog("[!] Emoji \"ayy2\" créé: " + ayy2);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"ayy2\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }


    if(emojiList.indexOf('thonk') < 0) {
        doubleLog("[!] Création de l'emoji \"thonk\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/thonk.png', 'thonk')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"thonk\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var thonk = bot.emojis.find("name", "thonk");
            doubleLog("[!] Emoji \"thonk\" créé: " + thonk);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"thonk\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('shell') < 0) {
        doubleLog("[!] Création de l'emoji \"shell\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/shell.png', 'shell')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"shell\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var shell = bot.emojis.find("name", "shell");
            doubleLog("[!] Emoji \"shell\" créé: " + shell);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"shell\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('github') < 0) {
        doubleLog("[!] Création de l'emoji \"github\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/github.png', 'github')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"github\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var github = bot.emojis.find("name", "github");
            doubleLog("[!] Emoji \"github\" créé: " + github);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"github\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('floobits') < 0) {
        doubleLog("[!] Création de l'emoji \"floobits\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/floobits.png', 'floobits')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"floobits\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var floobits = bot.emojis.find("name", "floobits");
            doubleLog("[!] Emoji \"floobits\" créé: " + floobits);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"floobits\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('check') < 0) {
        doubleLog("[!] Création de l'emoji \"check\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/check.png', 'check')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"check\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var check = bot.emojis.find("name", "check");
            doubleLog("[!] Emoji \"check\" créé: " + check);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"check\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('mayonez') < 0) {
        doubleLog("[!] Création de l'emoji \"mayonez\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/mayonez.png', 'mayonez')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"mayonez\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var mayonez = bot.emojis.find("name", "mayonez");
            doubleLog("[!] Emoji \"mayonez\" créé: " + mayonez);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"mayonez\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }

    if(emojiList.indexOf('mousline') < 0) {
        doubleLog("[!] Création de l'emoji \"mousline\"")
        try {
            bot.guilds.get(guildID).createEmoji('./images/emojis/mousline.png', 'mousline')
        } catch(err) {
            doubleLog("[FATAL] Une erreur est survenue lors de la création de l'emoji \"mousline\". ```js\n" + err + "```");
            doubleLog("[!] Arrêt du bot dû à une erreur.");
            isInExtinction = true;
            return;
        }
        setTimeout(function() {
            var mousline = bot.emojis.find("name", "mousline");
            doubleLog("[!] Emoji \"mousline\" créé: " + mousline);
        }, 5000);
    } else {
        consoleLog("[?] L'emoji \"mayonez\" existe."); // Recherche de l'emoji \"ayy2\"...");
    }
    // Fin de la création des emojis
    if(status !== 'streaming') {
        bot.user.setStatus(status);
        bot.user.setPresence({ game: { name: game, type: 0 } });
    } else {
        if(twitchstreamchannel === '') bot.user.setGame(game, "https://twitch.tv/twitch")
        else bot.user.setGame(game, twitchstreamchannel)
    }
    doubleLog("[!] PrøBot connecté avec succès sur " + bot.guilds.size + " serveurs, avec " + bot.users.size + " utilisateurs et dans " + bot.channels.size + " salons ! °w°")

});

// Command Handler

bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
      if(message.author.id !== '327376797211820035') {
        if(message.author.id !== '269554301746020362') {
          return message.channel.send('Je n\'accepte pas les messages privés !');
        }
      }
        if(message.content.startsWith('reload')) {
          try {
            const args = message.content.slice('reload '.length);
            if(args.indexOf('bot.js') === -1) {
              delete require.cache[require.resolve(`./commands/${args}.js`)];
              message.reply(`The script **${args}** has been reloaded`);
              doubleLog('**.JS Reload: **```The script "' + args + '" has been reloaded by ' + message.author.username + '#' + message.author.discriminator + '```')
            } else {
              message.reply(`Bot restart...`);
              doubleLog('**Bot Info: **```The bot script has been reloaded (restarted) by ' + message.author.username + '#' + message.author.discriminator + '```')

            }
          } catch(err) {
            message.channel.send('Error: ```' + err.stack + '```')
          }
        }
        return;
    }
    if(message.member.roles.find("name", "Muet")) { message.delete(); return; }
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      try {
         let commandFile = require(`./commands/${command}.js`);
         if(command !== 'play') return commandFile.run(bot, message, args, prefix);
         commandFile.run(bot, message, args, prefix, status, twitchstreamchannel);
      } catch (err) {
         /*if(fs.readdirSync('./commands').indexOf(command) === -1) {
           message.channel.send('La commande entrée (**' + prefix + command + '**) n\'existe pas !');
           return;
         }*/

         message.reply('une erreur est survenue lors de l\'exécution de cette commande. Essaye de contacter **' + bot.users.get('327376797211820035').username + '#' + bot.users.get('327376797211820035').discriminator + '** pour avoir plus d\'infos. Un rapport d\'erreur lui a été envoyé.')
         bot.channels.get('414819725928038410').send("", {
          embed: new Discord.RichEmbed()
       	  .setTitle(":x: UNE ERREUR EST SURVENUE :x:")
    	    .setDescription(err.stack)
    	    .setColor("#ff0000")
          .setTimestamp()
          .setFooter("Joueur qui a rencontré le problème : " + message.author.tag + " // Serveur : " + message.guild.name)
          });
      }
});

bot.login(token)
