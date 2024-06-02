import './style.css'
import { ticTac } from './tictac.js'

document.querySelector('#app').innerHTML = `
  <div class='wrap'>
    <div class='container'>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
      <button class='btn'></button>
    </div>
    <button id='restart'>Restart</button>
  </div>
  <div class='popup hide'>
    <p id='poptext'>Defeat</p>
    <button id='new'>New game</button>
  </div>
`

ticTac(document.querySelectorAll('.btn'), document.getElementById('restart'), document.querySelector('.popup'), document.getElementById('poptext'), document.getElementById('new'))
