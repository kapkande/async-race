import interactionWinners from '../interactionWinners'
import ObjWinners from "../date/ObjectWinners"

async function setWinner(id:number) {
    const arrayWinners:Array<ObjWinners> = await interactionWinners.getWinners()

    arrayWinners.forEach(element => {
        if( element.id == id){
            interactionWinners.deleteWinner(id);
        }
});
}
export default setWinner;