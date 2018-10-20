const Discord = require('discord.js');
const client = new Discord.Client();
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("-ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
           
            let logTkt = new Discord.RichEmbed()
            .setTitle('OPEND A NEW TICKET')
            .setColor('GREEN')
            .setDescription(`tickty name: ${c.name}\nby: ${message.author.tag}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.guild.channels.find(c => c.name === 'log-ticket').send(logTkt);
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username,message.author.avatarURL)                        
           
            .setColor(0xCF40FA)
   .addField(`**مرحبآ, لدنيا فريق الدعم ليساعدك في أقرب وقت . ممكن  الرجاء منك الانتضار ريثما ياتي اليك احد اعضاء فريق الدعم**`)
 .setTimestamp();
              c.send({
               
            embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
      message.channel.send(`هل انت متأكد من اغلاق التيكت!\nلأغلاق التسكت اكتب \`-confirm\`. معاك 10 ثواني لاغلاق التيكت.`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === '-confirm', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })    /// ALPHA CODES
                  .then((collected) => {
                       let logTkt = new Discord.RichEmbed()
                       .setTitle('CLOSE TICKT')
                       .setColor('RED')
                       .setDescription(`tickt name: ${message.channel.name}\nby: ${message.author.tag}`)
                       .setTimestamp()
                       .setFooter(message.author.tag, message.author.avatarURL)
                       
                       message.guild.channels.find(c => c.name === 'log-ticket').send(logTkt);
                       message.channel.delete();
                  })    /// ALPHA CODES
                  .catch(() => {
                      m.edit('انتهى الوقق,  لم يتم اغلاق التذكرة الرجاء المحاولة مرة اخرى .').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }
});
 
client.on('message', msg => {
 if(msg.content === '-help')
	 
 msg.reply(`
      __**- Ticket System -**__
        **لفتح تيكت**  
	        -ticket		
        **لأغلاق تيكت ** 
	        -close 

`)
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`notes Bot- Script By : relax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : relax ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Ticket I -help`,"http://twitch.tv/Just")
client.user.setStatus("online")
});
 
client.login(process.env.BOT_TOKEN);
