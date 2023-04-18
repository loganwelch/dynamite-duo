//imports the getter function
import { getVillains } from "./database.js"

//invokes the function to actually GET a copy of that data
const villains = getVillains()

//turns the function into HTML to display in browser for users
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}