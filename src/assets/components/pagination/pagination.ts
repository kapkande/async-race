import interactionGarage from "../interactionGarage"
import createCar from "../main/createGameHtml"
import remuveCars from "../remuveCars"
import IArrayCars from "../date/arrayCars"
import createNumberPage from "./setNumberPage"
import arrayCars from "../date/arrayCars"
import updateNumberPage from "./updateNumberPage"
import setQuantityCars from "../main/setNumbarPage"

let index = 0;


async function setPagination() {
    setQuantityCars();
    remuveCars();
    const splitArray:arrayCars[][] = [];
    const arrayCars = await interactionGarage.getCars();
    const size = 7;
    for (let i = 0; i < Math.ceil(arrayCars.length / size); i++) {
        splitArray[i] = arrayCars.slice((i * size), (i * size) + size);
    }
    
    if (splitArray.length == 0){return}
    
    if (index != splitArray.length) {
        createNumberPage();
        index = splitArray.length;
    }
    
    let page: number
    const pageActive:HTMLElement | null = document.querySelector('.page-active');
    if (!pageActive) { page = 0 } else { page = Number(pageActive?.textContent) - 1; };
  
    splitArray[page].forEach(element => {
       createCar(element.name, element.color, element.id);
    });
}

export default setPagination;



