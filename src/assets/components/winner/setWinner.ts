import interactionWinners from '../interactionWinners'
import ObjectWinners from '../date/ObjectWinners'

async function setWinner(date:ObjectWinners) {
    await interactionWinners.createWinner(date);
}
export default setWinner;