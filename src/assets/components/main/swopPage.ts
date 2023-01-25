import removeTablet from "../winner/removeTable"
import createTable from "../winner/createTable"
function swopPage(e:Event) {
    if (!(e!.target instanceof HTMLElement || e!.target instanceof HTMLButtonElement)) { return; }
    const sectionForm = document.querySelector('.section__form');
    const sectionGame = document.querySelector('.section__game')
    const sectionWinners = document.querySelector('.section__winners')
    if (['button button__gatage'].includes(e.target?.className)) {
        sectionWinners?.classList.add('hidden')
        sectionForm?.classList.remove('hidden')
        sectionGame?.classList.remove('hidden')
        removeTablet()
        createTable()
    }
    if (['button button__winners'].includes(e.target?.className)) {
        sectionForm?.classList.add('hidden')
        sectionGame?.classList.add('hidden')
        sectionWinners?.classList.remove('hidden')
    }
   
}

export default swopPage