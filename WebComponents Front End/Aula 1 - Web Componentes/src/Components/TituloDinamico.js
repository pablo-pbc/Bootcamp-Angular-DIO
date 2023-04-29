class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        //Criando SHADOW DOM com mode OPEN para permitir acesso ao DOM do elemento criado.
        const shadow = this.attachShadow({mode:"open"});

        //Base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute('titulo'); //criando props

        //Estilização do component
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color:red;
            }
        `;

        //Enviando para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);