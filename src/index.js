var messages = require('./messages');
var app = document.getElementById('app');
var hiMessage = () => (`<p>${messages.hi},${messages.test}ddd</p>`);
app.innerHTML = hiMessage();
