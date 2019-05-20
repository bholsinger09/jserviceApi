import RandomQuestion from "../models/model.js";


//Private
//instanciate api here using axios
let _api = new axios.create({
    baseURL: 'http://jservice.io/api/random'
})




let _state = {
    randomQuestions: []
    // example characters: [],
}
let _subscribers = {
    randomQuestions: []
    // example characters: []
}

function setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
    //examples :
    // _state[propName] = data
    // _subscribers[propName].forEach(fn => fn())
}


//Public
export default class CharacterService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Questions() {
        return _state.randomQuestions.map(c => new RandomQuestion(c))

    }
    getapiQuestionAnswer() {
        _api.get('questionAnswer')
            .then(response => {
                let data = response.data.map(rawData => new RandomQuestion(rawData))
                setState('questionAnswer', data)
            })
            .catch(err => {
                console.error(err)
            })
    }
    // example getter get Characters() {
    //     return _state.characters.map(c => new Character(c))
    // }

    //below is the getapi method and map through the results 
    // getApiCharacters() {
    //     _api.get('characters')
    //         .then(response => {
    //             let data = response.data.map(rawData => new Character(rawData))
    //             setState('characters', data)
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }


}