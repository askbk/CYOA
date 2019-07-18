export class Graph {
    constructor(story) {
        this.situationList = []

        this.construct(story)
    }

    getPage(n) {
        const situation = this.situationList[n]

        return {
            paragraphs: situation.paragraphs,
            choices: situation.choices
        }
    }

    construct(story) {
        const pages = story.story.pages

        Object.keys(pages).forEach((pageNumber) => {
            const page = pages[pageNumber]
            const situation = new Situation()

            page.paragraphs.forEach(paragraph => {
                situation.addParagraph(paragraph)
            })

            if (page.choices) {
                page.choices.forEach(choice => {
                    situation.addChoice({text: choice.text, next: choice.next})
                })
            }

            this.situationList[pageNumber] = situation
        })
    }

    // Input: a Situation object
    addSituation(situation) {
        situation.index = this.situationList.length
        this.situationList.push(situation)
    }
}

class Situation {
    constructor() {
        this.choices = []
        this.paragraphs = []
    }

    addParagraph(text) {
        this.paragraphs.push(text)
    }

    getChoices() {
        return this.choices.map(e => {
            return {
                text: e.text,
                next: e.next
            }
        })
    }

    addChoice(choice) {
        this.choices.push(choice)
    }
}
