import Command from "../../interfaces/Command";
import { OptionType } from "../../interfaces/Option";

export const ping: Command = {
  name: "ping",
  description: "responde com pong",
  options: [
    {
      name: "nome",
      description: "nome da pessoa que vai receber o pong",
      required: false,
      type: OptionType.String
    },
  ],
  run: async (interaction) => {
    let nome = "";
    if(interaction.options.data != null && interaction.options.data != undefined && interaction.options.data[0] != undefined){
      nome = interaction.options.data[0].value.toString()
    }
    await interaction.reply(`PONG ${nome}`);
  },
};
