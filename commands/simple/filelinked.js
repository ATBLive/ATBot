const commando = require('discord.js-commando');
const discord = require('discord.js');

class FileCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'filelinked',
            group: 'simple',
            memberName: 'filelinked',
            description: 'Filelinked codes'
        });
    }

    async run(message, args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Our FileLinked Codes")
            .addField("IPTV - 77216034\nVOD - 53596843\n\nOnce installed - Use your subscription Login details to gain access", "Thanks")
            .setDescription("Use these codes in FileLinked for easy install on Firesticks:")
            .setColor(0x9115F3)

        message.channel.sendEmbed(myinfo);
    }
}    

module.exports = FileCommand;