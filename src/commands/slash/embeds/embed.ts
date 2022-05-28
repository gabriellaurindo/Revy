import Command from "../../../interfaces/Command";
import { MessageEmbed }  from 'discord.js';
import { OptionType } from "../../../interfaces/Option";


export type HexColorString = `#${string}`;

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
	{
		name: "descricao",
		description: "Descrição do embed",
		required: true,
		type: OptionType.String
	  },
	  {
		name: "color",
		description: "Cor em hexadecimal sem a #",
		required: false,
		type: OptionType.String
	  },  
  ],
  run: async (interaction) => {
	const options = interaction.options.data
    let descricao: string = "";
    let titulo: string = "";
	let color: HexColorString = `#FFF`;
    if(!options || options.length > 0 ){
      options.forEach((option)=>{
        switch (option.name){
          case "descricao":
			descricao = option.value ? option.value.toString() : ""
            break;
          case "titulo":
              titulo = option.value ? option.value.toString() : ""
            break;
		  case "color":
			  color = option.value ? `#${option.value.toString()}` : `#FFF` 
			  break;
          default:
            break;  
        } 
      })
    }
	const exampleEmbed = new MessageEmbed()
	.setColor(color)
	.setTitle(titulo)
	//.setURL('https://discord.js.org/')
	//.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription(descricao)
	//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	//.addFields(
	//	{ name: 'Regular field title', value: 'Some value here' },
	//	{ name: '\u200B', value: '\u200B' },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//)
	//.addField('Inline field title', 'Some value here', true)
	.setImage('https://uploaddeimagens.com.br/images/003/868/265/full/logo2.png?1652579899')
	.setTimestamp()
	.setFooter({ text: '<𝓓𝓮𝓿 𝓡𝓸𝓸𝓶/>', iconURL: 'https://uploaddeimagens.com.br/images/003/868/265/full/logo2.png?1652579899' });
    await interaction.reply({embeds:[exampleEmbed]});
  },
};
