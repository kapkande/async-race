import interactionEngine from '../interactionEngine'
import setWinner from '../winner/setWinner'
import setAmimation from "./setAmimation"

function startAllCars() {
    let startDate = new Date;
    const itemCars:NodeListOf<Element> = document.querySelectorAll('.item-car') 
    itemCars.forEach((element) => {
        if (!(element instanceof HTMLElement)) {return};
        element.classList.add('driving')
        setAmimation(element)
    });
};
export default startAllCars;