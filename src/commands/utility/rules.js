const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Provides information about the binary counting game'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`The binary counting game can be started by typing **!StartGame** in the chat.\nYou start at 0 and work as high as you can in binary (0, 1, 10, 11, 100, etc.).\nKeep going until you mess up!`);
	},
};