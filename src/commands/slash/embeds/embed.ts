import Command from "../../../interfaces/Command";
import { MessageEmbed }  from 'discord.js';
import { OptionType } from "../../../interfaces/Option";




export const embed: Command = {
  name: "embed",
  description: "Cria um embed personalizado",
  options: [
    {
      name: "titulo",
      description: "Titulo do embed",
      required: true,
      type: OptionType.String
    },
  ],
  run: async (interaction) => {
    const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(interaction.options.data[0].value.toString())
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    console.log(interaction.channel)
    await interaction.reply({embeds:[exampleEmbed]});
  },
};
