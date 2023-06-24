const Subcommand = require('../../structure/subcommand.js');
const Discord = require('discord.js');

module.exports = new Subcommand({
    name: "scmdtwo",
    description: "Subcommand number two",
    subCommandOptions: [],
    permissions: [],
    async execute(client, args, interaction) {
        await interaction.reply("subcommand two");
    }
})