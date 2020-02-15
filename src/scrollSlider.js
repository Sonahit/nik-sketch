let page = 1;
const slider = document.querySelector('.page-slider');
const sliderContainer = slider.querySelector('.page-slider__container');
const group = document.getElementById('group');
const categories = document.getElementById('categories');
const shop = document.getElementById('shop');
const brands = document.getElementById('brands');
const whyus = document.getElementById('whyus');
const pages = [group, categories, shop, brands, whyus];
const groupClone = group.cloneNode(true);
groupClone.setAttribute('id', 'group-clone');
const whyusClone = whyus.cloneNode(true);
whyusClone.setAttribute('id', 'whyus-clone');
sliderContainer.append(groupClone);
group.before(whyusClone);

document.querySelectorAll('.overlay__slider').forEach(s => s.addEventListener('click', ev => {

  const buttons = ev.currentTarget;
  const button = ev.target;
  const currentBtn = Array.from(buttons.children).findIndex(b => b === button);
  const max = pages.length;
  const min = 1;
  if(currentBtn < 0) return;
  if(currentBtn < 1 || currentBtn > 5) {
    // I am lazy to do such slider from XD sketch
    // TODO: slider from sketch
    if(currentBtn < 1) {
      if(page > min){
        sliderContainer.style.cssText = `transform: translateY(-${--page * 100}%)`
      } else {
        sliderContainer.style.cssText = `transform: translateY(-${--page * 100}%);`
        setTimeout(() => {
          page = 5;
          sliderContainer.style.cssText = `transition: all 0s; transform: translateY(-${page * 100}%);`;
          setTimeout(() => {
            sliderContainer.style.cssText = `transition: all .5s; transform: translateY(-${page * 100}%);`;
          }, 100);
        }, 500);
      }
    } else {
      if(page < max){
        sliderContainer.style.cssText = `transform: translateY(-${++page * 100}%)`
      } else {
        sliderContainer.style.cssText = `transform: translateY(-${++page * 100}%);`
        setTimeout(() => {
          page = 1;
          sliderContainer.style.cssText = `transition: all 0s; transform: translateY(-${page * 100}%);`;
          setTimeout(() => {
            sliderContainer.style.cssText = `transition: all .5s; transform: translateY(-${page * 100}%);`;
          }, 100);
        }, 500);
      }
    }
  } else {
    page = currentBtn;
    sliderContainer.style.cssText = `transform: translateY(-${page * 100}%);`;
  }
}));
