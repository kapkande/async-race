// import './assets/icons/basket.svg';
// import './assets/styles/index.scss';

// import IBasicNew from './assets/components/data/productInterfaceNew';
// import newBasic from './assets/components/impBasicInit';
// import loadBasket from './assets/components/basket/basketLoader';
// import showMain from './assets/components/main/showMain';
// import setBlock from './assets/components/main/showMainBlock'
// import transformationLinck from "./assets/components/transformationLinck"
import interactionGarage from "./assets/components/interactionGarage"
import interactionEngine from "./assets/components/interactionEngine"




const carsObject = {    "name": "Ford",
    "color": "#ef3c40",
    "id": 1,
}





interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.deleteCar('/garage', 2).then((data:any) => {console.log(data)})
interactionGarage.updateCar(carsObject, 1).then((data:any) => {console.log(data)})
interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.createCar('http://127.0.0.1:3000/garage', obj)

// getasd('http://127.0.0.1:3000/garage').then((data) => {console.log(data)})
