const commando = require('discord.js-commando');
const discord = require('discord.js');

class AppsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'apps',
            group: 'simple',
            memberName: 'apps',
            description: 'APK Information'
        });
    }

    async run(message, args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Our Apps")
            .addField("http://www.atblive.co.uk/2K19.apk\nhttp://www.atblive.co.uk/perfect.apk\n\nOnce installed - Use your Login details to gain access", "Thanks")
            .setDescription("Use these links in FireDL or Downloader for Android:")
            .setColor(0x2CAB28)

        message.channel.sendEmbed(myinfo);
    }
}    

module.exports = AppsCommand;