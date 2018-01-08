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

//AutoAssign Rank
bot.on('guildMemberAdd', function(member) {
    member.addRole(member.guild.roles.find("name", "Elite Guardian [Original Member]🎽"));
    
    member.setNickname("🆕" + member.displayName)
});

//Staff notification of new user
bot.on('guildMemberAdd', member => {
    bot.channels.get('399039851288068096').sendMessage(member + " has joined the Heaven Shadow. Please contact them for orientation!");
});

//Staff notification user has left
bot.on('guildMemberRemove', member => {
    bot.channels.get('399039851288068096').sendMessage(member + " has left Heaven Shadow.");
});
              
//Random Message
bot.on('message', (message) => {
    
    if(message.content == 'bad bot') {
        message.reply('Ive been a very naughty bot');
    }
});

//commands
bot.on("message", function(message) {
    bot.on('messageReactionAdd', (reaction, user) => {

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
            
            break;
        case "help":
        const collector = message.createReactionCollector((reaction, user) => 
            user.id === message.author.id &&
            reaction.emoji.name === "◀" ||
            reaction.emoji.name === "▶" ||
            reaction.emoji.name === "❌"
    ).once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if(chosen === "◀"){
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
            }   
        })
        }else if (chosen === "▶"){
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
                    value: "Lists all avasdasd commands"
                },
                {
                    name: "'Pref (Command does not work right now)",
                    value: "Selects prefered Rsadasdasdom/Support/Fill) [Limit of 2 per person]"
                }
            ],
            }   
        })  
        } else if(chosen === "❌"){
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
                    value: "Lists asdasdilable commands"
                },
                {
                    name: "'Pref (Command does not work right now)",
                    value: "Selects prefered Rasdasdasd/Jungle/Bottom/Support/Fill) [Limit of 2 per person]"
                }
            ],
            }   
        })  
        }
    })
        break;
        }
    })
});


//Ready
bot.on("ready", function() {
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN);
