var messages = require('./messages');
var app = document.getElementById('app');

import Button from './button';
import cat from './image';

// var hiMessage = () => (`<p>${messages.hi},${messages.test} ${cat}</p>`);
var hiMessage = () => (`<p>Dev:${DEVELOPMENT}<br/>Prod:${PRODUCTION} ${cat}</p>`);
// var hiMessage = () => (Button.button);
app.innerHTML = hiMessage();

// Button.attachEl();

if(DEVELOPMENT) {
  console.log('DEVELOPMENT environment!'); //Because uglify, this won't appear in the built bundle.js
}
