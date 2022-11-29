const Event = require('../structure/event.js');
const { InteractionType, ComponentType } = require('discord.js')

module.exports = new Event('interactionCreate', async (client, interaction) => {
    if (interaction.user.bot) return;

    switch (interaction.type) {
        case InteractionType.ApplicationCommand:
            const command = client.commands.find(cmd => cmd.name == interaction.commandName);
            const args = interaction.options;
    
            if (!command) return;
    
            command.execute(client, args, interaction);
            break;

        case InteractionType.MessageComponent:
            if (interaction.componentType === ComponentType.Button) {
                const button = client.buttons.get(interaction.customId);

                if (!button) return;
        
                button.execute(client, interaction);
            }

            if (interaction.componentType === ComponentType.StringSelect) {
                const selectMenu = client.selectMenus.get(interaction.customId);

                if (!selectMenu) return;
        
                selectMenu.execute(client, interaction);
            }
            break;

        case InteractionType.ModalSubmit:
            const Modal = client.modals.get(interaction.customId);

            if (!Modal) return;
    
            Modal.execute(client, interaction);
            break;
    }
});