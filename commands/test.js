const Command = require('../structure/command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "test",
    description: "Test command",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    async execute(client, args, interaction) {
        const testButton = new Discord.MessageButton()
            .setCustomId('testButton')
            .setLabel('Test modal')
            .setStyle('PRIMARY')

        const testSelectMenu = new Discord.MessageSelectMenu()
            .setCustomId('testSelectMenu')
            .addOptions([{
                label: 'testValue1',
                value: 'Value 1'
            }, {
                label: 'testValue2',
                value: 'Value 2'
            }]);

        const firstActionRow = new Discord.MessageActionRow()
            .addComponents([testButton])

        const secondActionRow = new Discord.MessageActionRow()
            .addComponents([testSelectMenu])

        interaction.reply({content: 'test', components: [firstActionRow, secondActionRow]})
    }
});