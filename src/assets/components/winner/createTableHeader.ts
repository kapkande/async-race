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
trHeader.appendChild(thHeaderWins);

let thBastTime = document.createElement('th');
thBastTime.classList.add('winners__thBastTime');
thBastTime.textContent = 'Bast Time'
trHeader.appendChild(thBastTime);
// th close
table?.appendChild(trHeader);


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
