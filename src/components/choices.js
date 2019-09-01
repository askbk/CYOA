export default class Choices {
    constructor(choices) {
        this.choices = choices
        this.style = `
            display: flex;
            flex-flow: wrap;
            padding: 16px
        `
    }

    render() {
        return `
        <div
            style="${this.style}"
            class="choices-container">
            ${
                this.choices.map(c => {
                    return c.render()
                }).join('')
            }
        </div>
        `
    }
}
