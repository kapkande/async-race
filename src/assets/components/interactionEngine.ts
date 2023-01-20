import InteractionEngine from "./date/InteractionEngine"
import ObjectData from "./date/ObjectData"


const interactionEngine: InteractionEngine = {
    rootLinck: 'http://127.0.0.1:3000/engine',
    stopStartEngine: (async (id: number, status: string) => {
        const response =
         await fetch(`${interactionEngine.rootLinck}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return await response.json()
    }),
    switchEngine: (async (id: number, status: string) => {
        const response =
         await fetch(`${interactionEngine.rootLinck}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return await response.json()
    }),
}

export default interactionEngine;