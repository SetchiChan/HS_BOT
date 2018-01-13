const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

//sending dm
bot.on('guildMemberAdd', member => {
    message.channel.send({embed: {
        color: 10038562,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: "Welcome to heaven's Shadow!",
        description: "Feeder, Bronze, Challenger, Pro player, noob, or just playing for fun. Heaven's Shadow is a League of Legends community on Discord. eaven's Shadow's goal is to become the best community it can be and create a positive experience for all of our members. Everybody in Heaven's Shadow is just looking for a good time and become a better player. ",
        fields: [{
            name: "How to begin!",
            value: "In order to have access to all our content, please verify yourself by contacting @staff in #verication_channel!"
        },
        {
            name: "Verication Questions",
            value: "Please answer the following questions on this channel so that you may be verified on our server:",
            value: "1.What is your current in game name?",
            value: "2.Are you over 18 years old?",
            value: "3.What is your current rank as of season 7? (Example: Gold 4)",
            value: "4.What are your prefered roles. [Please pick 2] (Example: Top/Bottom)",
            value: "5.What is your region. [NA/EUW ONLY] (We will expand to other regions in the future."
        },
        {
            name: "Privilages of being verfied!",
            value: "- Access to all member channels",
            value: "- Giveaways",
            value: "- Tournaments",
            value: "Future features will be implmented in the future."
        },
        {
            name: "Commands",
            value: "For our commands, do 'help"
        },
        {
            name: "Welcome to our server!",
            value: "Hope to see you around!"
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: bot.user.avatarURL,
        text: "@HS Guardian#3033"
        }
    }   
})
});

//AutoAssign Rank
bot.on('guildMemberAdd', (member) => {
    setTimeout(() => { member.addRole(member.guild.roles.find("name", "Elite Guardian [Original Member]🎽")); }, 3000);

    setTimeout(() => { member.setNickname("🆕" + member.displayName); }, 3000);
});

//Welcome message.
bot.on('guildMemberAdd', member => {
    setTimeout(() => { bot.channels.get('399041704604467212').sendMessage(member + " has joined Heaven's Shadow! Please check your direct message for more details."); }, 3000);
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
