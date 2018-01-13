const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

//sending dm
bot.on('guildMemberAdd', member => {
    member.send("Welcome to the server!");
 });


//AutoAssign Rank
bot.on('guildMemberAdd', (member) => {
    setTimeout(() => { member.addRole(member.guild.roles.find("name", "Elite Guardian [Original Member]🎽")); }, 3000);

    member.setNickname("🆕" + member.displayName)
});

//Welcome to new member chat
bot.on('guildMemberAdd', member => {
    bot.channels.get("399041704604467212").sendMessage(member + " has joined Heaven Shadow! Please connect to new members lobby and wait for staff to orientate you."); 
});

//Staff notification of new user
bot.on('guildMemberAdd', member => {
    setTimeout(() => { bot.channels.get('399039851288068096').sendMessage(member + " has joined the Heaven Shadow. Please contact them for orientation!"); }, 3000);
});

//Staff notification user has left
bot.on('guildMemberRemove', member => {
    setTimeout(() => { bot.channels.get('399039851288068096').sendMessage(member + " has left Heaven Shadow."); }, 3000);
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
            message.channel.sendMessage("I'm a fucking useless Bot, totally not created by Huzkii");
            break;
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "pref":
            message.channel.sendMessage("Command does not work. 'pref is in progress.")
            .then(() => message.react('399268521776906241'))
            .then(() => message.react('399268521646882816'))
            .then(() => message.react('399268521638494208'))
            .then(() => message.react('399268521420521474'))
            .then(() => message.react('399268521613328384'))
            .then(() => message.react('399268521260875778'))
            .catch(() => console.error('One of the emojis failed to react.'));
            break;
        case "help":
            message.channel.send({embed: {
                color: 10038562,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Available Commands",
                description: "================",
                fields: [{
                    name: "'Help",
                    value: "Lists all available commands"
                },
                {
                    name: "'Pref (Command does not work right now)",
                    value: "Selects prefered Role. (Top/Mid/Jungle/Bottom/Support/Fill) [Limit of 2 per person]"
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
        message.channel.sendMessage("Invalid command! Do 'help for available commands.");
        break;
    }
});

//Ready
bot.on("ready", function() {
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN);
