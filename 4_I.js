// Interface Segregation Principle

class Animal {
  constructor(name) {
    this.name = name
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  },
}

const swimer = {
  swim() {
    console.log(`${this.name} can swim`)
  },
}

const flier = {
  fly() {
    console.log(`${this.name} can fly`)
  },
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

// разобрать данную строчку
Object.assign(Dog.prototype, walker, swimer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimer)

const dog = new Dog('Rex')
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle')
eagle.walk()
eagle.fly()

const whale = new Whale('Whale')
whale.swim()

// // Нарушение данного принципа: Interface Segregation Principle
// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   walk() {
//     console.log(`${this.name} can walk`)
//   }

//   swim() {
//     console.log(`${this.name} can swim`)
//   }

//   fly() {
//     console.log(`${this.name} can fly`)
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }

// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }

// class Whale extends Animal {
//   walk() {
//     return null
//   }

//   fly() {
//     return null
//   }
// }

// const dog = new Dog('Rex')
// dog.walk()
// dog.swim()
// dog.fly()

// const eagle = new Eagle('Eagle')
// eagle.walk()
// eagle.swim()
// eagle.fly()

// const whale = new Whale('Whale')
// whale.walk()
// whale.swim()
// whale.fly()
