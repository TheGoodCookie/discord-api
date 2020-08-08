const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require('fs');
const { formatWithOptions } = require('util');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot Online!');
    client.user.setActivity('Made by SkerpTheDerp#9181')
});

client.on('message', message => {

    message.member.roles.cache.has
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'lost'){
        message.delete()
        message.reply('Check roles.')
        .then(msg => {
          msg.delete({ timeout: 5000 })
        })
        .catch(console.error);
        client.commands.get('Lost').execute(message, args);
    } else if(command == 'brm5'){
        message.delete()
        message.reply('Check roles.')
        .then(msg => {
          msg.delete({ timeout: 5000 })
        })
        client.commands.get('Brm5').execute(message, args);
    } else if(command == 'cbro'){
        message.delete()
        message.reply('Check roles.')
        .then(msg => {
          msg.delete({ timeout: 5000 })
        })
        client.commands.get('Counter Blox').execute(message, args);
    } else if(command == 'astray'){
        message.delete()
        message.reply('Check roles.')
        .then(msg => {
          msg.delete({ timeout: 5000 })
        })
        client.commands.get('Astray').execute(message, args);
    }

});

client.login('NzQxMjMyMzAzMDUyNjg1MzYz.Xy0kYA.9_3PlBFpxaxOCAxYTrKEMz4HFbA')