import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
<<<<<<< HEAD
    greet() {
    console.log("Hello, Stimulus!", this.element)
  }
}
=======

  static targets = [ "name" ]

  connect() {
    console.log("Hello controller connected!");
  }

  greet() {
    const element = this.nameTarget
    const name = element.value
    console.log(`hello, ${name}!`)
  }
}

>>>>>>> 486e368745edb11bc28bb2e239542f7d77c8ea20
