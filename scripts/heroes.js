//imports the getter function
import { getHeroes } from "./database.js"

//invokes the function to actually GET a copy of that data
const heroes = getHeroes()

//turns the function into HTML to display in browser for users
export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}