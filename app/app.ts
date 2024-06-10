import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
import { NegociacaoView } from './views/negociacoes-views.js';



const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    });
    
    const negociacoesView = new NegociacaoView("#negociacoesView")
    const template = negociacoesView.template();
    console.log(template);
    

