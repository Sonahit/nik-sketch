let timeout = false;
document.querySelector('.brands__slider').addEventListener('click', (ev) => {

  if(timeout) return timeout = false;
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
    clicked.classList.remove('is-active');
    clicked.classList.add('not-active');
  } else {
    clicked.classList.add('is-active');
    active.classList.add('not-active');
  };
  const max = slider.children.length;
  const current = Array.from(slider.children).findIndex(c => c === clicked);
  const container = document.querySelector('.brands__slider__elements');
  const min = 0;
  container.style.transform = `translateX(${-current * 100}%)`;
  timeout = setTimeout(() => {
    active.classList.remove('is-active');
    clicked.classList.remove('not-active');
    timeout = false;
  }, 500)
});
