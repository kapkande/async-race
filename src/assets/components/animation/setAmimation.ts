import interactionEngine from '../interactionEngine'
import setWinner from '../winner/setWinner'

async function setAmimation(carItem: HTMLElement) {
  let start = new Date;
  let step: number = 0;
  const stopStartEngine = await interactionEngine.stopStartEngine(carItem.id, 'started');
  const wigthLine = document.querySelector('.line')!.clientWidth - 60;
  const velocity = stopStartEngine.velocity / 10;

  interactionEngine.switchEngine(carItem.id, 'drive').catch(function (e: string) {
    if (e == `SyntaxError: Unexpected token 'C', "Car has be"... is not valid JSON`) {
      console.error(`Car has been stopped suddenly. It's engine was broken down`);
    };
    carItem.classList.remove('driving');
  })
  const img = carItem!.children[2] as HTMLElement;

  requestAnimationFrame(
    function animate() {
      step = step + velocity;
      draw(step, img);
      let status: boolean = getStatus(step, wigthLine, carItem);
      if (!status) { return };
      requestAnimationFrame(animate);
    });
}

function getStatus(step: number, wigthLine: number, carItem: HTMLElement) {
  if (step > wigthLine || !carItem.classList.contains('driving')) {
    carItem.classList.remove('driving');
    return false;
  };
  return true;
}

function draw(index: number, img: HTMLElement) {
  img.style.left = `${index}px`;
};
export default setAmimation;
