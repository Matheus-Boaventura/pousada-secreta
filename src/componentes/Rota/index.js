import './styles.css'

export default function Rota(){
    return(
        <section id='rota'>
            <div class="secao-quartos">
                <h2>ROTA</h2>
                <p>Veja como chegar até a pousada.</p>
            </div>
            <div>
                <iframe class="secao-quartos"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.471710812997!2d-43.3641911!3d-22.9826906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1612707978931!5m2!1spt-BR!2sbr"
                width="100%" height="350" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </section>
    )
}