const Button = require('../../structure/button.js');
const Discord = require('discord.js');

module.exports = new Button({
    buttonID: "testButton",
    async execute(client, interaction) {
        const textInput = new Discord.TextInputBuilder()
        .setLabel('testTextInput')
        .setCustomId('testInput')
        .setStyle(Discord.TextInputStyle.Short)
        .setPlaceholder('Write here');

        const actionRow = new Discord.ActionRowBuilder()
        .addComponents([textInput]);

        const modal = new Discord.ModalBuilder()
        .setCustomId('testModal')
        .setTitle('Test modal')
        .addComponents([actionRow])

        interaction.showModal(modal);
    }
});