const Command = require('../structure/command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "test",
    description: "Test command",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    async execute(client, args, interaction) {
        const testButton = new Discord.ButtonBuilder()
            .setCustomId('testButton')
            .setLabel('Test modal')
            .setStyle(Discord.ButtonStyle.Primary)

        const testSelectMenu = new Discord.SelectMenuBuilder()
            .setCustomId('testSelectMenu')
            .addOptions([{
                label: 'testValue1',
                value: 'Value 1'
            }, {
                label: 'testValue2',
                value: 'Value 2'
            }]);

        const firstActionRow = new Discord.ActionRowBuilder()
            .addComponents([testButton])

        const secondActionRow = new Discord.ActionRowBuilder()
            .addComponents([testSelectMenu])

        interaction.reply({content: 'test', components: [firstActionRow, secondActionRow]})
    }
});