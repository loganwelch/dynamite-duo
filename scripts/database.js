const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Seditious Siren",
            power: "Hypnotic trance melody"
        },
        {
            id: 2,
            name: "Morticia",
            power: "Ressurect undead drake"
        },
        {
            id: 3,
            name: "Cipher",
            power: "Shapeshift"
        }
    ]
}

//exports a copy of this data for use in other modules
export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

//exports a copy of this data for use in other modules
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

