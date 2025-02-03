import { application } from "./application";

// Import and register all controllers
import HelloController from "./hello_controller";

application.register("hello", HelloController);
