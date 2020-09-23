class Animal {
    constructor ();
    
    speak () {
        console.log(sound)
    }
    sayName () {
        console.log(name)
    }
    get name () {
        return this.name
    }
    set name (newName) {
        this.name = newName
    }
}

class Dog extends Animal {
    constructor (name, sound)

    obj = {
        name: "Doggo",
        sound: "bork"
    }
}
 