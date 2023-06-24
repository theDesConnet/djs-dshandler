const { ComponentType } = require('discord.js');
const Component = require('../../structure/component.js');

module.exports = new Component({
    componentID: "testSelectMenu",
    componentType: ComponentType.StringSelect,
    async execute(client, interaction) {
        interaction.reply({content: `${interaction.values[0]}`, ephemeral: true});
    }
});