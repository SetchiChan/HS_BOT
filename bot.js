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

bot.on('message', async message => {
    if(message.author.bot) return;
    theMessage = message.content.toLowerCase();

    if (message.content.startsWith(cmdprefix)){
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
});   

bot.on('ready', () => {
    bot.user.setGame('Use "?" to for help!')
});


bot.login(process.env.BOT_TOKEN);
