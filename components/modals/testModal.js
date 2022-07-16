const Modal = require('../../structure/modal.js');
const Discord = require('discord.js');

module.exports = new Modal({
    modalID: "testModal",
    async execute(client, interaction) {
        const testTextInput = interaction.fields.getTextInputValue('testInput');

        interaction.update({content: `Modal resolve: ${testTextInput}`});
    }
});