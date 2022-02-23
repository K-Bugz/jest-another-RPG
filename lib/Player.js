const Potion = require('../lib/Potion'); // imports the potion.js
function Player(name = '') {
    this.name = name; // assignes player a name
    // Gives player a random amount of health, strength and agility
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // Gives a starter inventory of a health potion and a random new potion
    // This is why we had to import potion for this module. 
    this.inventory = [new Potion('health'), new Potion()];
}
// prototype is a constructor
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

module.exports = Player;
