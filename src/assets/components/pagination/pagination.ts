import interactionGarage from "../interactionGarage"
import createCar from "../main/createGameHtml"
import remuveCars from "../remuveCars"
import IArrayCars from "../date/arrayCars"
let index = 0;

async function setPagination() {
    const arrayCars = await interactionGarage.getCars();
    const size = 7;
    const subarray = [];
    for (let i = 0; i < Math.ceil(arrayCars.length / size); i++) {
        subarray[i] = arrayCars.slice((i * size), (i * size) + size);
    }

    if (index != subarray.length) {
        setNumberPage(subarray);
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

function setNumberPage(subarray: Array<object>) {
    removeNumberPage()
    const paginationBlock = document.querySelector('.paginationBlock')
    for (let i = 0; i < subarray.length; i++) {
        let div = document.createElement('span');
        div.classList.add('numbarPage', 'button')
        div.textContent = `${i + 1}`;
        paginationBlock?.appendChild(div);
    }
    paginationBlock?.addEventListener('click', updatePage)
}

function updatePage(e: Event) {
    const pageActive = document.querySelector('.page-active');
    let target = e.target as HTMLElement;
    if (['numbarPage button'].includes(target.className)){
        remuveCars()
        if (pageActive){pageActive!.classList.remove('page-active')}
        target.classList.add('page-active')
        setPagination()
    }
}

function removeNumberPage() {
    const paginationBlock = document.querySelectorAll('.numbarPage')
    paginationBlock.forEach(element => {
        element.remove()
    });

}