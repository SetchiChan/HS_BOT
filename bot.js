const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

//sending dm
bot.on('guildMemberAdd', member => {
    member.send("Welcome to the server!");
 });

//Welcome to new member chat
bot.on('guildMemberAdd', member => {
    bot.channels.get("341921678118617101").sendMessage(member + " has joined Heaven Shadow! Please connect to new members lobby and wait for staff to orientate you.");
});

//Staff notification of new user
bot.on('guildMemberAdd', member => {
    bot.channels.get('342366838451339264').sendMessage(member + " has joined the Heaven Shadow. Please contact them for orientation!");
});

//Staff notification user has left
bot.on('guildMemberRemove', member => {
    bot.channels.get('342366838451339264').sendMessage(member + " has left Heaven Shadow.");
});

//Nickname
bot.on('guildMemberAdd', member => {
    member.setNickname("🆕" + member.displayName)
});

//commands
bot.on('message', (message) => {

    if(message.content == '!help') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Avaiable Rules:"
                description: "These are the available rules."
                fields: [{
                    name:"!pref (Top/Middle/Bottom/Support/Jungle/Fill)"
                    value: "This sets your prefered lane."
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url:client.user.avatarURL,
                text: "@HS Guardian"
            }
    }
});

bot.login(process.env.BOT_TOKEN);
