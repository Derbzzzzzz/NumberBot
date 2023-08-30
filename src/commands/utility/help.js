const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides information about NumberBot'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`\nThis is a bot where you can play a binary counting game, do conversions, and more!\nSee a list of commands by typing **/** and viewing the results under NumberBot\n**/convert** allows you to convert between binary, decimal, and hexadecimal\n**/rules** gives the rules to playing the game!`);
	},
};