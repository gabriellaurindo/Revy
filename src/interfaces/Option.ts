import { CommandInteraction } from "discord.js";

export enum OptionType {
  Boolean,
  Channel,
  Integer,
  Mention,
  Role,
  String,
  User,
}

export default interface Option {
  name: string;
  description: string;
  type: OptionType;
  required?: boolean;
  choices?: {
    name: string;
    value: string;
  }[];
}