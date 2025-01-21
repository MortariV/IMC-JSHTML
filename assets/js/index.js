//Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);

    console.log(imc, nivelImc);
});

function getNivelImc (imc){
    //                         0                    1               2                  3                       4
    const nivel = ['Eutrófico ou peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III ou mórbida', 'Abaixo do Peso'];

    if (imc >=  18.5 && imc <= 24.9) {
        return nivel[0];
    }
    
    if (imc >=  25 && imc <= 29.9) {
        return nivel[1];
    }
    
    if (imc >=  30 && imc <= 34.9) {
        return nivel[2];
    } 
    
    if (imc >=  35 && imc <= 39.9) {
        return nivel[3];
    }
    
    if (imc >= 40) {
        return nivel[4];
    }
    
    if (imc < 18.5) {
        return nivel[5];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}