export default class Choice {
    constructor(text, next) {
        this.text = text
        this.next = next
        this.style = `
            padding: 8px;
            line-heigth: 2;
        `
    }

    render() {
        return `
        <a
            href='#'
            data-next="${this.next}"
            style="${this.style}"
            class="choice-link">
            ${this.text}
        </a>
        `
    }
}
