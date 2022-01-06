const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI4NzE4NjU0OTMyMTUyNDAw.Ydc2pg.0NS1t12lMAcmoLGEZn-dmc7zHro"

const client = new Discord.Client({
    intents: [
        "GUILDS", //Discord Server
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Hi~")
    }
})

client.login(process.env.TOKEN)