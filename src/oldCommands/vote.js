const {
  SlashCommandBuilder,
  EmbedBuilder,
  Embed,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Starts a vote to add or remove credit from a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user you want to vote on")
    )
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of social damage you want to inflict")
    ),
  async execute(interaction, client) {
    const user = interaction.options.getUser("user");
    const amount = interaction.options.getInteger("amount");
    const interactionUser = interaction.user;
    const embed = new EmbedBuilder()
      .setRawTitle(
        interactionUser.username +
          " has called a vote to give  " +
          amount +
          " social credit to " +
          user.username
      )
      .setRawDescription("Is it deserved?\n✅ - yes **or** ❌ - no")
      .setFooter({
        text: "Bot made by Pumpkin#4201",
        iconURL: "https://imgur.com/AVOHJrC",
      });

    const YesButton = new ButtonBuilder()
      .setCustomId("yes")
      .setEmoji("✅")
      .setStyle(ButtonStyle.Primary);

    const NoButton = new ButtonBuilder()
      .setCustomId("yes")
      .setEmoji("❌")
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(YesButton, NoButton)],
    });
  },
};
