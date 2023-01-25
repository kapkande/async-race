const sectionW1inners = document.querySelector('.section__winners')
let table = document.createElement('table');
table.classList.add('winners__table');
sectionW1inners?.appendChild(table);


let trHeader = document.createElement('tr');
trHeader.classList.add('winners__trHeader');

// th open
let thHeaderNum = document.createElement('th');
thHeaderNum.classList.add('winners__thNum');
thHeaderNum.textContent = 'Number'
trHeader.appendChild(thHeaderNum);

let thHeaderCar = document.createElement('th');
thHeaderCar.classList.add('winners__thCar');
thHeaderCar.textContent = 'Car'
trHeader.appendChild(thHeaderCar);

let thHeaderName = document.createElement('th');
thHeaderName.classList.add('winners__thName');
thHeaderName.textContent = 'Name'
trHeader.appendChild(thHeaderName);

let thHeaderWins = document.createElement('th');
thHeaderWins.classList.add('winners__thWins');
thHeaderWins.textContent = 'Wins'
createArrows(thHeaderWins)
trHeader.appendChild(thHeaderWins);

let thBastTime = document.createElement('th');
thBastTime.classList.add('winners__thBastTime');
thBastTime.textContent = 'Bast Time'
createArrows(thBastTime)
trHeader.appendChild(thBastTime);
// th close
table?.appendChild(trHeader);


function createArrows(th:HTMLElement) {
    let arrow = document.createElement('span')
    arrow.innerHTML = `
    <span class="anticon sorter-up">
    <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></span>
    <span class="anticon sorter-down">
    <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span>
   `
   th.appendChild(arrow);
}
// `<table>
//   <tr>
//     <th>№ п/п</th>
//     <th>Наименование</th>
//     <th>Цена, руб.</th>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>Карандаш цветной</td>
//     <td>20,00</td>
//   </tr>
//   <tr>
//     <td>2</td>
//     <td>Линейка 20 см</td>
//     <td>30,00</td>
//   </tr>
// </table>`
