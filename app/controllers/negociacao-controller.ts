import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mesagem-veiw.js';
import { NegociacaoView } from '../views/negociacoes-views.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView('#negociacaoView',true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

     public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
    
        if (negociacao.data.getDate()>  DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO){
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }else{
            this.mensagemView.update('Apenas negociações em dias úteis')
        }
        }
    private ehDiaUtiul(data: Date) {
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()<DiasDaSemana.SABADO;

    }
        
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        }
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com Sucesso');
        
    }
    }
    