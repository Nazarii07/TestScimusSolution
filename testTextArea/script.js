'use strict'
const formBlock = document.getElementById('formBlock');
const extandBtn = document.getElementById('click');

const showContent = () => {
  if(document.getElementById('yourmind').value == ''){
    alert('Please, write some text');
  }else{
    alert(document.getElementById('yourmind').value);
  }
  document.getElementById('yourmind').value = '';
}
var shrink = true;
const extendFnc = () => {
  if(shrink === true){
    document.getElementById('main-container').classList.add('main-container-expand');
    document.getElementById('yourmind').classList.add('yourmind-expand');
    document.getElementById('click').classList.add('clickAbsolute');
    document.getElementById('imgOpen').classList.add('arrow-close');
    document.getElementById('content').innerHTML = 'SHRINK'
  }else{
    document.getElementById('main-container').classList.remove('main-container-expand');
    document.getElementById('yourmind').classList.remove('yourmind-expand');
    document.getElementById('click').classList.remove('clickAbsolute');
    document.getElementById('imgOpen').classList.remove('arrow-close');
    document.getElementById('content').innerHTML = 'EXPAND'
  }

  shrink = !shrink
}
formBlock.addEventListener('submit', showContent);

extandBtn.addEventListener('click', extendFnc);


