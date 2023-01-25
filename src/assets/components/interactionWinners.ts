import InteractionWinners from "./date/InteractionWinners"
import ObjectData from "./date/ObjectData"


const interactionWinners: InteractionWinners = {
    rootLinck: 'http://127.0.0.1:3000/winners',
    getWinners: async (starus:string) => {
        const response = await fetch(`${interactionWinners.rootLinck}${starus? starus : ''}`)
        return await response.json()
    },
    getWinner: async (id:string) => {
        const response = await fetch(`${interactionWinners.rootLinck}/${id}`)
        return await response.json()
    },
    createWinner: (async (data: ObjectData) => {
        const response = await fetch(interactionWinners.rootLinck, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json()
    }),
    deleteWinner: async (id:number) => {
        const response = await fetch( `${interactionWinners.rootLinck}/${id}`,{
            method: 'DELETE',
           })
        return await response.json()
    },
    updateWinner: (async ( data: ObjectData, id: number) => {
        const response = await fetch(`${interactionWinners.rootLinck}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json()
    }),
}

export default interactionWinners;