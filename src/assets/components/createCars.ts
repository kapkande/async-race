import interactionGarage from "./interactionGarage"
import createCar from "./main/createGameHtml"
import arrayCars from "./date/arrayCars"


async function createCars() {
    const arrayCars: Array<arrayCars> = await interactionGarage.getCars()
    arrayCars.forEach(element => {
        createCar(element.name, element.color, element.id);
    });
}
export default createCars;
