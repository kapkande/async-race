function remuveCars() {
    const arrayCars:NodeListOf<Element> = document.querySelectorAll('.item-car');
    arrayCars.forEach(element => {
        element.remove();
    });
}
export default remuveCars;
