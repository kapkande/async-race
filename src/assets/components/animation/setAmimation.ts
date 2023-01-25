import interactionEngine from '../interactionEngine'
import saveWinners from '../winner/saveWinners'
import stopAmimation from "../animation/stopAmimation"

async function setAmimation(carItem: HTMLElement) {
  if (carItem.className == 'item-car') { return }
  const start: Date = new Date;
  let step: number = 0;
  const stopStartEngine = await interactionEngine.stopStartEngine(carItem.id, 'started');
  const wigthLine = document.querySelector('.line')!.clientWidth - 60;
  const velocity = wigthLine * stopStartEngine.velocity / 30000;

  interactionEngine.switchEngine(carItem.id, 'drive').catch(function (e: string) {
    if (e == `SyntaxError: Unexpected token 'C', "Car has be"... is not valid JSON`) {
      console.error(`Car has been stopped suddenly. It's engine was broken down`);
    };
    stopAmimation(carItem)
  })
  const img = carItem!.children[2] as HTMLElement;

  requestAnimationFrame(
    function animate() {
      step = step + velocity;
      draw(step, img);
      let status: boolean = getStatus(step, wigthLine, carItem, start);
      if (!status) { stopAmimation(carItem); return true };
      requestAnimationFrame(animate);
    });

}

function getStatus(step: number, wigthLine: number, carItem: HTMLElement, start: Date) {
  if (step > wigthLine) {
    carItem.classList.remove('driving');
    saveWinners(carItem, start)
    document.querySelector('.section__game')?.classList.remove('game-active')
    return false;
  };
  if (!carItem.classList.contains('driving')) {
    carItem.classList.remove('driving');
    return false;
  };

  return true;
}

function draw(index: number, img: HTMLElement) {
  img.style.left = `${index}px`;

};
export default setAmimation;
