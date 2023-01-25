import interactionWinners from "../interactionWinners"
import ObjWinners from "../date/ObjectWinners"

async function saveWinners(carItem: HTMLElement, start: Date) {
   const gameActive = document.querySelector('.section__game')
    if (gameActive?.className == 'section__game'){return}
    const stop = new Date;
    const arrayWinners: Array<ObjWinners> = await interactionWinners.getWinners();
    let gwin: ObjWinners;
    arrayWinners.forEach(element => {
        if (element.id == +carItem.id) {
            gwin = interactionWinners.getWinner(carItem.id)
        }
    });

    const date: ObjWinners = {
        id: +carItem.id,
        wins: 1,
        time: `${(stop.getTime() -  start.getTime())/1000}`,
    }

    if (!gwin!) {
        interactionWinners.createWinner(date)
        return
    }
    let obj: ObjWinners = await interactionWinners.getWinner(+carItem.id)
    date.time = `${Math.min(+date.time, +obj.time)}`;
    date.wins = obj.wins + 1;
    interactionWinners.updateWinner(date, carItem.id)
    }

export default saveWinners

