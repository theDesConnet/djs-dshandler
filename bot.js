//Главный файл бота
console.clear();

const config = require('./jsons/config.json');
const Client = require('./structure/client.js');

const client = new Client();

client.RunBot(config.General.token);