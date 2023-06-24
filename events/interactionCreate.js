const Event = require('../structure/event.js');
const { InteractionType } = require('discord.js')

module.exports = new Event('interactionCreate', async (client, interaction) => {
    if (interaction.user.bot) return;

    switch (interaction.type) {
        case InteractionType.ApplicationCommand:
            const command = client.commands.find(cmd => cmd.name == interaction.commandName);
            const args = interaction.options;
            
            if (args.getSubcommand(false)) {
                const subcommand = client.subcommands.find(cmd => cmd.name == args.getSubcommand(false));   
                if (!subcommand) return;

                await subcommand.execute(client, args, interaction);
            } else {
                const command = client.commands.find(cmd => cmd.name == interaction.commandName);
                if (!command) return;

                await command.execute(client, args, interaction);
            }
            break;

        case InteractionType.MessageComponent:
            const component = client.components.get(interaction.customId);

            if (!component) return;
    
            component.execute(client, interaction);
            break;

        case InteractionType.ModalSubmit:
            const Modal = client.modals.get(interaction.customId);

            if (!Modal) return;
    
            Modal.execute(client, interaction);
            break;
    }
});