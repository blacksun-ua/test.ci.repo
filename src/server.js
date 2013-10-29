var server = require('./main').api();

function start() {
    if(!global.conf)
        global.conf = { port : '8090', host: 'localhost' }

    server.listen(global.conf.port, global.conf.host);
    console.log('Server started on %s:%s', global.conf.host, global.conf.port);
}

start();
