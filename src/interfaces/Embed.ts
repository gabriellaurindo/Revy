import { CommandInteraction } from "discord.js";
import Option from "./Option";


export default interface Embed {
  name: string;
  description: string;
  options?: Option;
  run: (interaction: CommandInteraction) => void;
}
