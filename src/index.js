var style = require('./style/globalStyle.css');

var messages = require('./messages');
var app = document.getElementById('app');

import Button from './button';
import cat from './image';
import $ from 'jquery';

// var hiMessage = () => (`<p>${messages.hi},${messages.test} ${cat}</p>`);
// var hiMessage = () => (`<div class=${style.box}><p>Dev:${DEVELOPMENT}<br/>Prod:${PRODUCTION}</p></div>${cat}`);
// var hiMessage = () => (Button.button);
app.innerHTML = `
  <div id="menu">
    <button id='loadpage1'/> Load Page 1</button>
    <button id='loadpage2'/> Load Page 2</button>
  </div>
  <div id="content">
    <h1>Home3</h1>
  </div>
`;

document.getElementById('loadpage1').addEventListener('click', () => {
  System.import('./page1')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    });
});

document.getElementById('loadpage2').addEventListener('click', () => {
  System.import('./page2')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    });
});
// Button.attachEl();

$('#app').css('background-color', '#FF0000');

if(DEVELOPMENT) {if(module.hot)
  console.log('DEVELOPMENT environment!'); //Because uglify, this won't appear in the built bundle.js
  if(module.hot) {
    module.hot.accept();
  }
}
