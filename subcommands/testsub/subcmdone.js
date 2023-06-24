const Subcommand = require('../../structure/subcommand.js');
const Discord = require('discord.js');

module.exports = new Subcommand({
    name: "scmdone",
    description: "Subcommand number one",
    subCommandOptions: [],
    permissions: [],
    async execute(client, args, interaction) {
        await interaction.reply("subcommand one");
    }
})