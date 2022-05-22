import Command from "../interfaces/Command";

export const ping: Command = {
  name: "ping",
  description: "responde com pong",
  run: async (interaction) => {
    const nome = 'gabriel';

    await interaction.reply(`PONG ${nome}`);
  },
};
