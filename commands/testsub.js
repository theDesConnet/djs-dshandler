const Command = require('../structure/command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "testsub",
    description: "Test subcommand",
    permissions: [Discord.PermissionFlagsBits.SendMessages]
});