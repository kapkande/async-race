import interactionWinners from '../interactionWinners'
import createTableItem from './createTableItem'
import objWinners from '../date/ObjectWinners'


async function createTable() {
    console.log(await interactionWinners.getWinners('?_order=ASC, ?_sort=id'))
    console.log(await interactionWinners.getWinners('?_order=DESC ?_sort=id'));
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