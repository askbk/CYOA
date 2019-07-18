export default class Situation {
    constructor(paragraphs) {
        this.paragraphs = paragraphs
        this.style = `
            padding: 16px;
        `
    }

    toString() {
        return `
        <div
            style='${this.style}'
            class='situation-container'>
            ${
                this.paragraphs.map(p => {
                    return p.toString()
                }).join('')
            }
        </div>
        `
    }
}
