export default class Paragraph {
    constructor(text) {
        this.text = text;
        this.style = `
            padding: 8px;
            line-heigth: 2;
        `
    }

    render() {
        return `
            <p
                style="${this.style}"
                class="paragraph-container">
                ${this.text}
            </p>
        `
    }
}
