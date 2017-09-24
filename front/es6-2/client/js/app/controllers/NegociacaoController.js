class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
    
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        
        this._listaNegociacoes = 
            new ListaNegociacoes(model => this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        Object.freeze(this);
        
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacão adiciona com sucesso!';
        this._mensagemView.update(this._mensagem);
       // this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    esvazia() {
        this._listaNegociacoes.esvazia();
      //  this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.stringToDate(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFormulario() {
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0
        this._data.focus();
    }


    /*
    adiciona(event) {
        event.preventDefault();
       
        let negociacao = new Negociacao(
            new Date(this._data.value.replace(/-/, ',')),
            this._quantidade,
            this._valor
        );

        console.log(negociacao);
        
    }
    */
}