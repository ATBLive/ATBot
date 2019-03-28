const commando = require('discord.js-commando');
const discord = require('discord.js');

class PortalCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'portal',
            group: 'simple',
            memberName: 'portal',
            description: 'Portal Information'
        });
    }

    async run(message, args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Our Portal")
            .addField("Mag: http://shiztv.xyz/c\nSmarters/GSE: http://shiztv.xyz\n\nAny questions, just ask :)", "Thanks")
            .setDescription("These are the links needed for Mag Devices or apps like Smarters/GSE:")
            .setColor(0xF39215)

        message.channel.sendEmbed(myinfo);
    }
}    

module.exports = PortalCommand;