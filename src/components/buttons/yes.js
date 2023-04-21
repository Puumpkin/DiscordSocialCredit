module.exports = {
    data: {
        name: "yes",
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: "this is a temp",
            ephemeral: true,
        });
    },
};