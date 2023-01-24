import interactionWinners from '../interactionWinners'
import interactionGarage from '../interactionGarage'

import createTableItem from './createTableItem'

import objWinners from '../date/ObjectWinners'


async function createTable() {
    const winners:Array<objWinners> = await interactionWinners.getWinners();
    winners.forEach(element => {
        const date:objWinners = {
            id: element.id,
            wins: element.wins,
            time: element.time,
        }
      createTableItem(date)
    });
    
}

export default createTable