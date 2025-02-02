import { Application } from "@hotwired/stimulus"
import HelloController from "./hello_controller"
import ClipboardController from "./clipboard_controller"

const application = Application.start()
application.register("hello", HelloController)
application.register("clipboard", ClipboardController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
