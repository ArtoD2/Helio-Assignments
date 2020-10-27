class Animal {
    constructor(name, sound) {
        this._name = name;
        this._sound = sound;
    }
    speak = () => {
        console.log(this._sound)
    }
    sayName = () => {
        console.log(this._name)
    }
    get name () {
        return this._name
    }
    set name (newName) {
        this._name = newName
    }
}

class Dog extends Animal {
    constructor (name, sound) {
        super(name, sound)
    }
}
const dog = new Dog ("Yorkie","Bork")
dog.sayName()
dog.speak()