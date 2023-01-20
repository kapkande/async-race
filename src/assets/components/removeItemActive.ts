
function removeItemActive() {
    const itemActive = document.querySelectorAll('.item-active')
    if (itemActive.length > 0){
        itemActive.forEach(element => {
            element.classList.remove('item-active')
        });
    }
}

export default removeItemActive;

