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
           
//Ready
bot.on("ready", function() {
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN);
