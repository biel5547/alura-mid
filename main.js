function tocaSomPom(){
const elemento = document.querySelector('#som_tecla_pom').play('');
}

const listadeteclas = documente.querySelectorAll (`.tecla`);

for (let contador = 0; contador < listadeteclas. lenght; contador++){
 
    const tecla = listadeteclas [contador]};

    const instrumento = tecla.classlist[1];

    const idadio = `#som_${instrumento}`;

    tecla.onclick = function{
        tocaSomPom (idaudio);
    }

    tecla.onkeydown = function (evento){
        if(evento.code === 'space|| evento.code === 'enter'){
            tecla.classlist.add('ativa');
        }
    }
    tecla.onkeyup = fuction(evento){
        tecla.classlist.remove('ativa');
    }


