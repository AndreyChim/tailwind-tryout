// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import { Application } from "@hotwired/stimulus";
import HelloController from "./hello_controller";

const application = Application.start();
application.register("hello", HelloController);
eagerLoadControllersFrom("controllers", application)
