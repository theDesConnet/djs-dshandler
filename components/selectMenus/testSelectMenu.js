const selectMenu = require('../../structure/selectMenu.js');

module.exports = new selectMenu({
    selectMenuID: "testSelectMenu",
    async execute(client, interaction) {
        interaction.reply({content: `${interaction.values[0]}`, ephemeral: true});
    }
});