import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConteudoPrincipal from "./Paginas/ConteudoPrincipal";
import Quartos from "./Paginas/Quartos";



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <ConteudoPrincipal />}></Route>
                <Route path='/quartos' element={ <Quartos />}></Route>
            </Routes>
        </BrowserRouter>

    )
}