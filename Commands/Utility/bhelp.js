module.exports = {
  name: "bhelp",
  run(client, message, args, db) {
 
let { MenuPaginationBuilder } = require('spud.js')
 
 
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ComponentType } = require("discord.js");
    {
 
 
let embed1 = new EmbedBuilder()
      .setTitle("<:Moderation:953745878689136662>  Moderation:")
      .addFields(
        { name: "`-addrole`", value: "<:Reply:983510044878458910>Adds a role to a user", inline: false },
        { name: "`-ban`", value: "<:Reply:983510044878458910>Ban a user from server", inline: false },
        { name: "`-kick`", value: "<:Reply:983510044878458910>Kick a user from server", inline: false },
        { name: "`-lock`", value: "<:Reply:983510044878458910>Lock a channel", inline: false },
        { name: "`-mute`", value: "<:Reply:983510044878458910>Mute a user", inline: false },
        { name: "`-purge`", value: "<:Reply:983510044878458910>Purge an amount of messages", inline: false },
        { name: "`-slomode`", value: "<:Reply:983510044878458910>Set slowmode for a channel", inline: false },
        { name: "`-unlock`", value: "<:Reply:983510044878458910>Unlock a channel", inline: false },
        { name: "`-unmute`", value: "<:Reply:983510044878458910>Unmute a user", inline: false }
      )
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 1 of 1`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/emojis/953745878689136662.webp?size=128&quality=lossless');
 
 
let embed2 = new MessageEmbed().setTitle('Moderation')
.addField("warn", "warns a user", true)
.addField("ban", "bans a user", true)
.addField("kick", "kicks a user", true)
.addField("addrole", "removerole", true)
.addField("lock", "locks a channel", true)
.addField("unlock", "unlocks a channel", true)
.addField("softban", "soft bans a user", true)
.addField("unban", "unbans a user", true)
.addField("slowmode", "slows down a channel", true)
 
      .setThumbnail("https://media.discordapp.net/attachments/883419434880995360/985646452833402890/19AAEC86-D3D3-4B20-9882-D4CEF1EA7A9A.png?width=1292&height=1139")
 
let embed3 = new MessageEmbed().setTitle('Econonomy')
.addField("work", "work some job")
.addField("fish", "fishes for the user")
.addField("daily", "get 4,200$ every 24hr")
.addField("bal", "shows how much money you have")
.addField("shop", "see the shop")
.addField("buy", "buy something from the shop")
      .setThumbnail("https://media.discordapp.net/attachments/883419434880995360/985646452833402890/19AAEC86-D3D3-4B20-9882-D4CEF1EA7A9A.png?width=1292&height=1139")
 
let embed4 = new MessageEmbed().setTitle('Music')
.addField("play", "play some music")
.addField("stop", "stops the music")
.addField("leave", "bot leaves VC")
.addField("pause", "pauses the music")
.addField("resume", "resumes the music")
  .setThumbnail("https://media.discordapp.net/attachments/883419434880995360/985646452833402890/19AAEC86-D3D3-4B20-9882-D4CEF1EA7A9A.png?width=1292&height=1139")
 
 
let embed6 = new MessageEmbed().setTitle('Help Menu')
.setURL("https://jinxbot.netlify.app/")
.setDescription("Jinx is a multipurpose bot here to help!")
 
.addField(":verified~2: General", "General purpose commands.")
 
.addField(":rules~1: Moderation", "Moderate your server with jinx!")
 
.addField(":store_tag~1: Economy", "A fun economy system that saves your data across all servers.")
 
.addField(":unmuted~1: Music", "Listen to cool beats with our music commands!")
 
.setThumbnail("https://media.discordapp.net/attachments/883419434880995360/985646452833402890/19AAEC86-D3D3-4B20-9882-D4CEF1EA7A9A.png?width=1292&height=1139")
 
 
.setTimestamp()
new MenuPaginationBuilder(message)
.setOptions([
 {
 embed: embed1,
 label: `General`,
 description: "General purpose",
 emoji: ':verified~2: '
 
 
 },
 
 {
 embed: embed2,
 label: `Moderation`,
 description: "Helps with modding",
 emoji: ':rules~1: '
 
 },
 
 {
 embed: embed3,
 label: `Economy`,
  description: `Earn money with our economy system`,
  emoji: ':store_tag~1: '
 
 },
 
{
 embed: embed4,
 label: `Music`,
  description: `Listen to music`,
  emoji: ':unmuted~1: '
 
 },
 
 ])
 
.setHome(embed6)
.send() 
 
console.log("help command sent")}}}