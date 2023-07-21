import './styles.css'

export default function Topo(){
    return(
        <header>
            <div className='limitar-secao secao-topo'>
                <h1>Pousada <span>Secreta</span></h1>
                <div>
                    <nav>
                        <a class="link-secao-topo" href="#sobre">Sobre</a>
                        <a class="link-secao-topo" href="#rota">Rota</a>
                        <a class="link-secao-topo" href="#quartos">Quartos</a>
                    </nav>
                </div>
                </div>
        </header>
    )
}