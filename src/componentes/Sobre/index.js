import './styles.css'

export default function Sobre(){
    return(
        <section id='sobre'>
            
                <div class="secao-sobre-titulo" >
                <h2>Sobre a pousada!</h2>
                <p>Conheça um pouco sobre nossa pousada.</p>
            </div>
                <div class="secao-sobre tamanho-secao-sobre">
                    <div class="card-secao-sobre">
                    <h3>A pousada</h3>
                    <p>
                    A Pousada Dev dispõe de estacionamento privativo gratuito, piscina
                    ao ar livre e bar.
                    </p>
                    </div>
                    <img class="img-secao-sobre" src="assets/img1.jpg"/>
                    
                    <div class="card-secao-sobre">
                    <h3>Nossos quartos</h3>
                    <p>
                    Os quartos possuem TV de tela plana a cabo, cozinha compacta e
                    área para refeições. Além disso, as unidades da Pousada Dev contam
                    com ar-condicionado e guarda-roupa.
                    </p>
                    
                    </div>
                    <img class="img-secao-sobre" src="assets/img2.jpg"/>
                    <div class="card-secao-sobre">
                    <h3>Alimentação</h3>
                    <p>
                        A pousada serve café da manhã em estilo continental ou buffet.
                        Nossos restaurantes funcionam 24hrs.
                    </p>
                    
                    </div>
                    <img class="img-secao-sobre" src="assets/img3.jpg"/>
                    <div class="card-secao-sobre">
                    <h3>Recepção</h3>
                    <p>
                        Nossa recepção fica aberta 24hrs.
                    </p>
                    
                    </div>
                    <img class="img-secao-sobre" src="assets/img5.jpg"/>
                
                </div>

        </section>
    )
}