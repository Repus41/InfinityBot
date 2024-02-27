const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot Online")
})

client.on("messageCreate", (message) => {
    if(message.content == "!youtube") {
        message.channel.send("Questo è il mio canale: https://www.youtube.com/watch?v=I2nr8NwgBS4&list=PLn5i4wacySbGucoY24AE-cmNUS2B2lnBo&index=2")
    }

    if(message.content == "ciao") {
        message.channel.send("Ciao anche a te!")
    }

    if(message.content == "Ciao") {
        message.channel.send("Ciao anche a te!")
    }

    if(message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
        .setTitle("TFGE")
        .setDescription(`${message.author.username} ha scritto il messaggio`)
        .setThumbnail("https://media.discordapp.net/attachments/1211293733283434518/1211293733744803860/IMG_4328.png?ex=65edac32&is=65db3732&hm=b29bf976d8b744b57c7ce4bcf63ea42ced247be3a1f2a449a733ab6d616fad52&")


        message.channel.send({embeds: [embed] })
    }
})



