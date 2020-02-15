let timeout = false;
document.querySelector('.brands__slider').addEventListener('click', (ev) => {

  if(timeout) return;
  /**
   * @type HTMLDivElement
   */
  const slider = ev.currentTarget;
  /**
   * @type HTMLDivElement
   */
  const active = slider.querySelector('.is-active');
  /**
   * @type HTMLDivElement
   */
  const clicked = ev.target.classList.contains('brands__slider__button') ? ev.target : false;
  //Currently works out of the circle
  if(!clicked || !active || !slider)  return;
  if(clicked.classList.contains('is-active')){
    return;
  } else {
    clicked.classList.remove('not-active');
    clicked.classList.add('is-active');
    active.classList.add('not-active');
    active.classList.remove('is-active');
  };
  const max = slider.children.length;
  const current = Array.from(slider.children).findIndex(c => c === clicked);
  const container = document.querySelector('.brands__slider__elements');
  const min = 0;
  container.style.transform = `translateX(${-current * 100}%)`;
  timeout = setTimeout(() => {
    timeout = false;
  }, 500)
});
