import interactionEngine from '../interactionEngine'

async function stopAmimation(carItem: HTMLElement) {
  interactionEngine.stopStartEngine(carItem.id, 'stopped');
  carItem.classList.remove('driving')
  const img = carItem!.children[2] as HTMLElement;
  setTimeout(() => {
    img.style.left = '0px'
  }, 100);
 
}

export default stopAmimation;
