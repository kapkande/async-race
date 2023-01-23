import InteractionGarage from "./date/InteractionGarage"
import ObjectData from "./date/ObjectData"


const interactionGarage: InteractionGarage = {
    rootLinck: 'http://127.0.0.1:3000/garage',
    getCars: async () => {
        const response = await fetch(interactionGarage.rootLinck)
        return await response.json()
    },
    getCar: async (id:number) => {
        const response = await fetch( `${interactionGarage.rootLinck}/${id}` )
        return await response.json()
    },
    createCar: (async (data: ObjectData) => {
        const response = await fetch(interactionGarage.rootLinck, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json()
    }),
    deleteCar: async (id:number) => {
        const response = await fetch( `${interactionGarage.rootLinck}/${id}`,{
            method: 'DELETE',
           })
        return await response.json()
    },
    updateCar: (async ( data: ObjectData, id: number) => {
        const response = await fetch(`${interactionGarage.rootLinck}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json()
    }),
}

export default interactionGarage;