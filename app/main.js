import QuestionAnswerController from "./components/Controller.js";


class App {
    constructor() {
        this.controllers = {
            JepController: new QuestionAnswerController()
            // charController: new CharacterController()
        }
    }
}


window['app'] = new App();