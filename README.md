# Number Bot

Number Bot is a discord bot built using JavaScript and discord.js through npm. It allows the user to convert between number systems (binary, decimal, and hexadecimal) and also allows the user to play a binary counting game in a server!

## Commands

- **/help** - Gives user info about the bot, including how to view other commands and the most common commands
- **/convert** - Takes in two options, one for what type of conversion the user wants (Ex: BinaryToDecimal), and an option which represents the number the user wants to be converted
- **/rules** - Gives the general rules for the binary counting game, including how to start and end the game (typing *!StartGame* and *!EndGame* respectively)
- **/user** - Gives the user's name and when they joined the server
- **/server** - Gives the server's name and how many members it has
- **/ping** - A classic. Test it out on your own!

## Binary Counting Game

Simply, the binary counting game starts at 0 and tries to see how long the user (or users) can count in binary without messing up! Typing *!StartGame* starts the game in the channel while *!EndGame* ends the game in the channel.