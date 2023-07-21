import './styles.css'
import { Link } from 'react-router-dom'

export default function Quartos(){
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  
  return(
        <main>
          <header>
            <div className='limitar-secao secao-topo'>
                <h1>Pousada <span>Secreta</span></h1>
                <div>
                    <nav>
                        <Link to='/' className="link-secao-topo" onClick={scrollToTop} href="#sobre">Pagina Inicial</Link>
                        
                    </nav>
                </div>
                </div>
            </header>

          <div class="principal">
            <div class="titulo-site titulo-galeria"></div>

            <div id="solteiro" class="limitar-secao secao-container">
              <h2>Quartos de solteiro</h2>
              <p>Conheça os nossos quartos de solteiro.</p>
            </div>

            <div class="quartos limitar-secao quartos-galeria">
              <img class="quartos-img" src="assets/quarto-solteiro1.jpg" alt="Quarto de solteiro 1" title="Quarto de solteiro 1"/>
              <img class="quartos-img" src="assets/quarto-solteiro2.jpg" alt="Quarto de solteiro 2" title="Quarto de solteiro 2"/>
              <img class="quartos-img" src="assets/quarto-solteiro3.jpg" alt="Quarto de solteiro 3" title="Quarto de solteiro 3"/>
            </div>

            <div class="limitar-secao secao-container">
              <h3>Informações sobre o quarto:</h3>

              <ul class="quarto-informacoes limitar-secao ">
                <li>TV de tela plana a cabo.</li>
                <li>Cozinha compacta.</li>
                <li>Área para refeições.</li>
                <li>Ar-condicionado.</li>
                <li>1 ou 2 camas de solteiro.</li>
                <li>Não permite cancelamento.</li>
              </ul>
            </div>


            <div id="casal" class="limitar-secao secao-container">
              <h2>Quarto de casal</h2>
              <p>Conheça nossos quartos de casal.</p>
            </div>

            <div class="quartos limitar-secao">
              <img class="quartos-img" src="assets/quarto-casal1.jpg" alt="Quarto de casal 1" title="Quarto de casal 1"/>
              <img class="quartos-img" src="assets/quarto-casal2.jpg" alt="Quarto de casal 2" title="Quarto de casal 2"/>
              <img class="quartos-img" src="assets/quarto-casal3.jpg" alt="Quarto de casal 3" title="Quarto de casal 3"/>
            </div>

            <div class="limitar-secao secao-container">
              <h3>Informações sobre o quarto:</h3>

              <ul class="quarto-informacoes">
                <li>TV de tela plana a cabo.</li>
                <li>Cozinha compacta.</li>
                <li>Área para refeições.</li>
                <li>Ar-condicionado.</li>
                <li>1 cama de casal.</li>
                <li>Cancelamento grátis.</li>
              </ul>
            </div>

            <div id="familia" class="limitar-secao secao-container">
              <h2>Quarto família</h2>
              <p>Conheça nossos quartos família.</p>
            </div>

            <div class="quartos limitar-secao quartos-galeria">
              <img class="quartos-img" src="assets/quarto-familia1.jpg" alt="Quarto família 1" title="Quarto família 1"/>
              <img class="quartos-img" src="assets/quarto-familia2.jpg" alt="Quarto família 2" title="Quarto família 2"/>
              <img class="quartos-img" src="assets/quarto-familia3.jpg" alt="Quarto família 3" title="Quarto família 3"/>
            </div>

            <div class="limitar-secao secao-container">
              <h3>Informações sobre o quarto:</h3>

              <ul class="quarto-informacoes">
                <li>TV de tela plana a cabo.</li>
                <li>Cozinha compacta.</li>
                <li>Área para refeições.</li>
                <li>Ar-condicionado.</li>
                <li>1 cama de casal e 1 de solteiro.</li>
                <li>Cancelamento grátis.</li>
              </ul>
            </div>

          </div>

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
      </main>
    )
}