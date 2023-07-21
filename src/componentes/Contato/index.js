import './styles.css'

export default function Contato(){
    return(
        <footer>
            <div class="rodape">
                <div class="rodape-info">
                    <img  />
                    <h4>Entre em contato conosco:</h4>
                </div>

                <a class="rodape-info rodape-link" target="_blank" href="https://goo.gl/maps/wPAS58QxiTopxK6w7">
                <img class="rodape-icone" src="assets/endereco.png" alt="Ícone endereco" title="Ícone endereco" />
                    <p>Endereço: Av. 123, 222 - Rio de Janeiro RJ</p>
                </a>
                <a class="rodape-info rodape-link" href="tel:5521000000000">
                <img class="rodape-icone" src="assets/telefone.png" alt="Ícone telefone" title="Ícone telefone" />
                    <p>Cel: 5521000000000</p>
                </a>
                
            </div>
        </footer>

        
    )
}