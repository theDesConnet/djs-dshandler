const Component = require('../../structure/component.js');
const Discord = require('discord.js');

module.exports = new Component({
    componentID: "testButton",
    componentType: Discord.ComponentType.Button,
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