const { SlashCommandBuilder, EmbedBuilder, Embed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setScore")
        .setDescription("Set the score of a user.")
        .addUserOption((option) =>
            option.setName("user").setDescription("The user you want to set the score of.").setRequired(true)
        )
        .addIntegerOption((option) =>
            option.setName("score").setDescription("The score you want to set.").setRequired(true)
        ),
    async execute(interaction, client) {

        const user = interaction.options.getUser("user");
        const score = interaction.options.getInteger("score");

        const embed = new EmbedBuilder()
            .setRawTitle("Score Set")
            .setRawDescription("The score for " + user.username + " has been set to " + score)
            .setFooter({ text: 'Bot made by Pumpkin#4201', iconURL: 'https://imgur.com/AVOHJrC' })
            .setTimestamp()
            .setColor("RANDOM")
        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }

};
