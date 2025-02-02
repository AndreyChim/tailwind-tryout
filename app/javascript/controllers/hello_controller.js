import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

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

