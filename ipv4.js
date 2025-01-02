const os = require('os');

const adaptadores = os.networkInterfaces();

// console.log('adaptadores: ', adaptadores['Wi-Fi 3']);



const objIpv4 = adaptadores.find(a => a.family === 'Ipv4')


