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

    toString() {
        return `
            <div
                style='${this.style}'
                class='page'>
                <div>
                    ${this.situation.toString()}
                    ${this.choices.toString()}
                </div>
                <div>
                    <p>Page ${this.pageNumber}</p>
                </div>
            </div>
        `
    }
}
