export default class Choices {
    constructor(choices) {
        this.choices = choices
        this.style = ``
    }

    toString() {
        return `
        <div
            style='${this.style}'
            class='choices-container'>
            ${
                this.choices.map(c => {
                    return c.toString()
                }).join('')
            }
        </div>
        `
    }
}
