import setAmimation from "./setAmimation"

function startAllCars() {
    document.querySelector('.section__game')?.classList.add('game-active')
    const itemCars: NodeListOf<Element> = document.querySelectorAll('.item-car')
    itemCars.forEach((element) => {
        if (!(element instanceof HTMLElement)) { return };
        element.classList.add('driving')
        setAmimation(element);
    });
};
export default startAllCars;

// const end:Date = new Date;
// saveWinners(+carItem.id, start, end);