const body = document.querySelector('body')

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
body?.appendChild(wrapper);

 
let header = document.createElement('header');
header.classList.add('header');
wrapper.appendChild(header);

let buttonGarage = document.createElement('button');
buttonGarage.classList.add('button', 'button__gatage');
buttonGarage.textContent = 'To Garage';

let buttonWinner = document.createElement('button');
buttonWinner.classList.add('button', 'button__winners');
buttonWinner.textContent = 'To Winners';

header.appendChild(buttonGarage);
header.appendChild(buttonWinner);

let main = document.createElement('main');
main.classList.add('main');
wrapper.appendChild(main);

let sectionForm = document.createElement('section');
sectionForm.classList.add('section__form');
main.appendChild(sectionForm);

let formCriate = document.createElement('form');
sectionForm.appendChild(formCriate);
formCriate.setAttribute('onSubmit', 'return false')

let inputCriateText= document.createElement('input');
inputCriateText.type = "text";
inputCriateText.setAttribute("required", 'true');
inputCriateText.id = 'inputCriateText'

let inputCriateColor = document.createElement('input');
inputCriateColor.type = "color";
inputCriateColor.id = 'inputCriateColor'

let inputCriateSubmit = document.createElement('button');
inputCriateSubmit.type = "submit";
inputCriateSubmit.classList.add('inputCriateSubmit')

inputCriateSubmit.textContent = "CRIATE";
formCriate.appendChild(inputCriateText);
formCriate.appendChild(inputCriateColor);
formCriate.appendChild(inputCriateSubmit);


let formUpdate = document.createElement('form');
sectionForm.appendChild(formUpdate);
formUpdate.setAttribute('onSubmit', 'return false')
// formUpdate.setAttribute('onSubmit', 'return false')
let inputUpdateText= document.createElement('input');
inputUpdateText.type = "text";
inputUpdateText.id = 'inputUpdateText'
inputUpdateText!.disabled = true;
inputUpdateText.setAttribute("required", 'true');

let inputUpdateColor = document.createElement('input');
inputUpdateColor.type = "color";
inputUpdateColor.id = 'inputUpdateColor';
inputUpdateColor!.disabled = true;

let inputUpdateSubmit = document.createElement('button');
inputUpdateSubmit.type = "submit";
inputUpdateSubmit.textContent = 'UPDATE'
inputUpdateSubmit.id = 'inputUpdateSubmit'
inputUpdateSubmit!.disabled = true;
// inputUpdateSubmit.value = "UPDATE";

formUpdate.appendChild(inputUpdateText); 
formUpdate.appendChild(inputUpdateColor);
formUpdate.appendChild(inputUpdateSubmit);


let blockButton = document.createElement('div');
blockButton.classList.add('buttons-block')
let buttonRace = document.createElement('button');
buttonRace.classList.add('button', 'button__race');
buttonRace.textContent = 'Race';
blockButton.appendChild(buttonRace);

let buttonReset = document.createElement('button');
buttonReset.classList.add('button', 'button__reset');
buttonReset.textContent = 'Reset';
blockButton.appendChild(buttonReset);

let buttonGenerate = document.createElement('button');
buttonGenerate.classList.add('button', 'button__gererate');
buttonGenerate.textContent = 'Reset';
blockButton.appendChild(buttonGenerate);

sectionForm.appendChild(blockButton);


let sectionGame = document.createElement('section');
sectionGame.classList.add('section__game');
let paginationBlock = document.createElement('div')
paginationBlock.classList.add('paginationBlock');
sectionGame.appendChild(paginationBlock);


main.appendChild(sectionGame);

let titleGame = document.createElement('div');
titleGame.classList.add('game__title');
sectionGame.appendChild(titleGame);

let subTitleGame = document.createElement('div');
subTitleGame.classList.add('game__subTitle');
sectionGame.appendChild(subTitleGame);


let sectionWinners = document.createElement('section');
sectionWinners.classList.add('section__winners', 'hidden');
// sectionWinners.classList.add('section__winners');

let titleWinners = document.createElement('div');
titleWinners.classList.add('winners__title');
sectionWinners.appendChild(titleWinners);

let subTitleWinners = document.createElement('div');
subTitleWinners.classList.add('winners__subTitle');
sectionWinners.appendChild(subTitleWinners);

sectionWinners.appendChild(titleWinners);
sectionWinners.appendChild(subTitleWinners);

main.appendChild(sectionWinners);