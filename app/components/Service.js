import Character from '../models/model.js/index.js'

//Private
//instanciate api here using axios
// let _api = new axios.create({
//     baseURL: 'http://hp-api.herokuapp.com/api'
// })




let _state = {
    // example characters: [],
}
let _subscribers = {
    // example characters: []
}

function setState(propName, data) {
    //examples :
    // _state[propName] = data
    // _subscribers[propName].forEach(fn => fn())
}


//Public
export default class CharacterService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
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