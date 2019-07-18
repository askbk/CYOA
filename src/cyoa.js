import {
    Graph
} from './graph.js'

import Book from './components/book.js'
import Choice from './components/choice.js'
import Choices from './components/choices.js'
import Page from './components/page.js'
import Paragraph from './components/paragraph.js'
import Situation from './components/situation.js'

export const create = (rootElement, storyPath) => {
    const cyoa = new CYOA(rootElement, storyPath)

    cyoa.init()
}

class CYOA {
    constructor(rootElement, storyPath) {
        this.root = document.getElementById(rootElement)
        this.storyPath = storyPath
    }

    async init() {
        const self = this
        const { story } = await import(this.storyPath)

        this.book = new Book(story.meta.title, story.meta.author)
        this.graph = new Graph(story)

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('choice-link')) {
                self.goToPage(e.target.dataset.next)
            }
        })

        this.goToPage(1)
    }

    goToPage(n) {
        const pageObject = this.graph.getPage(n)

        this.book.page = this.createPage(pageObject, n)

        this.root.innerHTML = this.book.toString()
    }

    createPage(pageObject, pageNumber) {
        const page = new Page(
            new Situation(
                pageObject.paragraphs.map(p => {
                    return new Paragraph(p)
                })
            ),
            new Choices(
                pageObject.choices.map(c => {
                    return new Choice(
                        c.text,
                        c.next
                    )
                })
            ),
            pageNumber
        )
        return page
    }
}
