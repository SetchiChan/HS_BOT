const Discord = require('discord.js');
const bot = new Discord.Client();
const mysql = require("mysql");

//Variables
const cmdprefix = "?";
const bot1ID = "658971820925648926";
const bot2ID = "658971820925648926";
const bot3ID = "658971820925648926";

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

//FUNCTIONS

bot.on('message', async message => {
    var generatedCharacter = message.guild.members.random()

    function generateFanfiction(thecharacter) {
        
        if (message.guild.members.get(bot1ID) == thecharacter && message.guild.members.get(bot2ID) == thecharacter && message.guild.members.get(bot3ID) == thecharacte && message.author == thecharacter)
        {

            generateFanfiction();

        } else {

            let fanfictionItem = ["[Sing to the tune of 'Santa Baby']\n\n" + thecharacter + " love me. \n Just turn your gaze away from that sleaze for me.\n I'm the only one you should see. \n" + thecharacter + " love me. \n I'll watch you through your window tonight!",thecharacter + " LOVE MEEE",thecharacter + "UwU"]

            var itemNumber = Math.floor(Math.random() * Math.floor(fanfictionItem.length))

            return fanfictionItem[itemNumber]
        }
    }

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
        message.channel.send({embed: {
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: generateFanfiction(generatedCharacter),
            color: 59431,
            fields: []
            }
       })
    }

    if (theMessage.startsWith("?shop")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'The Shop De Shop',
            description: 'Feel free to shop. You currently have 0 credits.',
            fields: [
                {
                    name: 'A Hug',
                    value: 'Cost: Free',
                },
                {
                    name: 'A Pencil (May or may not have led)',
                    value: 'Cost: 150 Credits',
                },
                {
                    name: 'A Cookie',
                    value: 'Cost: 1500 Credits',
                },
                {
                    name: 'Lunch from the Cafeteria',
                    value: 'Cost: 5000 Credits',
                },
                {
                    name: 'More Stuff will be added...',
                    value: '...',
                },
            ],
        }
        });     
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Use "?" to for help!')
});


bot.login(process.env.BOT_TOKEN);
