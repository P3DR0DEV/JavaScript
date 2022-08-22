import { Pessoa, soma } from "./classPessoa";

const pessoa1 = new Pessoa('Pedro', 'Mendes');

const div = document.querySelector('.pessoa');
const h1 = document.createElement('h1')
const p = document.createElement('p')
h1.innerHTML = pessoa1.nomeCompleto()

p.innerHTML = soma(2,5)
div.appendChild(h1)
div.appendChild(p)