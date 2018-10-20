const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "A";
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`hi`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
  if(message.content === 'As') {
  const embed = new Discord.RichEmbed()
  .setThumbnail("https://e.top4top.net/p_10236vx1j1.png")
  .setTitle('My server')
  .addField('Trees Server',
  .setURL('https://discord.gg/Wn9cs5 ')
  .setTimestamp()
  .setColor('#000000')
  .setColor('#36393e')
  message.channel.send({embed: embed});
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
