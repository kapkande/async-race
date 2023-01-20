import createListenerCar from "../createListenerCar"
import setQuantityCars from "../main/setNumbarPage"
const svgCar: string = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11.5 38q-2.3 0-3.9-1.6T6 32.5H2v-19q0-1.45 1.025-2.475Q4.05 10 5.5 10h28.8L46 21.7v10.8h-4q0 2.3-1.6 3.9T36.5 38q-2.3 0-3.9-1.6T31 32.5H17q0 2.3-1.6 3.9T11.5 38ZM30 20h9.7l-7-7H30Zm-12.5 0H27v-7h-9.5ZM5 20h9.5v-7H5Zm6.5 15.5q1.25 0 2.125-.875T14.5 32.5q0-1.25-.875-2.125T11.5 29.5q-1.25 0-2.125.875T8.5 32.5q0 1.25.875 2.125t2.125.875Zm25 0q1.25 0 2.125-.875T39.5 32.5q0-1.25-.875-2.125T36.5 29.5q-1.25 0-2.125.875T33.5 32.5q0 1.25.875 2.125t2.125.875ZM5 29.5h1.85q.85-1.3 2.125-1.9Q10.25 27 11.5 27t2.525.6q1.275.6 2.125 1.9h15.7q.85-1.3 2.125-1.9Q35.25 27 36.5 27t2.525.6q1.275.6 2.125 1.9H43V23H5ZM43 23H5Z"/></svg>`

let catsBlock = document.createElement('div');
catsBlock.classList.add('carsBlock')


function createCar(carsName: string, color: string, id: number) {
  setQuantityCars()
  const sectionGame: Element | null = document.querySelector('.section__game');
  let carItem = document.createElement('div');
  let navCar = document.createElement('div');
  navCar.classList.add('nav-car');
  carItem.classList.add('item-car');

  let buttonSelect = document.createElement('button');
  buttonSelect.classList.add('button', 'button__select');
  buttonSelect.textContent = 'Select';
  navCar!.appendChild(buttonSelect);
  let buttonRemove = document.createElement('button');
  buttonRemove.classList.add('button', 'button__remuve');
  buttonRemove.textContent = 'Remuve';
  navCar!.appendChild(buttonRemove);
  let title = document.createElement('div');
  title.textContent = `${carsName}`;
  title.classList.add('nameCar');
  navCar!.appendChild(title);

  carItem!.appendChild(navCar);

  let startStop = document.createElement('div');
  startStop.classList.add('start-stop');
  let buttonStart = document.createElement('button');
  buttonStart.classList.add('button', 'button__start');
  buttonStart.textContent = 'A';
  startStop!.appendChild(buttonStart);
  let buttonStop = document.createElement('button');
  buttonStop.classList.add('button', 'button__stop');
  buttonStop.textContent = 'B';
  startStop!.appendChild(buttonStop);
  carItem!.appendChild(startStop);

  let car = document.createElement('div');
  car.classList.add('car');
  car.innerHTML = svgCar;
  car.style.fill = `${color}`;
  carItem!.appendChild(car);

  let line = document.createElement('div');
  line.classList.add('line');
  carItem!.appendChild(line);

  createListenerCar(carItem, id)
  // убрать id из функции выше, если оно в дальшейшем не нужно
  carItem.id = String(id)

  catsBlock!.appendChild(carItem);
  sectionGame!.appendChild(catsBlock);
}
export default createCar;

