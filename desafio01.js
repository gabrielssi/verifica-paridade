let numeroUsuario;

function EscreverNaTela(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = texto;
}

function VerificaParidade(numero) {
  if (numero == "") {
    EscreverNaTela('h1', `Digite um valor válido!`);
  }
  else {
    if (numero % 2 == 0) {
      EscreverNaTela('h1', `O número ${numero} é par!`);
    } else {
      EscreverNaTela('h1', `O número ${numero} é ímpar!`);
    }
  }
}

function ExibeResultado() {
  numeroUsuario = document.querySelector('input').value;
  return VerificaParidade(numeroUsuario);
}

function LimparCampo() {
  numeroUsuario = document.querySelector('input');
  numeroUsuario.value = '';
}

