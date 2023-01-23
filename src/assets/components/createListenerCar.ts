import interactionGarage from "./interactionGarage"
import createCar from "./main/createGameHtml"
import setDisabled from "./setDisabled"
import removeItemActive from "./removeItemActive"
// import setAmimation from "./animation/startAllCars"
import setAmimation from "./animation/setAmimation"
import stopAmimation from "./animation/stopAmimation"
function createListenerCar(carItem: HTMLElement, id: number) {
    carItem.addEventListener('click', (e) => {
        // console.log(e.target);

        if (!(e!.target instanceof HTMLElement || e!.target instanceof HTMLButtonElement)) { return; }
      
        if (['button button__start'].includes(e.target?.className)) {
            carItem.classList.add('driving')
            setAmimation(carItem)
        }
        if (['button button__stop'].includes(e.target?.className)) {
            stopAmimation(carItem)
        }
        if (['button button__remuve'].includes(e.target?.className)) {
            interactionGarage.deleteCar(id)
            carItem.remove()
        }
        if (['button button__select'].includes(e.target?.className)) {
            removeItemActive()
            carItem.classList.add('item-active')
            setDisabled()
        }
    })
}
export default createListenerCar;



