//////////////////////////////////////////////////////////////////////////////////////////
// EVENTEMITTER (NODE.JS)                                                               //
// Para deixar o código mais estruturado, usando pattern de eventos...                  //
//////////////////////////////////////////////////////////////////////////////////////////

const EventEmitter = require('events');
const emitter = new EventEmitter();

class Users extends EventEmitter {
    userLogged(data){
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

// users.once delimita a apenas uma requisição
users.on('User logged', data => {
    console.log(data);
});


users.userLogged({ user: 'Matheus Misumoto' });
users.userLogged({ user: 'Teste' });