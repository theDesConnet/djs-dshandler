const Discord = require('discord.js');
const Client = require('./client.js');

/**
 * 
 * @param {Client} client 
 * @param {Discord.ButtonInteraction} interaction
 */
function ExecuteFuctions(client, interaction) { }

//Класс кнопки
class Button {
    /**
     * @typedef {{buttonID: string execute: ExecuteFuctions}} ButtonOptions
     * @param {ButtonOptions} options
     */
    constructor(options) {
        this.buttonID = options.buttonID;
        this.execute = options.execute;
    }
}

module.exports = Button;