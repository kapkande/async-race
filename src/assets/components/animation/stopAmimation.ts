import interactionEngine from '../interactionEngine'

async function stopAmimation(carItem: HTMLElement) {
  interactionEngine.stopStartEngine(carItem.id, 'stopped');
  carItem.classList.remove('driving')
 }

export default stopAmimation;
