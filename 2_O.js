// Open Close Principle

class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super() // когда нужно передавать super(), а когда не нужно? - узнать!
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius ** 2
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area()
      return Math.round(acc)
    }, 0)
  }
}

const calc = new AreaCalculator([
  new Square(5),
  new Circle(10),
  new Circle(12),
  new Square(3),
  new Rect(10, 5),
])

console.log(calc.sum())

// // Нарушение данного принципа: Open Close Principle
// class Square {
//   constructor(size) {
//     this.type = 'square'
//     this.size = size
//   }
// }

// class Circle {
//   constructor(radius) {
//     this.type = 'circle'
//     this.radius = radius
//   }
// }

// class Rect {
//   constructor(width, height) {
//     this.type = 'rect'
//     this.width = width
//     this.height = height
//   }
// }

// class AreaCalculator {
//   constructor(shapes = []) {
//     this.shapes = shapes
//   }

//   sum() {
//     return this.shapes.reduce((acc, shape) => {
//       if (shape.type === 'square') {
//         acc += shape.size ** 2
//       } else if (shape.type === 'circle') {
//         acc += Math.PI * shape.radius ** 2
//       } else if (shape.type === 'rect') {
//         acc += shape.width * shape.height
//       }
//       return Math.round(acc)
//     }, 0)
//   }
// }

// const calc = new AreaCalculator([
//   new Square(5),
//   new Circle(10),
//   new Circle(12),
//   new Square(3),
//   new Rect(10, 5),
// ])

// console.log(calc.sum())
