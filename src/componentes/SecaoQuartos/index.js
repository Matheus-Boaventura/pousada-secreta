import './styles.css'
import { Link } from 'react-router-dom'


export default function SecaoQuartos(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <main id='quartos' className='limitar-secao'>
            <div className="secao-quartos">
                <h2>SEJA BEM-VINDO(A)!</h2>
                <p>Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.</p>
                <p>Temos quartos para solteiro, casal ou família.</p>
            </div>
            <div class="secao-quartos-cards">
                <div>
                    <img class="img-secao-quartos" src="assets/quarto-solteiro1.jpg"/>
                    <a href="quartos.html#solteiro">
                        <p class="borda-link">Quarto de Solteiro</p>
                    </a>
                </div>
                <div>
                    <img class="img-secao-quartos" src="assets/quarto-casal1.jpg"/>
                    <a href="quartos.html#casal">
                        <p class="borda-link">Quarto de Casal</p>
                    </a>
                </div>
                <div>
                    <img class="img-secao-quartos" src="assets/quarto-familia1.jpg"/>
                    <a href="quartos.html#familia">
                        <p class="borda-link">Quarto Família</p>
                    </a>
                </div>
            </div>
            <div className='div-link-ver-quartos'><Link className='link-ver-quartos' to='/quartos' onClick={scrollToTop}>Veja Nossos Quartos</Link></div>
        </main>
    )
}