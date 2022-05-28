import Command from "../../interfaces/Command";
import Option, { OptionType } from "../../interfaces/Option";

export const ping: Command = {
  name: "ping",
  description: "responde com pong",
  options: [
    {
      name: "nome",
      description: "nome da pessoa que vai receber o pong",
      required: false,
      type: OptionType.String
    }
  ],
  run: async (interaction) => {
    const options = interaction.options.data
    let nome: String = "";
    if(!options || options.length > 0 ){
      options.forEach((option)=>{
        switch (option.name){
          case "nome":
              nome = option.value ? option.value.toString() : ""
              break;
          default:
              break;  
        } 
      })
    }
    await interaction.reply(`PONG ${nome}`);
  },
};
