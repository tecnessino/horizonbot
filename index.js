const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = botconfig.prefix
const token = botconfig.token
var nazwabota = "DudkowyBot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online`)
});


bot.on("message", async message => {
    if (message.author.bot) return

    if (message.content.indexOf(prefix) !== 0) return
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

if(command == "setstatus"){
    if(message.member.user.id === "643162321241505822" || message.member.user.id === "554963757042761730") {
        var arg = message.content.slice(prefix.length+9)
        bot.user.setActivity(arg, { TYPE: "WATCHING" })
        createEmbed("Zmieniono status", "Ustawiono status bota na: " + arg, "RANDOM", message.channel.id)
    } else {
        errorEmbed("Nie masz rangi!", message.channel.id)
    }
}

function errorEmbed(errorc, channelid2) {
    let embed = new Discord.MessageEmbed().setTitle("Masny błąd").setColor("RED").setDescription(errorc)
    const kanal = bot.channels.cache.find(channel => channel.id === channelid2);
    kanal.send(embed)
}
function createEmbed(title, description, color, channelid2) {
    let embed = new Discord.MessageEmbed().setTitle(title).setColor(color).setDescription(description)
    const kanal = bot.channels.cache.find(channel => channel.id === channelid2);
    kanal.send(embed)
}

})



bot.login(token)