const os = require('os');

const adaptadores = os.networkInterfaces();

const interface = Object.keys(adaptadores);

console.log(interface.find(interface => interface.includes('Wi-Fi')));




