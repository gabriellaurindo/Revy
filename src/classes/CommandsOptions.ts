import { SlashCommandBuilder } from "@discordjs/builders";
import Option, { OptionType } from "../interfaces/Option";
import SlashCommandOptionBase from "./SlashCommandOptionBase";

class CommandsOptions{

    addField<T extends SlashCommandOptionBase>(slashOption: T, option: Option) {
        return slashOption
          .setName(option.name.toLowerCase())
          .setDescription(option.description)
          .setRequired(option.required ? true : false);
      }
      addFields(data: SlashCommandBuilder, options?: Option[]) {
        options &&
          options.forEach((option) => {
            switch (option.type) {
              case OptionType.Boolean:
                data.addBooleanOption((slashOption) =>
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.Channel:
                data.addChannelOption((slashOption) =>
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.Integer:
                data.addIntegerOption((slashOption) => 
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.Mention:
                data.addMentionableOption((slashOption) =>
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.Role:
                data.addRoleOption((slashOption) =>
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.String:
                data.addStringOption((slashOption) => 
                  this.addField(slashOption, option)
                );
                break;
              case OptionType.User:
                data.addUserOption((slashOption) =>
                  this.addField(slashOption, option)
                );
                break;
            }
          });
        return data;
      }

}

export default CommandsOptions