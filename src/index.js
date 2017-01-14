var messages = require('./messages');
var app = document.getElementById('app');

import Button from './button';

// var hiMessage = () => (`<p>${messages.hi},${messages.test}ddd</p>`);
var hiMessage = () => (Button.button);
app.innerHTML = hiMessage();

Button.attachEl();
