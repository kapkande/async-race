function createTableIe() {
    const tr = document.querySelectorAll('.tr')
    tr.forEach(element => {
        element.remove()
    });
}

export default createTableIe

