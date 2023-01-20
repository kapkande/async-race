
function setDisabled() {
    const itemActive = document.querySelector('.item-active')
    let Flag;
    if (!itemActive) {
        Flag = true;
    } else {
        Flag = false;
    }
    inputUpdateText.disabled = Flag;
    inputUpdateColor!.disabled = Flag;
    inputUpdateSubmit!.disabled = Flag;
}
export default setDisabled;

