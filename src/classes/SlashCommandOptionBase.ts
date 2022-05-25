declare class SlashCommandOptionBase{
    readonly name: string;
    readonly description: string;
    readonly required: boolean;

    setName(name: string): this;
    setDescription(description: string): this;
    setRequired(required: boolean): this;

}

export default SlashCommandOptionBase;