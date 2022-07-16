const Event = require('../structure/event.js');

module.exports = new Event('interactionCreate', async (client, interaction) => {
    if (interaction.user.bot) return;

    if (interaction.isCommand()) { //Обработчик Slash команд 
        const command = client.commands.find(cmd => cmd.name == interaction.commandName);
        const args = interaction.options;

        if (!command) return;

        command.execute(client, args, interaction);
    } 

    if (interaction.isButton()) { //Обработчик Кнопок 
        const button = client.buttons.get(interaction.customId);

        if (!button) return;

        button.execute(client, interaction);
    }

    if (interaction.isSelectMenu()) { //Обработчик selectMenu
        const selectMenu = client.selectMenus.get(interaction.customId);

        if (!selectMenu) return;

        selectMenu.execute(client, interaction);
    }

    if (interaction.isModalSubmit()) {
        const Modal = client.modals.get(interaction.customId);

        if (!Modal) return;

        Modal.execute(client, interaction);
    }

});