
import QuestionAnswerService from "./Service.js";

//Private

//let _charService = new CharacterService()
//declare service 
let _questionAnswerService = new QuestionAnswerService()

function _updateUi() {
    //store a property of the api model in varabe 
    //let characters = _charService.Characters
    let questionAnswers = _questionAnswerService.QuestionsAnswers
    let template = ''
    for (let i = 0; i < questionAnswers.length; i++) {
        let questionAnswer = questionAnswers[i];
        template += questionAnswer.listTemplate

    }
    document.querySelector('#character-list').innerHTML = template
    //for loop goes here should look like below :
    //     (let i = 0; i < characters.length; i++) {
    //     const character = characters[i];
    //     template += character.listTemplate
    // }
    //update document here 
    //document.getElementById('character-list').innerHTML = template
}

//Public
export default class QuestionAnswerController {
    constructor() {
        //register subscribers
        _questionAnswerService.addSubscriber('questionsAnswers', _updateUi)
        //example _charService.addSubscriber('characters', _drawCharacters)
        //fetch data
        _questionAnswerService.getapiQuestionAnswer();
        //example _charService.getApiCharacters();
    }
}