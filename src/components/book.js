export default class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
        this.page = {}
        this.style = `
            padding: 8px;
            line-heigth: 2;
        `
    }

    toString() {
        return `
        <div class='book'>
            <div>
                <h1>${this.title}</h1>
                <h3>by ${this.author}</h3>
            </div>
            <div>
                ${this.page.toString()}
            </div>
        </div>
        `
    }
}
