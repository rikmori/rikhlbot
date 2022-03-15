const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });



client.once('ready', () => {
    console.log('Rikbot is online!');
    client.user.setActivity('Children', { type: 'WATCHING'});
});

client.on('message', msg=>{
    if(msg.content ===  "geisen"){
        msg.reply('Mmmkay folks.');
    }
})

client.on('message', msg=>{
    if(msg.content ===  "laptop"){
        msg.reply('Mmmkay folks you can go ahead and shut your laptops down for me please.');
    }
})

client.on('message', msg=>{
    if(msg.content ===  "fuck"){
        msg.reply('We are actually not gonna have you say that word right now.');
    }
})

client.on('message', msg=>{
    if(msg.content ===  "cya"){
        msg.reply('Mmmkay folks, its that magical time of day.');
    }
})

client.on('message', msg=>{
    if(msg.content ===  "test"){
        msg.reply('test-successful.');
    }
})



client.login('OTUzMjI0MTYyNTM5ODcyMjY3.YjBdLg.5yv5Va0-AlG8cyDqNHXmq_-QeDQ');
