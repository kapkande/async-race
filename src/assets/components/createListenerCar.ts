import interactionGarage from "./interactionGarage"
import deleteWinner from "./winner/deleteWinner"
import setDisabled from "./setDisabled"
import removeItemActive from "./removeItemActive"
import setAmimation from "./animation/setAmimation"
import interactionWinners from "./interactionWinners"
import setPagination from "./pagination/pagination"
import setLeft from "./animation/setLeft"

function createListenerCar(carItem: HTMLElement, id: number) {
    carItem.addEventListener('click', async (e) => {

        if (!(e!.target instanceof HTMLElement || e!.target instanceof HTMLButtonElement)) { return; }

        if (['button button__start'].includes(e.target?.className)) {
            carItem.classList.add('driving');
            setAmimation(carItem);
            }
        if (['button button__stop'].includes(e.target?.className)) {
            carItem.classList.remove('driving');
            await setAmimation(carItem);
            await setLeft(carItem)
            }
        if (['button button__remuve'].includes(e.target?.className)) {
            await interactionGarage.deleteCar(id);
            await deleteWinner(id)
            setPagination();
           
        }
        if (['button button__select'].includes(e.target?.className)) {
            removeItemActive();
            carItem.classList.add('item-active');
            setDisabled();
        }
    })
}
export default createListenerCar;



