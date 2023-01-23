import interactionEngine from '../interactionEngine'
import setWinner from '../winner/setWinner'


async function setAmimation(carItem: HTMLElement) {
console.log(carItem.className == 'item-car driving');
  if(carItem.className == 'item-car driving'){
    interactionEngine.stopStartEngine(carItem.id, 'stopped');
    const img = carItem!.children[2] as HTMLElement;
    img.style.left = `${0}px`
    carItem.classList.remove('driving')
    console.log(1);
    return
  }

  // console.log(1);
  carItem.classList.add('driving')

  const stopStartEngine = await interactionEngine.stopStartEngine(carItem.id, 'started');
  
  const velocity = stopStartEngine.velocity / 10;
  const wigthLine = document.querySelector('.line')!.clientWidth - 60;
  let index: number = 0
  const img = carItem!.children[2] as HTMLElement;
  let timer = setInterval(function () {
    index = index + velocity
    img.style.left = `${index}px`
    
    if (index > wigthLine || carItem.className == 'item-car') {
      clearInterval(timer);
      interactionEngine.stopStartEngine(carItem.id, 'stopped');
      setWinner(+carItem.id)
      if(carItem.className == 'item-car'){
        img.style.left = `${0}px`;
        carItem.classList.remove('driving')
      }
    }
  }, 20);
 await interactionEngine.switchEngine(carItem.id, 'drive').catch(function () {
  console.error(`Car has been stopped suddenly. It's engine was broken down.`);
  clearInterval(timer);
  interactionEngine.stopStartEngine(carItem.id, 'stopped');
  carItem.classList.remove('driving')
 })
}
export default setAmimation;