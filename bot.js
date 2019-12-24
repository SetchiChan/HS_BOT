const Discord = require('discord.js');
const bot = new Discord.Client();
const mysql = require("mysql");

//Variables
const cmdprefix = "?";

var con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_NAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected to database.");
});


function generateOneRandom(thesentmessage) {
    //var randomPerson = message.guild.members.random();
    //if() thesentmessage.guild.members.get("user ID here");
    //return randomPerson.user;
}
bot.on('message', async message => {
    if(message.author.bot) return;
    theMessage = message.content.toLowerCase();

    if (message.content == cmdprefix){
        message.author.send({embed: {
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: "This is an example mate!",
            color: 59431,
            fields: []
            }
       })
    }

    if (theMessage.startsWith("?ship")){
        //let target = message.mentions.users.first() || message.guild.memebers.get(args[1]) || message.author;
        if (message.guild.members.get("658971820925648926") ==  message.guild.members.random()){
            message.channel.send("TThey are the same.");
        } else {
            message.channel.send("They are not the same.")
        }
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Use "?" to for help!')
});


bot.login(process.env.BOT_TOKEN);
