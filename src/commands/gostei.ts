import Command from "../interfaces/Command";

export const gostei: Command = {
  name: "gostei",
  description: "responde com gostei de você",
  run: async (interaction) => {
    await interaction.reply(`Gostei de você!`);
  },
};
