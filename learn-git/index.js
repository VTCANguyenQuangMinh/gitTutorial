function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function(animal) {
    this.stomach.push(animal)
}

module.exports = Cat;