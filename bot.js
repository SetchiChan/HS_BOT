const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

//sending dm
bot.on('guildMemberAdd', member => {
    member.send({embed: {
        color: 10038562,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: "Welcome to heaven's Shadow!",
        description: "Feeder, Bronze, Challenger, Pro player, noob, or just playing for fun. Heaven's Shadow is a League of Legends community on Discord. Heaven's Shadow's goal is to become the best community it can be and create a positive experience for all of our members. Everybody in Heaven's Shadow is just looking for a good time and to become a better player. ",
        fields: [{
            name: "How to begin!",
            value: "In order to have access to all our content, please verify yourself by contacting @staff in #verication_channel!"
        },
        {
            name: "Verication Questions",
            value: "Please answer the following questions on this channel so that you may be verified on our server:" + "\n" + "1.What is your current in game name?" + "\n" + "2.Are you over 18 years old?" + "\n" + "3.What is your current rank as of season 7? (Example: Gold 4)" + "\n" + "4.What are your prefered roles. [Please pick 2] (Example: Top/Bottom)" + "\n" + "5.What is your region. [NA/EUW ONLY] (We will expand to other regions in the future.)"
        },
        {
            name: "Privilages of being verfied!",
            value: "- Access to all member channels" + "\n" + "- Giveaways" + "\n" + "- Tournaments" + "\n" + "More features will be implimented in the future."
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
    //set rank of new user
    setTimeout(() => { member.addRole(member.guild.roles.find("name", "Guardian [Member]🔰")); }, 3000);
    //Set display name of user
    member.setNickname("🆕" + member.displayName);
    //Notify Staff of User join
    setTimeout(() => { bot.channels.get('399039851288068096').sendMessage(member + " has joined the Heaven Shadow. Please contact them for orientation!"); }, 3000);
    //Notify #New-Members Channel
    setTimeout(() => { bot.channels.get('399041704604467212').sendMessage(member + " has joined the Heaven Shadow. Please check your direct messages for more information!"); }, 3000);
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
        case "verify":
            if (message.member.roles.find("name", "Verified✔️")) {
                message.channel.sendMessage("You seem to be already verified. If you'd like to change your prefered lane roles, do 'pref. If you'd like to update your current rank, do 'Rankupdate. If you believe an error has occured, please contact <@&399009797921308674> to help you.");
            } else {
                message.channel.send({embed: { 
                    color: 10038562,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Verification System",
                    description: "================",
                    fields: [{
                        name: "How to start!",
                        value: "Hello summoner, welcome to the verification process. If an error occurs during this process, you will have to restart the process. If you are unable to verify yourself, please contact <@&399009797921308674>. Press select the emoticon below to continue your verfication."
                    }
                ],
                }
            })
            bot.on('messageReactionAdd', (reaction, user) => {
                reaction.message.channel.send('${404452656220864512}')
            })
            };
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
