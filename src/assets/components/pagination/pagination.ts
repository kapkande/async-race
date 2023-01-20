import interactionGarage from "../interactionGarage"
import createCar from "../main/createGameHtml"
import remuveCars from "../remuveCars"
import IArrayCars from "../date/arrayCars"
import setNumberPage from "./setNumberPage"

let index = 0;

async function setPagination() {
    const arrayCars = await interactionGarage.getCars();
    const size = 7;
    const subarray = [];
    for (let i = 0; i < Math.ceil(arrayCars.length / size); i++) {
        subarray[i] = arrayCars.slice((i * size), (i * size) + size);
    }

    if (index != subarray.length) {
        setNumberPage();
        index = subarray.length;
    }
    const pageActive = document.querySelector('.page-active');
    let page: number
    if (!pageActive) { page = 0 } else { page = Number(pageActive?.textContent) - 1; }
    // console.log(page);
    const arr:Array<IArrayCars> = subarray[page]
    arr.forEach(element => {
       createCar(element.name, element.color, element.id);
    });
}

export default setPagination;



