const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

//sending dm
bot.on('guildMemberAdd', member => {
    member.send("Welcome to the server!");
 });

//Welcome to new member chat
bot.on('guildMemberAdd', member => {
    bot.channels.get("399041704604467212").sendMessage(member + " has joined Heaven Shadow! Please connect to new members lobby and wait for staff to orientate you.");
});

//Staff notification of new user
bot.on('guildMemberAdd', member => {
    bot.channels.get('399039851288068096').sendMessage(member + " has joined the Heaven Shadow. Please contact them for orientation!");
});

//Staff notification user has left
bot.on('guildMemberRemove', member => {
    bot.channels.get('399039851288068096').sendMessage(member + " has left Heaven Shadow.");
});

//Nickname
bot.on('guildMemberAdd', member => {
    member.setNickname("🆕" + member.displayName)
});
              
//Random Message
bot.on('message', (message) => {
    
    if(message.content == 'bad bot') {
        message.reply('Ive been a very naughty bot');
    }
});

//commands
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage(member + "hey, I can help you out. My creator is totally not created by Setchi");
            break;
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "help":
            message.channel.send({embed: {
                color: 10038562,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Available Commands",
                description: "__________________",
                fields: [{
                    name: "!Help",
                    value: "Lists all available commands"
                },
                {
                    name: "!Pref (Does not work right now)",
                    value: "Selects prefered Role. (Top/Mid/Jungle/Bottom/Support/Fill)"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "@HS Guardian#3033"
                }
            }   
        })
        break;
        default:
        message.channel.sendMessage("Invalid command. Do "'help" for available commands.");
        break;
    }
});

//Console Ready
bot.on("ready", function() {
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN);
