const Discord = require('discord.js');
const client = new Discord.Client();


 
 client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
                      if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('🔘 Hey! || You Don\'t Have Perms . ')
    if (!args[1]) {
message.channel.send(`** - أستعمل : -bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست 😄**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setTitle('Trees Server'
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `<@${message.author.id}>`)
            .addField(' » الرسالة : ', args)
                .setColor('#000000')
                .setColor('#36393e')
       .setImage("https://c.top4top.net/p_1012e05dk1.png")
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
}); 
 






client.login(process.env.BOT_TOKEN);
