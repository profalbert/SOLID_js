// Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2,
    )
  }
}

const printer = new NewsPrinter(new News('Putin', 'new constitution'))

console.log(printer) // разобрать вывод этой строки
console.log(printer.html())
console.log(printer.json())

// // Нарушение данного принципа: Single Responsibility Principle
// class News {
//   constructor(title, text) {
//     this.title = title
//     this.text = text
//     this.modified = false
//   }

//   update(text) {
//     this.text = text
//     this.modified = true
//   }

//   toHTML() {
//     return `
//       <div class="news">
//         <h1>${this.title}</h1>
//         <p>${this.text}</p>
//       </div>
//     `
//   }
// }

// const news = new News('Putin', 'new constitution')

// console.log(news.toHTML())
