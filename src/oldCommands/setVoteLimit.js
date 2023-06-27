const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setvotelimit")
        .setDescription("Set the vote limit for the server.")
        .addIntegerOption((option) =>
            option
                .setName("limit")
                .setDescription("The limit you want to set.")
                .setRequired(true)
        ),
    async execute(interaction, client) {
        const limit = interaction.options.getInteger("limit");
        const guildId = interaction.guildId;
    },
};