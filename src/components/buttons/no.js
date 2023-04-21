module.exports = {
    data: {
        name: "no",
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: "this is a temp",
            ephemeral: true,
        });
    },
};