class CardNews extends HTMLElement {
    constructor(){
        //O super é a chamada do construtor de quem ele ta herdando, no caso, HTMLElement
        super();

        //Criando SHADOW DOM com mode OPEN para permitir acesso ao DOM do elemento criado.
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.buildComponent());
        shadow.appendChild(this.stylesComponent());
    }

    //Metodo para construção do component
    buildComponent() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    
    //Metodo para estilização do component
    stylesComponent() {
        const style = document.createElement("style");
        style.textContent = `            

            .card {
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 1rem;
                gap: 0.5rem;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }

            img {
                max-width: 100%;
            }

            @media only screen and (max-width: 600px) {
                .card {
                    flex-direction: column;
                    align-items: center;
                }
            }
        `;

        return style;
    }
}

//Criando uma nova TAG/Web Component e definindo seu nome "card-news" e sua classe de origem
customElements.define("card-news", CardNews);