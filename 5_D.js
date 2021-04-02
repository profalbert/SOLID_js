// Dependency Inversion Principle

class Fetch {
  request() {
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request()
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet() {
    return this.localStorage.get()
  }
}

class Database {
  constructor(client) {
    this.client = client
  }
  getData(key) {
    return this.client.clientGet(key)
  }
}

const db1 = new Database(new FetchClient())
console.log(db1.getData())

const db2 = new Database(new LocalStorageClient())
console.log(db2.getData())

// // Нарушение данного принципа: Dependency Inversion Principle
// class Fetch {
//   request(url) {
//     // return fetch(url).then((r) => r.json())
//     return Promise.resolve('data from fetch')
//   }
// }

// class LocalStorage {
//   get() {
//     const dataFromLocalStorage = 'data from local storage'
//     return dataFromLocalStorage
//   }
// }

// class Database {
//   constructor() {
//     // this.fetch = new Fetch()
//     this.localStorage = new LocalStorage()
//   }
//   getData() {
//     // return this.fetch.request('vk.com')
//     return this.localStorage.get('local storage key')
//   }
// }

// const db = new Database()

// console.log(db.getData())
