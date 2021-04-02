// Liskov Substitution Principle

// Первый пример
class Person {}

class Member extends Person {
  access() {
    console.log('You have access')
  }
}

class Guest extends Person {}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error("You don't have access! Go back!")
  }
}

const openSecretDoor = (member) => {
  if (member instanceof Member) {
    member.access()
  }
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany()) // There should be member, but not guest

// // Нарушение данного принципа: Liskov Substitution Principle
// class Person {
//   access() {
//     console.log('You have access')
//   }
// }

// class Frontend extends Person {
//   canCreateFrontend() {}
// }

// class Backend extends Person {
//   canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Person {
//   access() {
//     throw new Error("You don't have access! Go back!")
//   }
// }

// const openSecretDoor = (person) => {
//   person.access()
// }

// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())

// ==================================================

// Второй пример
class Component {}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponnet extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponnet extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

const renderComponent = (component) => {
  if (component instanceof ComponentWithTemplate) {
    console.log(component.render())
  }
}

renderComponent(new HeaderComponnet())
renderComponent(new FooterComponnet())
renderComponent(new HOC()) // There should be ComponentWithTemplate, but not HigherOrderComponent

// // Нарушение данного принципа: Liskov Substitution Principle
// class Component {
//   render() {
//     return `<div>Component</div>`
//   }
// }

// class HeaderComponnet extends Component {
//   onInit() {}
// }

// class FooterComponnet extends Component {
//   afterInit() {}
// }

// class HOC extends Component {
//   render() {
//     throw new Error('Render is impossible here')
//   }

//   wrapComponent(component) {
//     component.wrapped = true
//     return component
//   }
// }

// const renderComponent = (component) => {
//   console.log(component.render())
// }

// renderComponent(new HeaderComponnet())
// renderComponent(new FooterComponnet())
// renderComponent(new HOC())
