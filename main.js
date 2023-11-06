function tocaSom (idElementAudio) {
   document.querySelector(idElementAudio).play()
}

const listadeTeclas = document.querySelectorAll ('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio = `#som_${instrumento}`; //tamplate string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

tecla.onkeydown = function() {
   tecla.classlist.add('ativa')
}
}
  
