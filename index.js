let clienteWeb = null;

let lampadaSalaLigada = false;
let lampadaCozinhaLigada = false;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

clienteWeb.connect({   
    useSSL: true, 
    onSuccess: function() {
        alert('A conexão com Broker foi bem sucedida')
    },
    onFailure: function() {
        console.log('A conexão com Broker falhou')
    }
});

function ligarLampadaSala() {
    if (lampadaSalaLigada == false) {
        console.log('lampada sala desligada')
        lampadaSalaLigada = true
        document.getElementById('lampada-sala').classList.add('acesa')
        const msg = new Paho.MQTT.Message('');
        msg.destinationName = 'senai510/lampada/sala/ligar';
        clienteWeb.send(msg);
        console.log('lampada sala ligada')
    } else {
        console.log('lampada sala ligada')
        lampadaSalaLigada = false
        document.getElementById('lampada-sala').classList.remove('acesa')
        const msg = new Paho.MQTT.Message('');
        msg.destinationName = 'senai510/lampada/sala/desligar';
        clienteWeb.send(msg);
        console.log('lampada sala desligada')
    }
}

function ligarLampadaCozinha() {

    if (lampadaCozinhaLigada == false) {
        console.log('lampada cozinha desligada')
        lampadaCozinhaLigada = true;
        document.getElementById('lampada-cozinha').classList.add('acesa');
        const msg = new Paho.MQTT.Message('');
        msg.destinationName = 'senai510/lampada/cozinha/ligar';
        clienteWeb.send(msg);
        console.log('lampada cozinha ligada')
    } else {
        console.log('lampada cozinha ligada')
        lampadaCozinhaLigada = false;
        document.getElementById('lampada-cozinha').classList.remove('acesa');
        const msg = new Paho.MQTT.Message('');
        msg.destinationName = 'senai510/lampada/cozinha/desligar';
        clienteWeb.send(msg);
        console.log('lampada cozinha desligada')
    }
}
