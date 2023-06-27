//Admin only command to set the the emote that will be used to add or remove credit from a user.

const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setreaction")
    .setDescription(
      "Set the reaction that will be used to add or remove credit from a user."
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("reaction")
        .setDescription("The emote you want to set.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("connotation")
        .setRequired(true)
        .addChoices(
          { name: "Positive", value: "positive" },
          { name: "Negative", value: "negative" }
        )
    ),

  async execute(interaction, client) {
    const reaction = interaction.options.getString("reaction");
    const connotation = interaction.options.getString("connotation")

    const embed = new EmbedBuilder()
      .setRawTitle("Reaction Set")
      .setRawDescription("The"+ connotation + "has been set to " + reaction)
      .setFooter({
        text: "bot made by syuzu",
        iconURL: "https://imgur.com/57uxU84",
      })
      .setTimestamp()
      .setColor("RANDOM");
    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
