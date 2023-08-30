const { SlashCommandBuilder } = require('discord.js');
const { type } = require('os');

function validBin(myBinStr){
	for (let index = 0; index < myBinStr.length; index++) {
		const element = myBinStr[index];
		if(element != '0' & element != '1'){
			return false
		}
	}

	return true;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('convert')
		.setDescription('Converts between number systems')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('Conversion Type')
				.setRequired(true)
				.addChoices(
					{ name: 'BinaryToDecimal', value: '0' },
					{ name: 'DecimalToBinary', value: '1' },
					{ name: 'DecimalToHex', value: '2' },
					{ name: 'BinaryToHex', value: '3' },
				))
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Number to be Converted')
				.setRequired(true)),
	async execute(interaction) {
		const choice = interaction.options.getString('category');
		const tempNumStr = interaction.options.getString('input');
		const num = Math.ceil(Number(tempNumStr))
		const numStr = String(num)

		if(choice == '0'){
			if(!validBin(numStr)){
				await interaction.reply({content: `Error: Please Enter Valid Binary Number!`, ephemeral: true })
				return
			}
			const converted = parseInt(numStr, 2)
			await interaction.reply({content: numStr + ` converted to decimal is ` + String(converted), ephemeral: true })
			return
		}
		else if(choice === '1'){
			if(isNaN(num) | num < 0){
				await interaction.reply({content: `Error: Please Enter A Valid Positive Integer!`, ephemeral: true })
				return
			}
			const converted = num.toString(2)
			await interaction.reply({content: numStr + ` converted to binary is ` + String(converted), ephemeral: true })
		}
		else if(choice === '2'){
			if(isNaN(num) | num < 0){
				await interaction.reply({content: `Error: Please Enter A Valid Positive Integer!`, ephemeral: true })
				return
			}
			const converted = num.toString(16)
			await interaction.reply({content: numStr + ` converted to hexadecimal is ` + String(converted), ephemeral: true })
		}
		else if(choice == '3'){
			if(!validBin(numStr)){
				await interaction.reply({content: `Error: Please Enter Valid Binary Number!`, ephemeral: true })
				return
			}
			const converted = parseInt(numStr, 2).toString(16)
			await interaction.reply({content: numStr + ` converted to hexadecimal is ` + String(converted), ephemeral: true })
			return
		}

	},
};