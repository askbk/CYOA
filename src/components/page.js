export default class Page {
    constructor(situation, choices, pageNumber) {
        this.situation = situation
        this.choices = choices
        this.pageNumber = pageNumber
        this.style = `
            border-width: 3px;
            border-color: black;
            border-style: solid;
        `
    }

    render() {
        return `
            <div
                style="${this.style}"
                class="page">
                <div>
                    ${this.situation.render()}
                    ${this.choices.render()}
                </div>
                <div>
                    <p style="text-align:center;">Page ${this.pageNumber}</p>
                </div>
            </div>
        `
    }
}
