import Home from '../../componentes/Home'
import Rota from '../../componentes/Rota'
import SecaoQuartos from '../../componentes/SecaoQuartos'
import Sobre from '../../componentes/Sobre'
import Topo from '../../componentes/Topo'
import Contato from '../../componentes/Contato'
export default function ConteudoPrincipal(){
    return(
        <div>
            <Topo />
            <Home />
            <SecaoQuartos />
            <Rota />
            <Sobre />
            <Contato />
        </div>
    )
}