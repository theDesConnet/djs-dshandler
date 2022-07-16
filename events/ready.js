const Event = require('../structure/event.js');

module.exports = new Event('ready', client => {
    console.log('[INFO] Бот был успешно запущен!');
})