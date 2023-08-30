class Game{

    constructor(){
        this.map = new Map();
    }

    handleMsg(msg){
    
        if(msg.content === "!StartGame"){
            this.map.set(msg.channel.name, 0)
            msg.channel.send("Game is Started at 0!\nRemember, binary counting is the game!")
            return
        }
    
        if(msg.author.bot | this.map.get(msg.channel.name) === undefined){
            return
        }

        if(msg.content === "!EndGame"){
            msg.channel.send("Game has been ended with a score of " + this.map.get(msg.channel.name) + "\nUse **!StartGame** to start the game again!")
            this.map.delete(msg.channel.name)
            return
        }
    
        let count = this.map.get(msg.channel.name);
    
        if(msg.content === String(count.toString(2))){
            msg.react("👍");
            this.map.set(msg.channel.name, count + 1);
        } else{
            msg.reply("Failure, was looking for " + count.toString(2) + " (" + count + " in decimal)" + "\nCount reset to 0.")
            this.map.set(msg.channel.name, 0)
        }
    }

}

const currGame = new Game()


module.exports = currGame