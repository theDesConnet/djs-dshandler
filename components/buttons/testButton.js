const Button = require('../../structure/button.js');
const Discord = require('discord.js');

module.exports = new Button({
    buttonID: "testButton",
    async execute(client, interaction) {
        const textInput = new Discord.TextInputComponent()
        .setLabel('testTextInput')
        .setCustomId('testInput')
        .setStyle("SHORT")
        .setPlaceholder('Write here');

        const actionRow = new Discord.MessageActionRow()
        .addComponents([textInput]);

        const modal = new Discord.Modal()
        .setCustomId('testModal')
        .setTitle('Test modal')
        .addComponents([actionRow])

        interaction.showModal(modal);
    }
});