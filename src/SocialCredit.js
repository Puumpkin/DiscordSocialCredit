//Bot that stores a score to each discord user that people can give to each other
//The score will be stored in a JSON file and will be loaded on startup
require("dotenv").config();
const fs = require("fs");
const { token } = process.env;

const {
  Client,
  GatewayIntentBits,
  Collection,
  SystemChannelFlagsBitField,
  messageLink,
  Message,
} = require("discord.js");

//Creating a new client using the new keyword
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.buttons = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.login(token);



// const displayCommand = new SlashCommandBuilder()
//   .setName("scores")
//   .setDescription("Displays the current scores of all users");

// client.on("ready", () => {
//   client.user.setActivity("with your credit");
//   console.log(client.user.username + " is in.");

//   //Load the JSON file
//   fs.readFile("userScores.json", "utf8", (err, jsonString) => {
//     if (err) {
//       console.log("File read failed:", err);
//       //Create the file if it doesn't exist
//       fs.writeFile("userScores.json", "{}", (err) => {
//         if (err) {
//           console.log("Error writing file", err);
//         } else {
//           console.log("Successfully wrote file");
//         }
//       });
//       return;
//     }
//     console.log("File data:", jsonString);
//     scores = JSON.parse(jsonString);
//   });
// });

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isCommand()) return;

//   if (interaction.commandName === "vote") {
//     const user = interaction.options.getUser("user");
//     const amount = interaction.options.getInteger("amount");
//     console.log(user);
//     console.log(amount);

//     //Check if the user is in the JSON file
//     if (scores[user.id] == undefined) {
//       scores[user.id] = 0;
//     }

//     //Add or remove the amount from the user's score
//     scores[user.id] += amount;

//     //Write the new scores to the JSON file
//     fs.writeFile("userScores.json", JSON.stringify(scores), (err) => {
//       if (err) {
//         console.log("Error writing file", err);
//       } else {
//         console.log("Successfully wrote file");
//       }
//     });

//     //Send the user a message
//     interaction.reply(
//       "You voted to add " + amount + " to " + user.username + "'s score!"
//     );
//   } else if (interaction.commandName === "scores") {
//     //Send the user a message
//     interaction.reply("The current scores are: " + JSON.stringify(scores));
//   }
// });
