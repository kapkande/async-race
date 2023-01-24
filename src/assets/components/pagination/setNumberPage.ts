import remuveCars from "../remuveCars"
import interactionGarage from "../interactionGarage"
import setPagination from "./pagination"


let index:number = 0
async function createNumberPage() {
    const arrayCarsLemgth = await interactionGarage.getCars();
    const paginationBlock = document.querySelector('.paginationBlock')
    removeNumberPage() 
    for (let i = 0; i < Math.ceil(arrayCarsLemgth.length/7); i++) {
        let div = document.createElement('span');
        div.classList.add('numbarPage', 'button')
        div.textContent = `${i + 1}`;
        if (index == i){div.classList.add('page-active')}
        paginationBlock?.appendChild(div);
    }
    paginationBlock?.addEventListener('click', updatePage)
}
export default createNumberPage;

function updatePage(e: Event) {
    const pageActive = document.querySelector('.page-active');
    let target = e.target as HTMLElement;
    if (['numbarPage button'].includes(target.className)){
        index = Number(target.textContent) - 1
        remuveCars();
        if (pageActive){pageActive!.classList.remove('page-active')}
        target.classList.add('page-active');
        setPagination();
    }
}

function removeNumberPage() {
    const paginationBlock = document.querySelectorAll('.numbarPage')
    paginationBlock.forEach(element => {
        element.remove();
    });

}