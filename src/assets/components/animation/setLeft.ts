async function setLeft(carItem: HTMLElement) {
  const img = carItem!.children[2] as HTMLElement;
  setTimeout(() => {
    img.style.left = '0px';
  }, 100);
  
}

export default setLeft;
