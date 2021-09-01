import Menu from "../components/menu"
import Image from 'next/image'
import Link  from 'next/link'
import Foto from '../imagens/hamburguer.jpg'

function Receitas(){
    return (
        <>
           <Menu />
           <div>
            <h1 style={{backgroundColor: "red", fontFamily: "Roboto"}}>Hamburguer de frango</h1>
            <br />
            <div>
            <Image src={Foto} width='300px' height='300px'></Image>
            </div>
            <Link href="/home"><button>CLIQUE PARA COZINHAR</button></Link>
        </div>
        
        </>
    )
}

export default Receitas
