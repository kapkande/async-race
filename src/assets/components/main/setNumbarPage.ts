import interactionGarage from "../interactionGarage"


async function setQuantityCars() {
   const gameTitle = document.querySelector('.game__title');
   const cars = await interactionGarage.getCars();
   gameTitle!.textContent = `Garage ${cars.length}` 
  
}
export default setQuantityCars;

