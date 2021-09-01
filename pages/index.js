import Image from 'next/image'
import Link  from 'next/link'
import Foto from '../imagens/imagem1.jpg'

function Index(){
    return (
        <>
        <div>
            <h1>Seja bem-vindo</h1>
            <h2>Receitas Rápidas</h2>
            <br />
            <p>Site com receitas rápidas e divertidas <br />
            que mata sua fome e blablabla</p>
            <br />
            <br />
            <Link href="/home"><button>CLIQUE PARA COZINHAR</button></Link>
        </div>
        <div>
        <Image src={Foto}></Image>
        </div>
        </>
    )
}

export default Index