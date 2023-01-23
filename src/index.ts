// import './assets/icons/basket.svg';
import './assets/styles/index.scss';
import './assets/components/animation/startAllCars';


// import './assets/components/createListenerCar';
// import IBasicNew from './assets/components/data/productInterfaceNew';
// import newBasic from './assets/components/impBasicInit';
// import loadBasket from './assets/components/basket/basketLoader';
// import showMain from './assets/components/main/showMain';
// import setBlock from './assets/components/main/showMainBlock'
import createCars from "./assets/components/createCars"
import "./assets/components/main/createMainHtml"
import "./assets/components/main/createGameHtml"
import interactionGarage from "./assets/components/interactionGarage"
import interactionEngine from "./assets/components/interactionEngine"
import createCar from "./assets/components/main/createGameHtml"
import arrayCars from "./assets/components/date/arrayCars"
import removeItemActive from './assets/components/removeItemActive'
import setDisabled from "./assets/components/setDisabled"
import setAmimation from "./assets/components/animation/setAmimation"
import startAllCars from "./assets/components/animation/startAllCars"

const inputCriate = document.querySelector('.inputCriateSubmit')
inputCriate?.addEventListener('click', handleFormSubmit)
async function handleFormSubmit() {
  if (!inputCriateText.value) { return };
  const date = {
    "name": inputCriateText.value,
    "color": inputCriateColor.value,
  };
  await interactionGarage.createCar(date).then((e: arrayCars) => {
    createCar(inputCriateText.value, inputCriateColor.value, e.id)
  });
  inputCriateColor.value = '#000000';
  inputCriateText.value = '';
}


const inputUpdateSubmit: HTMLInputElement | null = document.querySelector('#inputUpdateSubmit');
inputUpdateSubmit?.addEventListener('click', inputUpdate);
function inputUpdate() {
  const itemActive:HTMLElement | null = document.querySelector('.item-active');
  if (!inputUpdateText.value) { return };
  itemActive!.children[0].children[2].textContent = inputUpdateText?.value;
  const img = itemActive!.children[2] as HTMLElement;
  img!.style.fill = String(inputUpdateColor?.value);
  
  interactionGarage.updateCar({ "name": inputUpdateText?.value, "color": inputUpdateColor?.value, }, itemActive?.id);
  inputUpdateText!.value = '';
  removeItemActive()
  setDisabled()
}


const buttonsBlock: HTMLInputElement | null = document.querySelector('.buttons-block');
buttonsBlock?.addEventListener('click', managingAllCars);
function managingAllCars(e:Event) {
  if (!(e!.target instanceof HTMLElement || e!.target instanceof HTMLButtonElement)) { return; }
      console.log(e!.target);
  if (['button button__race'].includes(e.target?.className)) {
    startAllCars()
  };
  if (['button button__reset'].includes(e.target?.className)) {
     
  };
  if (['button button__gererate'].includes(e.target?.className)) {
     
  }
}



createCars()
// interactionWinners.getWinners().then((date:object)=>console.log(date));

// interactionEngine.switchEngine(1,'drive').then((date:object)=>console.log(date));





// interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.deleteCar('/garage', 2).then((data:any) => {console.log(data)})
// interactionGarage.updateCar(carsObject, 1).then((data:any) => {console.log(data)})
// interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.createCar('http://127.0.0.1:3000/garage', obj)

// getasd('http://127.0.0.1:3000/garage').then((data) => {console.log(data)})
