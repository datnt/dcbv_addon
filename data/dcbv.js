self.port.emit('myval', 'kocochi');

window.setInterval(function() {
    self.port.emit('myval', 'kocochi');
}, 120000);
