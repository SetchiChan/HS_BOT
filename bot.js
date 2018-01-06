const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'"

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
bot.on("message", (function) {
    if (message.author.equals(botuser)) return;

    if (!message.content.startsWith(PREFIX)) return;

    vars args = message.content.substring(PREFIX.length.split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "8ball":
            if (args[1]); {

            } else {
                message.channel.sendMessage("Cant read that");
            }
        default
            message.channel.sendMessage("Stupid Command!");
    }
});

bot.login(process.env.BOT_TOKEN);
