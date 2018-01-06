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
bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage("I'm a fucking useless Bot, totally not created by Setchi");
            break;
        default:
            message.channel.sendMessage("Invalid command");
            break;
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "help":
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "This is an embed",
                url: "http://google.com",
                description: "This is a test embed to showcase what they look like and what they can do.",
                fields: [{
                    name: "Fields",
                    value: "They can have different fields with small headlines."
                  },
                  {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                  }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "@HS Bot"
                }
            }
});
            
bot.login(process.env.BOT_TOKEN);
