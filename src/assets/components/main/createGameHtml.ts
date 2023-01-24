import createListenerCar from "../createListenerCar"
import svgCar from "../../image/car"
let catsBlock = document.createElement('div');
catsBlock.classList.add('carsBlock')


function createCar(carsName: string, color: string, id: number) {
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

