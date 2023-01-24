import interactionWinners from '../interactionWinners'
import interactionGarage from '../interactionGarage'
import ObjectData from '../date/ObjectData'
import svgCar from "../../image/car"
import setNumberInTablete from '../winner/setNumberInTablete'
import objWinners from '../date/ObjectWinners'


async function createTableItem(date:objWinners) {
    const winnersTable = document.querySelector('.winners__table')
    const getCarInGarage:ObjectData = await interactionGarage.getCar(date.id)
    let bases = document.createElement('tr');
    bases.classList.add('tr');

    let trNumber = document.createElement('td');
    trNumber.classList.add('winners__tr-number');
    bases.appendChild(trNumber);

    let trCar = document.createElement('td');
    trCar.classList.add('winners__tr-car');
    trCar.innerHTML = svgCar;
    trCar.style.fill = `${getCarInGarage.color}`;
    bases.appendChild(trCar);

    let trName = document.createElement('td');
    trName.classList.add('winners__tr-name');
    trName.textContent = `${getCarInGarage.name}`
    bases.appendChild(trName);

    let trWins = document.createElement('td');
    trWins.classList.add('winners__tr-wins');
    trWins.textContent = `${date.wins}`
    bases.appendChild(trWins);

    let trTime = document.createElement('td');
    trTime.classList.add('winners__tr-time');
    trTime.textContent = `${date.time}`
    bases.appendChild(trTime);

    winnersTable?.appendChild(bases);
    setNumberInTablete()
}

export default createTableItem




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
