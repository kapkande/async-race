import interactionGarage from "./interactionGarage"
import setNumberPage from "./pagination/setNumberPage"
import setDisabled from "./setDisabled"
import removeItemActive from "./removeItemActive"
import setAmimation from "./animation/setAmimation"
import setQuantityCars from "./main/setNumbarPage"

function createListenerCar(carItem: HTMLElement, id: number) {
    carItem.addEventListener('click', (e) => {
        // console.log(e.target);
        
        if (!(e!.target instanceof HTMLElement || e!.target instanceof HTMLButtonElement)) { return; }
      
        if (['button button__start'].includes(e.target?.className)) {
            setAmimation(carItem)
            carItem.classList.add('driving')
        }
        if (['button button__stop'].includes(e.target?.className)) {
            setAmimation(carItem)
            carItem.classList.remove('driving')
        }
        if (['button button__remuve'].includes(e.target?.className)) {
            interactionGarage.deleteCar(id)
            setQuantityCars()
            carItem.remove()
            setNumberPage()
        }
        if (['button button__select'].includes(e.target?.className)) {
            removeItemActive()
            carItem.classList.add('item-active')
            setDisabled();
        }
    })
}
export default createListenerCar;



