import remuveCars from "../remuveCars"
import interactionGarage from "../interactionGarage"
import setPagination from "./pagination"

async function setNumberPage() {
    removeNumberPage()
    const arrayCarsLemgth = await interactionGarage.getCars();
    // console.log(Math.ceil(arrayCarsLemgth.length/7));
    const paginationBlock = document.querySelector('.paginationBlock')
    for (let i = 0; i < Math.ceil(arrayCarsLemgth.length/7); i++) {
        let div = document.createElement('span');
        div.classList.add('numbarPage', 'button')
        div.textContent = `${i + 1}`;
        paginationBlock?.appendChild(div);
    }
    paginationBlock?.addEventListener('click', updatePage)
}
export default setNumberPage;

function updatePage(e: Event) {
    const pageActive = document.querySelector('.page-active');
    let target = e.target as HTMLElement;
    if (['numbarPage button'].includes(target.className)){
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