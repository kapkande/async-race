function setNumberInTablete() {
    const winnersTrNumber: NodeListOf<Element> = document.querySelectorAll('.winners__tr-number');
    for (let i = 0; i < winnersTrNumber.length; i++) {
        winnersTrNumber[i].textContent = `${i + 1}`
    }
}
export default setNumberInTablete