export default class RandomQuestion {
    constructor(data) {
        this.question = data.question
        this.airdate = data.airdate
        this.answer = data.answer
    }

    get listTemplate() {

        return `
        <li>${this.question}</li>
        <li>${this.airdate}</li>
        <li>${this.answer}</li>
        `

    }


}
