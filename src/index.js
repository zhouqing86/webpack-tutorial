var messages = require('./messages');
var app = document.getElementById('app');

import Button from './button';
import cat from './image';

var hiMessage = () => (`<p>${messages.hi},${messages.test} ${cat}</p>`);
// var hiMessage = () => (Button.button);
app.innerHTML = hiMessage();

// Button.attachEl();
